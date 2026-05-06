import almonds from "@/assets/dryfruit/almonds.jpg";
import pistachios from "@/assets/dryfruit/pistachios.jpg";
import dates from "@/assets/dryfruit/dates.jpg";
import cashews from "@/assets/dryfruit/cashews.jpg";
import walnuts from "@/assets/dryfruit/walnuts.jpg";
import saffron from "@/assets/dryfruit/saffron.jpg";

export type Product = {
  slug: string;
  index: string;
  origin: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  price: string;
  weight: string;
  notes: string[];
  pairings: string[];
  nutrition: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "kashmiri-almonds",
    index: "01",
    origin: "Kashmir Valley · India",
    name: "Royal Mamra Almonds",
    tagline: "Hand-shelled mountain almonds, slow-cured for sweetness.",
    description:
      "Grown at 2,400m altitude in the Kashmir valley, our Mamra almonds are harvested from century-old groves and sun-cured for forty days. Naturally rich in oil and softer than commercial varieties, they carry a delicate marzipan finish.",
    image: almonds,
    price: "₹ 1,490",
    weight: "500g · vacuum-sealed",
    notes: ["Marzipan", "Brown butter", "Light honey"],
    pairings: ["Black coffee", "Saffron milk", "Aged gouda"],
    nutrition: [
      { label: "Protein", value: "21g" },
      { label: "Healthy fats", value: "49g" },
      { label: "Fibre", value: "12g" },
      { label: "Vitamin E", value: "26mg" },
    ],
  },
  {
    slug: "iranian-pistachios",
    index: "02",
    origin: "Kerman · Iran",
    name: "Akbari Pistachios",
    tagline: "Long-shell Akbari kernels, the king of Persian pistachios.",
    description:
      "Sourced from a single estate in Kerman, our Akbari pistachios are the longest and rarest grade. Lightly roasted in shell with Sicilian sea salt to preserve the deep emerald colour and signature buttery snap.",
    image: pistachios,
    price: "₹ 1,890",
    weight: "500g · vacuum-sealed",
    notes: ["Toasted butter", "Sea salt", "Sweet pine"],
    pairings: ["Rosé wine", "Dark chocolate", "Goat cheese"],
    nutrition: [
      { label: "Protein", value: "20g" },
      { label: "Healthy fats", value: "45g" },
      { label: "Fibre", value: "10g" },
      { label: "Antioxidants", value: "High" },
    ],
  },
  {
    slug: "medjool-dates",
    index: "03",
    origin: "Jordan Valley · Jordan",
    name: "Royal Medjool Dates",
    tagline: "Plump, caramel-soft dates from the lowest orchards on earth.",
    description:
      "Grown 400m below sea level where mineral-rich water meets desert sun. Each Medjool is hand-picked at peak ripeness, gently steamed and packed within 48 hours — never refrigerated, never compressed.",
    image: dates,
    price: "₹ 990",
    weight: "750g · gift box",
    notes: ["Toffee", "Cinnamon", "Burnt caramel"],
    pairings: ["Espresso", "Tahini", "Aged whisky"],
    nutrition: [
      { label: "Natural sugar", value: "66g" },
      { label: "Potassium", value: "696mg" },
      { label: "Fibre", value: "7g" },
      { label: "Iron", value: "0.9mg" },
    ],
  },
  {
    slug: "w180-cashews",
    index: "04",
    origin: "Mangaluru Coast · India",
    name: "W180 Jumbo Cashews",
    tagline: "The largest grade — creamy, ivory and unbroken.",
    description:
      "W180 represents the top 1% of the harvest — only the largest, whitest kernels qualify. Steam-shelled by hand to protect the buttery crescent shape, then dry-roasted to a delicate golden hue.",
    image: cashews,
    price: "₹ 1,290",
    weight: "500g · vacuum-sealed",
    notes: ["Sweet cream", "Hazelnut", "Salted butter"],
    pairings: ["Champagne", "Brie", "Dark rum"],
    nutrition: [
      { label: "Protein", value: "18g" },
      { label: "Magnesium", value: "292mg" },
      { label: "Iron", value: "6.7mg" },
      { label: "Zinc", value: "5.6mg" },
    ],
  },
  {
    slug: "chilean-walnuts",
    index: "05",
    origin: "Chandler Estate · Chile",
    name: "Light-Half Walnuts",
    tagline: "Cold-cracked Chilean halves with the cleanest finish in the world.",
    description:
      "Grown in the Andean foothills with glacial irrigation. Our Light-Half grade is cold-cracked within hours of harvest to preserve the omega-3 oils, yielding pale ivory halves with almost no bitterness.",
    image: walnuts,
    price: "₹ 1,150",
    weight: "500g · vacuum-sealed",
    notes: ["Buttery", "Faintly grassy", "Clean finish"],
    pairings: ["Blue cheese", "Pear", "Cabernet"],
    nutrition: [
      { label: "Omega-3", value: "9g" },
      { label: "Protein", value: "15g" },
      { label: "Antioxidants", value: "Highest of any nut" },
      { label: "Fibre", value: "7g" },
    ],
  },
  {
    slug: "pampore-saffron",
    index: "06",
    origin: "Pampore · Kashmir",
    name: "Mongra Saffron",
    tagline: "The deepest red threads — only the stigma, never the style.",
    description:
      "Mongra is the rarest grade of Kashmiri saffron — only the deep crimson tip of each stigma is used. It takes 160,000 hand-plucked flowers to yield a single kilogram. Aroma: honey, hay and warm leather.",
    image: saffron,
    price: "₹ 4,990",
    weight: "5g · sealed glass vial",
    notes: ["Honey", "Sweet hay", "Warm leather"],
    pairings: ["Basmati rice", "Warm milk", "Persian tea"],
    nutrition: [
      { label: "Crocin", value: "Extra high" },
      { label: "Picrocrocin", value: "Premium" },
      { label: "Safranal", value: "Aromatic" },
      { label: "Grade", value: "ISO 3632 · I" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
