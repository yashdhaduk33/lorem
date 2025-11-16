// quotes.js - Comprehensive quotes database
export const quotes = [
  // Overcoming Challenges
  {
    id: 1,
    text: "The obstacle in the path becomes the path. Never forget, within every obstacle is an opportunity to improve our condition.",
    author: "Ryan Holiday",
    category: "overcoming challenges",
    length: "medium",
    perspective: "philosophical",
    philosophicalInfluence: "stoicism",
    keywords: ["obstacles", "opportunity", "improvement", "success"],
    type: "inspirational",
    tone: "philosophical",
    timePeriod: "modern"
  },
  {
    id: 2,
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
    category: "overcoming challenges",
    length: "short",
    perspective: "practical",
    philosophicalInfluence: "sports psychology",
    keywords: ["perseverance", "resilience", "success", "motivation"],
    type: "motivational",
    tone: "encouraging",
    timePeriod: "20th century"
  },
  {
    id: 3,
    text: "The human spirit is to grow strong by conflict.",
    author: "William Ellery Channing",
    category: "overcoming challenges",
    length: "short",
    perspective: "spiritual",
    philosophicalInfluence: "transcendentalism",
    keywords: ["strength", "conflict", "growth", "spirit"],
    type: "philosophical",
    tone: "profound",
    timePeriod: "19th century"
  },

  // Success & Achievement
  {
    id: 4,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "success",
    length: "medium",
    perspective: "practical",
    philosophicalInfluence: "leadership",
    keywords: ["success", "failure", "courage", "persistence", "motivation"],
    type: "inspirational",
    tone: "authoritative",
    timePeriod: "20th century"
  },
  {
    id: 5,
    text: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
    category: "success",
    length: "short",
    perspective: "practical",
    philosophicalInfluence: "work ethic",
    keywords: ["success", "work", "effort", "achievement"],
    type: "motivational",
    tone: "witty",
    timePeriod: "modern"
  },

  // Love & Relationships
  {
    id: 6,
    text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
    author: "Victor Hugo",
    category: "love",
    length: "long",
    perspective: "emotional",
    philosophicalInfluence: "romanticism",
    keywords: ["love", "happiness", "acceptance", "relationships"],
    type: "philosophical",
    tone: "romantic",
    timePeriod: "19th century"
  },
  {
    id: 7,
    text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    author: "Unknown",
    category: "love",
    length: "medium",
    perspective: "emotional",
    philosophicalInfluence: "humanism",
    keywords: ["love", "relationships", "daily", "commitment"],
    type: "inspirational",
    tone: "caring",
    timePeriod: "modern"
  },

  // Motivation & Purpose
  {
    id: 8,
    text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson",
    category: "purpose",
    length: "long",
    perspective: "philosophical",
    philosophicalInfluence: "transcendentalism",
    keywords: ["purpose", "life", "compassion", "meaning", "motivation"],
    type: "philosophical",
    tone: "profound",
    timePeriod: "19th century"
  },
  {
    id: 9,
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "motivation",
    length: "short",
    perspective: "practical",
    philosophicalInfluence: "pragmatism",
    keywords: ["persistence", "time", "action", "motivation"],
    type: "motivational",
    tone: "direct",
    timePeriod: "20th century"
  }
];

// Available categories and filters for the tool
export const quoteCategories = [
  "overcoming challenges",
  "success",
  "love",
  "motivation",
  "purpose",
  "life",
  "wisdom"
];

export const quoteLengths = ["short", "medium", "long"];
export const perspectives = ["practical", "philosophical", "emotional", "spiritual"];
export const philosophicalInfluences = ["stoicism", "buddhism", "existentialism", "transcendentalism", "humanism", "romanticism", "pragmatism", "leadership", "sports psychology"];
export const quoteTypes = ["inspirational", "motivational", "philosophical", "practical"];
export const tones = ["encouraging", "profound", "authoritative", "witty", "romantic", "caring", "direct", "philosophical"];
export const timePeriods = ["ancient", "medieval", "renaissance", "18th century", "19th century", "20th century", "modern"];