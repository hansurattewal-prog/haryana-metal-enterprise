import { Product, Brand, FAQ } from "./types";

export const COMPANY_INFO = {
  name: "Haryana Metal Enterprises",
  suffix: "[Jind Wale]",
  proprietor: "Anil Chaudhary",
  phone: "+919560019790",
  phoneDisplay: "+91 9560019790",
  email: "haryanametalenterprise@gmail.com",
  address: "Haryana Metal Enterprise, Khasra 1122, tiranga building, Paul Colony, Rithala, Rohini, Delhi, 110085",
  gmapEmbedUrl: "https://maps.google.com/maps?q=Haryana%20Metal%20Enterprise,%20Khasra%201122,%20tiranga%20building,%20Paul%20Colony,%20Rithala,%20Rohini,%20Delhi,%20110085&t=&z=15&ie=UTF8&iwloc=&output=embed",
  whatsappUrl: "https://wa.me/919560019790?text=Hello%20Haryana%20Metal%20Enterprises%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%20industrial%20steel%2Froofing%20sheets.",
};

export const BRANDS: Brand[] = [
  {
    name: "Tata Steel",
    logoText: "TATA",
    description: "Premium durable alloy with excellent zinc coating and durability credentials.",
  },
  {
    name: "JSW Steel",
    logoText: "JSW",
    description: "Industry-standard high-strength tensile steel for complex warehouse layouts.",
  },
  {
    name: "AMNS India",
    logoText: "AM/NS",
    description: "Advanced heavy-gauge corrosion-resistant profile sheets and panels.",
  },
  {
    name: "Apollo Pipes",
    logoText: "APOLLO",
    description: "State-of-the-art structural hollow sections, ERW black & galvanized steel pipes.",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "ms-pipes",
    title: "Mild Steel Pipes (Square & Round)",
    description: "High-grade structural mild steel (MS) tubes in circular, rectangular, and square profiles suitable for load-bearing and heavy warehouse structural supports.",
    features: [
      "IS-1239 & IS-3589 certified structural grade",
      "Available in both Black Mild Steel and Galvanized (GI)",
      "Uniform thickness with perfect weld line durability",
      "Excellent bendability and weldability for frames"
    ],
    specifications: [
      { label: "Profile Shapes", value: "Round Tubes, Square (SHS), Rectangular (RHS)" },
      { label: "Outer Diameter", value: "15mm to 300mm NB" },
      { label: "Wall Thickness", value: "1.6mm to 10.0mm" },
      { label: "Steel Grade", value: "IS 4923 / YST-210 / YST-310" }
    ],
    applications: [
      "Warehouse structural trusses and pillars",
      "Industrial scaffolding & supports",
      "Heavy shed fabrication and structural engineering",
      "Fluid and gas low-pressure piping networks"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "profile-sheets",
    title: "Color-Coated Profile Roofing Sheets",
    description: "Premium metal corrugated profile sheets with high-durability modern color coating. Optimized for standard sheds, roofing overlays, and heavy weather protection.",
    features: [
      "Superior 5-layer weather defensive paint system",
      "High-tensile steel base metal (550 MPa yield strength)",
      "Advanced water channel alignment to prevent leakages",
      "Anti-capillary groove technology at crests"
    ],
    specifications: [
      { label: "Base Metal", value: "Pre-Painted Galvalume (PPGL) / PPGI" },
      { label: "Gauge Thickness", value: "0.35mm to 0.80mm" },
      { label: "Standard Width", value: "1070mm overall (1000mm cover width)" },
      { label: "Length Setup", value: "Custom sizes from 4 feet to 40 feet (On-Demand)" }
    ],
    applications: [
      "Industrial warehouse roofing & cladding",
      "Agricultural shelters, silos & sheds",
      "Commercial retail canopies and partitions",
      "Cold-storage structures & manufacturing plants"
    ],
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "tin-sheds",
    title: "Industrial Tin Sheds & Metal Supplies",
    description: "Robust galvanized zinc-coated tin corrugated sheets alongside vital structural metal components (Purlins, Gutters, Self-drilling fasteners) for end-to-end shed construction.",
    features: [
      "Thick zinc protective layer (Z120 - Z275 criteria)",
      "Traditional high-corrugation peak structural stiffness",
      "Resistant to high wind velocities & structural vibrations",
      "Zero maintenance required over decades of shelter life"
    ],
    specifications: [
      { label: "Zinc Coating", value: "90 GSM to 275 GSM standard" },
      { label: "Corrugation Depth", value: "18mm standard pitch waves" },
      { label: "Width Sizes", value: "910mm / 1220mm classic widths" },
      { label: "Supporting Parts", value: "C & Z Purlins, Ridge caps, Barge boards" }
    ],
    applications: [
      "Low-budget secure factory storage sections",
      "Temporary site offices & boundary barriers",
      "Rural farming barn roofing & safety outhouses",
      "Industrial storm-water gutters & eaves"
    ],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "warehouse-contracting",
    title: "End-to-End Warehouse contracting",
    description: "Complete structural warehouse contract services. We project-manage right from design blueprints, heavy structural framing, to profile sheet roofing execution.",
    features: [
      "Certified civil & structural layout design services",
      "Expert teams for fast on-site steel erection & welding",
      "Saves up to 30% construction timeline via Pre-Engineered setups",
      "Fully compliant with local industrial safety guidelines"
    ],
    specifications: [
      { label: "Project Types", value: "PEB Warehouses, Factory sheds, Mezzanine Floors" },
      { label: "Span Capabilities", value: "Clear spans up to 60 meters without mid-pillars" },
      { label: "Contract Mode", value: "Turnkey (Materials + Labour) or Labour Rate contract" },
      { label: "Execution Lead Time", value: "Treated in prompt 30 to 90 days windows" }
    ],
    applications: [
      "Large-scale logistics distribution centers",
      "Heavy engineering factories and workshops",
      "Automobile showrooms and service bays",
      "Multi-story steel structures & processing units"
    ],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
  }
];

export const PROFILE_COLORS = [
  { name: "Deep Industrial Red", code: "#B22222", description: "Standard high-visibility heat-reflective rust proof red.", textColor: "text-white" },
  { name: "Light Sky Blue", code: "#38BDF8", description: "Elegant heat-deflecting sky hue corresponding to modern blueprints.", textColor: "text-slate-900" },
  { name: "Steel Gray", code: "#64748B", description: "Dust-concealing minimalist sleek industrial steel color.", textColor: "text-white" },
  { name: "Forest Green", code: "#15803D", description: "Eco-friendly landscaping matching green shade for greenfield projects.", textColor: "text-white" },
];

export const MACHINERY_DETAILS = {
  title: "Precision \"Rapid Machine\" Profiling Setup",
  description: "Our Delhi facility features the legendary high-speed 'Rapid Machine' heavy-duty sheet rolling line. It shapes raw Galvalume coils into customized corrugated sheets, delivering clean edges, accurate depths, and exact physical lengths specified in your structural layout.",
  specs: [
    { name: "Rolling Speed", value: "Up to 30 meters per minute" },
    { name: "Minimum Length", value: "4 Feet (1.2 meters)" },
    { name: "Maximum Length", value: "45 Feet (13.7 meters) customized for long spans" },
    { name: "Hydraulic Cutting", value: "Automated PLC-controlled zero-gap post cutting system" },
    { name: "Corrugation Accuracy", value: "+ / - 1.0 mm pitch perfection" },
    { name: "Raw Coils Dealt", value: "Tata Bluescope, JSW Pragati & Bhushan Steel Coils" }
  ]
};

export const FAQS: FAQ[] = [
  {
    question: "Do you supply custom lengths of profile sheets?",
    answer: "Yes, absolutely! Equipped with our custom-built 'Rapid Machine' roll-profiler tool, we can deliver roofing sheets cut precisely to your specific requirements from 4 feet up to 45 feet. This eliminates on-site wastage and minimizes overlapping joints."
  },
  {
    question: "Which steel companies are you authorized to trade or deal in?",
    answer: "We deal in high-quality structural steel and roofing raw materials from the industry's most trusted manufacturers, including Tata Steel, JSW Steel, AMNS India, and Apollo Pipes. Every batch comes with standard test certificates."
  },
  {
    question: "Can you manage complete warehouse roofing contracts?",
    answer: "Yes, we are not just traders; we have a seasoned Warehouse Contracting division. We oversee industrial blueprints, fabrication of MS support structures, and the final mechanical fixing of corrugated profile sheets on a turnkey basis across Delhi-NCR and neighboring states."
  },
  {
    question: "What is the standard delivery timeline for urgent fabrication?",
    answer: "For standard sizes of MS Pipes and common colors of Profile Sheets (like Deep Red and Sky Blue), we maintain robust stock in Rithala and can dispatch within 24 to 48 hours. Custom profile rolling jobs are typically executed and shipped in 3 to 5 business days."
  },
  {
    question: "Where is your main office/factory located?",
    answer: "Our main yard is at Haryana Metal Enterprise, Khasra 1122, tiranga building, Paul Colony, Rithala, Rohini, Delhi, 110085 (Very close to Rithala Metro Station). You are welcome to visit and inspect the material and machinery in action!"
  }
];
