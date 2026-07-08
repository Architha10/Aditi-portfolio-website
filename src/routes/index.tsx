import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {  useState } from "react";
import aditi from "@/assets/aditi_photo.jpeg";
import portfolio_pdf from "@/assets/Aditi Pochampally_Portfolio-2026-N.pdf"
import {
  ArrowUpRight,
  Award,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  MapPin,
  Play,
  Sparkles,
} from "lucide-react";
import { ADDITIONAL_WORKS, ADDITIONAL_WORKS_INTRO, CAPABILITIES, eduTimeline, expertise, FIRMS, HONORS, MARQUEE_ITEMS, THESIS } from "#/assets/data/site";
import { SkillsShowcase } from "#/components/site/SkillShowCase";
import { VideoModal } from "#/components/site/VideoModal";
import { PdfModal } from "#/components/site/PDFModal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aditi Pochampally — Architectural Designer & BIM Technician" },
      {
        name: "description",
        content:
          "Architectural Designer and BIM Coordinator with a B.Arch and M.Arch, working across design development, construction documentation, and multi-discipline BIM coordination.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const BG = "var(--color-bg)";
const SURFACE = "var(--color-surface)";
const SURFACE2 = "var(--color-surface-2)";
const INK = "var(--color-ink)";
const FOREST = "var(--color-forest)";
const RUST = "var(--color-rust)";
const SAGE = "var(--color-sage)";
const CLAY = "var(--color-clay)";
const CREAM = "var(--color-cream)";
const MUTE = "var(--color-mute)";

const INK_RGB = "var(--color-ink-rgb)";
const FOREST_RGB = "var(--color-forest-rgb)";
const SAGE_RGB = "var(--color-sage-rgb)";
const CLAY_RGB = "var(--color-clay-rgb)";
const CREAM_RGB = "var(--color-cream-rgb)";

const DISPLAY = "var(--font-display)";
const BODY = "var(--font-body)";
const MONO = "var(--font-mono)";

/* Sheet-number kicker — reads as a real CD sheet index (A-1.0, A-2.0…) */
function Kicker({ n, label, deep = false }: { n: string; label: string; deep?: boolean }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span
        className="rounded-[3px] border px-1.5 py-0.5 text-[10px] tabular-nums"
        style={{
          fontFamily: MONO,
          color: deep ? CLAY : FOREST,
          borderColor: deep ? `rgba(${CLAY_RGB},0.35)` : `rgba(${FOREST_RGB},0.35)`,
          letterSpacing: "0.04em",
        }}
      >
        {n}
      </span>
      <span
        className="text-[11px] uppercase"
        style={{ fontFamily: MONO, color: MUTE, letterSpacing: "0.28em" }}
      >
        {label}
      </span>
    </div>
  );
}





/* ─── HERO ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,var(--color-bg) 0%,#f1e6d3 55%,#ffffff 100%)",
      }}
    >
      {/* faint drafting grid */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]" aria-hidden="true">
        <defs>
          <pattern id="draft-grid" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M 34 0 L 0 0 0 34" fill="none" stroke={SAGE} strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#draft-grid)" />
      </svg>

      {/* left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: FOREST }} />
      {/* top hairline */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(to right, ${FOREST}, ${CLAY}, transparent)` }}
      />

      <div className="relative mx-auto max-w-7xl px-8 pt-20 pb-4 md:px-14 md:pt-24">
        <Kicker n="A-1.0" label="Introduction" />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <h1
              className="leading-[0.98]"
              style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(2.2rem, 4.4vw, 3.9rem)", color: CREAM }}
            >
              Bridging imagination and {" "}
              <em className="not-italic" style={{ color: FOREST, fontStyle: "italic", fontWeight: 500 }}>
                implementation
              </em>
            </h1>

            <p className="mt-8 max-w-md text-sm leading-relaxed" style={{ fontFamily: BODY, color: MUTE }}>
              Every architectural idea carries a responsibility, to remain true to its intent as it moves from concept to construction. I enjoy working within that journey, translating design vision into coordinated documentation through collaboration, precision, and thoughtful execution, where creativity meets coordination, technical precision supports design ambition, and every drawing becomes part of a larger architectural story.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Revit BIM", "IBC Compliant", "M.Arch, ASU '26"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-[0.14em]"
                  style={{ borderColor: CLAY, color: FOREST, background: `rgba(${SAGE_RGB},0.16)`, fontFamily: MONO }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={portfolio_pdf}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm transition-all hover:opacity-90"
                style={{ background: CLAY, color: INK, fontFamily: BODY, fontWeight: 500 }}
              >
                View Portfolio
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-xs" style={{ fontFamily: MONO, color: MUTE }}>
                ↓ Scroll to explore
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="relative"
              style={{
                width: "100%",
                maxWidth: "520px",
              }}
            >
              <div
                className="relative p-5 rounded-[36px]"
                style={{
                  background: "var(--color-paper)",
                  border: `1px solid rgba(${FOREST_RGB},.12)`,
                  boxShadow:
                    "0 28px 70px rgba(0,0,0,.55), inset 0 0 0 1px rgba(255,255,255,.4)",
                }}
              >
                <div
                  className="overflow-hidden rounded-[30px]"
                  style={{
                    aspectRatio: "3 / 4",
                    background: "var(--color-paper-shade)",
                  }}
                >
                  <img
                    src={aditi}
                    alt="Aditi Pochampally"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <div
                  className="absolute inset-5 rounded-[30px] pointer-events-none"
                  style={{
                    border: "1px solid rgba(255,255,255,.25)",
                  }}
                />
              </div>
              <div
                className="absolute -bottom-5.5 -left-5.5 rounded-3xl px-6 py-5"
                style={{
                  width: "245px",
                  background: "var(--color-paper)",
                  border: `1px solid rgba(${FOREST_RGB},.12)`,
                  boxShadow: "0 18px 40px rgba(0,0,0,.4)",
                }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    color: RUST,
                    fontSize: "11px",
                    letterSpacing: ".25em",
                  }}
                >
                  M.ARCH
                </div>

                <div
                  className="mt-2"
                  style={{
                    fontFamily: DISPLAY,
                    color: INK,
                    fontSize: "1.0rem",
                    lineHeight: 1.15,
                  }}
                >
                  Arizona State
                  University
                </div>
              </div>
              <div
                className="absolute -top-8 -right-8 -z-10 h-28 w-28 rounded-full"
                style={{
                  background: `rgba(${FOREST_RGB},.22)`,
                  filter: "blur(14px)",
                }}
              />
              <div
                className="absolute -bottom-10 right-8 -z-10 h-20 w-20 rounded-3xl"
                style={{
                  background: `rgba(${SAGE_RGB},.20)`,
                }}
              />
            </div>
          </div>
        </div>

        {/* coordinates line */}
        <div className="mt-16 flex flex-wrap items-center gap-3 border-t pt-6" style={{ borderColor: `rgba(${FOREST_RGB},0.2)` }}>
          <MapPin size={12} style={{ color: FOREST }} />
          <span className="text-xs" style={{ fontFamily: MONO, color: MUTE, letterSpacing: "0.03em" }}>
            33.4484° N, 112.0740° W — Phoenix · Hyderabad · Tempe
          </span>
        </div>
      </div>

      {/* marquee ticker — solid rust band, the one loud move on the page */}
      <div
        className="relative mt-10 border-y py-4"
        style={{
          borderColor: `rgba(${INK_RGB},0.4)`,
          background: RUST,
          maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="flex animate-[marquee_28s_linear_infinite] whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="mx-5 flex items-center gap-5 text-sm" style={{ fontFamily: BODY, color: "var(--color-on-accent)" }}>
              {item}
              <span style={{ color: CLAY }}>·</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_28s_linear_infinite\\] { animation: none; }
        }`}</style>
    </section>
  );
}

/* ─── PRACTICE / PHILOSOPHY ────────────────────────────────────── */
const TAGS = ["BIM Coordination", "Construction Documentation", "Code Compliance", "Design Development", "Consultant Coordination"];

function Practice() {
  return (
    <section id="practice" style={{ background: SURFACE }} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <Kicker n="A-2.0" label="Practice" />

        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <h2
              className="leading-[1.02]"
              style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(2rem,4vw,3.4rem)", color: CREAM }}
            >
              A foundation built on
              <br />
              curiosity and{" "}
              <em className="not-italic" style={{ color: FOREST, fontStyle: "italic", fontWeight: 500 }}>
                collaboration
              </em>
              .
            </h2>

            <div className="mt-10 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-4 py-1.5 text-[11px]"
                  style={{ borderColor: `rgba(${FOREST_RGB},0.35)`, background: SURFACE2, color: FOREST, fontFamily: MONO, letterSpacing: "0.03em" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div
              className="absolute -top-3 -right-3 h-16 w-16 -z-10 rounded-2xl"
              style={{ background: CLAY, opacity: 0.2 }}
              aria-hidden="true"
            />
            <div
              className="rounded-2xl p-8"
              style={{ background: SURFACE2 }}
            >
              <span style={{ fontFamily: DISPLAY, fontSize: "3rem", lineHeight: 1, color: FOREST, opacity: 0.5 }}>
                "
              </span>
              <blockquote
                className="-mt-4 text-xl italic leading-relaxed md:text-2xl"
                style={{ fontFamily: DISPLAY, color: CLAY }}
              >
                I don't aspire to know everything. I aspire to ask better questions, learn continuously, and contribute meaningfully to every project I become a part of
              </blockquote>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <p className="text-[0.95rem] leading-relaxed" style={{ fontFamily: BODY, color: MUTE }}>
                I'm equally fluent in translating a bold design concept into
                a buildable, code-compliant solution, and in managing the
                technical precision that keeps a complex project on track.
              </p>
              <p className="text-[0.95rem] leading-relaxed" style={{ fontFamily: BODY, color: MUTE }}>
                Across K-12 education, public works, residential, and
                mixed-use projects in Hyderabad and Phoenix, architecture's
                real test happens in the drawing set every discipline builds
                from.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ───────────────────────────────────────────────── */

function Experience() {
  const [active, setActive] = useState(FIRMS[0].key);
  const firm = FIRMS.find((f) => f.key === active)!;

  return (
    <section id="experience" style={{ background: BG }} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <Kicker n="A-3.0" label="Experience" />
        <h2
          className="max-w-3xl leading-[1.02]"
          style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(2rem,4.2vw,3.6rem)", color: CREAM }}
        >
          From Curiosity to{" "}
          <em className="not-italic" style={{ color: FOREST, fontStyle: "italic", fontWeight: 500 }}>
            Contribution.
          </em>
        </h2>

        {/* firm tabs */}
        <div className="mt-12 flex flex-wrap gap-x-8" role="tablist" aria-label="Firms">
          {FIRMS.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(f.key)}
                className="relative text-left pb-6 border-b-2 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{
                  opacity: isActive ? 1 : 0.45,
                  borderColor: isActive ? FOREST : "transparent",
                  outlineColor: FOREST,
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.opacity = "0.7"; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.opacity = "0.45"; }}
              >
                <div style={{ fontFamily: DISPLAY, fontSize: "1.05rem", color: CREAM }}>{f.name}</div>
                <div className="mt-1 text-[11px]" style={{ fontFamily: MONO, color: FOREST }}>
                  {f.year} — {f.place}
                </div>
              </button>
            );
          })}
        </div>
        <div className="border-b -mt-0.5" style={{ borderColor: `rgba(${FOREST_RGB},0.25)` }} />

        {/* active detail card */}
        <div
          key={firm.key}
          className="mt-12 rounded-3xl p-8 md:p-10 animate-[fadeIn_0.4s_ease]"
          style={{ background: SURFACE, border: `1px solid rgba(${FOREST_RGB},0.2)`, boxShadow: "0 12px 40px rgba(0,0,0,0.35)" }}
        >
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs italic uppercase tracking-widest" style={{ fontFamily: BODY, color: FOREST }}>
                {firm.highlight}
              </p>
              <p style={{ fontFamily: DISPLAY, fontSize: "1.4rem", color: CREAM }}>{firm.role}</p>
              <p className="mt-1 text-sm" style={{ fontFamily: BODY, color: MUTE }}>
                {firm.name} · {firm.place}
              </p>
              <p className="mt-1 text-xs" style={{ fontFamily: MONO, color: MUTE }}>
                {firm.dates}
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[0.98rem] leading-relaxed" style={{ fontFamily: BODY, color: MUTE }}>
                {firm.detail}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {firm.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3.5 py-1 text-[10px] uppercase"
                    style={{ background: SURFACE2, color: FOREST, fontFamily: MONO, letterSpacing: "0.05em" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* stat register */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t pt-8 sm:grid-cols-4" style={{ borderColor: `rgba(${FOREST_RGB},0.25)` }}>
          {[
            { v: "4", l: "Professional Studios" },
            { v: "$30M", l: "Public works contributions" },
            { v: "28 ac", l: "Infrastructure Master Planned" },
            { v: "5+", l: "Concurrent project deliverables" },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontFamily: DISPLAY, fontSize: "2.2rem", color: CREAM, lineHeight: 1 }}>{s.v}</div>
              <div className="mt-2 text-[10px] uppercase" style={{ fontFamily: MONO, color: MUTE, letterSpacing: "0.1em" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CAPABILITIES / WORKFLOW ──────────────────────────────────── */

function Capabilities() {
  return (
    <section id="capabilities" style={{ background: SURFACE2 }} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Kicker n="A-4.0" label="BIM & Documentation" deep />
            <h2
              className="max-w-2xl leading-[1.02]"
              style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(2rem,4.2vw,3.4rem)", color: CREAM }}
            >
              Tools of {"  "}
              <em className="not-italic" style={{ color: FOREST, fontStyle: "italic", fontWeight: 500 }}>
                Translation ...
              </em>
            </h2>
          </div>
        </div>
        <SkillsShowcase />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl p-7 transition-all hover:-translate-y-1"
              style={{ background: `rgba(${CREAM_RGB},0.04)`, border: `1px solid rgba(${CLAY_RGB},0.16)` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${SAGE_RGB},0.55)`;
                (e.currentTarget as HTMLDivElement).style.background = `rgba(${CREAM_RGB},0.07)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${CLAY_RGB},0.16)`;
                (e.currentTarget as HTMLDivElement).style.background = `rgba(${CREAM_RGB},0.04)`;
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="grid h-11 w-11 place-items-center rounded-xl"
                  style={{ background: `rgba(${SAGE_RGB},0.16)` }}
                >
                  <c.icon size={18} style={{ color: SAGE }} />
                </div>
                <span style={{ fontFamily: MONO, color: CLAY, fontSize: "0.75rem" }}>{c.tag}</span>
              </div>
              <h3 className="mt-5" style={{ fontFamily: DISPLAY, fontSize: "1.1rem", color: CREAM }}>
                {c.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed" style={{ fontFamily: BODY, color: `rgba(${CREAM_RGB},0.62)` }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HonorCard({
  item,
  dense,
  isFirst,
  isLast,
}: {
  item: (typeof HONORS)[number];
  dense: boolean;
  isFirst: boolean;
  isLast: boolean;
}) {
  const [showPdf, setShowPdf] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div
        className={`relative flex flex-col ${dense ? "gap-5 p-6" : "gap-7 p-8"}`}
        style={{
          background: BG,
          borderRadius: isFirst
            ? "24px 0 0 24px"
            : isLast
              ? "0 24px 24px 0"
              : 0,
        }}
      >
        {/* top hairline accent */}
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent, rgba(${SAGE_RGB},0.55), transparent)`,
          }}
        />

        {/* glyph + tag */}
        <div className="flex items-center justify-between">
          <div
            className="grid h-10 w-10 place-items-center rounded-xl"
            style={{
              background: `rgba(${SAGE_RGB},0.16)`,
              border: `1px solid rgba(${SAGE_RGB},0.25)`,
            }}
          >
            <item.icon size={16} style={{ color: SAGE }} />
          </div>
          <span
            className="rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.2em] whitespace-nowrap"
            style={{
              fontFamily: MONO,
              background: `rgba(${CLAY_RGB},0.12)`,
              color: CLAY,
              border: `1px solid rgba(${CLAY_RGB},0.25)`,
            }}
          >
            {item.tag}
          </span>
        </div>

        {/* copy */}
        <div className="flex-1">
          <h3
            style={{
              fontFamily: DISPLAY,
              fontSize: dense ? "1.05rem" : "1.3rem",
              color: CREAM,
              lineHeight: 1.25,
              marginBottom: 8,
            }}
          >
            {item.title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: BODY, color: `rgba(${CREAM_RGB},0.58)` }}
          >
            {item.desc}
          </p>
        </div>

        {/* pdf / video actions — only render if present */}
        {(item.pdf || item.video) && (
          <div className="flex flex-wrap gap-2.5 border-t pt-4" style={{ borderColor: `rgba(${SAGE_RGB},0.14)` }}>
            {item.pdf && (
              <button
                onClick={() => setShowPdf(true)}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-widest transition-colors"
                style={{ background: SURFACE2, color: CLAY, fontFamily: MONO, border: `1px solid rgba(${CLAY_RGB},0.3)` }}
              >
                <ExternalLink size={12} /> PDF
              </button>
            )}
            {item.video && (
              <button
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-widest transition-colors"
                style={{ background: `rgba(${SAGE_RGB},0.16)`, color: SAGE, fontFamily: MONO, border: `1px solid rgba(${SAGE_RGB},0.35)` }}
              >
                <Play size={12} /> Walkthrough
              </button>
            )}
          </div>
        )}

        {/* bottom accent tick */}
        <div className="flex items-center gap-2">
          <div
            className="h-1 w-1 shrink-0 rounded-full"
            style={{ background: `rgba(${SAGE_RGB},0.55)` }}
          />
          <div
            className="h-px flex-1"
            style={{ background: `linear-gradient(to right, rgba(${SAGE_RGB},0.4), transparent)` }}
          />
        </div>
      </div>

      {showPdf && item.pdf && (
        <PdfModal url={item.pdf} title={item.title} onClose={() => setShowPdf(false)} />
      )}
      {showVideo && item.video && (
        <VideoModal url={item.video} title={item.title} onClose={() => setShowVideo(false)} />
      )}
    </>
  );
}

function HonorStrip({
  items,
  dense = false,
}: {
  items: typeof HONORS;
  dense?: boolean;
}) {
  return (
    <div
      className="grid overflow-hidden md:grid-cols-3"
      style={{
        gap: 1,
        background: `rgba(${SAGE_RGB},0.2)`,
        borderRadius: 24,
      }}
    >
      {items.map((item, i) => (
        <HonorCard
          key={item.title}
          item={item}
          dense={dense}
          isFirst={i === 0}
          isLast={i === items.length - 1}
        />
      ))}
    </div>
  );
}

function ThesisCard({ item }: { item: (typeof THESIS)[number] }) {
  const [open, setOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div
        className="group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1"
        style={{
          background: SURFACE,
          border: `1px solid rgba(${SAGE_RGB},0.2)`,
          boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${SAGE_RGB},0.5)`;
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.32)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${SAGE_RGB},0.2)`;
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)";
        }}
      >
       {/* cover strip */}
        <div
          className="relative h-40 overflow-hidden sm:h-48"
          style={{
            background: item.coverImage
              ? undefined
              : `linear-gradient(135deg, rgba(${FOREST_RGB},0.35), rgba(${CLAY_RGB},0.25))`,
          }}
        >
          {item.coverImage ? (
            <img
              src={item.coverImage}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <item.icon size={40} style={{ color: `rgba(${CREAM_RGB},0.35)` }} />
            </div>
          )}

          <div
            className="absolute inset-0"
            aria-hidden="true"
          />
          <span
            className="absolute left-5 top-5 rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.18em]"
            style={{
              fontFamily: MONO,
              background: "rgba(10,12,7,0.55)",
              color: SURFACE,
              backdropFilter: "blur(6px)",
              border: `1px solid rgba(${CREAM_RGB},0.18)`,
            }}
          >
            {item.tag} · {item.year}
          </span>
        </div>

        {/* body */}
        <div className="flex flex-1 flex-col p-7">
          <h3 style={{ fontFamily: DISPLAY, fontSize: "1.35rem", color: CREAM, lineHeight: 1.2 }}>
            {item.title}
          </h3>
          <p className="mt-1.5 text-xs" style={{ fontFamily: MONO, color: FOREST, letterSpacing: "0.02em" }}>
            {item.subtitle}
          </p>

          <p
            className="mt-4 text-sm leading-relaxed"
            style={{ fontFamily: BODY, color: `rgba(${CREAM_RGB},0.62)` }}
          >
            {item.desc}
          </p>

          {open && (
            <p
              className="mt-4 border-t pt-4 text-sm leading-relaxed"
              style={{ fontFamily: BODY, color: MUTE, borderColor: `rgba(${SAGE_RGB},0.18)` }}
            >
              {item.details}
            </p>
          )}

          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-4 inline-flex w-fit items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] opacity-70 transition-opacity hover:opacity-100"
            style={{ fontFamily: MONO, color: MUTE }}
          >
            {open ? "Hide details" : "See more details"}
            <ChevronDown
              size={13}
              style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
            />
          </button>

          {/* actions — pinned to bottom of card */}
          <div className="mt-6 flex flex-wrap gap-3 border-t pt-6" style={{ borderColor: `rgba(${SAGE_RGB},0.14)` }}>
            {item.pdf && (
              <button
                onClick={() => setShowPdf(true)}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] uppercase tracking-widest transition-colors"
                style={{ background: SURFACE2, color: CLAY, fontFamily: MONO, border: `1px solid rgba(${CLAY_RGB},0.3)` }}
              >
                <ExternalLink size={13} /> Thesis PDF
              </button>
            )}

            {item.video && (
              <button
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] uppercase tracking-widest transition-colors"
                style={{ background: `rgba(${SAGE_RGB},0.16)`, color: SAGE, fontFamily: MONO, border: `1px solid rgba(${SAGE_RGB},0.35)` }}
              >
                <Play size={13} /> Walkthrough
              </button>
            )}
          </div>
        </div>
      </div>

      {showPdf && item.pdf && (
        <PdfModal url={item.pdf} title={item.title} onClose={() => setShowPdf(false)} />
      )}

      {showVideo && item.video && (
        <VideoModal url={item.video} title={item.title} onClose={() => setShowVideo(false)} />
      )}
    </>
  );
}

/* ─── RECOGNITION & SKILLS ─────────────────────────────────────── */

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span
        className="text-[10px] tabular-nums"
        style={{ fontFamily: MONO, color: FOREST, letterSpacing: "0.04em" }}
      >
        {n}
      </span>
      <span
        className="text-[10px] uppercase"
        style={{ fontFamily: MONO, color: FOREST, letterSpacing: "0.22em" }}
      >
        {label}
      </span>
      <div className="h-px flex-1" style={{ background: `rgba(${FOREST_RGB},0.18)` }} />
    </div>
  );
}

function Recognition() {

  return (
    <section id="recognition" className="py-24 md:py-32" style={{ background: BG }}>
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <Kicker n="A-5.0" label="Recognition & Education" />

        <div className="mb-8 grid items-end gap-10 lg:grid-cols-2">
          <h2
            style={{
              fontFamily: DISPLAY,
              fontWeight: 400,
              fontSize: "clamp(2.2rem,4vw,3.5rem)",
              color: CREAM,
              lineHeight: 1.05,
            }}
          >
            Recognized through
            <br />
            <em style={{ color: FOREST, fontStyle: "italic" }}>academic excellence</em>
            <br />
            and professional growth.
          </h2>

          <p
            className="text-sm leading-relaxed lg:max-w-md lg:justify-self-end"
            style={{ fontFamily: BODY, color: MUTE }}
          >
            Every competition, workshop, lecture, and academic milestone has expanded the
            way I think about architecture. More than achievements, they represent
            opportunities to question, explore, and refine my understanding of design.
          </p>
        </div>

        {/* thesis */}
        <SectionLabel n="5.1" label="Thesis" />
        <div className="grid gap-5 sm:grid-cols-2">
          {THESIS.map((t) => (
            <ThesisCard key={t.title} item={t} />
          ))}
        </div>

        {/* competitions */}
        <div className="mt-16">
          <SectionLabel n="5.2" label="Competitions" />
          <HonorStrip items={HONORS} />
        </div>

        {/* education + toolkit + expertise — unified asymmetric panel */}
        <div className="mt-16">
          <SectionLabel n="5.3" label="Education & Expertise" />

          <div className="grid gap-6 lg:grid-cols-12">
            {/* education timeline — wider anchor column */}
            <div
              className="relative overflow-hidden rounded-3xl p-8 lg:col-span-7"
              style={{ background: SURFACE, border: `1px solid rgba(${FOREST_RGB},0.18)` }}
            >
              <div
                className="absolute -top-6 -right-6 h-24 w-24 rounded-full"
                style={{ background: `rgba(${SAGE_RGB},0.14)`, filter: "blur(18px)" }}
                aria-hidden="true"
              />
              <div className="mb-7 flex items-center gap-2">
                <GraduationCap size={15} style={{ color: FOREST }} />
                <span
                  className="text-[10px] uppercase"
                  style={{ fontFamily: MONO, color: FOREST, letterSpacing: "0.2em" }}
                >
                  Education
                </span>
              </div>

              <div className="relative grid gap-9 sm:grid-cols-2 sm:gap-8 pl-6 sm:pl-0">
                {/* connecting spine (mobile only, single column) */}
                <div
                  className="absolute left-0.75 top-2 bottom-2 w-px sm:hidden"
                  style={{ background: `rgba(${FOREST_RGB},0.22)` }}
                  aria-hidden="true"
                />
                {eduTimeline.map((e) => (
                  <div key={e.degree} className="relative sm:border-l sm:pl-6" style={{ borderColor: `rgba(${FOREST_RGB},0.22)` }}>
                    <div
                      className="absolute -left-6.5 top-1.5 h-2 w-2 rounded-full sm:-left-1.25"
                      style={{ background: FOREST, boxShadow: `0 0 0 3px ${SURFACE}` }}
                      aria-hidden="true"
                    />
                    <h4 style={{ fontFamily: DISPLAY, fontSize: "1.15rem", color: CREAM, lineHeight: 1.2 }}>
                      {e.degree}
                    </h4>
                    <p className="mt-2 text-sm leading-6" style={{ fontFamily: BODY, color: MUTE }}>
                      {e.focus}
                      <br />
                      {e.school} · {e.place}
                    </p>
                    <p className="mt-1.5 text-xs" style={{ fontFamily: MONO, color: CLAY }}>
                      {e.dates}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* expertise */}
            <div
              className="rounded-3xl p-8 lg:col-span-5"
              style={{ background: SURFACE, border: `1px solid rgba(${FOREST_RGB},0.18)` }}
            >
              <div className="mb-6 flex items-center gap-2">
                <Award size={15} style={{ color: FOREST }} />
                <span
                  className="text-[10px] uppercase"
                  style={{ fontFamily: MONO, color: FOREST, letterSpacing: "0.2em" }}
                >
                  Expertise
                </span>
              </div>
              <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
                {expertise.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-2.5 text-sm leading-tight"
                    style={{ fontFamily: BODY, color: MUTE }}
                  >
                    <Sparkles size={12} className="mt-0.5 shrink-0" style={{ color: `rgba(${SAGE_RGB},0.7)` }} />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------Additional Works ---------------------------------------- */
function AdditionalWorkCard({ work }: { work: (typeof ADDITIONAL_WORKS)[number] }) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: SURFACE,
        border: `1px solid rgba(${SAGE_RGB},0.2)`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${SAGE_RGB},0.5)`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.32)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${SAGE_RGB},0.2)`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)";
      }}
    >
      <div className="relative h-48 overflow-hidden sm:h-56">
        <img
          src={work.image}
          alt={work.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 style={{ fontFamily: DISPLAY, fontSize: "1.05rem", color: CREAM, lineHeight: 1.25 }}>
          {work.title}
        </h3>
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ fontFamily: BODY, color: `rgba(${CREAM_RGB},0.62)` }}
        >
          {work.caption}
        </p>
      </div>
    </div>
  );
}

function AdditionalWorks() {
  return (
    <section id="additional-works" style={{ background: SURFACE2 }} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <Kicker n="A-6.0" label="Additional Works" deep />

        <div className="mb-8 grid items-end gap-10 lg:grid-cols-2">
          <h2
            className="max-w-2xl leading-[1.02]"
            style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(2rem,4.2vw,3.4rem)", color: CREAM }}
          >
            Beyond the{" "}
            <em className="not-italic" style={{ color: FOREST, fontStyle: "italic", fontWeight: 500 }}>
              core
            </em>{" "}
            projects.
          </h2>

          <p
            className="text-sm leading-relaxed lg:max-w-md lg:justify-self-end"
            style={{ fontFamily: BODY, color: MUTE }}
          >
           {ADDITIONAL_WORKS_INTRO}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ADDITIONAL_WORKS.map((work) => (
            <AdditionalWorkCard key={work.title} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
/* ─── PAGE ─────────────────────────────────────────────────────── */
function Index() {
  return (
    <Layout>
      <Hero />
      <Practice />
      <Experience />
      <Capabilities />
      <Recognition />
      <AdditionalWorks/>
    </Layout>
  );
}