const Characters = {

  getSheep(state='normal'){
    return `
    <svg viewBox="0 0 64 64">
      <ellipse cx="32" cy="56" rx="16" ry="4" fill="rgba(0,0,0,.2)"/>
      <circle cx="30" cy="30" r="16" fill="#F5F6FF"/>
      <circle cx="46" cy="28" r="8" fill="#2E3142"/>
      <rect x="20" y="42" width="4" height="10" fill="#222"/>
      <rect x="38" y="42" width="4" height="10" fill="#222"/>
      ${
        state==="staring"
        ? `
        <circle cx="28" cy="28" r="2"/>
        <circle cx="36" cy="28" r="2"/>
        `
        : `
        <path d="M44 28 Q46 30 48 28"
        stroke="#FFE89C"
        fill="none"/>
        `
      }
    </svg>
    `;
  },

  getWeirdOldMan(state='normal'){
    return `
    <svg viewBox="0 0 64 64">
      <ellipse cx="32" cy="56" rx="14" ry="4"
      fill="rgba(0,0,0,.2)"/>
      
      <circle cx="32" cy="18" r="8"
      fill="#FFD2C4"/>

      <path d="M26 24
      C26 40 38 40 38 24"
      fill="#fff"/>

      <path d="M18 34
      L46 34
      L42 54
      L22 54 Z"
      fill="#E2E6FF"/>

      ${
        state==="staring"
        ? `
        <circle cx="28" cy="18" r="2"/>
        <circle cx="36" cy="18" r="2"/>
        `
        : `
        <path d="M27 18 Q29 20 31 18"
        stroke="#222"
        fill="none"/>
        `
      }
    </svg>
    `;
  },

  getPotato(state='normal'){
    return `
    <svg viewBox="0 0 64 64">

    <ellipse cx="32"
    cy="56"
    rx="15"
    ry="4"
    fill="rgba(0,0,0,.2)"/>

    <ellipse cx="32"
    cy="34"
    rx="18"
    ry="15"
    fill="#B58F6B"/>

    ${
      state==="staring"
      ? `
      <circle cx="27" cy="30" r="2"/>
      <circle cx="37" cy="30" r="2"/>
      `
      : `
      <path d="M34 30 Q36 32 38 30"
      stroke="#222"
      fill="none"/>
      `
    }

    </svg>
    `;
  },

  getPenguin(state='normal'){
    return `
    <svg viewBox="0 0 64 64">

      <ellipse cx="32"
      cy="56"
      rx="15"
      ry="4"
      fill="rgba(0,0,0,.2)"/>

      <ellipse cx="32"
      cy="32"
      rx="14"
      ry="18"
      fill="#20222E"/>

      <ellipse cx="32"
      cy="35"
      rx="9"
      ry="12"
      fill="#F5F6FF"/>

      <polygon
      points="30,30 34,30 32,34"
      fill="orange"/>

      ${
        state==="staring"
        ? `
        <circle cx="28" cy="26" r="2"/>
        <circle cx="36" cy="26" r="2"/>
        `
        : `
        <path d="M34 26 Q36 28 38 26"
        stroke="#222"
        fill="none"/>
        `
      }

    </svg>
    `;
  },

  getWolf(state='normal'){
    return `
    <svg viewBox="0 0 100 100">

      <ellipse cx="50"
      cy="90"
      rx="30"
      ry="5"
      fill="rgba(0,0,0,.2)"/>

      <path d="
      M25 65
      L35 40
      L70 40
      L80 65
      Z"
      fill="#6C7289"/>

      <polygon
      points="70,35 80,20 85,35"
      fill="#5E6375"/>

      <polygon
      points="60,35 65,20 72,35"
      fill="#5E6375"/>

      ${
        state==="staring"
        ? `
        <circle cx="40" cy="40" r="5" fill="red"/>
        <circle cx="60" cy="40" r="5" fill="red"/>
        `
        : `
        <circle cx="68" cy="35" r="3" fill="red"/>
        `
      }

    </svg>
    `;
  },

  getHumanInBed(state='normal'){
    return `
    <svg viewBox="0 0 240 140">

    <rect x="20"
    y="80"
    width="180"
    height="20"
    fill="#8C6E52"/>

    <rect x="30"
    y="60"
    width="150"
    height="25"
    fill="#B2B8E6"/>

    <circle
    cx="160"
    cy="55"
    r="12"
    fill="#FFD2C4"/>

    ${
      state==="success"
      ? `
      <circle cx="156" cy="52" r="2"/>
      <circle cx="166" cy="52" r="2"/>
      `
      : `
      <text
      x="190"
      y="30"
      font-size="15">Z</text>
      `
    }

    </svg>
    `;
  }

};

window.Characters=Characters;
