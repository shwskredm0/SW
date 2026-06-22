/**
 * DreamGap Character SVG Components Generator
 * Generates detailed, cute, and recognizable SVGs for characters.
 * Embeds blinking and styling classes for idle animation support.
 */

const Characters = {
  /**
   * Generates a Sheep SVG
   * @param {string} state - 'normal' (profile) or 'staring' (front facing)
   */
  getSheep(state = 'normal') {
    if (state === 'staring') {
      return `
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          <!-- Shadow -->
          <ellipse cx="32" cy="56" rx="20" ry="4" fill="rgba(8,10,22,0.35)" />
          
          <!-- Legs -->
          <rect x="20" y="44" width="4.5" height="11" rx="2" fill="#1C1E26" />
          <rect x="39.5" y="44" width="4.5" height="11" rx="2" fill="#1C1E26" />
          
          <!-- Fluffy Wool Body (Front view with rich bubble texture) -->
          <g fill="#F5F6FF" stroke="#D1D5F0" stroke-width="1">
            <circle cx="32" cy="32" r="17" />
            <circle cx="18" cy="28" r="11" />
            <circle cx="46" cy="28" r="11" />
            <circle cx="32" cy="17" r="12" />
            <circle cx="21" cy="42" r="9.5" />
            <circle cx="43" cy="42" r="9.5" />
            <circle cx="20" cy="18" r="8" />
            <circle cx="44" cy="18" r="8" />
          </g>
          
          <!-- Face (Dark Grey) -->
          <rect x="23" y="22" width="18" height="20" rx="9" fill="#2E3142" />
          
          <!-- Tiny Ears -->
          <ellipse cx="19" cy="26" rx="4.5" ry="2.5" fill="#2E3142" transform="rotate(-15 19 26)" />
          <ellipse cx="45" cy="26" rx="4.5" ry="2.5" fill="#2E3142" transform="rotate(15 45 26)" />
          <ellipse cx="19" cy="26" rx="2.5" ry="1.2" fill="#FFC9AF" transform="rotate(-15 19 26)" />
          <ellipse cx="45" cy="26" rx="2.5" ry="1.2" fill="#FFC9AF" transform="rotate(15 45 26)" />
          
          <!-- Staring Blinking Eyes -->
          <g class="eye-blink" transform-origin="32 30">
            <!-- White part -->
            <circle cx="28.5" cy="30" r="3.5" fill="#FFE89C" />
            <circle cx="28.5" cy="30" r="1.5" fill="#1C1E26" />
            <circle cx="35.5" cy="30" r="3.5" fill="#FFE89C" />
            <circle cx="35.5" cy="30" r="1.5" fill="#1C1E26" />
          </g>
          
          <!-- Soft Pink Cheeks & Mouth -->
          <circle cx="26" cy="36" r="2.2" fill="#FFB2A8" opacity="0.8" />
          <circle cx="38" cy="36" r="2.2" fill="#FFB2A8" opacity="0.8" />
          <path d="M30 35 Q32 37 34 35" stroke="#FFB2A8" stroke-width="1.2" fill="none" stroke-linecap="round" />
          
          <!-- Small Wool Puff on Head -->
          <circle cx="32" cy="18" r="6" fill="#F5F6FF" />
          <circle cx="28" cy="20" r="4.5" fill="#F5F6FF" />
          <circle cx="36" cy="20" r="4.5" fill="#F5F6FF" />
        </svg>
      `;
    }
    // Profile view (Facing Right)
    return `
      <svg viewBox="0 0 64 64" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="32" cy="56" rx="22" ry="4" fill="rgba(8,10,22,0.3)" />
        
        <!-- Legs -->
        <rect x="18" y="44" width="4" height="11" rx="1.5" fill="#1C1E26" />
        <rect x="25" y="44" width="4" height="11" rx="1.5" fill="#2E3142" />
        <rect x="36" y="44" width="4" height="11" rx="1.5" fill="#1C1E26" />
        <rect x="43" y="44" width="4" height="11" rx="1.5" fill="#2E3142" />
        
        <!-- Fluffy Wool Body (Profile bubble texture) -->
        <g fill="#F5F6FF" stroke="#D1D5F0" stroke-width="0.8">
          <circle cx="18" cy="32" r="11" />
          <circle cx="29" cy="30" r="14" />
          <circle cx="41" cy="32" r="12" />
          <circle cx="24" cy="20" r="10" />
          <circle cx="35" cy="21" r="11" />
          <circle cx="13" cy="26" r="7.5" />
          <circle cx="38" cy="38" r="9" />
          <circle cx="23" cy="38" r="9" />
        </g>
        
        <!-- Face/Head on Right -->
        <ellipse cx="48" cy="27" rx="8" ry="7" fill="#2E3142" />
        
        <!-- Small Ear -->
        <ellipse cx="45" cy="23" rx="3.5" ry="1.8" fill="#2E3142" transform="rotate(30 45 23)" />
        <ellipse cx="45" cy="23" rx="2" ry="0.8" fill="#FFC9AF" transform="rotate(30 45 23)" />
        
        <!-- Sleepy Blinking Eye -->
        <g class="eye-blink" transform-origin="49 26">
          <path d="M47 26 Q49 28 51 26" stroke="#FFE89C" stroke-width="1.5" fill="none" stroke-linecap="round" />
        </g>
        
        <!-- Fluffy Tail -->
        <circle cx="10" cy="28" r="5" fill="#F5F6FF" stroke="#D1D5F0" stroke-width="0.8" />
      </svg>
    `;
  },

  /**
   * Generates a Weird Old Man SVG
   * @param {string} state - 'normal' or 'staring'
   */
  getWeirdOldMan(state = 'normal') {
    if (state === 'staring') {
      return `
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          <!-- Shadow -->
          <ellipse cx="32" cy="57" rx="16" ry="4.5" fill="rgba(8,10,22,0.25)" />
          
          <!-- Slippers -->
          <rect x="21" y="53" width="7" height="4" rx="2" fill="#FFA36B" />
          <rect x="36" y="53" width="7" height="4" rx="2" fill="#FFA36B" />
          
          <!-- Oversized Floaty Nightgown -->
          <path d="M18 36 Q32 30 46 36 L50 54 Q32 58 14 54 Z" fill="#E2E6FF" stroke="#C3CEFF" stroke-width="1" />
          <!-- Stars on Nightgown -->
          <path d="M22 44 L23 45 L24 44 L23.5 46.5 Z" fill="#FFE89C" opacity="0.6" />
          <path d="M42 42 L43 43 L44 42 L43.5 44.5 Z" fill="#FFE89C" opacity="0.6" />
          
          <!-- Balding Head & Nose -->
          <circle cx="32" cy="18" r="8.5" fill="#FFC9AF" />
          <!-- Big Cute Nose -->
          <ellipse cx="32" cy="20" rx="3" ry="2.2" fill="#FFAD91" />
          
          <!-- Sleepy Blinking Eyes -->
          <g class="eye-blink" transform-origin="32 17">
            <circle cx="28" cy="17" r="2.2" fill="#FFE89C" />
            <circle cx="28" cy="17" r="0.8" fill="#1C1E26" />
            <circle cx="36" cy="17" r="2.2" fill="#FFE89C" />
            <circle cx="36" cy="17" r="0.8" fill="#1C1E26" />
          </g>
          
          <!-- Longer Beard -->
          <path d="M25 22 C24 38, 40 38, 39 22 C39 24, 37 32, 32 38 C27 32, 25 24, 25 22 Z" fill="#F6F6F9" />
          <path d="M28 22 Q32 25 36 22 L32 30 Z" fill="#E6E6EC" />
          
          <!-- Hair on Sides -->
          <path d="M23 18 Q21 24 24 26" stroke="#E6E6EC" stroke-width="2.5" fill="none" stroke-linecap="round" />
          <path d="M41 18 Q43 24 40 26" stroke="#E6E6EC" stroke-width="2.5" fill="none" stroke-linecap="round" />
        </svg>
      `;
    }
    // Profile view (Facing Right)
    return `
      <svg viewBox="0 0 64 64" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="28" cy="57" rx="18" ry="4" fill="rgba(8,10,22,0.2)" />
        
        <!-- Slippers peaking out -->
        <ellipse cx="34" cy="54" rx="5" ry="2.5" fill="#FFA36B" />
        
        <!-- Floaty Oversized Nightgown (Facing Right) -->
        <path d="M16 33 Q24 28 32 32 L41 52 Q26 57 12 50 Z" fill="#E2E6FF" stroke="#C3CEFF" stroke-width="1" />
        <path d="M20 40 L21 41.5 L22 40 L21.5 42 Z" fill="#FFE89C" opacity="0.6" />
        
        <!-- Bald Head & Nose -->
        <circle cx="28" cy="16" r="7.5" fill="#FFC9AF" />
        <!-- Big Cute Nose Profile -->
        <ellipse cx="34" cy="17" rx="2.5" ry="1.8" fill="#FFAD91" />
        
        <!-- Sleepy Eye -->
        <g class="eye-blink" transform-origin="30 15">
          <path d="M28 15 Q31 16.5 32 15" stroke="#7A544A" stroke-width="1.2" fill="none" stroke-linecap="round" />
        </g>
        
        <!-- Long Flowing White Beard -->
        <path d="M28 20 C34 21, 41 33, 30 38 C24 35, 25 24, 28 20 Z" fill="#F6F6F9" />
        <path d="M30 20 Q34 25 32 30" stroke="#E6E6EC" stroke-width="1.5" fill="none" />
        
        <!-- Side Hair -->
        <path d="M21 16 Q20 22 22 24" stroke="#E6E6EC" stroke-width="2.5" fill="none" stroke-linecap="round" />
      </svg>
    `;
  },

  /**
   * Generates a Potato SVG
   * @param {string} state - 'normal' or 'staring'
   */
  getPotato(state = 'normal') {
    // Irregular potato shape path
    const potatoPath = "M 18,24 C 13,28 15,36 17,42 C 20,48 28,49 34,48 C 42,47 48,43 47,34 C 46,25 41,18 32,18 C 24,18 21,20 18,24 Z";
    const potatoProfilePath = "M 16,32 C 12,24 22,17 34,20 C 46,23 49,34 45,41 C 41,47 24,47 16,32 Z";

    if (state === 'staring') {
      return `
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          <!-- Shadow -->
          <ellipse cx="32" cy="56" rx="16" ry="4" fill="rgba(8,10,22,0.3)" />
          
          <!-- Irregular Lumpy Potato Body -->
          <path d="${potatoPath}" fill="#B58F6B" stroke="#967251" stroke-width="1.2" />
          
          <!-- Staring Blinking Eyes -->
          <g class="eye-blink" transform-origin="32 28">
            <circle cx="26" cy="28" r="3.2" fill="#FFE89C" />
            <circle cx="26" cy="28" r="1.2" fill="#1C1E26" />
            <circle cx="38" cy="28" r="3.2" fill="#FFE89C" />
            <circle cx="38" cy="28" r="1.2" fill="#1C1E26" />
          </g>
          
          <!-- Rosy Cheeks & Tiny Smile -->
          <circle cx="21.5" cy="34" r="2.8" fill="#FFB2A8" opacity="0.85" />
          <circle cx="42.5" cy="34" r="2.8" fill="#FFB2A8" opacity="0.85" />
          <path d="M30 33 Q32 35 34 33" stroke="#8A6646" stroke-width="1.2" fill="none" stroke-linecap="round" />
          
          <!-- Potato Dirt/Dots Details -->
          <circle cx="32" cy="22" r="1" fill="#785739" />
          <circle cx="26" cy="43" r="1" fill="#785739" />
          <circle cx="41" cy="40" r="0.8" fill="#785739" />
          <circle cx="38" cy="22" r="1.2" fill="#785739" />
        </svg>
      `;
    }
    // Profile view
    return `
      <svg viewBox="0 0 64 64" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="32" cy="56" rx="18" ry="4" fill="rgba(8,10,22,0.3)" />
        
        <!-- Stubby Feet -->
        <rect x="23" y="46" width="3.5" height="5" rx="1.5" fill="#8C6E52" />
        <rect x="36" y="46" width="3.5" height="5" rx="1.5" fill="#8C6E52" />
        
        <!-- Profile Potato Shape -->
        <path d="${potatoProfilePath}" fill="#B58F6B" stroke="#967251" stroke-width="1" />
        
        <!-- Blinking Closed Eye -->
        <g class="eye-blink" transform-origin="38 28">
          <path d="M36 28 Q39 30 42 28" stroke="#FFE89C" stroke-width="1.5" fill="none" stroke-linecap="round" />
        </g>
        
        <!-- Rosy Cheek & Dots -->
        <circle cx="42" cy="32" r="2.5" fill="#FFB2A8" opacity="0.7" />
        <circle cx="20" cy="28" r="1" fill="#785739" />
        <circle cx="28" cy="41" r="1" fill="#785739" />
      </svg>
    `;
  },

  /**
   * Generates a Penguin SVG (New Character!)
   * @param {string} state - 'normal' or 'staring'
   */
  getPenguin(state = 'normal') {
    if (state === 'staring') {
      return `
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          <!-- Shadow -->
          <ellipse cx="32" cy="56" rx="16" ry="4.5" fill="rgba(8,10,22,0.3)" />
          
          <!-- Feet (Orange) -->
          <rect x="22" y="50" width="7" height="4.5" rx="2" fill="#FFA36B" />
          <rect x="35" y="50" width="7" height="4.5" rx="2" fill="#FFA36B" />
          
          <!-- Black Body Outline -->
          <rect x="18" y="16" width="28" height="36" rx="14" fill="#20222E" stroke="#12131A" stroke-width="1" />
          
          <!-- White Belly/Face Patch -->
          <path d="M32 20 C24 20, 22 28, 22 36 C22 46, 26 50, 32 50 C38 50, 42 46, 42 36 C42 28, 40 20, 32 20 Z" fill="#F0F2FD" />
          
          <!-- Wings -->
          <ellipse cx="15" cy="34" rx="3.5" ry="9" fill="#20222E" transform="rotate(10 15 34)" />
          <ellipse cx="49" cy="34" rx="3.5" ry="9" fill="#20222E" transform="rotate(-10 49 34)" />
          
          <!-- Sleepy Blinking Eyes -->
          <g class="eye-blink" transform-origin="32 26">
            <circle cx="27" cy="26" r="2.8" fill="#FFE89C" />
            <circle cx="27" cy="26" r="1.2" fill="#1C1E26" />
            <circle cx="37" cy="26" r="2.8" fill="#FFE89C" />
            <circle cx="37" cy="26" r="1.2" fill="#1C1E26" />
          </g>
          
          <!-- Cute Yellow Beak -->
          <polygon points="30,28 34,28 32,33" fill="#FFA36B" stroke="#E08B53" stroke-width="0.5" />
          
          <!-- Blushing cheeks -->
          <circle cx="23" cy="31" r="2.2" fill="#FFB2A8" opacity="0.8" />
          <circle cx="41" cy="31" r="2.2" fill="#FFB2A8" opacity="0.8" />
        </svg>
      `;
    }
    // Profile view (Facing Right)
    return `
      <svg viewBox="0 0 64 64" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="32" cy="56" rx="16" ry="4" fill="rgba(8,10,22,0.3)" />
        
        <!-- Foot -->
        <rect x="28" y="50" width="10" height="4" rx="2" fill="#FFA36B" />
        
        <!-- Profile Black Body -->
        <path d="M22 16 C22 16, 40 14, 40 34 C40 46, 36 52, 28 52 C20 52, 18 44, 18 34 C18 20, 22 16, 22 16 Z" fill="#20222E" stroke="#12131A" stroke-width="0.8" />
        
        <!-- White Belly Patch (Profile) -->
        <path d="M34 24 C34 24, 38 28, 38 36 C38 45, 34 49, 30 49 C28 49, 29 44, 29 36 C29 28, 34 24, 34 24 Z" fill="#F0F2FD" />
        
        <!-- Wing on side -->
        <ellipse cx="25" cy="34" rx="3.5" ry="9" fill="#161720" transform="rotate(-15 25 34)" />
        
        <!-- Sleepy eye -->
        <g class="eye-blink" transform-origin="36 24">
          <path d="M33 24 Q36 26 38 24" stroke="#60541C" stroke-width="1.2" fill="none" stroke-linecap="round" />
        </g>
        
        <!-- Beak (Profile) -->
        <polygon points="39,24 44,26 39,28" fill="#FFA36B" />
  /**
   * Generates a Wolf SVG (Intimidatingly muscular but funny)
   * @param {string} state - 'normal', 'snatch', 'howl', 'staring'
   */
  getWolf(state = 'normal') {
    if (state === 'staring') {
      // 10~13단계: 정면 응시 근육질 늑대 (어깨깡패, 선명한 가슴근육, 복근, 무시무시한 손발톱, 붉은 안광)
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <!-- Shadow -->
          <ellipse cx="50" cy="94" rx="28" ry="6" fill="rgba(8,10,22,0.5)" />
          
          <!-- 거대한 어깨 및 승모근 (어깨깡패 비율) -->
          <path d="M14 90 L18 55 Q32 36 50 36 Q68 36 82 55 L86 90 Z" fill="#5E6375" />
          
          <!-- 왼쪽 어깨 삼각근 -->
          <circle cx="22" cy="58" r="13" fill="#6C7289" />
          <circle cx="19" cy="58" r="8" fill="#8B93AD" opacity="0.15" />
          
          <!-- 오른쪽 어깨 삼각근 -->
          <circle cx="78" cy="58" r="13" fill="#6C7289" />
          <circle cx="81" cy="58" r="8" fill="#8B93AD" opacity="0.15" />
          
          <!-- 성이 난 가슴 근육 (Pectorals) -->
          <path d="M28 56 C28 44, 48 44, 48 64 L32 80 Z" fill="#6C7289" stroke="#484D5C" stroke-width="1.5" />
          <path d="M72 56 C72 44, 52 44, 52 64 L68 80 Z" fill="#6C7289" stroke="#484D5C" stroke-width="1.5" />
          
          <!-- 선명한 왕(王)자 복근 (Abs) -->
          <rect x="42" y="68" width="16" height="22" rx="3" fill="#5E6375" />
          <line x1="50" y1="68" x2="50" y2="90" stroke="#484D5C" stroke-width="1.8" />
          <line x1="42" y1="74" x2="58" y2="74" stroke="#484D5C" stroke-width="1.5" />
          <line x1="42" y1="80" x2="58" y2="80" stroke="#484D5C" stroke-width="1.5" />
          <line x1="42" y1="86" x2="58" y2="86" stroke="#484D5C" stroke-width="1.5" />
          
          <!-- 굵직한 앞발 & 날카로운 흰색 발톱 -->
          <rect x="20" y="85" width="14" height="11" rx="3" fill="#484D5C" />
          <rect x="66" y="85" width="14" height="11" rx="3" fill="#484D5C" />
          <polygon points="22,96 24,99 26,96" fill="#FFF" />
          <polygon points="27,96 29,99 31,96" fill="#FFF" />
          <polygon points="32,96 34,99 36,96" fill="#FFF" />
          <polygon points="68,96 70,99 72,96" fill="#FFF" />
          <polygon points="73,96 75,99 77,96" fill="#FFF" />
          <polygon points="78,96 80,99 82,96" fill="#FFF" />
          
          <!-- 목 및 깃 형태의 풍성한 목털 -->
          <path d="M34 46 L50 32 L66 46 L50 52 Z" fill="#8B93AD" />
          
          <!-- 늑대 머리 -->
          <path d="M28 38 L50 18 L72 38 L64 48 L36 48 Z" fill="#6C7289" />
          
          <!-- 뾰족한 귀 -->
          <path d="M30 25 L18 2 L36 17 Z" fill="#484D5C" />
          <path d="M70 25 L82 2 L64 17 Z" fill="#484D5C" />
          <!-- 붉은 귓바퀴 내막 -->
          <path d="M28 22 L22 10 L32 17 Z" fill="#FF8566" opacity="0.6" />
          <path d="M72 22 L78 10 L68 17 Z" fill="#FF8566" opacity="0.6" />
          
          <!-- 분노에 찬 매서운 눈썹과 붉은 레이저 안광 -->
          <g>
            <!-- 앵그리 눈썹 -->
            <path d="M31 27 Q41 31 46 30" stroke="#12131A" stroke-width="3.5" fill="none" stroke-linecap="round" />
            <path d="M69 27 Q59 31 54 30" stroke="#12131A" stroke-width="3.5" fill="none" stroke-linecap="round" />
            <!-- 붉은 안광 눈동자 -->
            <circle cx="38" cy="33" r="5" fill="#FF4F4F" stroke="#FFE89C" stroke-width="1.2" />
            <ellipse cx="38" cy="33" rx="1" ry="3.5" fill="#1C1E26" />
            <circle cx="62" cy="33" r="5" fill="#FF4F4F" stroke="#FFE89C" stroke-width="1.2" />
            <ellipse cx="62" cy="33" rx="1" ry="3.5" fill="#1C1E26" />
          </g>
          
          <!-- 으르렁거리는 코 & 주둥이 & 날카로운 송곳니 -->
          <polygon points="46,39 54,39 50,45" fill="#2E3142" />
          <path d="M42 47 Q50 50 58 47" stroke="#12131A" stroke-width="2.2" fill="none" />
          <polygon points="45,47 47,51 49,47" fill="#FFF" />
          <polygon points="51,47 53,51 55,47" fill="#FFF" />
        </svg>
      `;
    }
    if (state === 'howl') {
      // 목덜미가 거대하고 우람한 하울링 상태
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <!-- Shadow -->
          <ellipse cx="50" cy="90" rx="32" ry="6" fill="rgba(8,10,22,0.45)" />
          
          <!-- 벌크업된 몸통 & 굽은 어깨 등근육 -->
          <path d="M18 70 Q30 38 54 38 L72 70 L66 88 L18 88 Z" fill="#6C7289" />
          <!-- 꼬리 -->
          <path d="M10 70 Q0 55 8 40 Q16 45 20 70 Z" fill="#5E6375" />
          
          <!-- 굵직한 다리 -->
          <rect x="25" y="78" width="9.5" height="12" fill="#5E6375" />
          <rect x="38" y="78" width="9.5" height="12" fill="#5E6375" />
          <rect x="52" y="78" width="9.5" height="12" fill="#6C7289" />
          
          <!-- 두터운 목근육 & 부풀어 오른 가슴 -->
          <path d="M48 38 Q66 44 74 62 L52 68 Z" fill="#8B93AD" />
          <path d="M48 38 L74 10 L86 18 L58 46 Z" fill="#6C7289" />
          
          <!-- 고개를 뒤로 젖힌 성난 주둥이와 송곳니 -->
          <g transform="translate(65, 2) rotate(-45 10 10)">
            <path d="M0 24 L22 8 L38 0 L26 24 Z" fill="#6C7289" />
            <path d="M22 4 L38 -4" stroke="#484D5C" stroke-width="4.5" fill="none" stroke-linecap="round" />
            <path d="M25 9 L34 3" stroke="#484D5C" stroke-width="3" fill="none" stroke-linecap="round" />
            <!-- 날카로운 송곳니 -->
            <polygon points="26,4 28,1 30,4" fill="#FFF" />
            <polygon points="31,4 33,0 35,4" fill="#FFF" />
            <!-- 성난 붉은 감은 눈 -->
            <line x1="12" y1="11" x2="18" y2="5" stroke="#FF4F4F" stroke-width="2.5" stroke-linecap="round" />
            <path d="M-4 14 L0 -4 L8 10 Z" fill="#5E6375" />
          </g>
        </svg>
      `;
    }
    if (state === 'snatch') {
      // 침대를 낚아채는 거대한 근육 팔뚝 형태
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <!-- Shadow -->
          <ellipse cx="45" cy="92" rx="34" ry="6.5" fill="rgba(8,10,22,0.4)" />
          
          <!-- 굵은 다리 -->
          <rect x="18" y="80" width="9" height="12" fill="#5E6375" />
          <rect x="32" y="80" width="9" height="12" fill="#6C7289" />
          <rect x="50" y="80" width="9" height="12" fill="#5E6375" />
          
          <!-- 벌크업된 돌진 몸통 -->
          <path d="M12 70 Q24 36 52 38 L64 80 L15 80 Z" fill="#6C7289" />
          <!-- 굵은 삼각근 표현 -->
          <circle cx="34" cy="50" r="14" fill="#5E6375" />
          
          <!-- 쩍 갈라진 근육질 팔뚝 (Bicep/Tricep) -->
          <g stroke="#5E6375" stroke-width="9" fill="none" stroke-linecap="round">
            <path d="M42 48 Q75 40 88 45" />
            <path d="M40 56 Q72 50 84 55" />
          </g>
          <g stroke="#8B93AD" stroke-width="5" fill="none" stroke-linecap="round">
            <path d="M42 48 Q75 40 88 45" />
          </g>
          <!-- 무시무시한 손톱 -->
          <path d="M88 41 L94 45 L88 49" fill="none" stroke="#FFF" stroke-width="2.5" />
          <path d="M84 51 L90 55 L84 59" fill="none" stroke="#FFF" stroke-width="2.5" />
          
          <!-- 매서운 머리 및 송곳니가 비치는 늑대 주둥이 -->
          <rect x="52" y="14" width="24" height="22" rx="5" fill="#6C7289" />
          <path d="M68 26 L86 30 L68 36 Z" fill="#5E6375" />
          <polygon points="74,27 76,31 78,27" fill="#FFF" />
          <polygon points="78,27 80,31 82,27" fill="#FFF" />
          
          <!-- 붉은 안광 레이저 눈 -->
          <circle cx="62" cy="22" r="3.8" fill="#FF4F4F" stroke="#FFE89C" stroke-width="1.2" />
          <circle cx="62" cy="22" r="1.3" fill="#1C1E26" />
          
          <!-- 귀 -->
          <path d="M54 16 L46 0 L58 12 Z" fill="#5E6375" />
          <path d="M64 14 L58 -2 L68 10 Z" fill="#5E6375" />
        </svg>
      `;
    }
    
    // Normal / Sneaking profile Wolf (근육질 형태)
    return `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="50" cy="90" rx="34" ry="5.5" fill="rgba(8,10,22,0.4)" />
        
        <!-- 꼬리 -->
        <path d="M20 68 Q8 56 14 44 Q22 48 26 68 Z" fill="#5E6375" />
        
        <!-- 우람한 다리 -->
        <rect x="32" y="76" width="8.2" height="15" fill="#5E6375" />
        <rect x="42" y="76" width="8.2" height="15" fill="#6C7289" />
        <rect x="58" y="76" width="8.2" height="15" fill="#5E6375" />
        <rect x="66" y="76" width="8.2" height="15" fill="#6C7289" />
        
        <!-- 등근육 험프가 솟아오른 늑대 몸통 -->
        <path d="M24 62 Q36 44 58 46 L70 76 L24 76 Z" fill="#6C7289" />
        <circle cx="48" cy="56" r="10.5" fill="#5E6375" />
        
        <!-- 두터운 목덜미 & 톱니형 털 장식 -->
        <path d="M54 46 L66 30 L74 40 L62 58 Z" fill="#6C7289" />
        <path d="M54 48 Q66 50 68 66 Z" fill="#8B93AD" />
        <path d="M58 46 L64 52 L62 68" stroke="#8B93AD" stroke-width="2.5" fill="none" />
        
        <!-- 머리 및 송곳니 돌출 주둥이 -->
        <rect x="64" y="18" width="20" height="18" rx="5" fill="#6C7289" transform="rotate(3 74 27)" />
        <path d="M76 24 L86 27 L76 31 Z" fill="#5E6375" />
        <polygon points="80,27 82,30 84,27" fill="#FFF" />
        <circle cx="86" cy="27" r="1.5" fill="#1C1E26" />
        
        <!-- 붉은 안광의 눈 -->
        <g class="eye-blink" transform-origin="73 24">
          <path d="M71 24 Q73 26 75 24" stroke="#FF4F4F" stroke-width="1.8" fill="none" stroke-linecap="round" />
        </g>
        
        <!-- 귀 -->
        <path d="M66 19 L60 6 L68 15 Z" fill="#5E6375" />
        <path d="M72 17 L66 4 L74 13 Z" fill="#5E6375" />
      </svg>
    `;
  },

  /**
   * Generates a Human in Bed SVG
   * @param {string} state - 'normal' (sleeping), 'success' (awake/confused)
   */
  getHumanInBed(state = 'normal') {
    const eyeSVG = state === 'success' 
      ? `<!-- Awake wide eyes -->
         <g class="eye-blink" transform-origin="165 52">
           <circle cx="160" cy="52" r="3.5" fill="#FFE89C" />
           <circle cx="160" cy="52" r="1.5" fill="#1C1E26" />
           <circle cx="170" cy="52" r="3.5" fill="#FFE89C" />
           <circle cx="170" cy="52" r="1.5" fill="#1C1E26" />
         </g>
         <!-- Open mouth -->
         <ellipse cx="165" cy="62" rx="3.5" ry="2" fill="#1C1E26" />`
      : `<!-- Sleepy blinking closed eyes -->
         <g class="eye-blink" transform-origin="165 53">
           <path d="M158 53 Q162 55 166 53" stroke="#222" stroke-width="1.5" fill="none" stroke-linecap="round" />
           <path d="M168 53 Q172 55 176 53" stroke="#222" stroke-width="1.5" fill="none" stroke-linecap="round" />
         </g>
         <!-- Sleepy smile -->
         <path d="M163 60 Q165 62 167 60" stroke="#FF8566" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.8" />`;

    return `
      <svg viewBox="0 0 240 140" width="100%" height="100%">
        <!-- Bed Frame Wooden Legs -->
        <rect x="20" y="90" width="10" height="25" rx="3" fill="#8C6E52" />
        <rect x="210" y="90" width="10" height="25" rx="3" fill="#8C6E52" />
        
        <!-- Wooden Headboard & Frame -->
        <rect x="18" y="50" width="10" height="50" rx="3" fill="#A88768" />
        <rect x="20" y="84" width="200" height="10" fill="#8C6E52" />
        
        <!-- Mattress -->
        <rect x="28" y="74" width="186" height="12" rx="2" fill="#E6EEF8" />
        
        <!-- Pillow -->
        <rect x="145" y="58" width="40" height="18" rx="5" fill="#DCE6F5" />
        
        <!-- Sleeping Human (Head) -->
        <circle cx="165" cy="55" r="15" fill="#FFD2C4" />
        <!-- Hair -->
        <path d="M150 50 C148 40, 175 35, 178 50 C180 40, 160 38, 150 50 Z" fill="#291F1D" />
        
        ${eyeSVG}
        
        <!-- Cozy Blanket covering body -->
        <path d="M30 70 L150 70 C155 78, 152 90, 140 90 L30 90 Z" fill="#B2B8E6" />
        <!-- Blanket Fold -->
        <path d="M125 70 C135 70, 145 66, 148 76 C138 78, 128 78, 125 70 Z" fill="#C5CBF2" />
        
        <!-- Zzz Floating details (only if sleeping) -->
        ${state === 'normal' ? `
          <g fill="var(--color-lavender)" opacity="0.8">
            <text x="185" y="35" font-family="Outfit" font-size="10" font-weight="600">z</text>
            <text x="195" y="24" font-family="Outfit" font-size="14" font-weight="600">Z</text>
            <text x="210" y="10" font-family="Outfit" font-size="18" font-weight="600">Z</text>
          </g>
        ` : ''}
      </svg>
    `;
  }
};
