export default function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-[#1E1E1C]" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <rect x="5" y="0.5" width="6.5" height="6.5" transform="rotate(45 5 5)" fill="#C6A86B" />
      </svg>
      <div className="flex-1 h-px bg-[#1E1E1C]" />
    </div>
  );
}
