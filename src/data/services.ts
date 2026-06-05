import protectionAsset from "@/assets/service-protection.jpg.asset.json";
import privacyAsset from "@/assets/service-privacy.jpg.asset.json";
import successionAsset from "@/assets/service-succession.jpg.asset.json";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  icon: "ShieldCheck" | "EyeOff" | "GitBranch";
  highlights: { title: string; body: string }[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "asset-protection",
    title: "Asset Protection",
    tagline: "Fortify wealth against every foreseeable threat.",
    desc: "Shield your assets from lawsuits, divorce settlements, and creditor claims with structures built to endure.",
    image: protectionAsset.url,
    icon: "ShieldCheck",
    highlights: [
      { title: "Lawsuit Shielding", body: "Insulate operating assets from frivolous litigation through layered trust architecture." },
      { title: "Creditor Resistance", body: "Place wealth beyond the reach of future creditors using jurisdictionally tested structures." },
      { title: "Marital Insulation", body: "Protect family capital from divorce settlements without sacrificing access or income." },
    ],
    benefits: [
      "Multi-jurisdictional trust formation",
      "Holding company integration",
      "Asset segregation strategy",
      "Annual fiduciary review",
    ],
  },
  {
    slug: "absolute-privacy",
    title: "Absolute Privacy",
    tagline: "Discretion engineered into every layer of ownership.",
    desc: "Keep your estate entirely out of public records — discretion engineered into every layer.",
    image: privacyAsset.url,
    icon: "EyeOff",
    highlights: [
      { title: "Off-Record Ownership", body: "Hold property and equity through nominee and fiduciary structures that remove your name from public registries." },
      { title: "Confidential Succession", body: "Transfer assets without probate exposure or media-readable filings." },
      { title: "Compliant Discretion", body: "Privacy that satisfies KYC, FATCA, and CRS — never at odds with regulators." },
    ],
    benefits: [
      "Private trust company setup",
      "Confidential beneficiary registers",
      "Secure document vaulting",
      "Communications protocol",
    ],
  },
  {
    slug: "succession-certainty",
    title: "Succession Certainty",
    tagline: "A legally fortified transition — without delay or dispute.",
    desc: "Prevent legal delays and reduce family disputes with crystal-clear, legally fortified transitions.",
    image: successionAsset.url,
    icon: "GitBranch",
    highlights: [
      { title: "Probate-Free Transfer", body: "Move assets to heirs instantly upon trigger events — no court, no waiting." },
      { title: "Conflict Prevention", body: "Codified intent and neutral trusteeship prevent intra-family disputes before they begin." },
      { title: "Generational Continuity", body: "Governance frameworks that survive across two, three, and four generations." },
    ],
    benefits: [
      "Family governance charter",
      "Letter of wishes drafting",
      "Trustee selection & oversight",
      "Successor training program",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
