export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ei-ink-black)]">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[var(--ei-violet)]"
        aria-label="Loading"
      />
    </div>
  );
}
