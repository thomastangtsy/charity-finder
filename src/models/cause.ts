export const causes = [
  "aapi-led",
  "adoption",
  "afghanistan",
  "agriculture",
  "animals",
  "athletics",
  "autism",
  "black-led",
  "buddhism",
  "cancer",
  "cats",
  "christianity",
  "climate",
  "conservation",
  "coronavirus",
  "culture",
  "dance",
  "disabilities",
  "disease",
  "dogs",
  "education",
  "entrepreneurship",
  "environment",
  "filmandtv",
  "food-security",
  "freepress",
  "gender-equality",
  "health",
  "hinduism",
  "housing",
  "humans",
  "immigrants",
  "indigenous-led",
  "indigenous-peoples",
  "islam",
  "judaism",
  "justice",
  "latine-led",
  "legal",
  "lgbt",
  "libraries",
  "maui-wildfires",
  "mena-led",
  "mental-health",
  "museums",
  "music",
  "oceans",
  "parks",
  "poverty",
  "racial-justice",
  "radio",
  "refugees",
  "religion",
  "research",
  "science",
  "seniors",
  "space",
  "theater",
  "transgender",
  "ukraine",
  "veterans",
  "art",
  "votingrights",
  "water",
  "wildfires",
  "wildlife",
  "women-led",
  "womens-health",
  "youth",
] as const;

export type CauseType = (typeof causes)[number];

export default causes;
