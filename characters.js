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

<!-- 그림자 -->
<ellipse cx="32"
cy="57"
rx="14"
ry="4"
fill="rgba(0,0,0,.2)"/>

<!-- 다리 -->
<rect x="25"
y="46"
width="4"
height="10"
rx="2"
fill="#444"/>

<rect x="35"
y="46"
width="4"
height="10"
rx="2"
fill="#444"/>

<!-- 슬리퍼 -->
<ellipse cx="27"
cy="56"
rx="4"
ry="2"
fill="#FFA36B"/>

<ellipse cx="37"
cy="56"
rx="4"
ry="2"
fill="#FFA36B"/>

<!-- 잠옷 몸통 -->
<path d="
M18 28
Q32 24 46 28
L42 50
L22 50
Z"
fill="#DCE2FF"/>

<!-- 별무늬 -->
<circle cx="25" cy="38" r="1.5" fill="#FFE89C"/>
<circle cx="39" cy="35" r="1.5" fill="#FFE89C"/>
<circle cx="34" cy="43" r="1.2" fill="#FFE89C"/>

<!-- 팔 -->
<rect x="15"
y="31"
width="7"
height="3"
rx="2"
fill="#FFD2C4"
transform="rotate(-15 15 31)"/>

<rect x="42"
y="31"
width="7"
height="3"
rx="2"
fill="#FFD2C4"
transform="rotate(15 42 31)"/>

<!-- 머리 -->
<circle cx="32"
cy="18"
r="9"
fill="#FFD2C4"/>

<!-- 옆머리 -->
<path d="
M23 15
Q18 18 22 24"
stroke="#F2F2F2"
stroke-width="4"
fill="none"
stroke-linecap="round"/>

<path d="
M41 15
Q46 18 42 24"
stroke="#F2F2F2"
stroke-width="4"
fill="none"
stroke-linecap="round"/>

<!-- 윗머리 몇가닥 -->
<path d="
M29 10
Q31 5 33 10"
stroke="#F2F2F2"
stroke-width="2"
fill="none"
stroke-linecap="round"/>

<path d="
M33 10
Q35 4 37 10"
stroke="#F2F2F2"
stroke-width="2"
fill="none"
stroke-linecap="round"/>

<!-- 수염 -->
<path d="
M26 22
C25 34 39 34 38 22"
fill="#F8F8F8"/>

${
state==="staring"
?`
<circle cx="28" cy="17" r="2"/>
<circle cx="36" cy="17" r="2"/>
`
:`
<path d="M27 17 Q29 19 31 17"
stroke="#222"
fill="none"/>

<path d="M33 17 Q35 19 37 17"
stroke="#222"
fill="none"/>
`
}

<!-- 코 -->
<ellipse cx="32"
cy="20"
rx="2"
ry="1.5"
fill="#FFB2A8"/>

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
<svg viewBox="0 0 120 100">

<!-- 그림자 -->
<ellipse
cx="58"
cy="90"
rx="34"
ry="6"
fill="rgba(0,0,0,.25)"/>

<!-- 꼬리 -->
<path d="
M20 58
Q5 45 12 32
Q24 38 30 58
"
fill="#555C70"/>

<!-- 뒷다리 -->
<rect x="35"
y="65"
width="8"
height="18"
rx="2"
fill="#4B5162"/>

<rect x="50"
y="65"
width="8"
height="18"
rx="2"
fill="#5B6277"/>

<!-- 앞다리 -->
<rect x="70"
y="65"
width="8"
height="18"
rx="2"
fill="#4B5162"/>

<rect x="84"
y="65"
width="8"
height="18"
rx="2"
fill="#5B6277"/>

<!-- 몸통 -->
<path d="
M28 62
Q40 40 70 42
L92 62
L88 70
L30 70
Z"
fill="#666D82"/>

<!-- 목털 -->
<path d="
M68 42
L75 28
L80 42
L85 26
L92 45
"
fill="#8088A0"/>

<!-- 머리 -->
<path d="
M72 24
L88 18
L102 24
L108 35
L98 46
L78 42
L70 32
Z"
fill="#666D82"/>

<!-- 귀 -->
<polygon
points="78,20 73,5 85,16"
fill="#4F5567"/>

<polygon
points="95,22 102,7 104,20"
fill="#4F5567"/>

<!-- 귀 안쪽 -->
<polygon
points="79,18 76,10 82,15"
fill="#FF8566"/>

<polygon
points="96,18 100,11 100,18"
fill="#FF8566"/>

<!-- 주둥이 -->
<path d="
M98 30
L115 34
L99 40
"
fill="#4B5162"/>

<!-- 코 -->
<circle
cx="114"
cy="34"
r="2"
fill="#111"/>

<!-- 송곳니 -->
<polygon
points="99,38 102,44 105,38"
fill="white"/>

<polygon
points="105,38 108,44 111,38"
fill="white"/>

${
state==="staring"
?
`
<!-- 정면 응시 눈 -->
<circle cx="88" cy="30"
r="4"
fill="#FF3030"/>

<circle cx="100" cy="30"
r="4"
fill="#FF3030"/>

<circle cx="88" cy="30"
r="1.5"
fill="black"/>

<circle cx="100" cy="30"
r="1.5"
fill="black"/>

<!-- 눈썹 -->
<line
x1="83"
y1="24"
x2="91"
y2="26"
stroke="black"
stroke-width="2"/>

<line
x1="105"
y1="24"
x2="97"
y2="26"
stroke="black"
stroke-width="2"/>
`
:
`
<!-- 일반 눈 -->
<path
d="M90 28
Q94 31 98 28"
stroke="#FF4040"
stroke-width="2"
fill="none"/>

<!-- 눈썹 -->
<line
x1="88"
y1="24"
x2="95"
y2="26"
stroke="black"
stroke-width="2"/>
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
