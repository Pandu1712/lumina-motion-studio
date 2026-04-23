import rigMove from "@/assets/motion/rig_move.png";
import drilling from "@/assets/motion/drilling.png";
import generators from "@/assets/motion/generators.png";
import kenworth from "@/assets/motion/kenworth.png";
import logistics from "@/assets/motion/logistics.png";
import saudi from "@/assets/motion/saudi.png";

export type Service = {
  slug: string;
  index: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  video?: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  contact: { name: string; role: string; email: string; phone: string };
};

export const services: Service[] = [
  {
    slug: "rig-moving",
    index: "01",
    category: "Cargo Haulage & Supply Yard",
    title: "OFSAT Rig Moving",
    tagline: "Premier rig moving company in the Sultanate of Oman since 1984.",
    description:
      "For the last 20 years OFSAT have enjoyed a long-term partnership with BahwanDHL to help shape and modernise rig moving and logistics. We use a range of differing technologies to ensure that rig moves and cargo operations are run safely, efficiently and reliably.",
    image: rigMove,
    video: "https://cdn.pixabay.com/video/2024/06/19/217278_large.mp4",
    stats: [
      { label: "Land rigs moved", value: "110+" },
      { label: "Cargo transported", value: "90,000 t" },
      { label: "Kilometres covered", value: "7.5M" },
      { label: "Years of operation", value: "40+" },
    ],
    highlights: [
      "Comprehensive rig move process executed in parallel operations",
      "Onsite operations integrated with drilling contractor personnel",
      "Pre-move surveys and remedial route work confirmed",
      "Vehicle, training and asset records audited continuously",
    ],
    contact: {
      name: "Chris Dewsnap",
      role: "Operations Manager · Rig Moving",
      email: "operations@example.com",
      phone: "+968 9910 2739",
    },
  },
  {
    slug: "generators",
    index: "02",
    category: "Power Solutions",
    title: "AGGREKO Generators",
    tagline: "Powering progress — wherever energy is needed, on demand.",
    description:
      "We deliver temporary and modular power so businesses can grow and communities can thrive. From mines and data centres to manufacturing sites and entire cities, reliable energy has never been more critical.",
    image: generators,
    video: "https://cdn.pixabay.com/video/2024/02/10/212001-944207865_large.mp4",
    stats: [
      { label: "Installed MW", value: "320" },
      { label: "Active sites", value: "48" },
      { label: "Uptime", value: "99.97%" },
      { label: "Response time", value: "<6 h" },
    ],
    highlights: [
      "Modular gensets from 60 kVA to 2 MW",
      "Hybrid renewable + diesel platforms",
      "Remote telemetry & 24/7 monitoring",
      "Tier-4 emissions compliant fleet",
    ],
    contact: {
      name: "Rashid Al Hinai",
      role: "Power Solutions Lead",
      email: "power@example.com",
      phone: "+968 9910 4421",
    },
  },
  {
    slug: "drilling",
    index: "03",
    category: "Water Well & Top Hole",
    title: "OFSAT Drilling",
    tagline: "Best-in-class equipment delivering results to the highest standard.",
    description:
      "OFSAT Drilling is one of the leaders in providing water well and top hole drilling services in the Sultanate of Oman. With high-performance work teams and the most advanced fleet in the region, every project is delivered with precision.",
    image: drilling,
    video: "https://cdn.pixabay.com/video/2017/09/11/11945-233836077_large.mp4",
    stats: [
      { label: "Wells drilled", value: "1,240" },
      { label: "Avg depth", value: "320 m" },
      { label: "Active rigs", value: "12" },
      { label: "Safety record", value: "0 LTI" },
    ],
    highlights: [
      "Top-hole drilling for major operators",
      "Water well exploration & completion",
      "Mud logging and geological mapping",
      "Real-time directional control",
    ],
    contact: {
      name: "Salim Al Rawahi",
      role: "Drilling Operations",
      email: "drilling@example.com",
      phone: "+968 9910 5532",
    },
  },
  {
    slug: "kenworth",
    index: "04",
    category: "Sales · Service · Parts",
    title: "KENWORTH Trucks",
    tagline: "Manufacturer of the world's best heavy and medium duty trucks.",
    description:
      "Kenworth is an industry leader in providing fuel-saving technology solutions that help increase efficiency and reduce emissions. As authorised partners, we deliver sales, service and a complete parts ecosystem.",
    image: kenworth,
    video: "https://cdn.pixabay.com/video/2022/12/18/143479-782374009_large.mp4",
    stats: [
      { label: "Trucks delivered", value: "640" },
      { label: "Service centres", value: "6" },
      { label: "Parts SKUs", value: "12k" },
      { label: "Avg MPG gain", value: "+18%" },
    ],
    highlights: [
      "Authorised Kenworth dealer network",
      "Premium T880 / W990 line-up",
      "Predictive maintenance program",
      "OEM parts with same-day dispatch",
    ],
    contact: {
      name: "Mohammed Al Kindi",
      role: "Fleet Sales Director",
      email: "kenworth@example.com",
      phone: "+968 9910 6643",
    },
  },
  {
    slug: "transport",
    index: "05",
    category: "Logistics & Beyond",
    title: "Al Mutahidha Transport",
    tagline: "Riding on Oman's strengths as a regional trading hub.",
    description:
      "Established in 1979, Al Mutahidha Transport played an important role in the nation's development through logistics expertise and the ability to professionally transport goods throughout the country.",
    image: logistics,
    video: "https://cdn.pixabay.com/video/2019/04/23/23008-332257750_large.mp4",
    stats: [
      { label: "Established", value: "1979" },
      { label: "Fleet size", value: "420" },
      { label: "Routes", value: "85" },
      { label: "On-time", value: "98.4%" },
    ],
    highlights: [
      "Cross-border GCC freight",
      "Project cargo & oversize loads",
      "Supply yard & bonded warehousing",
      "Customs clearance integrated",
    ],
    contact: {
      name: "Hamood Al Balushi",
      role: "Logistics Director",
      email: "logistics@example.com",
      phone: "+968 9910 7754",
    },
  },
  {
    slug: "saudi",
    index: "06",
    category: "OFSAT in Saudi Arabia",
    title: "OFSAT Saudi",
    tagline: "Moving rigs, hoists and providing logistics solutions since 2018.",
    description:
      "With a fleet of more than 300 pieces of specialised heavy oilfield winch trucks, cranes, forklifts, low beds and other vehicles, OFSAT Saudi is a complete logistics partner across the Kingdom.",
    image: saudi,
    video: "https://cdn.pixabay.com/video/2025/11/04/313796_large.mp4",
    stats: [
      { label: "Equipment units", value: "300+" },
      { label: "Active since", value: "2018" },
      { label: "Major bases", value: "4" },
      { label: "Local hires", value: "85%" },
    ],
    highlights: [
      "Heavy oilfield winch truck fleet",
      "Cranes, forklifts and low beds",
      "Saudi Vision 2030 aligned operations",
      "Local content commitment",
    ],
    contact: {
      name: "Khalid Al Otaibi",
      role: "KSA Country Manager",
      email: "ksa@example.com",
      phone: "+966 5500 1122",
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
