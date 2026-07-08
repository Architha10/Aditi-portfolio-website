import { Download, X } from "lucide-react";
import { useEffect } from "react";

const BG = "var(--color-bg)";
const SURFACE = "var(--color-surface)";
const INK = "var(--color-ink)";

const CLAY = "var(--color-clay)";
const CREAM = "var(--color-cream)";


const SAGE_RGB = "var(--color-sage-rgb)";


const DISPLAY = "var(--font-display)";
const MONO = "var(--font-mono)";

export function PdfModal({
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
        className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl"
        style={{ background: SURFACE, border: `1px solid rgba(${SAGE_RGB},0.25)` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between gap-4 border-b px-6 py-4"
          style={{ borderColor: `rgba(${SAGE_RGB},0.18)` }}
        >
          <h3 style={{ fontFamily: DISPLAY, fontSize: "1.1rem", color: CREAM }}>
            {title}
          </h3>
          <div className="flex items-center gap-3">

            <a href={url}
              download
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] uppercase tracking-widest"
              style={{ background: CLAY, color: INK, fontFamily: MONO }}
            >
              <Download size={13} /> Download
            </a>
            <button
              onClick={onClose}
              className="grid h-9 w-9 place-items-center rounded-full"
              style={{ background: BG, color: CREAM }}
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        <div className="flex-1" style={{ background: "rgba(0,0,0,0.25)" }}>
          <iframe src={url} title={title} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}