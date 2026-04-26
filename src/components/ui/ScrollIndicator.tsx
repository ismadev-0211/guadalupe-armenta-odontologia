export function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2" aria-hidden="true">
      <span className="font-body text-xs text-white/50 uppercase tracking-widest">Scroll</span>
      <div className="scroll-indicator text-[#B8A96A]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}
