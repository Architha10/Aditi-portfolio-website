import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import resume_pdf from "@/assets/Aditi_Pochampally_Resume-2026-N3.pdf"

/* ─── PALETTE — sourced from styles.css :root, kept in lockstep
   across index.tsx / Navbar.tsx / Footer.tsx / Layout.tsx ──────── */
const SURFACE = "var(--color-surface)";
const INK = "var(--color-ink)";
const FOREST = "var(--color-forest)";
const SAGE = "var(--color-sage)";
const CLAY = "var(--color-clay)";
const CREAM = "var(--color-cream)";

/* rgb triples for rgba() composites */
const FOREST_RGB = "var(--color-forest-rgb)";
const BG_RGB = "var(--color-bg-rgb)";

const DISPLAY = "var(--font-display)";
const BODY = "var(--font-body)";
const MONO = "var(--font-mono)";

const LINKS = [
  { to: "practice", label: "Practice", code: "A-2.0" },
  { to: "experience", label: "Experience", code: "A-3.0" },
  { to: "capabilities", label: "Capabilities", code: "A-4.0" },
  { to: "recognition", label: "Recognition", code: "A-5.0" },
  { to: "additionalWorks", label: "Additional Works", code: "A-5.0" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500"
      style={{
        background: scrolled ? `rgba(${BG_RGB},0.86)` : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: `1px solid ${scrolled ? `rgba(${FOREST_RGB},0.2)` : "transparent"}`,
      }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-14">
        <Link to="/" className="group flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full text-[12px] transition-transform duration-300 group-hover:-rotate-6"
            style={{ background: CLAY, color: INK, fontFamily: MONO, letterSpacing: "0.02em" }}
          >
            AP
          </span>
          <span
            className="hidden sm:block"
            style={{ fontFamily: DISPLAY, fontSize: "1.2rem", color: CREAM, letterSpacing: "-0.01em" }}
          >
            Aditi Pochampally
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.to}
              onClick={() => scrollTo(l.to)}
              className="group relative flex flex-col items-start leading-none"
            >
              <span
                className="text-[9px] tabular-nums"
                style={{ fontFamily: MONO, color: CLAY, letterSpacing: "0.05em" }}
              >
                {l.code}
              </span>
              <span
                className="mt-1.5 text-[13px] font-medium tracking-wide transition-colors"
                style={{ color: CREAM, fontFamily: BODY }}
              >
                {l.label}
              </span>
              <span
                className="mt-1 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: FOREST }}
              />
            </button>
          ))}
          <a
            href={resume_pdf}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium transition-all hover:opacity-90 hover:shadow-md"
            style={{ background: CLAY, color: INK, fontFamily: BODY }}
          >
            Resume
            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        <button
          className="rounded-full p-2 transition-colors md:hidden"
          style={{ color: CREAM, background: open ? SAGE : "transparent" }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="absolute top-full left-0 right-0 border-t px-8 py-6 shadow-2xl md:hidden"
          style={{ background: SURFACE, borderColor: `rgba(${FOREST_RGB},0.2)` }}
        >
          <div className="flex flex-col gap-5">
            {LINKS.map((l) => (
              <button
                key={l.to}
                onClick={() => scrollTo(l.to)}
                className="flex items-baseline gap-3 text-left"
              >
                <span className="text-[10px]" style={{ fontFamily: MONO, color: CLAY }}>
                  {l.code}
                </span>
                <span className="text-[15px] font-medium" style={{ fontFamily: BODY, color: CREAM }}>
                  {l.label}
                </span>
              </button>
            ))}
            <a
              href={resume_pdf}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              style={{ background: CLAY, color: INK, fontFamily: BODY }}
            >
              Resume <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}