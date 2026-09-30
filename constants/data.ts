export interface SiteConfig {
  name: string;
  tagline: string;
  subheadline: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  cityStateZip: string;
  hours: string;
  license: string;
  insurance: string;
  rating: number;
  reviewCount: number;
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "RoofRight Exteriors",
  tagline: "Protect Your Home. Complete the Look.",
  subheadline: "Roofing, gutters, and siding orchestrated by one master exterior team. Architectural durability, verified moisture barriers, and refined curb appeal tailored for generational longevity.",
  phone: "(555) 391-ROOF",
  phoneRaw: "tel:5553917663",
  email: "hello@roofrightexteriors.com",
  address: "7400 North Capital of Texas Hwy, Suite 300",
  cityStateZip: "Austin, TX 78731",
  hours: "Mon–Sat: 7:00 AM – 7:00 PM (24/7 Emergency Storm Dispatch)",
  license: "State License & Registration #ROC-88492",
  insurance: "Fully Licensed & $2,000,000 General Liability Insured",
  rating: 4.9,
  reviewCount: 380,
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Roofing", href: "/roofing" },
  { label: "Roof Repair", href: "/roof-repair" },
  { label: "Roof Replacement", href: "/roof-replacement" },
  { label: "Gutters", href: "/gutters" },
  { label: "Siding", href: "/siding" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  image: string;
  imageAlt: string;
  features: string[];
  materials?: string[];
  warranty: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "roofing",
    slug: "roofing",
    title: "Residential Roofing",
    shortDesc: "Architectural asphalt shingles, standing-seam metal, and synthetic slate built to resist 130 MPH winds and severe hail impact.",
    fullDesc: "Complete roofing systems engineered from decking to ridge vent. We install high-performance moisture barriers, ice and water shields in critical valleys, and Class 4 impact shingles backed by non-prorated 50-year manufacturer warranties.",
    badge: "50-Yr Warranty",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACRREYowzGZ3tto-ofR-t57QULVcsGit1BXzoW_foBaGU8fwi76fYzu0dDrvvxCQQ1SQ5m0KwHVQTYq8iEHdSP2MpoB9uwfXcH8yNvILAT3AI0UeDkWfvOALDll1AdUkvNRmfqmxxEQW2DM9ktver2RFbVsaJW_L6QkJ8L1sY2duIY-H8Vx3UJVc2EI1pt26ibdSUy9UhlmxqTh7ri2C2te2YiUCIcrG65Dws5o15JcVh19wtMLGfH",
    imageAlt: "Close-up architectural photograph of brand new charcoal black architectural shingles on a crisp roofline with clean ridge vent and copper flashing.",
    features: [
      "Class 4 impact-rated shingle selections",
      "Ice & water shield perimeter barriers",
      "Continuous ridge ventilation balance",
      "GAF Master Elite & Owens Corning Platinum certified",
    ],
    materials: [
      "GAF Timberline HDZ Architectural Shingles",
      "Owens Corning Duration Storm Class 4",
      "24-Gauge Concealed-Fastener Standing Seam Metal",
      "DaVinci Engineered Synthetic Slate & Shake",
    ],
    warranty: "50-Year Non-Prorated System Warranty + Lifetime Workmanship",
  },
  {
    id: "roof-repair",
    slug: "roof-repair",
    title: "Precision Roof Repair",
    shortDesc: "Surgical repairs for isolated storm leaks, pipe boot failure, displaced shingles, and chimney flashing issues before rot sets into roof sheathing.",
    fullDesc: "Don't let a small leak turn into catastrophic framing rot. Our certified technicians locate hidden thermal moisture leaks using drone and infrared scanning, executing surgical repairs that match your existing roof profile flawlessly.",
    badge: "Rapid Response",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwZy3W5_TecKHaM-BHzjEIoJ8bnDL9U3rgHLWbE3L8u0s6Y0YGgm2KHPEa08Qwq0lH3bQiP5J7SR3_Crik7P4VxtIB9Msw_EKVTLAg4BUUKL8p8uCvZ3IOay44XMWKyV4ypM4fldO-WbZLDq-x5ZidKzNrnZbMUuVDxcq-1NwaRcPsFGy-J6GOmSCiSVgt82wiJr45M6fFII9Q47R-JBUaJB1ImG413rdSXbWiYetX9Qzk_WjONVbI",
    imageAlt: "Roofing technician in safety harness carefully assessing and repairing chimney step flashing and damaged asphalt shingles.",
    features: [
      "Infrared moisture intrusion diagnostics",
      "Emergency tarping within 4 hours",
      "Full insurance adjuster documentation",
      "Precision color and granule matching",
    ],
    materials: [
      "Heavy-duty EPDM pipe collar boot retrofits",
      "Custom-bent lead & copper step and counter-flashing",
      "Commercial-grade roof valley membrane liners",
      "High-adhesion hurricane shingle bonding adhesive",
    ],
    warranty: "5-Year No-Leak Warranty on all localized repair seams",
  },
  {
    id: "roof-replacement",
    slug: "roof-replacement",
    title: "Roof Replacement Systems",
    shortDesc: "Complete tear-off down to structural plywood deck, rotten decking substitution, synthetic vapor barrier, and lifetime architectural installation.",
    fullDesc: "A complete roof replacement is an investment in your home's equity and security. We strip 100% of old materials, inspect and re-nail decking, seal all valleys with self-adhering membranes, and install lifetime ventilation systems.",
    badge: "Full System Shield",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVWn1u5US4D9p-okekYkf0kqMf-fEqo7li7mnT668L4d_gI3UGXLt6g_He66qyo3J9HBl6a1UGN9BU-_BeLpSQpl0n8WkGA4jveJvz4__8wlUs68aisqtfwE0MQ-fK7f2ZknufxuQorDFh-grTWDItJ3kafZUUAi-0p69CBaE7rUmbwnGjgvYkYToEbyhe4zlJuMs5v2GIKejFqL0mspa29U_wWX04p2_lkm6wJgwcNfu6PJBmEBeL",
    imageAlt: "Sprawling ranch estate with newly laid Pewter Gray architectural shingles, spotless hip ridges, and continuous soffit ventilation.",
    features: [
      "Complete tear-off down to bare structural decking",
      "100% rotten wood replacement and deck re-nailing",
      "Heavy synthetic vapor barrier & valley armor",
      "Continuous magnetic nail sweep for 100% driveway safety",
    ],
    materials: [
      "GAF Timberline HDZ / UHDZ Lifetime Shingles",
      "Deck-Armor Breathable Synthetic Underlayment",
      "WeatherWatch Ice & Water Leak Barrier",
      "Cobra Snow Country Continuous Ridge Vent",
    ],
    warranty: "GAF Golden Pledge 50-Year Non-Prorated Protection",
  },
  {
    id: "gutters",
    slug: "gutters",
    title: "Engineered Gutter Systems",
    shortDesc: "Custom-extruded seamless 6-inch aluminum and copper systems designed to channel torrential downpours safely away from foundation footings.",
    fullDesc: "Water falling from your roof line creates thousands of pounds of pressure on perimeter soil. Our continuous seamless gutters are custom roll-formed on-site and pitched with digital levels to safeguard foundations, fascia, and landscaping.",
    badge: "Seamless Heavy-Gauge",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk-jSpqjX6sVmePMOxZDsrJz1p3x2bGl1KwE8W1w0xzPq5UGDdD_Vw3vBri1OxSCesVrha0LVjT7ZeCDr4XzUSxd31N2HZ577x0ssym2orlFnPK2ZRpnw5Ex0ky0zPdyXCc2pci6x6p-lngV9pUtbs2ICB2JvKcM-_a75tnura-GZFqwBu0BJP2cdOQPn5sjb0ftYDdJcRBqRvUVNf2xT_UUCl4JEqj38lDfXQtDkV3R_VU5jVsa2-",
    imageAlt: "Seamless dark bronze modern aluminum gutters with matching downspout mounted neatly against crisp fascia board.",
    features: [
      "On-site custom machine roll-forming",
      "Micro-mesh surgical debris filters",
      "Internal hidden heavy-duty screw hangers every 24 inches",
      "Oversized 3x4-inch commercial flow downspouts",
    ],
    materials: [
      ".032 Heavy-Gauge Seamless Aluminum (30+ baked-on enamel colors)",
      "16 oz Architectural Cold-Rolled Copper",
      "Stainless Steel Micro-Mesh Gutter Guard Screens",
      "High-flow underground pop-up drain emitter tie-ins",
    ],
    warranty: "25-Year Manufacturer Finish Warranty + 10-Year Clog-Free Guarantee",
  },
  {
    id: "siding",
    slug: "siding",
    title: "Architectural Siding",
    shortDesc: "Fiber cement, engineered composite, and thermal board-and-batten siding. Transformative curb appeal combined with impenetrable moisture resistance.",
    fullDesc: "Transform your home's exterior with non-combustible James Hardie fiber cement siding. Coupled with rigid exterior thermal insulation and certified moisture wraps, our siding packages lower energy bills while withstanding harsh weather.",
    badge: "Non-Combustible",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmqRrm5r17x8DLffe-DQnm0DxHYW8gJBxbFk4tivCkdf-_Atmeu5ExXcWwIHoNBKZdfIzn5xmk8y1hduO5rCU6NWyDBgk_L2q8mlAdtcwzZSaK8xcpk2B1q6qfc2kQ2tWyc6Jk0AfeRDluMwXonJ2LksXtquIQPmOK9f0c0GO0NENlg3nsPqjfSXVGFpiDDija1SbSqFnCt2BsM6TaH69gNMjQEQ2VO4T9Klrb-iW40Ak4c1I0nbW7",
    imageAlt: "Modern home exterior with freshly installed James Hardie fiber cement lap siding in deep sage green paired with crisp white trim windows.",
    features: [
      "James Hardie ColorPlus baked-on finish technology",
      "Continuous exterior R-value insulation wrap",
      "Rot-proof PVC and composite corner trims",
      "Class A Fire-Rated non-combustible core",
    ],
    materials: [
      "HardiePlank Select Cedarmill Lap Siding",
      "HardiePanel Vertical Board & Batten Siding",
      "HardieShingle Staggered Edge Accent Siding",
      "HardieTrim Statement Fascia & Window Casing",
    ],
    warranty: "30-Year Non-Prorated Substrate Warranty + 15-Year Finish Warranty",
  },
];

export interface ComparisonTab {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  warningSigns: string;
  turnaround: string;
  scope: string;
  longTermImpact: string;
  ctaText: string;
  ctaHref: string;
}

export const SERVICE_COMPARISON: ComparisonTab[] = [
  {
    id: "roof-repair",
    name: "Roof Repair",
    badge: "Targeted Intervention",
    headline: "Roof Repair",
    description: "Designed for roofs under 15 years old with localized flashing failure, single-plane storm tear-offs, or penetration leaks around vents and skylights.",
    warningSigns: "Ceiling water stains, isolated lifted shingles, missing flashing along chimney masonry.",
    turnaround: "Typically 2 to 4 hours on-site; immediate temporary seal if active storming.",
    scope: "1 to 2 bundles shingle tie-in, rubber boot collar renewal, localized deck re-nailing.",
    longTermImpact: "Extends functional roof deck life 5-8 years; halts internal attic drywall rot.",
    ctaText: "Book Leak Inspection",
    ctaHref: "/roof-repair",
  },
  {
    id: "roof-replacement",
    name: "Roof Replacement (Full System)",
    badge: "Complete Shield Overhaul",
    headline: "Roof Replacement",
    description: "Full tear-off down to structural plywood deck, installation of synthetic vapor barrier, ice/water shields in valleys, and lifetime architectural shingles.",
    warningSigns: "Roof age 20+ years, pervasive granule loss in gutters, cupping/curling, widespread hail strikes.",
    turnaround: "1 to 2 full days for average 2,800 sq ft home with full magnetic yard sweep.",
    scope: "100% tear-off, rotten decking substitution, synthetic underlayment, ridge vent installation.",
    longTermImpact: "GAF Golden Pledge 50-year warranty, increases home appraisal value by ~12-15%.",
    ctaText: "Calculate Replacement Cost",
    ctaHref: "/roof-replacement",
  },
  {
    id: "gutters",
    name: "Gutters & Water Management",
    badge: "Perimeter Hydraulic Control",
    headline: "Gutters & Guards",
    description: "Custom continuous aluminum runs that eliminate leaky seam failures, paired with high-volume 3x4 downspouts and microscopic filtration screens.",
    warningSigns: "Trenching along perimeter mulch, foundation settlement cracks, overflowing water sheets during rain.",
    turnaround: "Same-day seamless run fabrication and bracket mounting (4-6 hours).",
    scope: "Continuous .032 heavy gauge aluminum extrusion, hidden hangers spaced every 24 inches.",
    longTermImpact: "Stops basement water penetration, prevents crawlspace mold, preserves fascia woodwork.",
    ctaText: "Customize Gutter System",
    ctaHref: "/gutters",
  },
  {
    id: "siding",
    name: "Siding & Wall Envelope",
    badge: "Architectural Wall Envelope",
    headline: "Siding & Trim",
    description: "Engineered James Hardie fiber cement and high-performance insulated exterior cladding with built-in weather barrier systems to withstand harsh freeze-thaw cycles.",
    warningSigns: "Woodpecker holes, peeling paint within 3 years of painting, soft spongy wood rot along corners.",
    turnaround: "3 to 5 business days with full staging and window perimeter flashing.",
    scope: "Old cladding removal, vapor barrier house wrap, James Hardie lap / vertical siding, trim caulk.",
    longTermImpact: "Class A fire rating, zero pest infestation risk, 30-year non-prorated product protection.",
    ctaText: "View Siding Profiles",
    ctaHref: "/siding",
  },
];

export interface Hotspot {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  topPct: string;
  leftPct: string;
}

export const EXTERIOR_HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    title: "1. The Overhead Shield (Roofing)",
    subtitle: "Roof Watershed Peak",
    description: "The first line of defense absorbing ultraviolet radiation, wind uplifts, and direct rainfall. We integrate synthetic ice-and-water guards behind the drip edge to make sure water flows cleanly into gutters rather than wicking upward beneath shingles.",
    highlight: "Zero-Leak Valley Architecture",
    topPct: "24%",
    leftPct: "45%",
  },
  {
    id: 2,
    title: "2. The Hydraulic Channel (Gutters)",
    subtitle: "Seamless Gutter Drainage",
    description: "Every inch of your roof generates gallons of runoff. Our seamless gutters fit precisely under the roof drip edge with customized pitch, ensuring water is propelled through downspouts and dispatched 6+ feet away from foundation walls.",
    highlight: "Foundation Shift & Basement Flooding Prevention",
    topPct: "52%",
    leftPct: "30%",
  },
  {
    id: 3,
    title: "3. The Armor & Thermal Barrier (Siding)",
    subtitle: "Hardie Vapor Envelope",
    description: "Wind-driven rain ricochets sideways. Our James Hardie fiber cement systems pair with premium weather-resistive house wraps, keeping framing studs dry while insulating your living space for lower HVAC utility bills.",
    highlight: "Flame & Termite Impervious Exterior Envelope",
    topPct: "70%",
    leftPct: "62%",
  },
];

export interface BeforeAfterPreset {
  id: string;
  name: string;
  title: string;
  location: string;
  description: string;
  beforeImg: string;
  beforeAlt: string;
  afterImg: string;
  afterAlt: string;
  tags: string[];
}

export const BEFORE_AFTER_PRESETS: BeforeAfterPreset[] = [
  {
    id: "full",
    name: "Full Envelope",
    title: "Austin Hill Country Modernization",
    location: "Austin, TX",
    description: "Replaced failing 3-tab shingle with GAF Timberline HDZ Charcoal, engineered 6\" custom seamless terracotta gutters, and full perimeter James Hardie Evening Blue siding.",
    beforeImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD5ExIhgM-nQsM5z-cjhinHrkSzL6BfYuY0Ei4G_Brb1WxEDE1oEyZZd3APqhAaYmqAnTg58LW_as7qDwvGbroIF56E15AQNKDSIVbzcIhVdroCUpyNEncmrAtKmNXFEojCQ5oU_D19EG8COEvWVL4YBruLaJUW1n7wqwkqi7_Bj7dvs7n8laBXBV97CULiOgWMO2qfpw3cWUeXoFH3P1nte9PJEeZiIYPf_6lcSG8L9qUjuF3bfYi",
    beforeAlt: "Aged Texas suburban house with faded weathered curl-edge asphalt roof shingles, stained faded beige siding panels, and clogged sagged white aluminum gutters before architectural renovation.",
    afterImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaqwUvq49qgOqEjLei_oNz-L7OLy2tyM1Tkvki0UAa9CyoRgxGyIqwkNxNgLXVIlrZQFQ-rGy2niMmnWafoUiUNmCSSUSveRGTP2x4oJm0L5itbOXIcuvQrdIFKG3VDo1hX7BWfIAQ_8YRnkg5GhWTPUsK2z-_0OUSPuETh5iFPfGo2GPVDAxYBpEmga7BwAtYzfj6woMSDcJf3az_9jxxL1_y7o-q1BO4Cj7NtBRwQlNp86hXQ7lF",
    afterAlt: "Stunning after photo of a modern suburban home exterior featuring pristine charcoal architectural shingles, seamless bronze downspouts, and crisp warm taupe Hardie siding under bright clear sky.",
    tags: ["GAF Timberline HDZ", "Hardie ColorPlus", "6\" K-Style Gutters"],
  },
  {
    id: "roof",
    name: "Roof Focus",
    title: "Storm Impact Restoration",
    location: "Round Rock, TX",
    description: "Emergency mitigation turned complete roof replacement following golf-ball hail. Upgraded underlayment with GAF Deck-Armor breathable synthetic system.",
    beforeImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUH7aEcnc8tFgxHadtlM1yxonYH95dl2RxGRukP_aGnno9wqRo1z3r5HnKDV8KoYvYd_f15WGosqRUsxf9wlrw07Ccf_phPST1PLObOn046453oRwY2lC5vWmhY0sIhbA5e2GQEgtXV3VPrueplEHcib9gZ-ZPWhKPlv3x0lAKSt_vtA9kunuGQ_C_uHaM2yJjFQMgmEh3p6Wrc6VOiFhWEw0drQrWqZgh7uImhPG-cZZtREnrlnnN",
    beforeAlt: "Hail and wind storm damaged shingle roof with missing granules, lifted shingle tabs, dented roof vents, and exposed underlayment.",
    afterImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvEMSXLlOS0ASFg-f9sO0bT7n4K-TaKQdogH_hpiRDBjoF90TtKwv-VSVTPY1Ux7ndzA2fEjJf4hjoKeVAPbK5UpP98iJpGYg2c9wFRyaxbBtXoxzll4FCHnsF2qwBO8wu9ZTNWU_FVc22YkDEGZpHV358KpG4hmSsRKS-SsDQd8SLaQC0q0-pgepZoTzmeJLpKyJVDN5BEu7oLJTrOW7kUWcW5781_b3AyiwYFJaHS9XzRPVHZKe5",
    afterAlt: "Impeccable newly installed Class 4 hail-resistant charcoal architectural shingles with copper chimney flashing and ridge vent system.",
    tags: ["Class 4 Impact", "Ice & Water Shield", "Cobra Ridge Vent"],
  },
  {
    id: "siding",
    name: "Siding Upgrade",
    title: "Modern Siding & Standing Seam",
    location: "Westchester Estate",
    description: "Engineered fiber cement lap siding conversion with 24-gauge standing seam metal overhangs for lifetime weatherproofing.",
    beforeImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLGRyb_UwP4_bL0E0KK0Pn5ZuVqI0Oi7tfDRu6gsSV9Lcqmg9qZ_WosfJlEJYG77Uj67UZDYS-FsbTk-RmRmRbDjYAO8BKamj-GpttBpHo-fG42aIsLQOH6b3s6XL8IVdCRidSzVWyUNmmO4eBVZApK0BJKLGx14D_amWQlKNbxrFmGEFF_K69ldABhUge0gXCIyLy4-wvSDGiKfEHpRjUi-JTg3xjqTffSaBVcaY_g9820qF61LPU",
    beforeAlt: "Peeling, weathered siding and faded trim on a two-story home prior to James Hardie siding renovation.",
    afterImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX-SQC6y0N8r9l0W_9oe4F2e4YYsgNVWB2dlQkegf0asIZLlkcQBP1X7dox3u6A_O-HFaW9YaERdk7xVlDFZBeX6XoljbOmBO4mAiaJ6ku-YJtwSg3qMR6sdQ_ryy6-7zYaN1RrbSbE2S34EykeST-VAHNfCTNRp4S_x1dya9nHX9cFaZrLfYsVku7sJ7XchXfAWc3jtLhHNMuwFkNNeb-8NLllCIueVA8xuvefwL5dnc8HlW3qsk5",
    afterAlt: "Modern exterior transformation with architectural dark siding, clean white window casing, and modern metal roof accents.",
    tags: ["Hardie Plank Elite", "Weather Barrier", "ColorPlus Tech"],
  },
];

export interface ProjectCardItem {
  id: string;
  title: string;
  location: string;
  category: string; // for filtering: "all", "roofing", "repair", "replacement", "gutters", "siding", "full-exterior"
  categoryLabel: string;
  buildDuration: string;
  description: string;
  image: string;
  imageAlt: string;
  roofSpec?: string;
  sidingSystem?: string;
  gutterSpec?: string;
  warranty: string;
  modalDetails: string;
}

export const PROJECTS: ProjectCardItem[] = [
  {
    id: "proj-1",
    title: "The Highland Bluff Craftsman",
    location: "Cedar Park, TX",
    category: "full-exterior roofing siding gutters",
    categoryLabel: "Full Exterior",
    buildDuration: "4-Day Build",
    description: "Complete architectural overhaul featuring HardiePlank lap siding, 26-gauge standing seam metal accents, and leaf-guard gutter protection.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRo7mJUAb48anzq-UC68UGU7bu1l3Tl7yioFnX_Fq2DnDhNtmetOlIA3o4CSlBmknMMUP2zlbWVUKVFREaJrjnC1Wf0FKL3zgHgbXm5clAYTRkDkSAHxoprEzQ8TVP-jird6V3Tj5R_Hi0FzJr4ICGDXTctQPKuo73a-2CXIKqk0UqngDuRMmyukMsruhEB3EEmufyZRP2I62wIX357qpFKLrzMYlm68p8Pbroo6CN2bvg4-XDLwo5",
    imageAlt: "High-end Craftsman home exterior with new charcoal standing seam metal roofing on porch overhangs, dark green shake siding, and pristine hidden-hanger gutters.",
    roofSpec: "Standing Seam Metal + GAF HDZ",
    sidingSystem: "Hardie Timberbark Finish",
    warranty: "GAF Golden Pledge 50-Year System",
    modalDetails: "Complete envelope redesign including structural rafter stabilization, Timberbark HardiePlank installation, seamless standing seam porch accents, and 6-inch architectural gutters. Fully warrantied for 50 years under GAF Golden Pledge.",
  },
  {
    id: "proj-2",
    title: "Oak Creek Estates Shingle Replacement",
    location: "Georgetown, TX",
    category: "replacement roofing",
    categoryLabel: "Roof Replacement",
    buildDuration: "2-Day Build",
    description: "Tear-off of deteriorated two-layer asphalt, structural plywood deck remediation, and high-wind architectural shingle system.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVWn1u5US4D9p-okekYkf0kqMf-fEqo7li7mnT668L4d_gI3UGXLt6g_He66qyo3J9HBl6a1UGN9BU-_BeLpSQpl0n8WkGA4jveJvz4__8wlUs68aisqtfwE0MQ-fK7f2ZknufxuQorDFh-grTWDItJ3kafZUUAi-0p69CBaE7rUmbwnGjgvYkYToEbyhe4zlJuMs5v2GIKejFqL0mspa29U_wWX04p2_lkm6wJgwcNfu6PJBmEBeL",
    imageAlt: "Sprawling ranch estate in Georgetown Texas with newly laid Pewter Gray architectural shingles, spotless hip ridges, and continuous soffit ventilation.",
    roofSpec: "GAF Timberline HDZ Slate",
    warranty: "GAF Golden Pledge 50-Yr",
    modalDetails: "Complete strip-down of 48 squares of brittle asphalt. Corrected improper original valley flashing, installed breathable synthetic felt, and replaced 12 rotten OSB sheets prior to shingle application.",
  },
  {
    id: "proj-3",
    title: "Dripping Springs Board & Batten",
    location: "Dripping Springs, TX",
    category: "siding",
    categoryLabel: "Architectural Siding",
    buildDuration: "5-Day Build",
    description: "Converted warped builder-grade vinyl to fire-resistant James Hardie vertical siding with rigid foam insulation wrapping.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeWsCdUhq6t1rYEdJlrHgl7RQdqg-4597dbGU0FjZ5VSqMlkslzvm3LpSwgKEoV1zy83pO8YgqdcHC7ziQdmYQJx8X7xWgq-KyEpTtsgaovgcgiqUa_mDD0zFTfPYgiWsR1qQm6Utp4woc47Eq2l32ve2BDlfvi-RJ_vWuDMN7ogFMPFcufH4Chi5JOyh8QfZbR1Puw5ICiRQD84RXCU4xIXZbVQfpMAq_1s7l_ldO76maYh4j-TQv",
    imageAlt: "Modern farmhouse in Dripping Springs Texas with crisp vertical white board-and-batten siding and dark bronze window wrap details under bright sun.",
    sidingSystem: "HardiePanel Arctic White",
    warranty: "30-Year Non-Prorated Hardie",
    modalDetails: "Full siding replacement requiring removal of damaged oriented strand board. Installed high-performance weather-resistive vapor barrier with custom aluminum window head flashing.",
  },
  {
    id: "proj-4",
    title: "Westlake Copper Drainage System",
    location: "Westlake Hills, TX",
    category: "gutters",
    categoryLabel: "Engineered Gutters",
    buildDuration: "1-Day Build",
    description: "Engineered seamless 6-inch half-round copper gutters connected directly to an underground French drain foundation relief network.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjH2rTFKlZpt6g8qoZzLQbAle6A0-_6afAoqJ8ZqwX-Y4ZMEHhlsn2eM1ItDeq74zjDX0jR4Vz71sk8hakFU4cJU7qHdV2ok9hz7gRZ16qqtP6OYmj_Jwp72Y2r7nLfAIpMM2AA4vNXWqBYMABaMCz12N3yraMQg4gNMMtFtUY8Ei1d9lSGnvwwSvvjZR6m8wAn0_ljKcdhB9v8ce9VnwRtwS9E3QbYP7Iem394uTIK-_OiIX22fwN",
    imageAlt: "Close-up of premium copper box gutters and custom round downspouts running along a Spanish revival stone villa in Westlake Hills Texas.",
    gutterSpec: "16 oz Cold-Rolled Copper + Stainless Screens",
    warranty: "Lifetime Craftsmanship + Clog Free",
    modalDetails: "Custom fabricated on-site to handle steep hillside runoff that previously threatened the property pool foundation. Includes decorative brass brackets and cleanout leaf diverters.",
  },
  {
    id: "proj-5",
    title: "Lakeway Valley & Chimney Restoration",
    location: "Lakeway, TX",
    category: "repair roofing",
    categoryLabel: "Roof Repair",
    buildDuration: "Same-Day Fix",
    description: "Resolved an elusive 3-year recurring ceiling leak by rebuilding chimney step flashing and replacing saturated fascia wood.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbKLc2ZZ9n0yaroM1DA_ZNEWZhoPeCY_XrQCCefWpKFQEQYNWxs6Gy5t1iEaWoBgeXGcVHbjrT40T7BpOe3VgKbXXKcmZ3zBTvZHkC56wYJ5JYtpX-W_gqKW0RGXKI9hOWURsQwtDcZZPccwB10LM_eIHkUqBn3qzTP_hdYoCYwyapCMpNo6LjUtHKrxGIEfHCDuZA6Q5PnvBqcr0FIuw5l5e26SzJ_aIbTh3piFEiqbN2vV6VAN5p",
    imageAlt: "Roofing technician installing lead valley metal flashing and water barrier on an architectural tile roof with chimney saddle integration in Lakeway Texas.",
    roofSpec: "Flashing, Cricket & Underlay Renewal",
    warranty: "5-Year No-Leak Warranty",
    modalDetails: "Diagnostic infrared scan revealed hidden water channeling behind limestone masonry. Custom formed a cricket diverter and replaced rotted decking in a single 6-hour operation.",
  },
  {
    id: "proj-6",
    title: "Pflugerville Synchronized Envelope",
    location: "Pflugerville, TX",
    category: "full-exterior roofing siding gutters",
    categoryLabel: "Full Exterior",
    buildDuration: "3-Day Build",
    description: "Complete coordinated exterior modernization executed with zero downtime between tear-off, siding hang, and gutter integration.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZt4SVPp1lwtpyJrmm0sDgRJhG7hrSuyBaQHuUVzaGC8GUYVITB0nKn7O84hjJUKRWUF20WTAfw7XPYw7uXklFsP9uHopmQdx_OYpEHK0_xY_jPc3N66rSbZf3kOGAioAxkF7WSrCXcqg9A3KAbWfnua98hFVT_HUXR-1zf_RS2z3Px8mpWoxVskrqCR48W6IV-hrvq0czivMCT5o4o0kqAWbF6J5j9jRDnjrmEyakiFsiV2RMvjXu",
    imageAlt: "Two-story suburban home in Pflugerville Texas completely refreshed with deep navy blue siding, charcoal GAF shingles, bright white trim, and seamless dark gray gutters.",
    roofSpec: "GAF Timberline Charcoal",
    sidingSystem: "Hardie Deep Ocean Blue",
    warranty: "GAF Golden Pledge 50-Yr",
    modalDetails: "Single-contract transformation addressing aged 3-tab roof shingles, sun-baked siding panels, and sagging gutters. Synchronized sequencing saved homeowner 12 business days.",
  },
  {
    id: "proj-7",
    title: "Oakridge Architectural Re-Roof",
    location: "Fairfield County",
    category: "roofing replacement gutters",
    categoryLabel: "Roof & Gutters Bundle",
    buildDuration: "2-Day Build",
    description: "Complete removal of double layer shingles, full plywood re-nailing, and 6\" seamless aluminum gutter replacement.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFYF-Oc-cV9560Zj28RiVus3rdRS_WTOvAYevXxDlZ4MJ_bk9LlMa7xAw_00AA94Zrlf51fYpsRzEZAMsPySW5ynXIi7Yuh6x5mkkcX2jY6cxyUr3ltL0HFpVVgCJILndPiB-eRQwqQrXkO48v7rH0ns2lQ7NczPs3PqNudCLgQOA96RAGaDtEBhqj7EvYQ-Aai8dhJoX7vWbEKVC7RqKrl4m5wGmm0uK6Kw4gOX3Dr2w4RyNubtG1",
    imageAlt: "A grand two-story suburban home with high-definition charcoal architectural shingles and sharp white trim under golden afternoon sunlight.",
    roofSpec: "GAF Timberline HDZ Architectural",
    gutterSpec: "6\" Seamless Heavy-Gauge Aluminum",
    warranty: "50-Year Non-Prorated Warranty",
    modalDetails: "High-wind corridor upgrade with GAF Timberline HDZ shingles and on-site extruded 6\" seamless gutters with stainless micro-mesh shields.",
  },
  {
    id: "proj-8",
    title: "Storm Restoration & Flashing",
    location: "Bergen Ridge",
    category: "repair roofing replacement",
    categoryLabel: "Historic Restoration",
    buildDuration: "Class 4 Impact",
    description: "Custom copper valleys, chimney step flashing, and hail-resistant Owens Corning Duration shingles backed by lifetime coverage.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCioWSbCLyFmv4MH5fCMn1c9BpCIjlTB3Gx76Wu5YLwRdf2EOWymf0-e8uIhUMDwUKFvkQJ6y8njUK3eezsvxhd2RK7ZYQduQtXowj-v_OrhMupOy-WbZqiI-ZRClRT8Si9qFzkX9pREmRsv34rkNGDdUR0kTL2TfYqPd3n66mYpx8Ri5AWFVdQClAR7bkEHgbpFglEXGL0x-vBUH88BMJNq6zHovyURngBAJpcK-wjRInmzEARWfnf",
    imageAlt: "A restored classic colonial home with new weathered wood architectural shingles, copper flashing around brick chimney, and high-performance gutter guards.",
    roofSpec: "Owens Corning Duration Storm Class 4",
    warranty: "Lifetime System Guarantee",
    modalDetails: "Historic restoration incorporating heavy-gauge soldered copper valleys, counter-flashed chimney brickwork, and class 4 impact shingle armor.",
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  headline: string;
  quote: string;
  verified: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "David K.",
    location: "Oak Hill, Austin",
    service: "Roof & Gutter Package",
    rating: 5,
    headline: "Exceptional coordination across trades.",
    quote: "We replaced both our 25-year roof and gutters at the same time. The crew showed up at 7 AM sharp, put down heavy tarps to protect our extensive hydrangeas, and finished in a single day. The magnet cleanup left zero nails.",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Rachel T.",
    location: "Cedar Park, TX",
    service: "Hardie Siding Overhaul",
    rating: 5,
    headline: "Saved our siding from costly decay.",
    quote: "Other contractors just wanted to slap new paint over rotting lap board. RoofRight systematically identified where water was leaking from poor gutter installation, replaced the bad wood with James Hardie, and backed it with a solid warranty.",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Kenneth B.",
    location: "Round Rock, TX",
    service: "Precision Roof Repair",
    rating: 5,
    headline: "The estimate was dead-on transparent.",
    quote: "Their consultant spent 45 minutes walking our property and flew a camera drone to show us exactly why water was ponding above our garage. No sales gimmicks or 'sign today only' discounts. Just master-level professionalism.",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Marcus & Karen Cole",
    location: "Georgetown, TX",
    service: "Full Exterior Envelope",
    rating: 5,
    headline: "Completed in just 4 days with spotless cleanup.",
    quote: "They completed our entire roof and siding replacement in just 4 days. The magnetic sweep they did for nails every evening was incredible—our kids and dogs safely used the backyard immediately.",
    verified: true,
  },
  {
    id: "rev-5",
    name: "Elena Lindqvist",
    location: "Lakeway, TX",
    service: "Precision Roof Repair",
    rating: 5,
    headline: "Located an impossible leak in 20 minutes.",
    quote: "We had a leak that two other roofers couldn't locate. RoofRight diagnosed it within 20 minutes with a drone thermal pass and had the flashing rebuilt by 2 PM. Transparent pricing, zero pressure.",
    verified: true,
  },
  {
    id: "rev-6",
    name: "Thomas Wright",
    location: "Round Rock, TX",
    service: "Engineered Gutters",
    rating: 5,
    headline: "Saved our landscaping during flash storms.",
    quote: "The seamless gutters with custom rain diverters saved our landscaping during last spring's flash storms. The color match to our trim is 100% spot on. True craftsmen.",
    verified: true,
  },
];

export interface ServiceAreaItem {
  id: string;
  name: string;
  county: string;
  description: string;
  zipCodes: string[];
  features: string[];
  lat: number;
  lng: number;
}

export const SERVICE_AREAS: ServiceAreaItem[] = [
  {
    id: "austin",
    name: "Austin",
    county: "Travis County",
    description: "Serving Central Austin, West Austin, Tarrytown, Barton Hills, and surrounding historic and modern neighborhoods with full exterior restoration.",
    zipCodes: ["78701", "78703", "78704", "78731", "78746", "78759"],
    features: ["Rapid 4-hr storm dispatch", "Historic preservation compliance", "Drone thermal inspections"],
    lat: 30.2672,
    lng: -97.7431,
  },
  {
    id: "westlake",
    name: "Westlake Hills & Rollingwood",
    county: "Travis County",
    description: "Custom copper gutters, high-pitch standing seam metal roofs, and luxury architectural envelope systems for hillside custom estates.",
    zipCodes: ["78746", "78733"],
    features: ["Hillside watershed planning", "Copper & standing seam mastery", "HOA architectural submittal support"],
    lat: 30.2941,
    lng: -97.8014,
  },
  {
    id: "round-rock",
    name: "Round Rock",
    county: "Williamson County",
    description: "Class 4 impact shingle replacements and hail damage restoration for growing suburban subdivisions throughout Williamson County.",
    zipCodes: ["78664", "78665", "78681"],
    features: ["Insurance adjuster advocacy", "Hail-resistant roofing upgrade", "Same-day gutter fabrication"],
    lat: 30.5083,
    lng: -97.6789,
  },
  {
    id: "cedar-park",
    name: "Cedar Park & Leander",
    county: "Williamson County",
    description: "James Hardie siding conversions, replacement roofs, and continuous gutter shields for high-wind northern corridors.",
    zipCodes: ["78613", "78641", "78645"],
    features: ["Non-combustible Hardie siding", "Energy-saving attic ventilation", "Comprehensive 50-yr warranty"],
    lat: 30.5052,
    lng: -97.8203,
  },
  {
    id: "georgetown",
    name: "Georgetown",
    county: "Williamson County",
    description: "Specialized in large single-story ranch homes, Sun City active adult communities, and historic Georgetown square Victorians.",
    zipCodes: ["78626", "78628", "78633"],
    features: ["Single-day shingle tear-offs", "Magnetic yard sweeps", "0% interest financing"],
    lat: 30.6333,
    lng: -97.6778,
  },
  {
    id: "lakeway",
    name: "Lakeway & Lake Travis",
    county: "Travis County",
    description: "Lakefront weatherproofing engineered for high winds, driving rains, and intense sun exposure along the Lake Travis basin.",
    zipCodes: ["78734", "78738"],
    features: ["UV-reflective roofing granules", "Heavy storm-surge gutters", "Rot-proof composite trim"],
    lat: 30.3644,
    lng: -97.9789,
  },
  {
    id: "pflugerville",
    name: "Pflugerville",
    county: "Travis County",
    description: "Affordable full-exterior packages combining roofing, gutters, and siding for maximum property value and long-term security.",
    zipCodes: ["78660", "78691"],
    features: ["Synchronized 3-in-1 packages", "Fast turnaround", "Zero money down financing"],
    lat: 30.4547,
    lng: -97.6222,
  },
  {
    id: "dripping-springs",
    name: "Dripping Springs & Wimberley",
    county: "Hays County",
    description: "Modern farmhouse siding transformations, rainwater harvesting gutter designs, and metal roofing for hill country properties.",
    zipCodes: ["78620", "78676"],
    features: ["Rainwater collection pre-filtering", "Class A wildfire resistance", "Board and batten expertise"],
    lat: 30.1902,
    lng: -98.0867,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "roofing" | "repair" | "gutters" | "siding" | "financing";
}

export const FAQS: FAQItem[] = [
  {
    question: "Why should I hire one contractor for roofing, gutters, and siding?",
    answer: "Your exterior is an integrated water-shedding envelope. When different subcontractors handle your roof and gutters, each blames the other for leaks. With RoofRight, our single project manager coordinates the drip edge, gutter pitch, and wall flashing so water flows flawlessly without leaks or finger-pointing.",
    category: "general",
  },
  {
    question: "How long does a typical roof replacement take?",
    answer: "For most residential homes (2,000 to 3,500 sq ft), our certified crews complete the entire tear-off, decking re-nailing, barrier installation, and shingle application in 1 to 2 business days. We conduct full magnetic nail sweeps every evening.",
    category: "roofing",
  },
  {
    question: "Can my roof be repaired, or does it need full replacement?",
    answer: "If your roof is under 15 years old and damage is isolated (such as localized wind tear-off, a cracked pipe boot, or loose chimney step flashing), a precision repair is often sufficient. If the roof has widespread hail bruising, pervasive granule loss, or brittle curling shingles across multiple slopes, a full replacement is safer and more cost-effective.",
    category: "repair",
  },
  {
    question: "What makes seamless gutters better than sectional store-bought gutters?",
    answer: "Sectional gutters are pieced together every 10 to 12 feet with caulk and screws. Over time, thermal expansion causes every seam to leak, rotting your fascia board. RoofRight extrudes a single continuous piece of heavy-gauge aluminum on-site to match the exact length of your roofline with zero intermediate seams.",
    category: "gutters",
  },
  {
    question: "Why is James Hardie fiber cement preferred over traditional wood or vinyl siding?",
    answer: "James Hardie fiber cement is non-combustible (Class A fire rated), impervious to termites and woodpeckers, and does not melt like vinyl or rot like cedar. Finished with ColorPlus baked-on paint, it resists UV fading for decades with minimal maintenance.",
    category: "siding",
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes! We partner with premier home improvement lenders to offer flexible financing including 0% APR promotional terms for 12 or 18 months, as well as low-monthly-payment options up to 120 months. Checking your eligibility takes 90 seconds and will not impact your credit score.",
    category: "financing",
  },
  {
    question: "What is your magnetic nail sweep guarantee?",
    answer: "We know your family and pets walk in your driveway and yard. Every day on site, our crews run industrial magnetic rollers over all lawns, driveways, garden beds, and walkways. We guarantee leaving your property cleaner than we found it.",
    category: "general",
  },
];
