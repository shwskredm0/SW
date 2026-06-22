/**
 * DreamGap Sleep Induction System
 * Handles the counting sheep animation, canvas starfield, and interactive tapped staring logic.
 */

const SleepInduction = {
  canvas: null,
  ctx: null,
  animationId: null,
  stars: [],
  characters: [],
  spawnTimer: null,
  sheepCounted: 0,
  isRunning: false,
  container: null,

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    
    this.container = document.getElementById('character-container');
    this.container.innerHTML = ''; // Clear previous characters
    this.characters = [];
    this.sheepCounted = 0;
    document.getElementById('sheep-counter').textContent = '0';

    // Init canvas & starfield
    this.canvas = document.getElementById('sleep-canvas');
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      this.resizeCanvas();
      this.initStars();
    }

    // Start rendering and spawning
    this.loop();
    this.scheduleSpawn();

    // Spawn first character immediately
    this.spawnCharacter();

    window.addEventListener('resize', this.resizeCanvasBind);
  },

  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    if (this.spawnTimer) {
      clearTimeout(this.spawnTimer);
      this.spawnTimer = null;
    }
    if (this.container) {
      this.container.innerHTML = '';
    }
    this.characters = [];
    
    // Hide subtitles
    const subs = document.getElementById('sleep-subtitles');
    if (subs) subs.classList.remove('active');

    window.removeEventListener('resize', this.resizeCanvasBind);
  },

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  },

  resizeCanvasBind: null,

  initStars() {
    this.stars = [];
    const count = 40;
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height * 0.8, // keep stars in upper section
        size: Math.random() * 2 + 0.5,
        twinkleSpeed: 0.02 + Math.random() * 0.03,
        alpha: Math.random(),
        phase: Math.random() * Math.PI * 2
      });
    }
  },

  scheduleSpawn() {
    if (!this.isRunning) return;
    const delay = 3500 + Math.random() * 2000; // spawn every 3.5 - 5.5s
    this.spawnTimer = setTimeout(() => {
      this.spawnCharacter();
      this.scheduleSpawn();
    }, delay);
  },

  spawnCharacter() {
    if (!this.isRunning || !this.container) return;

    // 캐릭터 균등 스폰 확률 설정 (각 25%)
    let type = 'sheep';
    const roll = Math.random();
    if (roll < 0.25) {
      type = 'sheep';
    } else if (roll < 0.50) {
      type = 'weirdOldMan';
    } else if (roll < 0.75) {
      type = 'potato';
    } else {
      type = 'penguin';
    }

    const charEl = document.createElement('div');
    charEl.className = 'character-entity';
    
    // 15% 확률로 "눌러봐." 안내 문구 노출
    let promptHtml = '';
    if (Math.random() < 0.15) {
      promptHtml = '<div class="char-prompt">눌러봐.</div>';
    }
    
    // Initial HTML SVG loading
    charEl.innerHTML = promptHtml + this.getCharacterSVG(type, 'normal');
    this.container.appendChild(charEl);

    // Initial position coordinates
    const containerWidth = this.container.clientWidth || 380;
    const charWidth = 64;

    const charObj = {
      element: charEl,
      type: type,
      x: -charWidth,
      y: 0,
      width: charWidth,
      speed: 1.3 + Math.random() * 0.7, // speed in pixels per frame (approx 60-120px/s)
      jumpHeight: 60 + Math.random() * 25,
      isJumping: false,
      hasJumped: false,
      isStaring: false,
      opacity: 1
    };

    // Click behavior
    charEl.addEventListener('click', (e) => {
      e.stopPropagation();
      this.stareBehavior(charObj);
    });

    this.characters.push(charObj);
  },

  getCharacterSVG(type, state) {
    switch (type) {
      case 'sheep': return Characters.getSheep(state);
      case 'weirdOldMan': return Characters.getWeirdOldMan(state);
      case 'potato': return Characters.getPotato(state);
      case 'penguin': return Characters.getPenguin(state);
      default: return Characters.getSheep(state);
    }
  },

  getCharacterSubtitle(type) {
    const lines = {
      sheep: [
        "...",
        "*폭신폭신한 숨소리*",
        "네가 지난 밤에 한 일을 알고 있어.",
        "방 천장에 작은 돌기가 42개 있네.",
        "혹시 가스불은 끄고 누웠어?",
        "지금 보지 마, 나 되게 말랑하니까.",
        "폴짝. 반복. 스르륵.",
        "이게 꿈일까, 아니면 그냥 피곤한 걸까?"
      ],
      weirdOldMan: [
        "걷는 것보다 둥둥 떠다니는 게 훨씬 편해.",
        "내 날아다니는 취침용 모자 못 봤니?",
        "별들이 내게 비밀을 속삭이고 있어...",
        "나 때는 진짜 양들을 세곤 했단다.",
        "쿨쿨... 앗! 깨버렸네."
      ],
      potato: [
        "*감자의 깊은 침묵*",
        "나는 졸린 전분 덩어리야.",
        "따뜻한 흙과 노란 버터 꿈을 꾸는 중이야.",
        "격렬하게 아무것도 안 하고 싶다.",
        "쉿, 졸고 있는 감자를 깨우지 말아줘."
      ],
      penguin: [
        "스르륵 지나가는 중...",
        "여긴 춥지만 내 깃털 속은 따뜻해.",
        "펭귄은 졸려...",
        "얼른 눈을 감고 꿈나라로 가.",
        "파닥파닥... 이제 잘 시간이야."
      ]
    };

    const choice = lines[type] || ["..."];
    return choice[Math.floor(Math.random() * choice.length)];
  },

  stareBehavior(char) {
    if (char.isStaring || !this.isRunning) return;
    char.isStaring = true;
    char.speed = 0; // stop horizontal walking
    
    // Switch to staring SVG
    char.element.innerHTML = this.getCharacterSVG(char.type, 'staring');

    const containerWidth = this.container.clientWidth || 380;
    const containerHeight = this.container.clientHeight || 250;

    // Target zoom position: centered at bottom
    // We compute translations relative to the current position to trigger CSS transition
    const currentLeft = char.x;
    
    // Bottom center target coordinates relative to parent
    const targetX = containerWidth / 2 - char.width / 2;
    const targetY = -40; // Lift up slightly from ground

    char.element.classList.add('staring-zoom');
    char.element.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(2.5)`;

    // Show funny subtitle
    const subsContainer = document.getElementById('sleep-subtitles');
    const subsText = subsContainer.querySelector('.subtitle-text');
    subsText.textContent = this.getCharacterSubtitle(char.type);
    subsContainer.classList.add('active');

    // Hold gaze for 2.5 seconds, then fade out
    setTimeout(() => {
      if (!this.isRunning || !char.element) return;
      char.element.style.opacity = '0';
      subsContainer.classList.remove('active');
      
      // Remove completely after fade transition
      setTimeout(() => {
        if (!this.isRunning) return;
        if (char.element && char.element.parentNode) {
          char.element.parentNode.removeChild(char.element);
        }
        this.characters = this.characters.filter(c => c !== char);
      }, 500);
    }, 2500);
  },

  loop() {
    if (!this.isRunning) return;

    // 1. Draw Starfield
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.stars.forEach(star => {
        star.phase += star.twinkleSpeed;
        const currentAlpha = Math.max(0.2, Math.min(1.0, (Math.sin(star.phase) + 1) / 2));
        
        this.ctx.fillStyle = `rgba(255, 232, 156, ${currentAlpha})`;
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        this.ctx.fill();
      });
    }

    // 2. Animate Characters
    const containerWidth = this.container.clientWidth || 380;
    const fenceCenter = containerWidth / 2 - 32; // middle minus half width

    for (let i = this.characters.length - 1; i >= 0; i--) {
      const char = this.characters[i];
      if (char.isStaring) continue; // staring zoom handles itself via CSS

      // Walk forward
      char.x += char.speed;

      // Jump Arc calculation
      // Fence is located at center. Let's start jump 80px before center, end 80px after.
      const jumpStart = fenceCenter - 70;
      const jumpEnd = fenceCenter + 70;

      if (char.x >= jumpStart && char.x <= jumpEnd) {
        char.isJumping = true;
        // Parabolic arc
        const progress = (char.x - jumpStart) / (jumpEnd - jumpStart);
        // Sine wave arc from 0 to PI
        char.y = Math.sin(progress * Math.PI) * char.jumpHeight;

        // Trigger sound chime & counter exactly at center crossing
        if (char.x >= fenceCenter && !char.hasJumped) {
          char.hasJumped = true;
          if (window.SoundEngine) window.SoundEngine.playChime();
          
          if (char.type === 'sheep') {
            this.sheepCounted++;
            document.getElementById('sheep-counter').textContent = this.sheepCounted;
          }
        }
      } else {
        char.isJumping = false;
        char.y = 0;
      }

      // Apply transformations
      char.element.style.transform = `translate3d(${char.x}px, -${char.y}px, 0)`;

      // Remove characters that go off screen
      if (char.x > containerWidth + char.width) {
        if (char.element && char.element.parentNode) {
          char.element.parentNode.removeChild(char.element);
        }
        this.characters.splice(i, 1);
      }
    }

    this.animationId = requestAnimationFrame(() => this.loop());
  }
};

// Bind to window
window.SleepInduction = SleepInduction;
// Create resize bind
SleepInduction.resizeCanvasBind = SleepInduction.resizeCanvas.bind(SleepInduction);
