import { Link, NavLink } from "react-router-dom";

const Nav = () => {
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

        {/* Nav links */}
        <nav aria-label="Primary navigation">
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
      </div>
    </header>
  );
};

export default Nav;
