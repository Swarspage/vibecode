import { useRef } from "react";
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

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from("[data-hero-el]", {
        opacity: 0,
        y: 8,
        duration: 0.6,
        stagger: 0.08,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-labelledby="hero-heading"
      style={{ paddingTop: "112px", paddingBottom: "96px" }}
    >
      {/* Category label */}
      <div
        data-hero-el
        className="flex items-center gap-2 mb-8"
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            color: "var(--color-accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          v0.1.0
        </span>
        <span
          style={{
            width: "1px",
            height: "12px",
            backgroundColor: "var(--color-border)",
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            color: "var(--color-muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Prompt Directory
        </span>
      </div>

      {/* Heading */}
      <h1
        data-hero-el
        id="hero-heading"
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
        Prompts that ship{" "}
        <span style={{ color: "var(--color-accent)" }}>real</span> product.
      </h1>

      {/* Subtext */}
      <p
        data-hero-el
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-lg)",
          color: "var(--color-muted)",
          maxWidth: "480px",
          lineHeight: 1.65,
        }}
      >
        A curated directory of design-system and workflow prompts for AI
        coding tools — written by engineers, for engineers.
      </p>
    </section>
  );
};

export default Hero;
