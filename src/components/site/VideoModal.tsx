import {  X } from "lucide-react";
import { useEffect } from "react";

const BG = "var(--color-bg)";
const SURFACE = "var(--color-surface)";
const CREAM = "var(--color-cream)";
const SAGE_RGB = "var(--color-sage-rgb)";
const DISPLAY = "var(--font-display)";

export function VideoModal({
  url,
  title,
  onClose,
}: {
  url: string;
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(10,12,7,0.86)" }}
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl"
        style={{ background: SURFACE, border: `1px solid rgba(${SAGE_RGB},0.25)` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between gap-4 border-b px-6 py-4"
          style={{ borderColor: `rgba(${SAGE_RGB},0.18)` }}
        >
          <h3 style={{ fontFamily: DISPLAY, fontSize: "1.1rem", color: CREAM }}>
            {title} — Walkthrough
          </h3>
          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full"
            style={{ background: BG, color: CREAM }}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
        <video
          src={url}
          controls
          autoPlay
          className="w-full"
          style={{ background: "#000", maxHeight: "75vh" }}
        />
      </div>
    </div>
  );
}