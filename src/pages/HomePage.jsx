import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import DesignPromptCard from "../components/DesignPromptCard";
import { designPrompts } from "../data/designPrompts";
import { workflowPrompts } from "../data/workflowPrompts";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// First 3 design systems for the preview row
const designPreview = designPrompts.slice(0, 3);

// A hand-picked cross-section of 5 workflow prompts
const workflowPreview = [
  workflowPrompts.find((p) => p.slug === "exploring-new-codebase"),
  workflowPrompts.find((p) => p.slug === "tracing-backend"),
  workflowPrompts.find((p) => p.slug === "building-feature"),
  workflowPrompts.find((p) => p.slug === "solving-bug"),
  workflowPrompts.find((p) => p.slug === "checking-change"),
];

const categoryLabels = {
  orient: "Orient",
  investigate: "Investigate",
  build: "Build",
  debug: "Debug",
  ship: "Ship",
};

/* ─── Shared section styles ──────────────────────────────────────── */
const sectionStyle = {
  paddingTop: "72px",
  paddingBottom: "72px",
  borderTop: "1px solid var(--color-border)",
};

const sectionLabelStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: "12px",
  color: "var(--color-accent)",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  display: "block",
  marginBottom: "8px",
};

const sectionHeadingStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: "var(--color-fg)",
  marginBottom: "8px",
};

const sectionDescStyle = {
  fontFamily: "var(--font-body)",
  fontSize: "16px",
  color: "var(--color-muted-bright)",
  lineHeight: 1.6,
  maxWidth: "480px",
};

const viewAllLinkStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: "12px",
  color: "var(--color-muted-bright)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  borderBottom: "1px solid var(--color-border)",
  paddingBottom: "2px",
  transition: "color 0.15s ease, border-color 0.15s ease",
};

const HomePage = () => {
  const mainRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const elements = gsap.utils.toArray("[data-home-reveal]");

      elements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef}>
      <Hero />

      {/* ─── Marquee Strip ────────────────────────────────────────── */}
      <div className="home-marquee" aria-hidden="true">
        <div className="home-marquee-track">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="home-marquee-item">
              <span>COPY</span>
              <span style={{ color: "var(--color-accent)" }}>✦</span>
              <span>PASTE</span>
              <span style={{ color: "var(--color-accent)" }}>✦</span>
              <span>SHIP</span>
              <span style={{ color: "var(--color-accent)" }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── How it works ────────────────────────────────────────── */}
      <section style={{ padding: "96px 0" }} data-home-reveal>
        <div style={{ marginBottom: "48px", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2rem, 5vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--color-fg)",
            marginBottom: "12px",
          }}>
            How it works
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-muted-bright)",
            maxWidth: "500px",
            margin: "0 auto",
          }}>
            Drop-in context for any AI tool. Three simple steps to ship faster.
          </p>
        </div>

        <div className="home-steps-grid">
          {/* Step 1 */}
          <div className="home-step-card">
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)", fontSize: "14px" }}>01.</span>
            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "20px", color: "var(--color-fg)" }}>Copy</h3>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-bright)", fontSize: "14px", lineHeight: 1.5 }}>
              Copy a specialized prompt directly from Scaffold. Design systems, workflows, or image templates.
            </p>
          </div>
          {/* Step 2 */}
          <div className="home-step-card">
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)", fontSize: "14px" }}>02.</span>
            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "20px", color: "var(--color-fg)" }}>Paste</h3>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-bright)", fontSize: "14px", lineHeight: 1.5 }}>
              Paste it straight into your AI IDE or chat tool. The context is pre-engineered for you.
            </p>
          </div>
          {/* Step 3 */}
          <div className="home-step-card">
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)", fontSize: "14px" }}>03.</span>
            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "20px", color: "var(--color-fg)" }}>Ship</h3>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-bright)", fontSize: "14px", lineHeight: 1.5 }}>
              Let the AI generate the code, execute the debugging workflow, or output the asset immediately.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Pillars Showcase ────────────────────────────────────── */}
      <section style={{ paddingBottom: "96px" }}>
        <div style={{ marginBottom: "40px" }}>
          <span style={sectionLabelStyle}>The Framework</span>
          <h2 style={sectionHeadingStyle}>Two Prompt Pillars</h2>
        </div>

        <div className="home-pillars">
          {/* Pillar 1: Design Systems */}
          <Link to="/design-prompts" className="home-pillar-card" data-home-reveal>
            <div className="home-pillar-content">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-accent)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Pillar 01</span>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "var(--color-fg)", marginBottom: "16px" }}>
                Design Systems
              </h3>
              <p style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-bright)", fontSize: "16px", lineHeight: 1.6, marginBottom: "32px" }}>
                Not just color palettes. Full design-system prompts for AI codegen — tokens, typography, components, and motion.
              </p>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-fg)", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "8px" }}>
                Browse systems <span style={{ color: "var(--color-accent)" }}>→</span>
              </span>
            </div>
            <div className="home-pillar-visual">
              {/* Fake UI Swatch Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", padding: "32px", width: "100%" }}>
                <div style={{ height: "64px", backgroundColor: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)" }} />
                <div style={{ height: "64px", backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)" }} />
                <div style={{ height: "64px", backgroundColor: "var(--color-accent)", borderRadius: "var(--radius-sm)" }} />
                <div style={{ height: "64px", backgroundColor: "var(--color-accent-dim)", borderRadius: "var(--radius-sm)" }} />
              </div>
            </div>
          </Link>

          {/* Pillar 2: Workflow Prompts */}
          <Link to="/workflow-prompts" className="home-pillar-card" data-home-reveal>
            <div className="home-pillar-content">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-accent)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Pillar 02</span>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "var(--color-fg)", marginBottom: "16px" }}>
                Engineering Workflows
              </h3>
              <p style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-bright)", fontSize: "16px", lineHeight: 1.6, marginBottom: "32px" }}>
                Production prompts for reading, debugging, shipping, and refactoring real codebases with an AI IDE.
              </p>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-fg)", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "8px" }}>
                Explore workflows <span style={{ color: "var(--color-accent)" }}>→</span>
              </span>
            </div>
            <div className="home-pillar-visual" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
              {/* Fake Terminal Snippet */}
              <div style={{ padding: "32px", width: "100%", fontFamily: "var(--font-mono)", fontSize: "12px", lineHeight: 2, color: "var(--color-muted)" }}>
                <div><span style={{ color: "var(--color-accent)" }}>01</span> [orient] codebase-exploration</div>
                <div><span style={{ color: "var(--color-accent)" }}>02</span> [investigate] backend-tracing</div>
                <div><span style={{ color: "var(--color-accent)" }}>03</span> [build] feature-implementation</div>
                <div><span style={{ color: "var(--color-accent)" }}>04</span> [debug] unhandled-exception</div>
                <div><span style={{ color: "var(--color-accent)" }}>05</span> [ship] pre-commit-check</div>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* ─── Design Prompts Preview ──────────────────────────────── */}
      <section style={sectionStyle} aria-labelledby="home-design-heading" data-home-reveal>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div>
            <span style={sectionLabelStyle}>Design System Prompts</span>
            <h2 id="home-design-heading" style={sectionHeadingStyle}>
              Live System Previews
            </h2>
            <p style={sectionDescStyle}>
              Drop-in design-system prompts for AI codegen. Each one ships
              a complete visual identity — palette, typography, and component
              rules in one copy.
            </p>
          </div>
          <Link
            to="/design-prompts"
            style={viewAllLinkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-accent)";
              e.currentTarget.style.borderColor = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-muted-bright)";
              e.currentTarget.style.borderColor = "var(--color-border)";
            }}
          >
            View all systems →
          </Link>
        </div>

        <div className="prompt-grid">
          {designPreview.map((prompt) => (
            <DesignPromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </section>

      {/* ─── Workflow Prompts Preview ────────────────────────────── */}
      <section style={sectionStyle} aria-labelledby="home-workflow-heading" data-home-reveal>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div>
            <span style={sectionLabelStyle}>Workflow Prompts</span>
            <h2 id="home-workflow-heading" style={sectionHeadingStyle}>
              Codebase Utilities
            </h2>
            <p style={sectionDescStyle}>
              13 production prompts for reading, debugging, refactoring, and
              shipping real codebases with an AI IDE. Organised by workflow
              stage.
            </p>
          </div>
          <Link
            to="/workflow-prompts"
            style={viewAllLinkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-accent)";
              e.currentTarget.style.borderColor = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-muted-bright)";
              e.currentTarget.style.borderColor = "var(--color-border)";
            }}
          >
            View all prompts →
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
          }}
        >
          {workflowPreview.map((prompt, index) => (
            <Link
              key={prompt.id}
              to={`/workflow-prompts/${prompt.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: "16px 20px",
                textDecoration: "none",
                color: "inherit",
                borderTop:
                  index === 0 ? "none" : "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-border)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-surface)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--color-muted-bright)",
                    letterSpacing: "0.08em",
                    flexShrink: 0,
                  }}
                >
                  {prompt.number < 10 ? `0${prompt.number}` : prompt.number}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--color-fg)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {prompt.title}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--color-muted-bright)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "2px 8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {categoryLabels[prompt.category] ?? prompt.category}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--color-muted-bright)",
                  }}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
