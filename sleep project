/**
 * DreamGap Wake Up Interaction Controller (Korean Update)
 * Manages the bedroom scene, success wake-up, and the 17-step forced wolf wake-up sequence.
 */

const WakeUp = {
  isRunning: false,
  bedContainer: null,
  wolfSpot: null,
  bedroomWindow: null,
  wakeupOverlay: null,
  resultsOverlay: null,
  confettiContainer: null,
  rippleContainer: null,
  rippleInterval: null,
  activeTimers: [],

  start() {
    this.isRunning = true;
    this.activeTimers = [];

    // Grab elements
    this.bedContainer = document.getElementById('bed-container');
    this.wolfSpot = document.getElementById('wolf-spot');
    this.bedroomWindow = document.getElementById('bedroom-window');
    this.wakeupOverlay = document.getElementById('wakeup-overlay');
    this.resultsOverlay = document.getElementById('results-overlay');
    this.confettiContainer = document.getElementById('confetti-container');
    this.rippleContainer = document.getElementById('howl-ripple-container');

    // Reset components to initial states
    this.resetScene();

    // Load initial SVGs
    this.bedContainer.innerHTML = Characters.getHumanInBed('normal');
    this.wolfSpot.innerHTML = Characters.getWolf('normal');

    // Hook button events
    document.getElementById('btn-sleep-more').onclick = () => this.handleSleepMore();
    document.getElementById('btn-wake-up').onclick = () => this.handleWakeUp();
    document.getElementById('btn-results-back').onclick = () => {
      if (window.ScreenManager) window.ScreenManager.changeScreen('menu-screen');
    };
  },

  stop() {
    this.isRunning = false;
    this.clearTimers();
    this.resetScene();
  },

  delay(fn, ms) {
    const timer = setTimeout(fn, ms);
    this.activeTimers.push(timer);
    return timer;
  },

  clearTimers() {
    if (this.rippleInterval) {
      clearInterval(this.rippleInterval);
      this.rippleInterval = null;
    }
    this.activeTimers.forEach(clearTimeout);
    this.activeTimers = [];
  },

  resetScene() {
    if (this.bedroomWindow) this.bedroomWindow.classList.remove('sunrise');
    if (this.bedContainer) {
      this.bedContainer.classList.remove('flung');
      this.bedContainer.style.transform = '';
    }
    if (this.wolfSpot) {
      this.wolfSpot.classList.remove('enter', 'approach', 'howl-shake');
      this.wolfSpot.innerHTML = '';
    }
    if (this.wakeupOverlay) {
      this.wakeupOverlay.classList.remove('hidden');
    }
    
    // Reset dialogue box
    const sleepyDialog = document.getElementById('sleepy-dialog');
    if (sleepyDialog) {
      sleepyDialog.textContent = '"5분만 더....."';
    }
    const actionsWrapper = document.getElementById('wakeup-actions');
    if (actionsWrapper) {
      actionsWrapper.style.display = '';
    }

    if (this.resultsOverlay) {
      this.resultsOverlay.classList.remove('active');
    }
    if (this.confettiContainer) {
      this.confettiContainer.innerHTML = '';
    }
    if (this.rippleContainer) {
      this.rippleContainer.innerHTML = '';
    }
  },

  handleWakeUp() {
    if (!this.isRunning) return;

    // 1. Trigger bright window glow
    this.bedroomWindow.classList.add('sunrise');

    // 2. Wake up the human sleeping face SVG
    this.bedContainer.innerHTML = Characters.getHumanInBed('success');

    // 3. Play applause audio
    if (window.SoundEngine) window.SoundEngine.playApplause();

    // 4. Hide buttons overlay
    this.wakeupOverlay.classList.add('hidden');

    // 5. Spawn confetti particles
    this.spawnConfetti();

    // 6. Show "인간 승리" results screen
    this.delay(() => {
      if (!this.isRunning) return;
      
      const resultsTitle = document.getElementById('results-title');
      resultsTitle.textContent = "인간 승리";
      resultsTitle.className = "results-title success-text";
      this.resultsOverlay.classList.add('active');
    }, 1200);
  },

  handleSleepMore() {
    if (!this.isRunning) return;

    const sleepyDialog = document.getElementById('sleepy-dialog');
    const actionsWrapper = document.getElementById('wakeup-actions');

    // 1단계: 기상 버튼 숨김
    if (actionsWrapper) actionsWrapper.style.display = 'none';
    this.wakeupOverlay.classList.add('hidden');

    // 2단계: 2초 대기 후 늑대 등장
    this.delay(() => {
      if (!this.isRunning) return;

      // 3단계: 늑대 천천히 슬라이드 인 (프로필 모습으로 등장)
      this.wolfSpot.innerHTML = Characters.getWolf('normal');
      this.wolfSpot.classList.add('enter');

      // 4단계: 늑대 진입 후 1.2초간 멈춤 (이동 애니메이션은 1.5초 소요되므로 1.5s + 1.2s 대기)
      this.delay(() => {
        if (!this.isRunning) return;

        // 5단계: 늑대가 자고 있는 인간을 쳐다봄 (머리가 조금 더 똑바로 서며 자세 잡기)
        this.wolfSpot.innerHTML = Characters.getWolf('normal'); // 기본 상태가 침대를 향하고 있음

        // 6단계: 0.5초 후 침대를 향해 돌진하며 움켜잡기 상태로 변경
        this.delay(() => {
          if (!this.isRunning) return;
          this.wolfSpot.innerHTML = Characters.getWolf('snatch');
          this.wolfSpot.style.left = '80px'; // 침대 쪽으로 한 보 밀착

          // 7단계: 0.5초 후 침대와 인간을 화면 밖으로 세게 날려버림
          this.delay(() => {
            if (!this.isRunning) return;
            this.bedContainer.classList.add('flung');

            // 8단계: 1초간 일시정지 (폭풍이 휩쓸고 간 정적)
            this.delay(() => {
              if (!this.isRunning) return;

              // 9단계: 늑대가 유저를 향해 천천히 고개를 돌림 (정면 응시 SVG)
              this.wolfSpot.innerHTML = Characters.getWolf('staring');

              // 10~12단계: 늑대가 화면 앞(유저)으로 서서히 크기를 키우며 중심에 멈춰섬 (1.5초 트랜지션)
              this.wolfSpot.classList.remove('enter');
              this.wolfSpot.classList.add('approach');
              this.wolfSpot.style.left = ''; // 클래스로 제어

              // 13~14단계: 화면 근처에 멈춰 서서 3.5초 동안 유저를 소리 없이 응시 & 하단 자막 "..." 노출
              this.delay(() => {
                if (!this.isRunning) return;
                
                if (sleepyDialog) sleepyDialog.textContent = "...";
                this.wakeupOverlay.classList.remove('hidden');

                // 15~16단계: 3.5초 응시 종료 후 고개를 젖히며 하울링 시작 (하울링 합성음 & 시각적 파동 전파)
                this.delay(() => {
                  if (!this.isRunning) return;
                  
                  // 자막창 숨기기
                  this.wakeupOverlay.classList.add('hidden');

                  // 하울링 자세 변경 및 부르르 떨기
                  this.wolfSpot.innerHTML = Characters.getWolf('howl');
                  this.wolfSpot.classList.add('howl-shake');

                  // 하울링 효과음 및 시각적 파동
                  if (window.SoundEngine) window.SoundEngine.playHowl();
                  this.startHowlRipples();

                  // 17단계: 3.5초간 하울링 진행 후 "강제 기상 완료" 결과창 노출
                  this.delay(() => {
                    if (!this.isRunning) return;
                    this.stopHowlRipples();
                    
                    const resultsTitle = document.getElementById('results-title');
                    resultsTitle.textContent = "강제 기상 완료";
                    resultsTitle.className = "results-title fail-text";
                    this.resultsOverlay.classList.add('active');
                  }, 3500);

                }, 3500);

              }, 1500); // 다가오는 1.5초 트랜지션이 끝난 시점

            }, 1000); // 8단계: 1초 대기

          }, 500); // 7단계 대기

        }, 500); // 6단계 대기

      }, 2700); // 4단계 대기 (진입 1.5초 + 대기 1.2초)

    }, 2000); // 2단계 대기
  },

  spawnConfetti() {
    const colors = ['#FFE89C', '#FFD2C4', '#B2B8E6', '#FF8566', '#FFFFFF', '#6C7289'];
    const count = 40;
    
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 8 + 4;
      const left = Math.random() * 100; // percent width
      const delay = Math.random() * 0.8;
      const duration = Math.random() * 2 + 1.5;

      particle.style.backgroundColor = color;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.bottom = '15%'; // start above the bed level
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      
      // Random shape (circle vs square)
      if (Math.random() > 0.5) {
        particle.style.borderRadius = '50%';
      }

      this.confettiContainer.appendChild(particle);
    }
  },

  startHowlRipples() {
    this.rippleInterval = setInterval(() => {
      if (!this.isRunning) return;
      const ripple = document.createElement('div');
      ripple.className = 'howl-ripple';
      
      // Add to container
      this.rippleContainer.appendChild(ripple);

      // Remove after animation finishes
      setTimeout(() => {
        if (ripple && ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 2000);
    }, 450);
  },

  stopHowlRipples() {
    if (this.rippleInterval) {
      clearInterval(this.rippleInterval);
      this.rippleInterval = null;
    }
  }
};

// Bind to window
window.WakeUp = WakeUp;
