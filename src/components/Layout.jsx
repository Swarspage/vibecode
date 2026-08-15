import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div
      id="app-root"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Nav />
      <ScrollToTop />

      <main id="main-content" style={{ flex: 1 }}>
        <div className="shell-fluid">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer
        id="site-footer"
        style={{
          borderTop: "1px solid var(--color-border)",
          padding: "24px 0",
        }}
      >
        <div
          className="shell-fluid"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-2xs)",
              color: "var(--color-muted)",
              letterSpacing: "0.06em",
            }}
          >
            scaffold — prompt directory
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-2xs)",
              color: "var(--color-muted)",
              letterSpacing: "0.06em",
            }}
          >
            {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
