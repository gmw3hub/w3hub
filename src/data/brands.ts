// Brands that have hosted events, partnered or spoken at w3.hub.
// Sourced from the event pipeline / BBF / w3.pizza records in Notion.
//
// To show a real logo instead of the text wordmark: drop a file in
// public/images/brands/ and set `logo: "/images/brands/<file>.webp"`.
// Keep logos single-colour / dark for a consistent wall.
export type Brand = { name: string; logo?: string };

export const TRUSTED_BRANDS: Brand[] = [
  // Confirmed event hosts / partners (green)
  { name: "SAP" },
  { name: "KPMG" },
  { name: "Bitpanda" },
  { name: "Bitvavo" },
  { name: "Bybit" },
  { name: "Consensys" },
  { name: "Circle" },
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
