import { Award, Boxes, FileText, GraduationCap, Layers, PenTool, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";
import solace_thesis_pdf from "@/assets/projects/M.Arch_Thesis/M.Arch_Thesis_Solace.pdf";
import breathing_space_thesis_pdf from "@/assets/projects/B.Arch_Thesis/B.Arch_Thesis_The_Breathing_Space.pdf";
import breathing_space_cover_image from "@/assets/projects/B.Arch_Thesis/B.Arch_Thesis_Cover_image.jpeg"; 
import solace_thesis_cover_image from "@/assets/projects/M.Arch_Thesis/M.Arch_Thesis_Cover_Image.jpeg";   
import design_edge_res_1 from "@/assets/projects/additional_works/Design_Edge_Studio_ Residential_project1.jpeg";
import design_edge_res_2 from "@/assets/projects/additional_works/Design_Edge_Studio_ Residential_project2.jpeg";
import design_edge_res_3 from "@/assets/projects/additional_works/Design_Edge_Studio_ Residential_project3.jpeg";
import freelance_gated_community from "@/assets/projects/additional_works/freelance_gated_community_project.jpeg";
import freelance_residential from "@/assets/projects/additional_works/freelance_residential_project.jpeg";
import parametric_exploration from "@/assets/projects/additional_works/Parametric_exploration.jpeg";
import hum_pdf from "@/assets/projects/Design_hackathon/HUM_presentation.pdf";
import hum_video from "@/assets/projects/Design_hackathon/HUM_Walkthrough.mp4"

export const profile = {
  name: "Aditi Pochampally",
  initials: "AP",

  role: "Architectural Designer & BIM Coordinator",

  tagline:
    "Transforming design concepts into coordinated, buildable architecture through BIM excellence.",

  location: {
    india: "Hyderabad, India",
    usa: "Tempe, Arizona",
  },

  email: "aditipochampallyf24@gmail.com",

  phone: "+1 (989) 906-3941",

  linkedin: "https://www.linkedin.com/in/aditi-pochampally/",

  resume: "/Aditi_Pochampally_Resume-2026-N3.pdf",

  portfolio: "/Aditi_Pochampally_Portfolio-2026-N.pdf",
};

export const about = {
  title: "About",

  description: `
Creative and detail-driven Architectural Designer and BIM Coordinator with 2–3 years of professional experience across design development, BIM coordination, and construction documentation.

Experienced in K–12 educational facilities, public works, residential, commercial, and mixed-use developments. Strong background in Revit BIM workflows, interdisciplinary coordination, construction documentation, and code-compliant design.

Passionate about creating efficient BIM standards, improving documentation quality, and translating conceptual design into construction-ready solutions.
`,
};

export const stats = [
  {
    value: "2–3",
    label: "Years Experience",
  },
  {
    value: "$30M",
    label: "Public Works Project",
  },
  {
    value: "28-acre",
    label: "Infrastructure Master Plan",
  },
  {
    value: "5+",
    label: "Concurrent Projects",
  },
];

export const experience = [
  {
    role: "Architectural Intern",

    company: "BWS Architects",

    location: "Phoenix, Arizona",

    duration: "May 2025 – May 2026",

    highlights: [
      "Developed Revit BIM models throughout DD and CD phases.",
      "Prepared plans, elevations, sections, and detailed construction documentation.",
      "Created office Revit templates, annotation families, and standardized sheet sets.",
      "Worked with Structural, Civil, and MEP consultants for BIM coordination.",
      "Supported a $30M Public Works Master Plan for Apache Junction.",
      "Contributed to BIM documentation for a 28-acre infrastructure development.",
      "Maintained drawing standards aligned with IBC requirements.",
    ],

    technologies: [
      "Revit",
      "BIM 360",
      "Autodesk Docs",
      "Bluebeam",
      "Construction Documentation",
    ],
  },

  {
    role: "Associate Architect",

    company: "Design Edge",

    location: "Hyderabad",

    duration: "Sep 2022 – May 2024",

    highlights: [
      "Produced complete construction documentation packages.",
      "Managed over five simultaneous architectural projects.",
      "Performed QA/QC reviews.",
      "Maintained BIM/CAD documentation systems.",
      "Participated in client coordination meetings.",
    ],

    technologies: [
      "Revit",
      "AutoCAD",
      "Construction Documentation",
      "Client Coordination",
    ],
  },

  {
    role: "Architectural Intern",

    company: "The BOSHO Design Group",

    location: "Hyderabad",

    duration: "Apr 2021 – Aug 2021",

    highlights: [
      "Worked on high-rise residential projects.",
      "Prepared AutoCAD plans, sections, and elevations.",
      "Supported multidisciplinary coordination.",
    ],

    technologies: [
      "AutoCAD",
      "Residential",
      "Mixed Use",
    ],
  },

  {
    role: "Architectural Intern",

    company: "The Young Designers",

    location: "Hyderabad",

    duration: "Jan 2021 – Mar 2021",

    highlights: [
      "Prepared permit drawings.",
      "Produced municipal approval documentation.",
      "Performed area calculations.",
      "Conducted code research.",
    ],

    technologies: [
      "AutoCAD",
      "Revit",
      "Permit Drawings",
    ],
  },
];

export const education = [
  {
    degree:
      "Master of Architecture – Building Sciences & Technology",

    institute: "Arizona State University",

    location: "Tempe, Arizona",

    year: "2024 – 2026",
  },

  {
    degree: "Bachelor of Architecture",

    institute: "Sri Sri University",

    location: "Cuttack, Odisha",

    year: "2017 – 2022",
  },
];

export const projectCategories = [
  "Academic",
  "Public Works",
  "Institutional",
  "Residential",
  "Commercial",
  "Urban Design",
  "Interior Design",
];

export const marquee = [
  "Revit",
  "AutoCAD",
  "Rhino 3D",
  "SketchUp",
  "Enscape",
  "Lumion",
  "Bluebeam",
  "BIM 360",
  "Autodesk Docs",
  "Construction Documentation",
  "IBC Compliance",
  "MEP Coordination",
  "Public Works",
  "K–12",
  "Mixed Use",
  "QA/QC",
];

export const MARQUEE_ITEMS = [
  "BIM Coordination",
  "Construction Documentation",
  "IBC Compliance",
  "Revit Modeling",
  "Multi-Discipline Coordination",
  "Code Research",
  "QA/QC Review",
  "Design Development",
];

export const HONORS = [
  {
    tag: "Winner",
    title: "Design Hackathon 1.0",
    desc: "Disaster Risk Reduction for Resilient Architecture — Slum Rehabilitation, TARU",
    icon: Trophy,
    pdf: hum_pdf,
    video:hum_video,
  },
  {
    tag: "Winner",
    title: "Alankrit 2020",
    desc: "Barrier-Free Design Competition",
    icon: ShieldCheck,
  },
   {
    tag: "3rd Place",
    title: "Alankrit 2019",
    desc: "Weekly Market Design Competition",
    icon: Sparkles,
  },
];

export const THESIS = [
  {
    tag: "M.Arch Thesis",
    year: "2026",
    title: "S.O.L.A.C.E",
    subtitle: "Safe, Open, Livable, Accessible, Caring Environment",
    desc:
      "Capstone studio, Arizona State University — trauma-informed transitional housing for individuals recovering from homelessness.",
    details:
      "Developed with Catholic Community Services of Southern Arizona and the City of Sierra Vista, as part of the ARC 402/602 studio \u201CDesigning Futures: Building Resilience from Vulnerability [II],\u201D under Profs. Claudio Vekstein, James Wesala, Bruce Mau, and Aiyemobisi (Bisi) Williams. The project applies neuroarchitecture principles \u2014 light, nature, spatial layout, and movement \u2014 to a supportive-housing master plan serving elderly residents, veterans, individuals, and single-parent families. My role covered master planning, landscape, and community design: shaping the site ecosystem, circulation spine, and shared courtyard spaces around a trauma-informed design manifesto.",
    icon: GraduationCap,
     pdf: solace_thesis_pdf,
     video:null,
     coverImage:solace_thesis_cover_image
  },
  {
    tag: "B.Arch Thesis",
    year: "2022",
    title: "Breathing Space",
    subtitle: "First Rank · Final Thesis Semester",
    desc:
      "Independent thesis at Sri Sri University exploring restorative, human-centered design principles.",
    details:
      "Recognized as the top thesis of the semester at Sri Sri University, Odisha. The project explored how architecture can support mental and physical well-being through spatial sequencing, natural light, and material choices \u2014 laying an early foundation for the human-centered design thinking that carried into the M.Arch capstone.",
    icon: Award,
    pdf: breathing_space_thesis_pdf,
    video: null,
    coverImage:breathing_space_cover_image,
  },
];

export const SOFTWARE_SKILLS = [
  { key: "photoshop", name: "Adobe Photoshop" },
  { key: "lumion", name: "Lumion" },
  { key: "autocad", name: "AutoCAD 2D" },
  { key: "indesign", name: "Adobe InDesign" },
  { key: "illustrator", name: "Adobe Illustrator" },
  { key: "sketchup", name: "SketchUp" },
  { key: "enscape", name: "Enscape" },
  { key: "powerpoint", name: "PowerPoint" },
  { key: "rhino", name: "Rhinoceros 3D" },
  { key: "revit", name: "Revit" },
];

export const FIRMS = [
  {
    key: "bws",
    name: "BWS Architects",
    highlight: "Integrating Design & Technology",
    year: "2025–26",
    place: "Phoenix, AZ",
    role: "Architectural Intern",
    dates: "May 2025 – May 2026",
    detail:
      "Contributed to K–12 education and public works projects from Design Development through Construction Documentation, supporting multidisciplinary teams through BIM coordination, environmental analysis, visualization, and technical documentation. Worked closely with architects and consultants to transform design intent into coordinated, buildable solutions while ensuring clarity across every phase of the project.",
    tags: [
      "BIM Coordination",
      "Revit Documentation",
      "Construction Documents",
      "Consultant Coordination",
      "DDx & Autodesk Forma",
      "Energy Analysis",
      "Lumion & Enscape",
      "SketchUp",
      "Adobe Creative Cloud",
      "K–12 & Public Works",
    ],
  },

  {
    key: "de",
    name: "Design Edge",
    highlight: "Growing into Design",
    year: "2022–24",
    place: "Hyderabad, India",
    role: "Associate Architect",
    dates: "Sep 2022 – May 2024",
    detail:
      "Worked closely with the Principal Architect on educational, residential, and master planning projects, contributing from early planning through construction documentation. Assisted in developing design concepts, preparing coordinated drawing packages, and producing architectural visualizations that supported both design communication and client presentations.",
    tags: [
      "Master Planning",
      "Educational Projects",
      "Residential Projects",
      "Construction Documentation",
      "Revit",
      "AutoCAD",
      "Design Development",
      "Lumion & Enscape",
      "SketchUp",
      "Client Coordination",
      "Residential Design",
    ],
  },

  {
    key: "bosho",
    name: "BOSHO Design Group",
    highlight: "Developing Technical Discipline",
    year: "2021",
    place: "Hyderabad, India",
    role: "Architectural Intern",
    dates: "Apr 2021 – Aug 2021",
    detail:
      "Supported high-rise residential and mixed-use developments through the preparation of construction drawings and technical documentation. This experience strengthened my understanding of drawing standards, detailing, and the discipline required to produce coordinated architectural documentation.",
    tags: [
      "Construction Documentation",
      "High-Rise Residential",
      "Mixed-Use Projects",
      "AutoCAD",
      "Technical Drawings",
      "Design Documentation",
      "Building Details",
      "Team Collaboration",
    ],
  },

  {
    key: "tyd",
    name: "The Young Designers",
    highlight: "Where It All Began",
    year: "2021",
    place: "Hyderabad, India",
    role: "Architectural Intern",
    dates: "Jan 2021 – Mar 2021",
    detail:
      "Contributed to government and municipal projects by preparing permit and construction drawings while gaining an early understanding of regulatory documentation and architectural standards. This role established the technical foundation that continues to influence my approach to documentation today.",
    tags: [
      "Construction Documentation",
      "Government Projects",
      "Municipal Drawings",
      "Permit Documentation",
      "AutoCAD",
      "Code Compliance",
      "Area Calculations",
    ],
  },
];

export const CAPABILITIES = [
  {
    icon: PenTool,
    tag: "A-4.1",
    title: "Design Development",
    desc: "Translating early concepts into buildable design intent without losing the idea along the way.",
  },
  {
    icon: Boxes,
    tag: "A-4.2",
    title: "Revit & BIM Coordination",
    desc: "Model development across DD and CD phases, kept accurate as it passes through every discipline.",
  },
  {
    icon: Users,
    tag: "A-4.3",
    title: "Multi-Discipline Coordination",
    desc: "Working directly with structural, civil, and MEP consultants to resolve clashes before they reach the field.",
  },
  {
    icon: FileText,
    tag: "A-4.4",
    title: "Construction Documentation",
    desc: "Full CD packages — plans, elevations, sections, and details — built to office standards and IBC compliance.",
  },
  {
    icon: Layers,
    tag: "A-4.5",
    title: "Sheet Standards & Templates",
    desc: "Standardized view templates and annotation families that keep a drawing set consistent end to end.",
  },
  {
    icon: ShieldCheck,
    tag: "A-4.6",
    title: "Code Research & QA/QC",
    desc: "Code research, area calculations, and QA/QC review that catch inconsistencies before submittal.",
  },
];

export const SKILL_LEVELS = {
  expert: { label: "Expert", value: 100 },
  proficient: { label: "Proficient", value: 68 },
  familiar: { label: "Familiar", value: 38 },
} as const;

export type SkillLevel = keyof typeof SKILL_LEVELS;

export const SKILL_CATEGORIES: {
  number: string;
  title: string;
  desc: string;
  image?: string; // optional illustration import
  tools: { key: string; name: string; level: SkillLevel }[];
}[] = [
  {
    number: "01",
    title: "BIM, Drafting,\n& Modeling",
    desc: "Building information and precision documentation for coordinated design outcomes.",
    tools: [
      { key: "revit", name: "Revit", level: "expert" },
      { key: "autocad", name: "AutoCAD 2D", level: "expert" },
      { key: "sketchup", name: "SketchUp", level: "expert" },
      { key: "navisworks", name: "Navisworks", level: "proficient" },
      { key: "rhino", name: "Rhinoceros 3D", level: "proficient" },
      { key: "grasshopper", name: "Grasshopper", level: "proficient" },
    ],
  },
  {
    number: "02",
    title: "Visualization\n& Rendering",
    desc: "Bringing ideas to life through realistic renders, atmosphere, and materiality.",
    tools: [
      { key: "lumion", name: "Lumion", level: "expert" },
      { key: "enscape", name: "Enscape", level: "expert" },
    ],
  },
  {
    number: "03",
    title: "Graphic Layout\n& Illustration",
    desc: "Designing clear, impactful graphics and layouts that communicate ideas effectively.",
    tools: [
      { key: "photoshop", name: "Adobe Photoshop", level: "expert" },
      { key: "indesign", name: "Adobe InDesign", level: "expert" },
      { key: "illustrator", name: "Adobe Illustrator", level: "expert" },
      { key: "powerpoint", name: "PowerPoint", level: "expert" },
    ],
  },
];

export const eduTimeline = [
    {
      degree: "Master of Architecture",
      focus: "Building Sciences & Technology",
      school: "Arizona State University",
      dates: "2024 – 2026",
      place: "Tempe, AZ",
    },
    {
      degree: "Bachelor of Architecture",
      focus: "Sri Sri University",
      school: "Faculty of Architecture",
      dates: "2017 – 2022",
      place: "Cuttack, Odisha, India",
    },
  ];

  export const expertise = [
    "BIM Coordination",
    "Construction Documentation",
    "Multi-Discipline Coordination",
    "IBC Compliance",
    "Project Scheduling",
    "Construction Administration",
  ];

 export const ADDITIONAL_WORKS_INTRO =
  "A curated collection of professional, academic, and independent projects that reflect the breadth of my architectural experience, technical skills, and evolving design practice.";

export const ADDITIONAL_WORKS = [
  {
    title: "Design Edge Studio — Residential I",
    caption: "Residential design development produced during my time at Design Edge Studio.",
    image: design_edge_res_1,
  },
  {
    title: "Design Edge Studio — Residential II",
    caption: "Continued residential documentation and design work at Design Edge Studio.",
    image: design_edge_res_2,
  },
  {
    title: "Design Edge Studio — Residential III",
    caption: "Further residential exploration completed at Design Edge Studio.",
    image: design_edge_res_3,
  },
  {
    title: "Freelance — Gated Community",
    caption: "Master planning concept for a freelance gated-community project.",
    image: freelance_gated_community,
  },
  {
    title: "Freelance — Residential Project",
    caption: "Independent residential design commission.",
    image: freelance_residential,
  },
  {
    title: "Parametric Exploration",
    caption: "A form-finding study exploring parametric design logic.",
    image: parametric_exploration,
  },
];

