export const COMPANY = {
  name: "Grandezza",
  tagline: "From Design to Execution — Luxury Spaces, Fully Delivered",
  email: "hello@grandezza.in",
  phone: "+91 98765 43210",
  address: "Level 12, The Capital, Bandra-Kurla Complex, Mumbai 400051",
  instagram: "https://instagram.com/grandezza",
  linkedin: "https://linkedin.com/company/grandezza",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "30+", label: "Years of Legacy" },
  { value: "500+", label: "Skilled Workforce" },
  { value: "1200+", label: "Projects Delivered" },
  { value: "15+", label: "Cities Served" },
];

export const SERVICES = [
  {
    title: "Interior Design",
    description:
      "Bespoke interiors crafted to reflect your vision — from concept boards to photorealistic renders.",
    icon: "Palette",
    image: "/assets/living-room-2.png",
  },
  {
    title: "Turnkey Projects",
    description:
      "Complete design-to-delivery execution with zero coordination overhead for the client.",
    icon: "Key",
    image: "/assets/dining-luxury.png",
  },
  {
    title: "Renovation",
    description:
      "Transforming existing spaces into luxurious environments with precision craftsmanship.",
    icon: "Hammer",
    image: "/assets/bedroom-grey-1.png",
  },
  {
    title: "Custom Furniture",
    description:
      "In-house manufacturing of bespoke furniture pieces tailored to exact specifications.",
    icon: "Armchair",
    image: "/assets/wardrobe-wood.png",
  },
  {
    title: "Construction",
    description:
      "Full-scale construction and fit-out services backed by Sharieff Creations' 30-year heritage.",
    icon: "Building2",
    image: "/assets/kitchen-1.png",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We begin with an in-depth consultation to understand your vision, lifestyle, and requirements.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Our design team develops detailed concepts, mood boards, and 3D visualizations.",
  },
  {
    step: "03",
    title: "Planning",
    description:
      "Precise project planning including timelines, material sourcing, and workforce allocation.",
  },
  {
    step: "04",
    title: "Execution",
    description:
      "Our 500+ skilled workforce executes every detail with the highest standards of craftsmanship.",
  },
  {
    step: "05",
    title: "Handover",
    description:
      "Final walkthrough, quality inspection, and a fully delivered luxury space — on time.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    slug: "zahid-residence",
    title: "Zahid Residence",
    category: "Complete Home",
    location: "Mumbai",
    area: "2,400 sq ft",
    year: "2024",
    client: "Private Client",
    featured: true,
    image: "/assets/living-room-2.png",
    heroImage: "/assets/living-room-2.png",
    description:
      "A complete residential fit-out spanning living, dining, kitchen, master bedroom, children's room, and a custom pooja unit. The brief called for a warm, organic aesthetic rooted in natural materials — timber, woven cane, and hand-finished plaster — that feels both luxurious and deeply lived-in.",
    descriptionLong:
      "Exposed timber ceiling beams and a sculptural cane fan anchor the living room, which doubles as a home cinema with built-in arched display units. The master bedroom is an amber-lit retreat with bespoke joinery and a carved rosewood mirror. The kitchen brings precision cabinetry in cream and walnut to an L-shaped plan, while the dining room centres on a custom pooja unit in dark rosewood with marble inlay — the spiritual heart of the home. Every piece of furniture was designed and manufactured in-house.",
    gallery: [
      "/assets/living-room-1.png",
      "/assets/living-room-3.png",
      "/assets/master-bedroom-1.png",
      "/assets/master-bedroom-2.png",
      "/assets/dining-2.png",
      "/assets/kitchen-1.png",
    ],
    services: ["Interior Design", "Custom Furniture", "Turnkey Delivery"],
  },
  {
    id: 2,
    slug: "blue-luxury-suite",
    title: "The Blue Luxury Suite",
    category: "Bedroom",
    location: "Pune",
    area: "850 sq ft",
    year: "2023",
    client: "Private Client",
    featured: true,
    image: "/assets/bedroom-blue-1.png",
    heroImage: "/assets/bedroom-blue-3.png",
    description:
      "A bold master suite designed around a deep navy accent wall, bespoke panelled headboard, and custom dressing area. The client wanted a space that felt like a five-star hotel suite — immersive, dramatic, and entirely personal.",
    descriptionLong:
      "The headboard wall is upholstered in deep navy fabric with vertical slatted panelling in brushed brass, topped by a geometric mirror arrangement. Pendant lighting in aged brass frames the bed on both sides. The dressing area features a full-height wardrobe in navy lacquer and white gloss, with a custom vanity unit and cloud-form mirror. The green-toned alternate dressing room offers a contrasting sanctuary within the same suite.",
    gallery: [
      "/assets/bedroom-blue-2.png",
      "/assets/bedroom-blue-3.png",
      "/assets/bedroom-blue-4.png",
      "/assets/bedroom-blue-5.png",
      "/assets/bedroom-blue-6.png",
      "/assets/bedroom-blue-1.png",
    ],
    services: ["Interior Design", "Custom Furniture", "Lighting Design"],
  },
  {
    id: 3,
    slug: "grand-dining-room",
    title: "Grand Dining Room",
    category: "Living & Dining",
    location: "Mumbai",
    area: "620 sq ft",
    year: "2024",
    client: "Private Client",
    featured: true,
    image: "/assets/dining-luxury.png",
    heroImage: "/assets/dining-luxury.png",
    description:
      "An opulent dining room designed for entertaining at the highest level — a glass-top dining table for ten, set against a floor-to-ceiling feature wall in rich walnut veneer and hand-cut brass inlay, with custom velvet seating in midnight blue.",
    descriptionLong:
      "The feature wall is the centrepiece: a geometric composition of walnut veneer panels, lacquered black accents, and brass diamond inlays that catches the light from every angle. Seating is in custom midnight-blue velvet with polished chrome legs. A single oversized globe pendant draws the eye upward, while recessed cove lighting creates a warm, intimate atmosphere for after-dinner conversation. All furniture and joinery was manufactured in-house.",
    gallery: [
      "/assets/dining-luxury.png",
      "/assets/dining-1.png",
      "/assets/dining-2.png",
      "/assets/dining-3.png",
      "/assets/pooja-unit.png",
    ],
    services: ["Interior Design", "Custom Furniture", "Lighting Design"],
  },
  {
    id: 4,
    slug: "rose-suite",
    title: "The Rose Suite",
    category: "Bedroom",
    location: "Hyderabad",
    area: "420 sq ft",
    year: "2024",
    client: "Private Client",
    featured: false,
    image: "/assets/bedroom-pink-4.png",
    heroImage: "/assets/bedroom-pink-4.png",
    description:
      "A bespoke bedroom for a young client who wanted something unlike anything available off the shelf — a flower-form headboard in blush pink, warm terracotta walls, and a custom floating vanity with an oval mirror.",
    descriptionLong:
      "The headboard was hand-crafted in sculpted MDF with a brushed gold frame — each petal individually formed and upholstered. The walls are finished in warm terracotta micro-plaster, contrasting with a sage-green lounge corner. A floating vanity in light grey with ribbed drawer fronts and a large oval mirror completes the dressing area. Custom wall shelving in powder-coated steel adds a playful, editorial edge.",
    gallery: [
      "/assets/bedroom-pink-1.png",
      "/assets/bedroom-pink-2.png",
      "/assets/bedroom-pink-3.png",
      "/assets/bedroom-pink-4.png",
    ],
    services: ["Interior Design", "Custom Furniture"],
  },
  {
    id: 5,
    slug: "classical-white-interiors",
    title: "Classical White Interiors",
    category: "Bedroom",
    location: "Delhi",
    area: "560 sq ft",
    year: "2023",
    client: "Private Client",
    featured: false,
    image: "/assets/bedroom-white-4.png",
    heroImage: "/assets/bedroom-white-2.png",
    description:
      "An elegant French classical bedroom in ivory and white — panelled walls with ornate plasterwork, a carved oval mirror, and a tufted sofa in cream — designed for a client who wanted timeless European refinement in a contemporary Indian home.",
    descriptionLong:
      "The wall panels are in hand-carved plaster with a boiserie treatment finished in off-white and pale gold. The bed, bedside units, and dressing table are all custom-crafted in solid hardwood with a distressed ivory lacquer. The floor is polished dark marble with a geometric inlay border. The room reads as a complete suite — bedroom, sitting area, and dressing room unified by consistent moulding profiles and a restrained palette of ivory, cream, and gold.",
    gallery: [
      "/assets/bedroom-white-1.png",
      "/assets/bedroom-white-2.png",
      "/assets/bedroom-white-3.png",
      "/assets/bedroom-white-4.png",
    ],
    services: ["Interior Design", "Custom Furniture"],
  },
  {
    id: 6,
    slug: "kids-room-collection",
    title: "Kids Room Collection",
    category: "Bedroom",
    location: "Bangalore",
    area: "320 sq ft",
    year: "2024",
    client: "Private Client",
    featured: false,
    image: "/assets/bedroom-kids-pink-2.png",
    heroImage: "/assets/bedroom-kids-pink-1.png",
    description:
      "A joyful children's bedroom with a custom pink flower-form headboard, a pink arch wardrobe, and a compact study nook — designed to grow with the child and inspire creativity at every age.",
    descriptionLong:
      "The cloud-form headboard in blush pink upholstery is the room's signature piece — playful without being juvenile. The wardrobe features white arch panels on a blush pink ground, with circular pull handles. Storage is integrated throughout — above-bed shelving, bedside drawers, and a study corner with open shelving in warm walnut. The palette stays consistent in powder pink, warm white, and natural timber to ensure the room ages gracefully.",
    gallery: [
      "/assets/bedroom-kids-pink-1.png",
      "/assets/bedroom-kids-pink-2.png",
      "/assets/bedroom-kids-pink-3.png",
      "/assets/kids-wardrobe-pink.png",
      "/assets/bedroom-kids-blue.png",
    ],
    services: ["Interior Design", "Custom Furniture"],
  },
  {
    id: 7,
    slug: "contemporary-bedroom",
    title: "Contemporary Light Bedroom",
    category: "Bedroom",
    location: "Chennai",
    area: "380 sq ft",
    year: "2023",
    client: "Private Client",
    featured: false,
    image: "/assets/bedroom-light-1.png",
    heroImage: "/assets/bedroom-light-1.png",
    description:
      "A clean, light-filled contemporary bedroom with a textured floral accent wall, a concrete-grey wardrobe, and a marble-topped dressing table. Designed for a young professional couple who wanted calm, uncluttered luxury.",
    descriptionLong:
      "The accent wall behind the bed features a delicate blush floral wallcovering framed by a recessed light cove. The wardrobe is finished in textured concrete-grey with reflective aluminium inlays and paired with a marble-and-timber dressing table. The palette of white, blush, grey, and warm wood keeps the room feeling fresh and hotel-grade without sacrificing warmth.",
    gallery: [
      "/assets/bedroom-light-1.png",
      "/assets/bedroom-light-2.png",
      "/assets/bedroom-grey-1.png",
      "/assets/bedroom-grey-wardrobe.png",
    ],
    services: ["Interior Design", "Custom Furniture"],
  },
  {
    id: 8,
    slug: "modern-kitchen-living",
    title: "Modern Kitchen & Living",
    category: "Living & Dining",
    location: "Mumbai",
    area: "1,100 sq ft",
    year: "2024",
    client: "Private Client",
    featured: false,
    image: "/assets/tv-unit.png",
    heroImage: "/assets/tv-unit.png",
    description:
      "A contemporary open-plan living and kitchen design — marble TV wall with a floating walnut media unit, marble staircase with steel fins, and a precision kitchen in cream and dark walnut with herringbone backsplash tiles.",
    descriptionLong:
      "The living room anchors around a large-format marble TV wall with a bespoke floating walnut cabinet below. Steel slat fins divide the living from the staircase, which is clad entirely in Carrara marble with integrated garden lighting. The kitchen is L-shaped with cream base units, walnut upper cabinets, herringbone tile splashback, and open shelving in raw steel. All cabinetry was fabricated in-house and installed by our fit-out team.",
    gallery: [
      "/assets/tv-unit.png",
      "/assets/tv-unit-2.png",
      "/assets/kitchen-1.png",
      "/assets/kitchen-2.png",
      "/assets/kids-bedroom-alt-1.png",
    ],
    services: ["Interior Design", "Custom Furniture", "Turnkey Delivery"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Rahul Mehta",
    role: "Homeowner, Mumbai",
    quote:
      "Grandezza transformed our home into a space that truly reflects who we are. The attention to detail and seamless execution was extraordinary — every corner felt intentional.",
    initials: "RM",
  },
  {
    name: "Priya Nair",
    role: "Homeowner, Hyderabad",
    quote:
      "From the first consultation to the final handover, the experience was flawless. They understood our vision better than we did ourselves.",
    initials: "PN",
  },
  {
    name: "Arjun Kapoor",
    role: "Homeowner, Pune",
    quote:
      "The turnkey delivery model saved us months of stress. The quality of work speaks for itself — we have already commissioned our second project with Grandezza.",
    initials: "AK",
  },
];

export const WHY_US = [
  {
    title: "500+ Skilled Team",
    description:
      "An in-house workforce of designers, engineers, craftsmen, and project managers.",
  },
  {
    title: "End-to-End Execution",
    description:
      "We handle everything from concept to completion — no third-party coordination required.",
  },
  {
    title: "Custom Manufacturing",
    description:
      "Our own fabrication units ensure every piece is made to exact specifications.",
  },
  {
    title: "30+ Year Legacy",
    description:
      "Built on the foundation of Sharieff Creations — a name trusted for three decades.",
  },
];
