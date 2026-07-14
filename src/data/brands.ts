// Brands that have hosted events, partnered or spoken at w3.hub.
// Sourced from the event pipeline / BBF / w3.pizza records in Notion.
//
// The "Trusted by" wall shows ONLY brands that have a `logo` set — no text
// wordmarks. To add one: drop the file in public/images/brands/ and set
// `logo: "/images/brands/<file>.svg"` on that brand below.
// `compact: true` for square/padded logos that need extra height to match
// the visual weight of the wide wordmark logos.
export type Brand = { name: string; logo?: string; compact?: boolean };

export const TRUSTED_BRANDS: Brand[] = [
  // Confirmed event hosts / partners (green)
  { name: "SAP", logo: "/images/brands/sap.svg" },
  { name: "KPMG", logo: "/images/brands/kpmg.png", compact: true },
  { name: "Bitpanda", logo: "/images/brands/bitpanda.svg" },
  { name: "Bitvavo", logo: "/images/brands/bitvavo.png" },
  { name: "Bybit", logo: "/images/brands/bybit.png", compact: true },
  { name: "Consensys", logo: "/images/brands/consensys.webp" },
  { name: "Circle", logo: "/images/brands/circle.png" },
  { name: "OpenAI" },
  { name: "Anthropic" },
  { name: "Intercom" },
  // BBF partners / speakers (yellow — double-check before relying on any single one)
  { name: "Kraken" },
  { name: "Coinbase" },
  { name: "Ethereum Foundation" },
  { name: "Börse Stuttgart Digital" },
  { name: "SwissBorg" },
  { name: "Tangem" },
  { name: "OneFootball" },
  { name: "ETHGlobal" },
  { name: "Blockpit" },
  { name: "Aeternity Foundation" },
  { name: "Superteam Germany" },
];
