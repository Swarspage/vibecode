import { useState } from "react";
import { Link } from "react-router-dom";
import { imagePrompts } from "../data/imagePrompts";
import BackButton from "../components/BackButton";

const categories = [
  { id: "trending-portraits", label: "Trending Portraits" },
  { id: "3d-and-toy", label: "3D & Toy" },
  { id: "editing-and-restyle", label: "Editing & Restyle" },
  { id: "restoration-and-repair", label: "Restoration & Repair" },
  { id: "seasonal-and-festival", label: "Seasonal & Festival" },
  { id: "aesthetic-and-cinematic", label: "Aesthetic & Cinematic" },
];

/* ─── Image Prompt Card ─────────────────────────────────────────────── */
const ImagePromptCard = ({ prompt }) => {
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const categoryLabel =
    categories.find((c) => c.id === prompt.category)?.label ?? prompt.category;

  return (
    <article
      className="dp-card-base dp-card"
      style={{
        backgroundColor: "var(--color-surface)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Card image / placeholder header */}
      <Link 
        to={`/image-prompts/${prompt.slug}`} 
        style={{ display: "block", color: "inherit", textDecoration: "none", flexShrink: 0 }}
      >
        {prompt.cardImage || prompt.image ? (
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              overflow: "hidden",
              borderBottom: "1px solid var(--color-border)",
              position: "relative",
            }}
          >
            {/* Skeleton Placeholder */}
            {!imageLoaded && (
              <div
                className="preview-skeleton-shimmer"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                }}
              />
            )}

            <img
              src={prompt.cardImage || prompt.image}
              alt={prompt.title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                transition: "transform 400ms ease, opacity 400ms ease",
                opacity: imageLoaded ? 1 : 0,
                position: "relative",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
            {/* Gradient overlay so text is always readable */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,10,11,0.55) 0%, transparent 60%)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
          </div>
        ) : (
          /* Accent strip fallback for prompts without an image */
          <div
            style={{
              height: "4px",
              background:
                "linear-gradient(90deg, var(--color-accent), var(--color-accent-dim))",
            }}
          />
        )}
      </Link>

      {/* Body */}
      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Top meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "8px",
            marginBottom: "10px",
          }}
        >
          {/* Category tag */}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-accent)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-sm)",
              padding: "2px 8px",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {categoryLabel}
          </span>

          {/* Upload / Standalone badge */}
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
                : "var(--color-accent-dim)",
              borderRadius: "var(--radius-sm)",
              padding: "2px 8px",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {prompt.requiresUpload ? "Requires Upload" : "Standalone"}
          </span>
        </div>

        {/* Title & Summary */}
        <Link 
          to={`/image-prompts/${prompt.slug}`} 
          style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", flex: 1 }}
        >
          <h3
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "15px",
              color: "var(--color-fg)",
              lineHeight: 1.3,
              marginBottom: "6px",
            }}
          >
            {prompt.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "var(--color-muted)",
              lineHeight: 1.55,
              flex: 1,
            }}
          >
            {prompt.summary}
          </p>
        </Link>

        {/* Aspect ratio pill (when present) */}
        {prompt.aspectRatio && (
          <div style={{ marginTop: "10px" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--color-muted)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                padding: "2px 8px",
              }}
            >
              {prompt.aspectRatio}
            </span>
          </div>
        )}

        {/* Copy Button */}
        <button
          id={`copy-${prompt.id}`}
          onClick={handleCopy}
          style={{
            marginTop: "14px",
            width: "100%",
            height: "44px",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            backgroundColor: "var(--color-surface)",
            borderRadius: "var(--radius-sm)",
            cursor: "pointer",
            ...(copied && {
              border: "1px solid var(--color-accent)",
              color: "var(--color-accent)",
            }),
          }}
          className={copied ? "dp-copy-btn" : "dp-copy-btn dp-copy-base"}
          aria-label={`Copy prompt: ${prompt.title}`}
        >
          {copied ? "Copied" : "Copy Prompt"}
        </button>
      </div>
    </article>
  );
};

/* ─── Image Prompts Page ─────────────────────────────────────────────── */
const ImagePromptsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const query = searchQuery.trim().toLowerCase();

  const matchesSearch = (prompt) => {
    if (!query) return true;
    const haystack = [
      prompt.title,
      prompt.summary,
      prompt.category,
      ...(prompt.tags ?? []),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  };

  const matchesCategory = (prompt) =>
    activeCategory === "all" || prompt.category === activeCategory;

  const filteredPrompts = imagePrompts.filter(
    (p) => matchesSearch(p) && matchesCategory(p)
  );

  const countLabel = searchQuery.trim()
    ? `${filteredPrompts.length} / ${imagePrompts.length} prompts`
    : `${imagePrompts.length} prompts`;

  return (
    <section
      style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}
    >
      {/* ── Page Header ──────────────────────────────────────────── */}
      <div style={{ marginBottom: "40px" }}>
        <BackButton fallbackTo="/" />
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
            Image Prompts
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
          Gemini Image Prompts
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
          Copy-paste prompts for Gemini image generation and photo editing.
          Portraits, restyling, restoration, seasonal edits, and cinematic
          effects — all in one place.
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
          {countLabel}
        </span>
      </div>

      {/* ── Search ───────────────────────────────────────────────── */}
      <div style={{ marginBottom: "16px" }}>
        <input
          id="image-prompts-search"
          type="search"
          className="search-input"
          placeholder="Search by title, summary, or category"
          aria-label="Search image prompts"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* ── Filter Chips ─────────────────────────────────────────── */}
      <div className="filter-chip-row" style={{ marginBottom: "0" }}>
        <button
          id="filter-all"
          type="button"
          className={`filter-chip${activeCategory === "all" ? " active" : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`filter-${cat.id}`}
            type="button"
            className={`filter-chip${activeCategory === cat.id ? " active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Grid or Empty State ──────────────────────────────────── */}
      {filteredPrompts.length === 0 ? (
        <p className="search-empty" style={{ marginTop: "40px" }}>
          No image prompts match &ldquo;{searchQuery}&rdquo;.
        </p>
      ) : (
        <div className="prompt-grid">
          {filteredPrompts.map((prompt) => (
            <ImagePromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ImagePromptsPage;
