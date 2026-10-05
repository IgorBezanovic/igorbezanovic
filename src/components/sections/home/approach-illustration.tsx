const drawings = [
  <g key="conversation">
    <path d="M16 18h64v38H44L28 70V56H16Z" />
    <path d="M92 36h20v38H98L84 86V74H62v-8" />
    <path d="M30 32h36M30 42h24" />
    <circle cx="99" cy="22" r="5" fill="currentColor" stroke="none" />
  </g>,
  <g key="people">
    <circle cx="64" cy="29" r="12" />
    <path d="M42 76V64a22 22 0 0 1 44 0v12Z" />
    <circle cx="25" cy="41" r="8" />
    <circle cx="103" cy="41" r="8" />
    <path d="M12 76V65a13 13 0 0 1 21-10M116 76V65a13 13 0 0 0-21-10M49 88h30" />
  </g>,
  <g key="plan">
    <path d="M18 20h92v68H18Z M18 36h92M48 36v52M78 36v52" />
    <path d="m26 49 4 4 8-8M57 66l4 4 8-8" />
    <rect
      x="86"
      y="44"
      width="15"
      height="9"
      rx="2"
      fill="currentColor"
      stroke="none"
    />
    <path d="M26 68h12M86 72h15" />
    <circle cx="26" cy="28" r="2" fill="currentColor" stroke="none" />
  </g>,
  <g key="architecture">
    <rect x="46" y="14" width="36" height="24" rx="4" />
    <path d="M64 38v17M24 66V55h80v11M64 55v11" />
    <rect x="10" y="66" width="28" height="24" rx="4" />
    <rect x="50" y="66" width="28" height="24" rx="4" />
    <rect x="90" y="66" width="28" height="24" rx="4" />
    <path d="M57 26h14" />
  </g>,
  <g key="build">
    <rect x="14" y="20" width="100" height="64" rx="6" />
    <path d="M14 36h100m-63 15-12 10 12 10m26-20 12 10-12 10M69 48 59 74" />
    <path d="M25 28h1m8 0h1m8 0h1" strokeWidth="4" />
    <circle
      cx="106"
      cy="82"
      r="13"
      fill="var(--mui-palette-background-paper)"
    />
    <path d="m100 82 4 4 8-9" />
  </g>,
  <g key="evolution">
    <path d="M99 34a37 37 0 0 0-65-8L24 40m0-20v20h20M29 70a37 37 0 0 0 65 8l10-14m0 20V64H84" />
    <path d="m46 64 14-14 10 8 15-17m-15 0h15v15" />
  </g>,
];

export function ApproachIllustration({ step }: { step: number }) {
  return (
    <svg
      viewBox="0 0 128 104"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {drawings[step % drawings.length]}
    </svg>
  );
}
