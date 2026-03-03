/**
 * PRODUCTS DATA - Easy to modify!
 *
 * To add a new product:
 *   1. Add a new object to the `products` array below
 *   2. Fill in the fields (id, name, description, price, category, image, featured)
 *   3. Save - the Products page will auto-update
 *
 * To edit a product:
 *   1. Find the product by its `id` or `name`
 *   2. Change whichever fields you need
 *
 * To remove a product:
 *   1. Delete the entire object from the array
 *
 * Categories available: "Art", "Fashion", "Food", "Books", "Music", "Handicraft", "Wellness", "Tech", "Home Decor"
 * (You can add new categories freely - they auto-appear in the filter)
 */

export type Product = {
  id: string
  name: string
  nameInBengali?: string
  description: string
  price: string
  category: string
  image: string
  featured?: boolean
  badge?: string
  link?: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Handloom Tant Saree",
    nameInBengali: "তাঁত শাড়ি",
    description:
      "Authentic Bengali tant saree handwoven by artisans from Shantipur. Each piece tells a story of centuries-old weaving traditions. Lightweight, breathable cotton perfect for every season.",
    price: "1,499",
    category: "Fashion",
    image: "/images/culture-illustration.jpg",
    featured: true,
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Patachitra Painting",
    nameInBengali: "পটচিত্র",
    description:
      "Traditional scroll painting from Midnapore, depicting stories from Ramayana and local folklore. Hand-painted on cloth using natural dyes by master Patua artists.",
    price: "2,999",
    category: "Art",
    image: "/images/hero-illustration.jpg",
    featured: true,
    badge: "Handmade",
  },
  {
    id: "3",
    name: "Bengali Spice Box Set",
    nameInBengali: "মশলার বাক্স",
    description:
      "Curated collection of authentic Bengali spices - Radhuni, Kalo Jeere, Posto, Panch Phoron, and more. Sourced directly from Bengal's spice gardens.",
    price: "799",
    category: "Food",
    image: "/images/community-illustration.jpg",
    featured: false,
  },
  {
    id: "4",
    name: "Rabindra Sangeet Vinyl",
    nameInBengali: "রবীন্দ্র সঙ্গীত",
    description:
      "Limited edition vinyl record featuring 12 timeless Rabindra Sangeet tracks performed by contemporary Bengali artists. Includes lyric booklet with English translations.",
    price: "1,199",
    category: "Music",
    image: "/images/entrepreneur-illustration.jpg",
    featured: true,
    badge: "Limited Edition",
  },
  {
    id: "5",
    name: "Dokra Metal Figurine",
    nameInBengali: "ডোকরা শিল্প",
    description:
      "Lost-wax casting metal art from Bankura. Each figurine is unique - handcrafted by tribal artisans using a 4,000-year-old technique. A perfect collector's item.",
    price: "1,899",
    category: "Handicraft",
    image: "/images/hero-illustration.jpg",
    featured: false,
    badge: "Heritage Art",
  },
  {
    id: "6",
    name: "Bengali Poetry Anthology",
    nameInBengali: "কবিতা সংকলন",
    description:
      "A curated anthology of modern Bengali poetry featuring both established and emerging poets. Bilingual edition with Bengali originals and English translations.",
    price: "499",
    category: "Books",
    image: "/images/culture-illustration.jpg",
    featured: false,
  },
  {
    id: "7",
    name: "Terracotta Decorative Plate",
    nameInBengali: "পোড়ামাটির থালা",
    description:
      "Handcrafted terracotta plate from Bishnupur featuring traditional temple motifs. Perfect for wall display. Finished with natural lacquer for longevity.",
    price: "699",
    category: "Home Decor",
    image: "/images/community-illustration.jpg",
    featured: false,
  },
  {
    id: "8",
    name: "Neem Wood Comb Set",
    nameInBengali: "নিমকাঠের চিরুনি",
    description:
      "Set of 3 handcarved neem wood combs - anti-static, anti-dandruff, eco-friendly. Crafted by artisans in rural Bengal using sustainable forestry practices.",
    price: "349",
    category: "Wellness",
    image: "/images/entrepreneur-illustration.jpg",
    featured: false,
  },
]

/**
 * Get all unique categories from the products list.
 * No need to maintain a separate list - this auto-generates from products.
 */
export function getCategories(): string[] {
  const cats = new Set(products.map((p) => p.category))
  return Array.from(cats).sort()
}

/**
 * Get only featured products
 */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}
