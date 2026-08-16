import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Respect user's motion preference — skip animation entirely if reduced motion is requested
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Left column elements
      tl.from("[data-hero-left]", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
      });

      // Terminal
      tl.from(
        "[data-hero-terminal]",
        {
          opacity: 0,
          x: 40,
          duration: 0.8,
        },
        "-=0.6"
      );
      
      // Terminal lines
      tl.from(
        "[data-hero-term-line]",
        {
          opacity: 0,
          duration: 0.1,
          stagger: 0.15,
        },
        "-=0.2"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        paddingTop: "clamp(64px, 10vh, 120px)",
        paddingBottom: "clamp(64px, 10vh, 120px)",
      }}
    >
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "64px",
          alignItems: "center"
        }}
      >
        {/* ─── Left Content ────────────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Label */}
          <div data-hero-left className="flex items-center gap-2">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Prompt Directory
            </span>
            <span style={{ color: "var(--color-border)" }}>·</span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              v0.1.0
            </span>
          </div>

          {/* Heading */}
          <h1
            data-hero-left
            id="hero-heading"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-fg)",
            }}
          >
            Stop writing prompts. <br />
            Start <span style={{ color: "var(--color-accent)" }}>shipping</span> systems.
          </h1>

          {/* Subtext */}
          <p
            data-hero-left
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              color: "var(--color-muted-bright)",
              lineHeight: 1.6,
              maxWidth: "520px",
            }}
          >
            Scaffold is a curated command center of production-grade prompts for AI IDEs. Copy one. Paste it. Watch your codebase transform.
          </p>

          {/* CTAs */}
          <div data-hero-left style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "16px" }}>
            <Link
              to="/design-prompts"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "48px",
                padding: "0 24px",
                backgroundColor: "var(--color-accent)",
                color: "var(--color-bg)",
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "14px",
                borderRadius: "24px",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Browse Design Prompts
            </Link>
            
            <Link
              to="/workflow-prompts"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "48px",
                padding: "0 24px",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-fg)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "14px",
                borderRadius: "24px",
                textDecoration: "none",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = "var(--color-muted)")}
              onMouseLeave={(e) => (e.target.style.borderColor = "var(--color-border)")}
            >
              Open Workflow Prompts
            </Link>

          </div>
        </div>

        {/* ─── Right Content: Fake Terminal ────────────────────────── */}
        <div data-hero-terminal className="home-terminal" style={{ alignSelf: "center" }}>
          <div className="home-terminal-bar">
            <div className="home-terminal-dots">
              <div className="home-terminal-dot" style={{ backgroundColor: "#FF5F56" }} />
              <div className="home-terminal-dot" style={{ backgroundColor: "#FFBD2E" }} />
              <div className="home-terminal-dot" style={{ backgroundColor: "#27C93F" }} />
            </div>
            <span>scaffold — prompt terminal</span>
          </div>
          <div className="home-terminal-body">
            <div data-hero-term-line>
              <span style={{ color: "var(--color-accent)" }}>$</span> scaffold --explore
            </div>
            <div data-hero-term-line style={{ color: "var(--color-muted)" }}>
              {">"} 30+ design system prompts loaded
            </div>
            <div data-hero-term-line style={{ color: "var(--color-muted)" }}>
              {">"} 33 codebase workflow prompts loaded
            </div>

            <div data-hero-term-line style={{ color: "var(--color-accent)", marginTop: "8px" }}>
              {">"} [OK] Ready to copy<span className="home-terminal-cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
