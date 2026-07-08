import skillImg1 from "@/assets/projects/skill_img_1.png";
import skillImg2 from "@/assets/projects/skill_img_2.png";
import skillImg3 from "@/assets/projects/skill_img_3.png";
import { SKILL_CATEGORIES, SKILL_LEVELS, type SkillLevel } from "#/assets/data/site";
import type { JSX } from "react/jsx-runtime";
 
const CATEGORY_IMAGES = [skillImg1, skillImg2, skillImg3];

const FOREST = "var(--color-forest)";
const CLAY = "var(--color-clay)";
const CREAM = "var(--color-cream)";
const MUTE = "var(--color-mute)";

const FOREST_RGB = "var(--color-forest-rgb)";
const CLAY_RGB = "var(--color-clay-rgb)";

const DISPLAY = "var(--font-display)";
const BODY = "var(--font-body)";
const MONO = "var(--font-mono)";


const SOFTWARE_GLYPHS: Record<string, () => JSX.Element> = {
  photoshop: () => (
    <g>
      <rect x="14" y="14" width="36" height="36" rx="7" fill="#001E36" />
      <text x="32" y="39" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="17" fontWeight="700" fill="#31A8FF">
        Ps
      </text>
    </g>
  ),
  lumion: () => (
    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="17" strokeDasharray="3 4" />
      <path d="M32 22c4 3 6 7 6 10s-2 7-6 10c-4-3-6-7-6-10s2-7 6-10z" />
      <path d="M32 22v20M22 32h20" strokeDasharray="2 3" />
    </g>
  ),
  autocad: () => (
    <g fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 40 L32 18 L40 40" />
      <path d="M27 32h10" />
    </g>
  ),
  indesign: () => (
    <g>
      <rect x="14" y="14" width="36" height="36" rx="7" fill="#49021F" />
      <text x="32" y="39" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="17" fontWeight="700" fill="#FF3366">
        Id
      </text>
    </g>
  ),
  illustrator: () => (
    <g>
      <rect x="14" y="14" width="36" height="36" rx="7" fill="#330000" />
      <text x="32" y="39" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="17" fontWeight="700" fill="#FF9A00">
        Ai
      </text>
    </g>
  ),
  sketchup: () => (
    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 38 L20 26 L32 20 L44 26 L44 38 L32 44 Z" />
      <path d="M20 26 L32 32 L44 26" />
      <path d="M32 32 L32 44" />
    </g>
  ),
  enscape: () => (
    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 34c0-7 4-13 10-13s10 6 10 13" />
      <path d="M18 34h28" />
      <path d="M24 34v6M40 34v6M32 21v-4" />
    </g>
  ),
  powerpoint: () => (
    <g>
      <rect x="14" y="14" width="36" height="36" rx="7" fill="#B7472A" />
      <text x="32" y="39" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fontWeight="700" fill="#FBD7CB">
        P
      </text>
    </g>
  ),
  rhino: () => (
    <g fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 40c0-8 3-14 8-17 2 3 1 6-1 8 4-1 8 0 10 3 2-3 6-3 8-1-2 4-6 6-10 6-4 8-9 3-15 1z" />
    </g>
  ),
  revit: () => (
    <g>
      <rect x="14" y="14" width="36" height="36" rx="7" fill="#0E1E33" />
      <text x="32" y="39" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="18" fontWeight="700" fill="#7DC6FF">
        R
      </text>
    </g>
  ),
  navisworks: () => (
  <g>
    <circle cx="32" cy="32" r="18" fill="#0B0B0B" />
    <text x="32" y="38" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="15" fontWeight="700" fill="#FFFFFF">
      N
    </text>
  </g>
),
grasshopper: () => (
  <g fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="31" cy="31" rx="6.5" ry="10.5" transform="rotate(24 31 31)" />
    <path d="M36 24 L46 15" />
    <path d="M39 31 L49 29" />
    <path d="M35 39 L41 47" />
    <path d="M25 23 L19 15" />
    <path d="M23 39 L15 46" />
  </g>
),
};
 
/* ─── Legend (top right — Expert / Proficient / Familiar) ───────── */
function SkillLegend() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {(Object.entries(SKILL_LEVELS) as [SkillLevel, { label: string; value: number }][]).map(
        ([key, { label, value }]) => (
          <div key={key} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: FOREST, opacity: value / 100 }}
            />
            <span
              className="text-[10px] uppercase tracking-[0.14em]"
              style={{ fontFamily: MONO, color: MUTE }}
            >
              {label}
            </span>
          </div>
        )
      )}
    </div>
  );
}
 
/* ─── Single tool: icon · name · progress bar · level label ─────── */
function SkillTool({ tool }: { tool: { key: string; name: string; level: SkillLevel } }) {
  const glyph = SOFTWARE_GLYPHS[tool.key];
  const { label, value } = SKILL_LEVELS[tool.level];
 
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" style={{ color: CLAY }}>
          {glyph?.()}
        </svg>
        <span
          className="text-[0.88rem]"
          style={{ fontFamily: BODY, color: CREAM }}
        >
          {tool.name}
        </span>
      </div>
 
      <div
        className="mt-3 h-0.75 w-full overflow-hidden rounded-full"
        style={{ background: `rgba(${FOREST_RGB},0.15)` }}
      >
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, background: FOREST }}
        />
      </div>
 
      <div
        className="mt-1.5 text-[10px] uppercase tracking-widest"
        style={{ fontFamily: MONO, color: MUTE }}
      >
        {label}
      </div>
    </div>
  );
}
 
/* ─── One category row: number/title/desc · illustration · tools ─ */
function SkillCategoryRow({
  cat,
  image,
  first,
}: {
  cat: (typeof SKILL_CATEGORIES)[number];
  image: string;
  first?: boolean;
}) {
  return (
    <div
      className={`grid gap-8 py-10 lg:grid-cols-12 lg:items-center ${!first ? "border-t" : ""}`}
      style={{ borderColor: `rgba(${FOREST_RGB},0.18)` }}
    >
      {/* number + title + desc */}
      <div className="lg:col-span-3">
        <span
          style={{ fontFamily: DISPLAY, fontSize: "2.1rem", color: FOREST, opacity: 0.5 }}
        >
          {cat.number}
        </span>
        <h3
          className="mt-1 whitespace-pre-line leading-[1.15]"
          style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "1.35rem", color: CREAM }}
        >
          {cat.title}
        </h3>
        <div className="mt-3 h-px w-8" style={{ background: CLAY }} />
        <p
          className="mt-3 max-w-55 text-[0.83rem] leading-relaxed"
          style={{ fontFamily: BODY, color: MUTE }}
        >
          {cat.desc}
        </p>
      </div>
 
      {/* illustration */}
      <div className="hidden lg:col-span-2 lg:block">
        <div
          className="overflow-hidden rounded-2xl"
          style={{ border: `1px solid rgba(${FOREST_RGB},0.15)` }}
        >
          <img src={image} alt="" className="h-full w-full object-cover opacity-90" />
        </div>
      </div>
 
      {/* tools */}
      <div
        className="grid gap-x-8 gap-y-8 lg:col-span-7"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))" }}
      >
        {cat.tools.map((tool) => (
          <SkillTool key={tool.key} tool={tool} />
        ))}
      </div>
    </div>
  );
}
export function SkillsShowcase() {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-6" style={{ borderColor: `rgba(${CLAY_RGB},0.2)` }}>
        <span
          className="text-[10px] uppercase tracking-[0.22em]"
          style={{ fontFamily: MONO, color: FOREST }}
        >
          Software & Skill Level
        </span>
        <SkillLegend />
      </div>
 
      {SKILL_CATEGORIES.map((cat, i) => (
        <SkillCategoryRow key={cat.number} cat={cat} image={CATEGORY_IMAGES[i]} first={i === 0} />
      ))}
    </div>
  );
}