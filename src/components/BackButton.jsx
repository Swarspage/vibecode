import { useNavigate } from "react-router-dom";

const BackButton = ({ fallbackTo = "/" }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    // If there is history within the site, go back. Otherwise go to fallback.
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallbackTo);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="detail-back-link"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "12px 16px 12px 0", // Ensure at least 44px height and wider touch target
        minHeight: "44px",
        display: "inline-flex",
        alignItems: "center",
        color: "var(--color-muted-bright)",
        marginBottom: "24px",
      }}
    >
      ← Back
    </button>
  );
};

export default BackButton;
