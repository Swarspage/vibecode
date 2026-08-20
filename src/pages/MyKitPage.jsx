import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getKit, removeFromKit } from "../utils/kit";
import { designPrompts } from "../data/designPrompts";
import { workflowPrompts } from "../data/workflowPrompts";
import Seo from "../components/Seo";

const MyKitPage = () => {
  const [kit, setKit] = useState([]);

  useEffect(() => {
    setKit(getKit());
    const handleUpdate = () => setKit(getKit());
    window.addEventListener("kit-updated", handleUpdate);
    return () => window.removeEventListener("kit-updated", handleUpdate);
  }, []);

  const handleRemove = (type, slug) => {
    removeFromKit(type, slug);
  };

  const getFullText = () => {
    let result = "";
    
    const designs = kit.filter(k => k.type === "design");
    for (const d of designs) {
      const full = designPrompts.find(p => p.slug === d.slug);
      if (full) {
        result += `--- ${full.name} (Design System) ---\n\n${full.prompt}\n\n`;
      }
    }

    const workflows = kit.filter(k => k.type === "workflow");
    for (const w of workflows) {
      const full = workflowPrompts.find(p => p.slug === w.slug);
      if (full) {
        result += `--- ${full.title} (Workflow) ---\n\n${full.prompt}\n\n`;
      }
    }
    return result.trim();
  };

  const handleCopyAll = async () => {
    try {
      const text = getFullText();
      if (!text) return;
      await navigator.clipboard.writeText(text);
      alert("Copied all prompts to clipboard!");
    } catch (e) {
      alert("Failed to copy");
    }
  };

  const handleExport = () => {
    const text = getFullText();
    if (!text) return;
    const blob = new Blob([text], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const dateStr = new Date().toISOString().split("T")[0];
    a.download = `scaffold-kit-${dateStr}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (kit.length === 0) {
    return (
      <section style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}>
        <Seo title="My Kit — Scaffold" description="Your saved Scaffold prompts, ready to copy or export." canonical="/my-kit" />
        <div style={{ textAlign: "center", backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "64px 24px" }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 16px auto" }}>
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
          </svg>
          <h1 style={{ fontFamily: "var(--font-sans)", fontSize: "2rem", fontWeight: 800, color: "var(--color-fg)", marginBottom: "16px", letterSpacing: "-0.03em" }}>Your Kit is Empty</h1>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--color-muted)", marginBottom: "32px" }}>
            Browse <Link to="/design-prompts" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Design Prompts</Link> and <Link to="/workflow-prompts" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Workflow Prompts</Link> to start building your toolkit.
          </p>
        </div>
      </section>
    );
  }

  const designs = kit.filter(k => k.type === "design");
  const workflows = kit.filter(k => k.type === "workflow");

  return (
    <section style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}>
      <Seo title="My Kit — Scaffold" description="Your saved Scaffold prompts, ready to copy or export." canonical="/my-kit" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "var(--color-fg)", letterSpacing: "-0.03em" }}>
            My Kit
          </h1>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--color-muted)", marginTop: "8px" }}>
            Your saved prompts, ready to copy or export.
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={handleCopyAll}
            className="dp-copy-btn dp-copy-base"
            style={{
              minWidth: "120px",
              height: "44px",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              backgroundColor: "var(--color-surface)",
              color: "var(--color-fg)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
            }}
          >
            Copy All
          </button>
          <button
            onClick={handleExport}
            style={{
              padding: "0 24px",
              height: "44px",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              backgroundColor: "var(--color-accent)",
              color: "var(--color-bg)",
              border: "none",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
            }}
          >
            Export as .md
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        {designs.length > 0 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid var(--color-border)" }}>
              Design Systems
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {designs.map(item => (
                <div key={`design-${item.slug}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)" }}>
                  <Link to={`/design-prompts/${item.slug}`} style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: 600, color: "var(--color-fg)", textDecoration: "none" }}>
                    {item.title || item.name}
                  </Link>
                  <button
                    onClick={() => handleRemove(item.type, item.slug)}
                    aria-label="Remove from kit"
                    style={{ background: "transparent", border: "none", color: "var(--color-muted)", cursor: "pointer", display: "flex", alignItems: "center" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {workflows.length > 0 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid var(--color-border)" }}>
              Workflows
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {workflows.map(item => (
                <div key={`workflow-${item.slug}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)" }}>
                  <Link to={`/workflow-prompts/${item.slug}`} style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: 600, color: "var(--color-fg)", textDecoration: "none" }}>
                    {item.title || item.name}
                  </Link>
                  <button
                    onClick={() => handleRemove(item.type, item.slug)}
                    aria-label="Remove from kit"
                    style={{ background: "transparent", border: "none", color: "var(--color-muted)", cursor: "pointer", display: "flex", alignItems: "center" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyKitPage;
