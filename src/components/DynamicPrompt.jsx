import { useState, useMemo } from "react";

// --- Copy to AI Buttons ---
const openInChatGPT = (text) => {
  // ChatGPT supports a ?hints= param but it's undocumented; best supported is just opening the app
  // We encode the prompt in a way that opens a new chat with it pre-filled
  const encoded = encodeURIComponent(text);
  window.open(`https://chatgpt.com/?hints=search&ref=ext&q=${encoded}`, "_blank", "noopener,noreferrer");
};

// --- Dynamic Prompt Component ---
const DynamicPrompt = ({ promptText }) => {
  const [values, setValues] = useState({});
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  // Extract unique variables — ignores Tailwind `bg-[color]` and Markdown `[Link](url)`
  const variables = useMemo(() => {
    const regex = /(?:^|[^a-zA-Z0-9_-])\[([a-zA-Z\s]{3,})\](?!\()/g;
    const matches = [];
    let match;
    while ((match = regex.exec(promptText)) !== null) {
      const varName = match[1].trim();
      if (!matches.includes(varName)) {
        matches.push(varName);
      }
    }
    return matches;
  }, [promptText]);

  // Replace variables with user input in real-time
  const finalPromptText = useMemo(() => {
    let text = promptText;
    variables.forEach((v) => {
      const safeVar = v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`\\[${safeVar}\\](?!\\()`, "g");
      if (values[v]) {
        text = text.replace(regex, values[v]);
      }
    });
    return text;
  }, [promptText, variables, values]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(finalPromptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 1500);
    }
  };

  const handleOpenChatGPT = () => {
    openInChatGPT(finalPromptText);
  };

  const handleInputChange = (v, newValue) => {
    setValues((prev) => ({ ...prev, [v]: newValue }));
  };

  return (
    <div>
      {/* Variables Input Section */}
      {variables.length > 0 && (
        <div
          style={{
            marginBottom: "24px",
            padding: "20px",
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "8px",
            }}
          >
            Customize Prompt
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--color-muted)",
              lineHeight: 1.5,
              marginBottom: "16px",
            }}
          >
            This prompt contains customizable variables. Fill in the fields below
            to automatically inject your specific context directly into the prompt
            text.
            <br />
            <br />
            <strong>Example:</strong> If a field asks to{" "}
            <code>[describe the feature]</code>, typing{" "}
            <em>"a new login page"</em> will instantly update the prompt text
            below so it&apos;s ready to copy and paste into your AI.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {variables.map((v) => (
              <div key={v} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "var(--color-fg)",
                    fontWeight: 500,
                  }}
                >
                  {v}
                </label>
                <input
                  type="text"
                  placeholder="Type your value here..."
                  value={values[v] || ""}
                  onChange={(e) => handleInputChange(v, e.target.value)}
                  style={{
                    backgroundColor: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "8px 12px",
                    color: "var(--color-fg)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    outline: "none",
                    transition: "border-color 0.15s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prompt Header Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--color-accent)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Prompt
        </h2>

        {/* Action Buttons Row */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          {/* ChatGPT Button */}
          <button
            onClick={handleOpenChatGPT}
            title="Open prompt in ChatGPT"
            style={{
              height: "36px",
              padding: "0 14px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--color-fg)",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              transition: "border-color 0.15s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
          >
            {/* ChatGPT icon */}
            <svg width="13" height="13" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.214-2.814 10.079 10.079 0 0 0-10.808 5.214 9.963 9.963 0 0 0-6.675 4.81 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.214 2.814 10.078 10.078 0 0 0 10.809-5.214 9.966 9.966 0 0 0 6.675-4.81 10.079 10.079 0 0 0-1.241-11.818zM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496zM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zM4.297 13.62A7.469 7.469 0 0 1 8.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L7.044 23.86a7.504 7.504 0 0 1-2.747-10.24zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.048 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.13zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.499v4.998l-4.331 2.5-4.331-2.5V18z" fill="currentColor"/>
            </svg>
            ChatGPT
            <span style={{ fontSize: "9px", opacity: 0.5 }}>↗</span>
          </button>

          {/* Copy Prompt button */}
          <button
            onClick={handleCopy}
            className={copied || copyError ? "dp-copy-btn" : "dp-copy-btn dp-copy-base"}
            style={{
              minWidth: "110px",
              height: "36px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              backgroundColor: "var(--color-surface)",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              ...(copied && {
                border: "1px solid var(--color-accent)",
                color: "var(--color-accent)",
              }),
              ...(copyError && {
                border: "1px solid var(--color-border)",
                color: "var(--color-muted)",
              }),
            }}
          >
            {copied ? "Copied ✓" : copyError ? "Failed" : "Copy Prompt"}
          </button>
          <span aria-live="polite" aria-atomic="true" className="sr-only">
            {copied ? "Copied to clipboard" : ""}
          </span>
        </div>
      </div>

      {/* Prompt Text Block */}
      <pre
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          lineHeight: 1.7,
          color: "var(--color-fg)",
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-sm)",
          padding: "24px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          maxHeight: "600px",
          overflowY: "auto",
          marginTop: "0",
        }}
      >
        {finalPromptText}
      </pre>
    </div>
  );
};

export default DynamicPrompt;
