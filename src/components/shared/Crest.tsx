// School crest — jewel is Vibrant Blue
export function Crest({ size = 42 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 54" fill="none" aria-hidden="true">
      <path
        d="M24 2L3 10v18c0 13 9.5 22.5 21 25 11.5-2.5 21-12 21-25V10L24 2z"
        fill="rgba(255,255,255,0.12)"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="1.5"
      />
      <rect x="22.25" y="14" width="3.5" height="22" rx="1.25" fill="white" fillOpacity="0.92" />
      <rect x="13" y="22.25" width="22" height="3.5" rx="1.25" fill="white" fillOpacity="0.92" />
      {/* Vibrant Blue jewel */}
      <circle cx="24" cy="24" r="3.5" fill="#1A6FDD" />
      <circle cx="24" cy="24" r="1.75" fill="rgba(255,255,255,0.55)" />
    </svg>
  );
}
