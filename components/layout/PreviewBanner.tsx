"use client";

export default function PreviewBanner() {
  return (
    <div className="bg-black text-white text-center py-2 text-sm flex justify-center items-center gap-4">
      <span>⚠ Preview Mode Enabled</span>

      <a
        href="/api/exit-preview"
        className="bg-white text-black px-3 py-1 rounded text-xs font-medium"
      >
        Exit Preview
      </a>
    </div>
  );
}