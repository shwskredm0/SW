/**
 * DreamGap Main Application Manager & Sound Synthesizer
 */

// Global state
const AppState = {
  activeScreen: 'menu-screen',
  isMuted: true
};

// Web Audio API Synthesizer Engine
const SoundEngine = {
  ctx: null,
  isInitialized: false,
  droneOsc1: null,
  droneOsc2: null,
  droneFilter: null,
  droneGain: null,
  droneLfo: null,

  init() {
    if (this.isInitialized) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.isInitialized = true;
      console.log('Web Audio Context initialized');
    } catch (e) {
      console.error('Failed to initialize AudioContext:', e);
    }
  },

  resumeContext() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  toggleMute() {
    this.resumeContext();
    AppState.isMuted = !AppState.isMuted;
    
    // Update UI speaker icon
    const soundIcon = document.getElementById('sound-icon');
    if (AppState.isMuted) {
      // Mute Icon
      soundIcon.innerHTML = `<path fill="currentColor" d="M3.63 3.63L2.22 5.05L7 9.83v9.17l4-4h3.17l4.78 4.78l1.41-1.41L3.63 3.63zM12 15l-3-3v-1.17l3 3V15zM19 12c0 .6-.1 1.17-.29 1.71l1.48 1.48c.51-1 .81-2.12.81-3.19c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-2.5 0c0-.85-.36-1.61-.94-2.15l1.45 1.45c.18-.32.49-.43.49-.7zm-4.5-9L9.5 5.5v3.17l2.5 2.5V3z"/>`;
      this.stopDrone();
    } else {
      // Unmute Icon
      soundIcon.innerHTML = `<path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.03zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
      if (AppState.activeScreen === 'menu-screen' || AppState.activeScreen === 'sleep-screen') {
        this.startDrone();
      }
    }
  },

  /**
   * Soothing ambient drone
   * Uses low-frequency multi-oscillators and a slow resonant LFO filter sweep
   */
  startDrone() {
    if (AppState.isMuted) return;
    this.resumeContext();
    if (!this.ctx) return;

    // Avoid double creation
    if (this.droneOsc1) return;

    const now = this.ctx.currentTime;

    // Gain node for smooth drone swell
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0, now);
    this.droneGain.gain.linearRampToValueAtTime(0.3, now + 3);

    // Dynamic Filter
    this.droneFilter = this.ctx.createBiquadFilter();
    this.droneFilter.type = 'lowpass';
    this.droneFilter.frequency.setValueAtTime(250, now);
    this.droneFilter.Q.setValueAtTime(3, now);

    // Osc 1: Soothing low triangle
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc1.type = 'triangle';
    this.droneOsc1.frequency.setValueAtTime(110, now); // A2

    // Osc 2: Smooth sine perfect fifth
    this.droneOsc2 = this.ctx.createOscillator();
    this.droneOsc2.type = 'sine';
    this.droneOsc2.frequency.setValueAtTime(165, now); // E3

    // LFO to slowly sweep filter frequency (surreal breathing effect)
    this.droneLfo = this.ctx.createOscillator();
    this.droneLfo.type = 'sine';
    this.droneLfo.frequency.setValueAtTime(0.1, now); // very slow 10 seconds per cycle

    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(100, now); // Sweep range +/- 100Hz

    // Connections
    this.droneLfo.connect(lfoGain);
    lfoGain.connect(this.droneFilter.frequency);

    this.droneOsc1.connect(this.droneFilter);
    this.droneOsc2.connect(this.droneFilter);
    this.droneFilter.connect(this.droneGain);
    this.droneGain.connect(this.ctx.destination);

    // Start nodes
    this.droneOsc1.start(now);
    this.droneOsc2.start(now);
    this.droneLfo.start(now);
  },

  stopDrone() {
    if (!this.ctx || !this.droneOsc1) return;
    
    const now = this.ctx.currentTime;
    try {
      this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, now);
      this.droneGain.gain.linearRampToValueAtTime(0, now + 1);
      
      const osc1 = this.droneOsc1;
      const osc2 = this.droneOsc2;
      const lfo = this.droneLfo;

      setTimeout(() => {
        try {
          osc1.stop();
          osc2.stop();
          lfo.stop();
        } catch(err) {}
      }, 1100);
    } catch (e) {
      console.warn('Drone stop error', e);
    }

    this.droneOsc1 = null;
    this.droneOsc2 = null;
    this.droneLfo = null;
    this.droneFilter = null;
    this.droneGain = null;
  },

  /**
   * Soft chime (chime bell synth)
   * Plays when a character jumps the fence
   */
  playChime() {
    if (AppState.isMuted) return;
    this.resumeContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Choose a random pitch from a dreamy pentatonic scale
    const pitches = [523.25, 587.33, 659.25, 783.99, 880.00]; // C5, D5, E5, G5, A5
    const freq = pitches[Math.floor(Math.random() * pitches.length)];

    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Add a tiny bit of detuned triangle wave for bell color
    const overtone = this.ctx.createOscillator();
    overtone.type = 'triangle';
    overtone.frequency.setValueAtTime(freq * 1.5, now);
    const overtoneGain = this.ctx.createGain();
    overtoneGain.gain.setValueAtTime(0.05, now);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1500, now);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.18, now + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    overtone.connect(overtoneGain);
    overtoneGain.connect(filter);
    
    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.start(now);
    overtone.start(now);
    
    osc.stop(now + 1.3);
    overtone.stop(now + 1.3);
  },

  /**
   * Synthesized Wolf Howl
   * Frequency glides from low to high with pitch vibrato, then glides back down
   */
  playHowl() {
    if (AppState.isMuted) return;
    this.resumeContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    const mainOsc = this.ctx.createOscillator();
    const vibratoOsc = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    const volumeGain = this.ctx.createGain();

    // Howl volume profile
    volumeGain.gain.setValueAtTime(0, now);
    volumeGain.gain.linearRampToValueAtTime(0.25, now + 0.5); // Rise
    volumeGain.gain.setValueAtTime(0.25, now + 1.5);
    volumeGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8); // Smooth fall

    // Pitch sweep
    mainOsc.type = 'triangle';
    mainOsc.frequency.setValueAtTime(260, now); // start low
    mainOsc.frequency.exponentialRampToValueAtTime(680, now + 1.2); // sweep up
    mainOsc.frequency.setValueAtTime(680, now + 2.0); // hold
    mainOsc.frequency.exponentialRampToValueAtTime(180, now + 3.5); // slide down

    // Vibrato (pitch frequency modulation)
    vibratoOsc.type = 'sine';
    vibratoOsc.frequency.setValueAtTime(7, now); // 7Hz vibrato
    vibratoGain.gain.setValueAtTime(0, now);
    vibratoGain.gain.linearRampToValueAtTime(12, now + 1.0); // Increase vibrato depth
    vibratoGain.gain.exponentialRampToValueAtTime(0.1, now + 3.2);

    // Warm filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, now);
    filter.frequency.exponentialRampToValueAtTime(1400, now + 1.0);
    filter.frequency.exponentialRampToValueAtTime(600, now + 3.5);

    // Connections
    vibratoOsc.connect(vibratoGain);
    vibratoGain.connect(mainOsc.frequency);

    mainOsc.connect(filter);
    filter.connect(volumeGain);
    volumeGain.connect(this.ctx.destination);

    vibratoOsc.start(now);
    mainOsc.start(now);

    vibratoOsc.stop(now + 4.0);
    mainOsc.stop(now + 4.0);
  },

  /**
   * Synthesized Applause / Cheering
   * Programmatically creates bandpass-filtered noise bursts mimicking handclapping swells
   */
  playApplause() {
    if (AppState.isMuted) return;
    this.resumeContext();
    if (!this.ctx) return;

    const bufferSize = this.ctx.sampleRate * 4; // 4 seconds duration
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Fill buffer with white noise
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = buffer;

    // Filter to make the noise sound like clapping / cheering (resonant bandpass)
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(950, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

    // Gain node for general applause envelope
    const mainGain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    mainGain.gain.setValueAtTime(0, now);
    mainGain.gain.linearRampToValueAtTime(0.2, now + 0.5); // swell up
    mainGain.gain.linearRampToValueAtTime(0.18, now + 2.0); // hold
    mainGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8); // fade out

    noiseSource.connect(filter);
    filter.connect(mainGain);
    mainGain.connect(this.ctx.destination);

    noiseSource.start(now);
    noiseSource.stop(now + 4.0);

    // Add high-pitched cheering whistle synth
    setTimeout(() => {
      if (AppState.isMuted) return;
      try {
        const whistleOsc = this.ctx.createOscillator();
        const whistleGain = this.ctx.createGain();
        
        whistleOsc.type = 'sine';
        whistleOsc.frequency.setValueAtTime(1100, this.ctx.currentTime);
        whistleOsc.frequency.exponentialRampToValueAtTime(1500, this.ctx.currentTime + 0.3);
        whistleOsc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 1.2);

        whistleGain.gain.setValueAtTime(0, this.ctx.currentTime);
        whistleGain.gain.linearRampToValueAtTime(0.03, this.ctx.currentTime + 0.2);
        whistleGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

        whistleOsc.connect(whistleGain);
        whistleGain.connect(this.ctx.destination);

        whistleOsc.start();
        whistleOsc.stop(this.ctx.currentTime + 1.3);
      } catch (err) {}
    }, 400);
  }
};

// Screen Management
const ScreenManager = {
  changeScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    let targetScreen = null;

    screens.forEach(screen => {
      if (screen.id === screenId) {
        targetScreen = screen;
      }
      screen.classList.remove('active');
    });

    if (targetScreen) {
      targetScreen.classList.add('active');
      AppState.activeScreen = screenId;
    }

    // 서브 화면 진입 시 로고 겹침을 방지하기 위해 컨테이너 클래스 토글
    const container = document.querySelector('.app-container');
    if (container) {
      if (screenId === 'menu-screen') {
        container.classList.remove('sub-screen-active');
      } else {
        container.classList.add('sub-screen-active');
      }
    }

    // Context-sensitive music management
    if (screenId === 'menu-screen') {
      SoundEngine.startDrone();
      if (window.SleepInduction) window.SleepInduction.stop();
      if (window.WakeUp) window.WakeUp.stop();
    } else if (screenId === 'sleep-screen') {
      SoundEngine.startDrone();
      if (window.SleepInduction) window.SleepInduction.start();
      if (window.WakeUp) window.WakeUp.stop();
    } else if (screenId === 'wakeup-screen') {
      // Stop drone to allow silence / dramatic effects
      SoundEngine.stopDrone();
      if (window.SleepInduction) window.SleepInduction.stop();
      if (window.WakeUp) window.WakeUp.start();
    }
  }
};

// Event Listeners initialization
document.addEventListener('DOMContentLoaded', () => {
  // Sound Toggle click
  const soundToggle = document.getElementById('sound-toggle');
  soundToggle.addEventListener('click', () => {
    SoundEngine.toggleMute();
  });

  // Resume context on first click anywhere to satisfy browser policy
  document.body.addEventListener('click', () => {
    SoundEngine.resumeContext();
  }, { once: true });

  // Navigation button routing
  document.getElementById('btn-goto-sleep').addEventListener('click', () => {
    ScreenManager.changeScreen('sleep-screen');
  });

  document.getElementById('btn-goto-wakeup').addEventListener('click', () => {
    ScreenManager.changeScreen('wakeup-screen');
  });

  // Back buttons
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = btn.getAttribute('data-target') || 'menu-screen';
      ScreenManager.changeScreen(target);
    });
  });

  // Initial sound drone
  setTimeout(() => {
    SoundEngine.startDrone();
  }, 1000);
});

// Expose tools globally
window.SoundEngine = SoundEngine;
window.ScreenManager = ScreenManager;
