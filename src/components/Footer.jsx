import { useState, useEffect } from "react";

const Footer = () => {
  const [discordCopied, setDiscordCopied] = useState(false);
  const [upiCopied, setUpiCopied] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  useEffect(() => {
    if (isSupportOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setIsSupportOpen(false);
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isSupportOpen]);

  const handleDiscordCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("itsme.3974").then(() => {
      setDiscordCopied(true);
      setTimeout(() => setDiscordCopied(false), 1500);
    });
  };

  const handleUpiCopy = () => {
    navigator.clipboard.writeText("swarshinde2006@okhdfcbank").then(() => {
      setUpiCopied(true);
      setTimeout(() => setUpiCopied(false), 1500);
    });
  };

  const STATIC_SOCIALS = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/swar-shinde-91131a2b9/",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Github",
      url: "https://github.com/Swarspage",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      label: "X",
      url: "https://x.com/Swars_page",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Email",
      url: "mailto:shindeswar@hotmail.com",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <footer
        id="site-footer"
        style={{
          borderTop: "1px solid var(--color-border)",
          padding: "24px 0",
          marginTop: "auto",
        }}
      >
        <div
          className="shell-fluid"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-2xs)",
                color: "var(--color-muted)",
                letterSpacing: "0.06em",
              }}
            >
              Built by Swar Shinde
            </span>
            
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {/* Discord Button */}
              <div style={{ position: "relative", display: "inline-flex" }}>
              <button
                type="button"
                onClick={handleDiscordCopy}
                aria-label="Copy Discord ID"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  color: discordCopied ? "var(--color-accent)" : "var(--color-muted)",
                  transition: "color 160ms ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => (!discordCopied && (e.currentTarget.style.color = "var(--color-fg)"))}
                onMouseLeave={(e) => (!discordCopied && (e.currentTarget.style.color = "var(--color-muted)"))}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </button>
              {discordCopied && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--color-bg)",
                    backgroundColor: "var(--color-accent)",
                    padding: "4px 8px",
                    borderRadius: "var(--radius-sm)",
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  Copied
                </span>
              )}
            </div>

            {/* Static Socials */}
            {STATIC_SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--color-muted)",
                  transition: "color 160ms ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-label={social.label}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-fg)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              >
                {social.icon}
              </a>
            ))}
            </div>
          </div>

          {/* Support Button */}
          <button
            type="button"
            onClick={() => setIsSupportOpen(true)}
            aria-label="Support this project"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "0 16px",
              minHeight: "44px",
              border: "1px solid var(--color-accent)",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "transparent",
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              cursor: "pointer",
              transition: "background-color 160ms ease, color 160ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-accent)";
              e.currentTarget.style.color = "var(--color-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--color-accent)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              <line x1="6" y1="2" x2="6" y2="4" />
              <line x1="10" y1="2" x2="10" y2="4" />
              <line x1="14" y1="2" x2="14" y2="4" />
            </svg>
            Buy me a coffee
          </button>
        </div>
      </footer>

      {/* Support Modal */}
      {isSupportOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsSupportOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            style={{
              backgroundColor: "var(--color-bg)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "420px",
              maxHeight: "90vh",
              overflow: "hidden",
            }}
          >
            {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 24px",
              borderBottom: "1px solid var(--color-border)",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "14px",
                color: "var(--color-fg)",
              }}
            >
              Support this project
            </span>
            <button
              onClick={() => setIsSupportOpen(false)}
              autoFocus
              style={{
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                color: "var(--color-fg)",
                cursor: "pointer",
              }}
              aria-label="Close support modal"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div
            style={{
              flex: 1,
              overflow: "auto",
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: "360px", width: "100%", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "12px 16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    color: "var(--color-fg)",
                  }}
                >
                  swarshinde2006@okhdfcbank
                </span>
                <button
                  onClick={handleUpiCopy}
                  className={
                    upiCopied
                      ? "dp-copy-btn"
                      : "dp-copy-btn dp-copy-base"
                  }
                  style={{
                    minWidth: "80px",
                    height: "36px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    backgroundColor: "var(--color-bg)",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    ...(upiCopied && {
                      border: "1px solid var(--color-accent)",
                      color: "var(--color-accent)",
                    }),
                  }}
                >
                  {upiCopied ? "Copied" : "Copy"}
                </button>
              </div>

              <img
                src="/support-qr.jpg"
                alt="UPI QR code for Swar Shinde — swarshinde2006@okhdfcbank"
                style={{
                  width: "100%",
                  maxWidth: "240px",
                  height: "auto",
                  margin: "0 auto",
                  display: "block",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--color-border)",
                }}
              />
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
