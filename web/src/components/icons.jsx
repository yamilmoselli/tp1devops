export function SwordIcon({ size = 14, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true">
      <g transform="rotate(45 12 12)">
        <polygon points="12,1 15,7 9,7" />
        <rect x="10.6" y="7" width="2.8" height="8" />
        <rect x="7.5" y="15" width="9" height="2" rx="0.5" />
        <rect x="10.6" y="17" width="2.8" height="5" rx="1" />
        <circle cx="12" cy="22.4" r="1.4" />
      </g>
    </svg>
  );
}

export function ShieldIcon({ size = 14, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true">
      <path d="M12 2 L20 5 V11 C20 16.2 16.6 20.1 12 22 C7.4 20.1 4 16.2 4 11 V5 Z" />
    </svg>
  );
}
