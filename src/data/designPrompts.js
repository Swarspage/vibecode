import newsprintPrompt from "./prompts/Newsprint.md?raw";
import monochromePrompt from "./prompts/Monochrome.md?raw";
import modernDarkPrompt from "./prompts/Modern Dark.md?raw";
import bauhausPrompt from "./prompts/Bauhaus.md?raw";

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
  }
];
