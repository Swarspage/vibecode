import newsprintPrompt from "./prompts/Newsprint.md?raw";
import monochromePrompt from "./prompts/Monochrome.md?raw";
import modernDarkPrompt from "./prompts/Modern Dark.md?raw";
import bauhausPrompt from "./prompts/Bauhaus.md?raw";
import minimalistModernPrompt from "./prompts/Minimalist Modern.md?raw";
import luxuryEditorialPrompt from "./prompts/Luxury Editorial.md?raw";
import terminalCliPrompt from "./prompts/Terminal CLI.md?raw";
import kineticTypographyPrompt from "./prompts/Kinetic Typography.md?raw";

import flatDesignPrompt from "./prompts/Flat Design.md?raw";
import artDecoPrompt from "./prompts/Art Deco.md?raw";
import materialYouPrompt from "./prompts/Material You.md?raw";
import neoBrutalismPrompt from "./prompts/Neo-brutalism.md?raw";
import boldTypographyPrompt from "./prompts/Bold Typography.md?raw";
import academiaClassicalPrompt from "./prompts/Academia Classical.md?raw";

import cyberpunkGlitchPrompt from "./prompts/Cyberpunk Glitch.md?raw";
import bitcoinDefiPrompt from "./prompts/Bitcoin DeFi.md?raw";
import playfulGeometricPrompt from "./prompts/Playful Geometric.md?raw";
import minimalistDarkPrompt from "./prompts/Minimalist Dark.md?raw";
import claymorphismPrompt from "./prompts/High-Fidelity Claymorphism.md?raw";
import serifPrompt from "./prompts/Serif.md?raw";
import botanicalOrganicPrompt from "./prompts/Botanical Organic.md?raw";
import vaporwaveOutrunPrompt from "./prompts/Vaporwave Outrun.md?raw";
import corporateTrustPrompt from "./prompts/Corporate Trust.md?raw";

import handDrawnPrompt from "./prompts/Hand-Drawn.md?raw";
import industrialSkeuomorphismPrompt from "./prompts/Industrial Skeuomorphism.md?raw";
import neumorphismPrompt from "./prompts/Neumorphism.md?raw";
import organicNaturalPrompt from "./prompts/Organic Natural.md?raw";
import maximalismDopaminePrompt from "./prompts/Maximalism Dopamine.md?raw";
import retro90sPrompt from "./prompts/Retro 90s Nostalgia.md?raw";
import aurelPrompt from "./prompts/Aurel Quiet Luxury Wealth.md?raw";

export const designPrompts = [
  {
    id: "newsprint",
    name: "Newsprint",
    slug: "newsprint",
    summary: "Editorial, high-contrast, zero-radius newspaper aesthetic.",
    tags: ["editorial", "light", "serif", "print", "high-density"],
    palette: {
      background: "#F9F9F7",
      foreground: "#111111",
      muted: "#E5E5E0",
      accent: "#CC0000",
      border: "#111111"
    },
    typography: {
      heading: "Playfair Display",
      body: "Lora",
      ui: "Inter",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/newsprint.html",
    prompt: newsprintPrompt
  },
  {
    id: "monochrome",
    name: "Minimalist Monochrome",
    slug: "monochrome",
    summary: "Pure black and white. Serif typography as the hero element. No accent colors.",
    tags: ["minimal", "monochrome", "serif", "high-end", "austere"],
    palette: {
      background: "#FFFFFF",
      foreground: "#000000",
      muted: "#F5F5F5",
      accent: "#000000",
      border: "#000000"
    },
    typography: {
      heading: "Playfair Display",
      body: "Source Serif 4",
      ui: "Inter",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/monochrome.html",
    prompt: monochromePrompt
  },
  {
    id: "bauhaus",
    name: "Bauhaus",
    slug: "bauhaus",
    summary: "Constructivist modernism with pure geometric beauty and primary colors.",
    tags: ["bauhaus", "geometric", "bold", "primary"],
    palette: {
      background: "#F0F0F0",
      foreground: "#121212",
      muted: "#E0E0E0",
      accent: "#D02020",
      border: "#121212"
    },
    typography: {
      heading: "Outfit",
      body: "Outfit",
      ui: "Outfit",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/bauhaus.html",
    prompt: bauhausPrompt
  },
  {
    id: "modern-dark",
    name: "Linear / Modern",
    slug: "modern-dark",
    summary: "Precision, depth, and fluidity with layered ambient lighting and interactive depth.",
    tags: ["dark", "modern", "linear", "ambient", "precision"],
    palette: {
      background: "#050506",
      foreground: "#EDEDEF",
      muted: "#0a0a0c",
      accent: "#5E6AD2",
      border: "rgba(255,255,255,0.06)"
    },
    typography: {
      heading: "Inter",
      body: "Inter",
      ui: "Inter",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/modern-dark.html",
    prompt: modernDarkPrompt
  },
  {
    id: "minimalist-modern",
    name: "Minimalist Modern",
    slug: "minimalist-modern",
    summary: "Electric blue gradient accent, animated depth, and confident dual-font typography.",
    tags: ["light", "gradient", "animated", "bold", "modern", "sans-serif"],
    palette: {
      background: "#FAFAFA",
      foreground: "#0F172A",
      muted: "#F1F5F9",
      accent: "#0052FF",
      border: "#E2E8F0"
    },
    typography: {
      heading: "Calistoga",
      body: "Inter",
      ui: "Inter",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/minimalist-modern.html",
    prompt: minimalistModernPrompt
  },
  {
    id: "luxury-editorial",
    name: "Luxury / Editorial",
    slug: "luxury-editorial",
    summary: "Warm alabaster, Playfair Display, gold accents, and cinematic 1500ms transitions.",
    tags: ["luxury", "editorial", "serif", "gold", "light", "elegant"],
    palette: {
      background: "#F9F8F6",
      foreground: "#1A1A1A",
      muted: "#EBE5DE",
      accent: "#D4AF37",
      border: "rgba(26,26,26,0.12)"
    },
    typography: {
      heading: "Playfair Display",
      body: "Inter",
      ui: "Inter",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/luxury-editorial.html",
    prompt: luxuryEditorialPrompt
  },
  {
    id: "terminal-cli",
    name: "Terminal CLI",
    slug: "terminal-cli",
    summary: "Phosphor green on black. JetBrains Mono. CRT scanlines. Hacker aesthetic.",
    tags: ["dark", "terminal", "mono", "retro", "hacker", "cli"],
    palette: {
      background: "#0a0a0a",
      foreground: "#33ff00",
      muted: "#1f521f",
      accent: "#ffb000",
      border: "#1f521f"
    },
    typography: {
      heading: "JetBrains Mono",
      body: "JetBrains Mono",
      ui: "JetBrains Mono",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/terminal-cli.html",
    prompt: terminalCliPrompt
  },
  {
    id: "kinetic-typography",
    name: "Kinetic Typography",
    slug: "kinetic-typography",
    summary: "Acid yellow, Space Grotesk, infinite marquees, and viewport-scale headlines.",
    tags: ["dark", "kinetic", "bold", "marquee", "brutalist", "animated"],
    palette: {
      background: "#09090B",
      foreground: "#FAFAFA",
      muted: "#27272A",
      accent: "#DFE104",
      border: "#3F3F46"
    },
    typography: {
      heading: "Space Grotesk",
      body: "Space Grotesk",
      ui: "Space Grotesk",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/kinetic-typography.html",
    prompt: kineticTypographyPrompt
  }
  ,
  {
    id: "flat-design",
    name: "Flat Design",
    slug: "flat-design",
    summary: "Confident reduction with pure form, bold geometry, and DM Sans 900 weight typography.",
    tags: ["light", "flat", "bold", "geometric", "sans-serif"],
    palette: {
      background: "#FFFFFF",
      foreground: "#1A1A2E",
      muted: "#F3F4F6",
      accent: "#4361EE",
      border: "#E5E7EB"
    },
    typography: {
      heading: "DM Sans",
      body: "DM Sans",
      ui: "DM Sans",
      mono: "DM Mono"
    },
    previewUrl: "/previews/flat-design.html",
    prompt: flatDesignPrompt
  },
  {
    id: "art-deco",
    name: "Art Deco",
    slug: "art-deco",
    summary: "Dark luxury, metallic gold borders, symmetrical geometry, and Cormorant Garamond.",
    tags: ["dark", "luxury", "gold", "geometric", "serif", "elegant"],
    palette: {
      background: "#0A0A0A",
      foreground: "#F2F0E4",
      muted: "#888888",
      accent: "#D4AF37",
      border: "#D4AF37"
    },
    typography: {
      heading: "Cormorant Garamond",
      body: "Josefin Sans",
      ui: "Josefin Sans",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/art-deco.html",
    prompt: artDecoPrompt
  },
  {
    id: "material-you",
    name: "Material You (MD3)",
    slug: "material-you",
    summary: "Adaptive tonal palettes, expressive geometry, and rich rounded interfaces.",
    tags: ["light", "material", "rounded", "purple", "modern", "sans-serif"],
    palette: {
      background: "#FFFBFE",
      foreground: "#1C1B1F",
      muted: "#F3EDF7",
      accent: "#6750A4",
      border: "#CAC4D0"
    },
    typography: {
      heading: "Nunito",
      body: "Roboto",
      ui: "Roboto",
      mono: "Roboto Mono"
    },
    previewUrl: "/previews/material-you.html",
    prompt: materialYouPrompt
  },
  {
    id: "neo-brutalism",
    name: "Neo-brutalism",
    slug: "neo-brutalism",
    summary: "Highlighter colors, hard black drop shadows, cream canvas, and bold outlines.",
    tags: ["light", "brutalist", "bold", "shadows", "colorful", "sans-serif"],
    palette: {
      background: "#FFFDF5",
      foreground: "#000000",
      muted: "#FFFFFF",
      accent: "#FF3B3B",
      border: "#000000"
    },
    typography: {
      heading: "Space Grotesk",
      body: "Space Grotesk",
      ui: "Space Grotesk",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/neo-brutalism.html",
    prompt: neoBrutalismPrompt
  },
  {
    id: "bold-typography",
    name: "Bold Typography",
    slug: "bold-typography",
    summary: "Typography as architecture. Bebas Neue at 14rem. Charcoal and warm orange.",
    tags: ["dark", "typography", "bold", "sans-serif", "minimal"],
    palette: {
      background: "#0D0D0D",
      foreground: "#F5F5F5",
      muted: "#6B6B6B",
      accent: "#FF6B35",
      border: "#2A2A2A"
    },
    typography: {
      heading: "Bebas Neue",
      body: "Inter",
      ui: "Inter",
      mono: "DM Mono"
    },
    previewUrl: "/previews/bold-typography.html",
    prompt: boldTypographyPrompt
  },
  {
    id: "academia-classical",
    name: "Academia / Classical",
    slug: "academia-classical",
    summary: "Deep mahogany, antique parchment text, polished brass accents, and EB Garamond.",
    tags: ["dark", "academic", "serif", "elegant", "gold"],
    palette: {
      background: "#1C1714",
      foreground: "#E8DFD4",
      muted: "#3D332B",
      accent: "#C9A962",
      border: "#4A3F35"
    },
    typography: {
      heading: "EB Garamond",
      body: "Source Serif 4",
      ui: "Source Serif 4",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/academia-classical.html",
    prompt: academiaClassicalPrompt
  }
  ,
  {
    id: "cyberpunk-glitch",
    name: "Cyberpunk / Glitch",
    slug: "cyberpunk-glitch",
    summary: "High-tech, low-life. Neon green, Orbitron typography, and deep void blacks with scanline effects.",
    tags: ["dark", "cyberpunk", "glitch", "neon", "monospace"],
    palette: {
      background: "#0a0a0f",
      foreground: "#e0e0e0",
      muted: "#1c1c2e",
      accent: "#00ff88",
      border: "#1c1c2e"
    },
    typography: {
      heading: "Orbitron",
      body: "JetBrains Mono",
      ui: "Share Tech Mono",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/cyberpunk-glitch.html",
    prompt: cyberpunkGlitchPrompt
  },
  {
    id: "bitcoin-defi",
    name: "Bitcoin DeFi",
    slug: "bitcoin-defi",
    summary: "The visual DNA of Bitcoin. True void backgrounds, dark matter surfaces, and digital gold gradients.",
    tags: ["dark", "crypto", "defi", "orange", "gold", "geometric"],
    palette: {
      background: "#030304",
      foreground: "#FFFFFF",
      muted: "#94A3B8",
      accent: "#F7931A",
      border: "#1E293B"
    },
    typography: {
      heading: "Space Grotesk",
      body: "Space Grotesk",
      ui: "Space Grotesk",
      mono: "Space Grotesk"
    },
    previewUrl: "/previews/bitcoin-defi.html",
    prompt: bitcoinDefiPrompt
  },
  {
    id: "playful-geometric",
    name: "Playful Geometric",
    slug: "playful-geometric",
    summary: "The antidote to sterile minimalism. Warm cream, punchy saturated colors, and friendly geometry.",
    tags: ["light", "playful", "colorful", "rounded", "sans-serif"],
    palette: {
      background: "#FFFDF5",
      foreground: "#1E293B",
      muted: "#F1F5F9",
      accent: "#8B5CF6",
      border: "#E2E8F0"
    },
    typography: {
      heading: "Outfit",
      body: "Plus Jakarta Sans",
      ui: "Plus Jakarta Sans",
      mono: "Plus Jakarta Sans"
    },
    previewUrl: "/previews/playful-geometric.html",
    prompt: playfulGeometricPrompt
  },
  {
    id: "minimalist-dark",
    name: "Minimalist Dark",
    slug: "minimalist-dark",
    summary: "Atmospheric depth. True black, off-white, and subtle radial light sources instead of flat colors.",
    tags: ["dark", "minimalist", "monochrome", "geometric", "sans-serif"],
    palette: {
      background: "#050505",
      foreground: "#FAFAFA",
      muted: "#888888",
      accent: "#FFFFFF",
      border: "#1A1A1A"
    },
    typography: {
      heading: "Space Grotesk",
      body: "Inter",
      ui: "Inter",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/minimalist-dark.html",
    prompt: minimalistDarkPrompt
  },
  {
    id: "high-fidelity-claymorphism",
    name: "High-Fidelity Claymorphism",
    slug: "high-fidelity-claymorphism",
    summary: "Soft, tactile, and deliciously 3D. Double-shadows, rounded geometry, and a candy shop palette.",
    tags: ["light", "claymorphism", "soft", "3d", "rounded", "colorful"],
    palette: {
      background: "#F4F1FA",
      foreground: "#332F3A",
      muted: "#635F69",
      accent: "#FF7B93",
      border: "#F4F1FA"
    },
    typography: {
      heading: "Nunito",
      body: "Nunito",
      ui: "Nunito",
      mono: "Nunito"
    },
    previewUrl: "/previews/high-fidelity-claymorphism.html",
    prompt: claymorphismPrompt
  },
  {
    id: "serif",
    name: "Serif",
    slug: "serif",
    summary: "Typographic elegance through classical restraint. Ivory base, rich black, and burnished gold.",
    tags: ["light", "editorial", "elegant", "serif", "minimal"],
    palette: {
      background: "#FAFAF8",
      foreground: "#1A1A1A",
      muted: "#6B6B6B",
      accent: "#B8860B",
      border: "#E8E8E0"
    },
    typography: {
      heading: "Playfair Display",
      body: "Source Sans 3",
      ui: "Source Sans 3",
      mono: "Source Sans 3"
    },
    previewUrl: "/previews/serif.html",
    prompt: serifPrompt
  },
  {
    id: "botanical-organic",
    name: "Botanical / Organic Serif",
    slug: "botanical-organic",
    summary: "A digital ode to nature. Sage green, terracotta, warm clay backgrounds, and Playfair italics.",
    tags: ["light", "nature", "organic", "serif", "earthy"],
    palette: {
      background: "#F4F1EA",
      foreground: "#2C362F",
      muted: "#DCD3C6",
      accent: "#7C9070",
      border: "#E8E3D9"
    },
    typography: {
      heading: "Playfair Display",
      body: "Lora",
      ui: "Lora",
      mono: "Lora"
    },
    previewUrl: "/previews/botanical-organic.html",
    prompt: botanicalOrganicPrompt
  },
  {
    id: "vaporwave-outrun",
    name: "Vaporwave / Outrun",
    slug: "vaporwave-outrun",
    summary: "Digital nostalgia meets neon future. Saturated cyan and pink over a deep purple void.",
    tags: ["dark", "vaporwave", "retro", "neon", "colorful", "synthwave"],
    palette: {
      background: "#0b001a",
      foreground: "#00ffff",
      muted: "#ff00ff",
      accent: "#ff00ff",
      border: "#ff00ff"
    },
    typography: {
      heading: "Orbitron",
      body: "VCR OSD Mono",
      ui: "Orbitron",
      mono: "VCR OSD Mono"
    },
    previewUrl: "/previews/vaporwave-outrun.html",
    prompt: vaporwaveOutrunPrompt
  },
  {
    id: "corporate-trust",
    name: "Corporate Trust",
    slug: "corporate-trust",
    summary: "The modern SaaS aesthetic. Indigo to violet gradients, colored shadows, and Plus Jakarta Sans.",
    tags: ["light", "saas", "clean", "professional", "gradient", "sans-serif"],
    palette: {
      background: "#F8FAFC",
      foreground: "#0F172A",
      muted: "#64748B",
      accent: "#4F46E5",
      border: "#E2E8F0"
    },
    typography: {
      heading: "Plus Jakarta Sans",
      body: "Plus Jakarta Sans",
      ui: "Plus Jakarta Sans",
      mono: "Plus Jakarta Sans"
    },
    previewUrl: "/previews/corporate-trust.html",
    prompt: corporateTrustPrompt
  }
  ,
  {
    id: "hand-drawn",
    name: "Hand-Drawn",
    slug: "hand-drawn",
    summary: "Authentic imperfection. Pencil blacks, marker reds, sticky notes, and scribbled borders.",
    tags: ["light", "hand-drawn", "playful", "sketch", "organic"],
    palette: {
      background: "#FAFAFA",
      foreground: "#111111",
      muted: "#FDE047",
      accent: "#EF4444",
      border: "#111111"
    },
    typography: {
      heading: "Kalam",
      body: "Patrick Hand",
      ui: "Patrick Hand",
      mono: "Patrick Hand"
    },
    previewUrl: "/previews/hand-drawn.html",
    prompt: handDrawnPrompt
  },
  {
    id: "industrial-skeuomorphism",
    name: "Industrial Skeuomorphism",
    slug: "industrial-skeuomorphism",
    summary: "Machined aluminum surfaces, safety orange toggles, and realistic heavy machinery styling.",
    tags: ["light", "skeuomorphism", "industrial", "3d", "hardware"],
    palette: {
      background: "#E4E6EB",
      foreground: "#1A1C23",
      muted: "#6C7280",
      accent: "#FF5A36",
      border: "#D1D5DB"
    },
    typography: {
      heading: "Space Grotesk",
      body: "Inter",
      ui: "Space Grotesk",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/industrial-skeuomorphism.html",
    prompt: industrialSkeuomorphismPrompt
  },
  {
    id: "neumorphism",
    name: "Neumorphism (Soft UI)",
    slug: "neumorphism",
    summary: "The illusion of physical depth. Soft cool grey bases with extruded outer and inset pressed shadows.",
    tags: ["light", "neumorphism", "soft", "3d", "minimal"],
    palette: {
      background: "#E0E5EC",
      foreground: "#3D4852",
      muted: "#798796",
      accent: "#4A90E2",
      border: "#E0E5EC"
    },
    typography: {
      heading: "Plus Jakarta Sans",
      body: "DM Sans",
      ui: "DM Sans",
      mono: "DM Sans"
    },
    previewUrl: "/previews/neumorphism.html",
    prompt: neumorphismPrompt
  },
  {
    id: "organic-natural",
    name: "Organic / Natural",
    slug: "organic-natural",
    summary: "Wabi-sabi aesthetics. Earth-drawn palettes, Fraunces serif, paper grain, and asymmetrical radii.",
    tags: ["light", "nature", "organic", "earthy", "serif"],
    palette: {
      background: "#F7F5F0",
      foreground: "#3E4A3D",
      muted: "#9C9C92",
      accent: "#879679",
      border: "#E8E5DF"
    },
    typography: {
      heading: "Fraunces",
      body: "Nunito",
      ui: "Nunito",
      mono: "Nunito"
    },
    previewUrl: "/previews/organic-natural.html",
    prompt: organicNaturalPrompt
  },
  {
    id: "maximalism-dopamine",
    name: "Maximalism / Dopamine",
    slug: "maximalism-dopamine",
    summary: "More is more. Cosmic purple voids, five hyper-bright neon accents, thick borders, and chaos.",
    tags: ["dark", "maximalist", "neon", "colorful", "loud"],
    palette: {
      background: "#0D0D1A",
      foreground: "#FFFFFF",
      muted: "#2D1B4E",
      accent: "#FF3AF2",
      border: "#FF3AF2"
    },
    typography: {
      heading: "Outfit",
      body: "DM Sans",
      ui: "DM Sans",
      mono: "Bangers"
    },
    previewUrl: "/previews/maximalism-dopamine.html",
    prompt: maximalismDopaminePrompt
  },
  {
    id: "retro-90s-nostalgia",
    name: "Retro / 90s Nostalgia",
    slug: "retro-90s-nostalgia",
    summary: "Windows 95 nostalgia. Teal desktops, gray windows, brutalist inset borders, and MS Sans Serif.",
    tags: ["light", "retro", "90s", "brutalist", "pixel"],
    palette: {
      background: "#008080",
      foreground: "#000000",
      muted: "#808080",
      accent: "#000080",
      border: "#dfdfdf"
    },
    typography: {
      heading: "Arial Black",
      body: "MS Sans Serif",
      ui: "MS Sans Serif",
      mono: "Courier New"
    },
    previewUrl: "/previews/retro-90s-nostalgia.html",
    prompt: retro90sPrompt
  },
  {
    id: "aurel-quiet-luxury-wealth",
    name: "Aurel / Quiet Luxury Wealth",
    slug: "aurel-quiet-luxury-wealth",
    summary: "Understated, precise, expensive, and calm. Ink, bone, and champagne palette for private wealth platforms.",
    tags: ["dark", "luxury", "wealth", "serif", "institutional", "metallic"],
    palette: {
      background: "#07070A",
      foreground: "#E7E5E0",
      muted: "#0C0C10",
      accent: "#E8C88C",
      border: "rgba(255,255,255,0.06)"
    },
    typography: {
      heading: "Instrument Serif",
      body: "Inter",
      ui: "Inter",
      mono: "JetBrains Mono"
    },
    previewUrl: "/previews/aurel.html",
    prompt: aurelPrompt
  }
];