import { designPrompts } from "../data/designPrompts";
import DesignPromptCard from "../components/DesignPromptCard";

const DesignPromptsPage = () => {
  return (
    <section style={{ paddingTop: "80px", paddingBottom: "96px" }}>
      {/* Page Header */}
      <div style={{ marginBottom: "48px" }}>
        <div style={{ marginBottom: "12px" }}>
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
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "var(--color-fg)",
            maxWidth: "560px",
            marginBottom: "16px",
          }}
        >
          Design System Prompts
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-base)",
            color: "var(--color-muted)",
            maxWidth: "480px",
            lineHeight: 1.65,
            marginBottom: "12px",
          }}
        >
          A curated collection of design-system prompts for AI codegen. Pick a
          system by look — copy it and paste it into your AI IDE.
        </p>
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

      {/* Card Grid */}
      <div className="prompt-grid">
        {designPrompts.map((prompt) => (
          <DesignPromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </section>
  );
};

export default DesignPromptsPage;
