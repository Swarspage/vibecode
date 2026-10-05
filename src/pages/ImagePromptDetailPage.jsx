import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { imagePrompts } from "../data/imagePrompts";
import BackButton from "../components/BackButton";
import BookmarkButton from "../components/BookmarkButton";
import DynamicPrompt from "../components/DynamicPrompt";
import Seo from "../components/Seo";
import { trackRecentlyViewed } from "../utils/recentlyViewed";

const categoryLabels = {
  "trending-portraits": "Trending Portraits",
  "3d-and-toy": "3D & Toy",
  "editing-and-restyle": "Editing & Restyle",
  "restoration-and-repair": "Restoration & Repair",
  "seasonal-and-festival": "Seasonal & Festival",
  "aesthetic-and-cinematic": "Aesthetic & Cinematic",
};

const ImagePromptDetailPage = () => {
  const { slug } = useParams();

  const prompt = imagePrompts.find((p) => p.slug === slug);

  useEffect(() => {
    if (prompt) {
      trackRecentlyViewed({
        type: "image",
        slug: prompt.slug,
        title: prompt.title,
        link: `/image-prompts/${prompt.slug}`,
      });
    }
  }, [prompt?.slug]);

  /* ── Not found ───────────────────────────────────────────────────── */
  if (!prompt) {
    return (
      <section
        style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}
      >
        <Seo title="Not Found — Scaffold" description="Prompt not found." canonical={`/image-prompts/${slug}`} />
        <div style={{ marginBottom: "16px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Not Found
          </span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--color-fg)",
            marginBottom: "24px",
          }}
        >
          Prompt not found
        </h1>
        <BackButton fallbackTo="/image-prompts" />
      </section>
    );
  }

  const categoryLabel =
    categoryLabels[prompt.category] ?? prompt.category;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": `${prompt.title} Image Prompt`,
        "description": prompt.summary,
        "url": `https://scaffold.swarshinde.dev/image-prompts/${prompt.slug}`,
        "datePublished": "2026-08-18",
        "dateModified": "2026-08-18",
        "author": {
          "@type": "Organization",
          "name": "Scaffold"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Scaffold",
          "url": "https://scaffold.swarshinde.dev"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://scaffold.swarshinde.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Image Prompts",
            "item": "https://scaffold.swarshinde.dev/image-prompts"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${prompt.title} Image Prompt`,
            "item": `https://scaffold.swarshinde.dev/image-prompts/${prompt.slug}`
          }
        ]
      }
    ]
  };

  /* ── Page ────────────────────────────────────────────────────────── */
  return (
    <section
      style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}
    >
      <Seo
        title={`${prompt.title} Image Prompt — Scaffold`}
        description={prompt.summary}
        canonical={`/image-prompts/${prompt.slug}`}
        ogType="article"
        structuredData={structuredData}
      />
      {/* Back link */}
      <div style={{ marginBottom: "32px" }}>
        <BackButton fallbackTo="/image-prompts" />
      </div>

      {/* ── Top area ───────────────────────────────────────────────── */}
      <div style={{ marginBottom: "40px" }}>
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--color-accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {categoryLabel}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--color-fg)",
              lineHeight: 1.1,
            }}
          >
            {prompt.title}
          </h1>
          <BookmarkButton
            type="image"
            slug={prompt.slug}
            title={prompt.title}
            style={{ flexShrink: 0 }}
            enableShortcut={true}
          />
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-base)",
            color: "var(--color-muted)",
            lineHeight: 1.65,
            maxWidth: "640px",
            marginBottom: "20px",
          }}
        >
          {prompt.summary}
        </p>

        {/* Badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: prompt.requiresUpload
                ? "var(--color-muted)"
                : "var(--color-accent)",
              border: "1px solid",
              borderColor: prompt.requiresUpload
                ? "var(--color-border)"
                : "var(--color-accent)",
              borderRadius: "var(--radius-sm)",
              padding: "4px 10px",
            }}
          >
            {prompt.requiresUpload ? "Requires Upload" : "Standalone"}
          </span>

          {prompt.aspectRatio && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--color-muted)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                padding: "4px 10px",
              }}
            >
              {prompt.aspectRatio}
            </span>
          )}

          {(prompt.tags ?? []).map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--color-muted)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                padding: "4px 10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Preview image ──────────────────────────────────────────── */}
      {prompt.detailImage || prompt.image ? (
        <div style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-accent)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Example Output
          </h2>
          <div
            style={{
              width: "100%",
              maxWidth: "720px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-sm)",
              overflow: "hidden",
            }}
          >
            <img
              src={prompt.detailImage || prompt.image}
              alt={`${prompt.title} example output`}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "620px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      ) : (
        /* ── Placeholder when no image ──────────────────────────── */
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "720px",
              aspectRatio: "16 / 10",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-muted)",
              }}
            >
              No preview image
            </span>
            <div
              style={{
                width: "32px",
                height: "2px",
                background:
                  "linear-gradient(90deg, var(--color-accent), var(--color-accent-dim))",
                borderRadius: "1px",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--color-muted)",
                opacity: 0.5,
              }}
            >
              {categoryLabel}
            </span>
          </div>
        </div>
      )}

      {/* ── Prompt section ─────────────────────────────────────────── */}
      <DynamicPrompt promptText={prompt.prompt} />
    </section>
  );
};

export default ImagePromptDetailPage;
