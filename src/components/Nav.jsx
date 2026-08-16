import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setTimeout(() => setMenuOpen(false), 50);
  return (
    <header
      id="site-nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div
        className="shell-fluid"
        style={{
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          aria-label="Scaffold home"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--color-accent)",
              userSelect: "none",
              letterSpacing: "0",
            }}
          >
            {"["}
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "var(--color-fg)",
              transition: "color 160ms ease",
            }}
          >
            Scaffold
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--color-accent)",
              userSelect: "none",
            }}
          >
            {"]"}
          </span>
        </Link>

        {/* Desktop nav links — hidden on mobile */}
        <nav aria-label="Primary navigation" className="nav-list-desktop">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/design-prompts"
                id="nav-design-prompts"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Design Prompts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/workflow-prompts"
                id="nav-workflow-prompts"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Workflow Prompts
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Hamburger toggle — visible on mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {/* Simple 3-bar / X icon via CSS */}
          <span className={menuOpen ? "ham-bar ham-bar-top open" : "ham-bar ham-bar-top"} />
          <span className={menuOpen ? "ham-bar ham-bar-mid open" : "ham-bar ham-bar-mid"} />
          <span className={menuOpen ? "ham-bar ham-bar-bot open" : "ham-bar ham-bar-bot"} />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <nav
          id="nav-mobile-menu"
          aria-label="Mobile navigation"
          className="nav-mobile-menu"
        >
          <NavLink
            to="/design-prompts"
            className={({ isActive }) =>
              isActive ? "nav-mobile-link active" : "nav-mobile-link"
            }
            onClick={closeMenu}
          >
            Design Prompts
          </NavLink>
          <NavLink
            to="/workflow-prompts"
            className={({ isActive }) =>
              isActive ? "nav-mobile-link active" : "nav-mobile-link"
            }
            onClick={closeMenu}
          >
            Workflow Prompts
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Nav;
