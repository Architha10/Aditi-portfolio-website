import { profile } from "#/assets/data/site";
import { ArrowUpRight, Mail, Phone, Linkedin } from "lucide-react";

/* ─── PALETTE — sourced from styles.css :root ───────────────────── */
const BG = "var(--color-bg)";
const INK = "var(--color-ink)";
const SAGE = "var(--color-sage)";
const CLAY = "var(--color-clay)";
const CREAM = "var(--color-cream)";

/* rgb triples for rgba() composites */
const CLAY_RGB = "var(--color-clay-rgb)";
const CREAM_RGB = "var(--color-cream-rgb)";

const DISPLAY = "var(--font-display)";
const BODY = "var(--font-body)";
const MONO = "var(--font-mono)";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" style={{ background: BG }} className="py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-8" style={{ background: CLAY }} />
          <span
            className="text-[10px] uppercase"
            style={{ fontFamily: MONO, color: CLAY, letterSpacing: "0.35em" }}
          >
            Sheet A-7.0 / Contact
          </span>
        </div>

        <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 400,
                fontSize: "clamp(2.1rem, 3.8vw, 3.4rem)",
                color: CREAM,
                lineHeight: 1.08,
              }}
            >
              Ready to Contribute.{" "}
              <em className="not-italic" style={{ color: SAGE, fontStyle: "italic", fontWeight: 500 }}>
                Ready to Grow...
              </em>
            </h2>
            <p
              className="mt-5 max-w-md text-sm leading-relaxed"
              style={{ fontFamily: BODY, color: `rgba(${CREAM_RGB},0.62)` }}
            >
              Open to Architectural Design and BIM Coordination roles — K-12
              education, public works, residential, and mixed-use.
            </p>
          </div>

          <div className="flex flex-col gap-3.5 lg:col-span-5 lg:items-end">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all hover:opacity-90 hover:shadow-lg sm:w-auto"
              style={{ background: CLAY, color: INK, fontFamily: BODY }}
            >
              <Mail size={15} /> {profile.email}
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/5 sm:w-auto"
              style={{ borderColor: `rgba(${CLAY_RGB},0.4)`, color: CREAM, fontFamily: BODY }}
            >
              <Phone size={15} /> {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75"
              style={{ color: SAGE, fontFamily: BODY }}
            >
              <Linkedin size={15} /> LinkedIn profile
            </a>
          </div>
        </div>

        <div
          className="mt-8 flex flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: `rgba(${CLAY_RGB},0.18)`, color: `rgba(${CREAM_RGB},0.4)` }}
        >
          <span style={{ fontFamily: MONO }}>© {year} Aditi Pochampally — Phoenix, AZ</span>
          <span style={{ fontFamily: MONO }}>B.Arch · M.Arch, Building Sciences &amp; Technology — ASU</span>
        </div>
      </div>
    </footer>
  );
}