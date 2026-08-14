import { designPrompts } from "../data/designPrompts";
import DesignPromptCard from "../components/DesignPromptCard";

const DesignPromptsPage = () => {
  return (
    <section style={{ paddingTop: "112px", paddingBottom: "96px" }}>
      <div className="flex items-center gap-2 mb-8">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            color: "var(--color-accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Design Prompts
        </span>
      </div>
      <h1
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          color: "var(--color-fg)",
          maxWidth: "680px",
          marginBottom: "24px",
        }}
      >
        Design System Prompts
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-lg)",
          color: "var(--color-muted)",
          maxWidth: "480px",
          lineHeight: 1.65,
        }}
      >
        A curated collection of design-system prompts for AI codegen. Copy
        one and paste it into your AI IDE to apply a complete visual system.
      </p>

      {/* Count Label */}
      <div style={{ marginTop: "64px" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            color: "var(--color-muted)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {designPrompts.length} systems
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {designPrompts.map((prompt) => (
          <DesignPromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </section>
  );
};

export default DesignPromptsPage;
