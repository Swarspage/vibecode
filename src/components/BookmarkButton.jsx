import { useState, useEffect } from "react";
import { isInKit, addToKit, removeFromKit } from "../utils/kit";

const BookmarkButton = ({ type, slug, title, className = "", style = {} }) => {
  const [bookmarked, setBookmarked] = useState(() => isInKit(type, slug));

  useEffect(() => {
    const handleUpdate = () => {
      setBookmarked(isInKit(type, slug));
    };
    window.addEventListener("kit-updated", handleUpdate);
    return () => window.removeEventListener("kit-updated", handleUpdate);
  }, [type, slug]);

  const toggleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (bookmarked) {
      removeFromKit(type, slug);
      setBookmarked(false);
    } else {
      addToKit({ type, slug, title });
      setBookmarked(true);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleBookmark}
      aria-label={bookmarked ? "Remove from kit" : "Add to kit"}
      className={`bookmark-btn ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "44px",
        height: "44px",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        color: bookmarked ? "var(--color-accent)" : "var(--color-muted)",
        outlineOffset: "2px",
        ...style,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={bookmarked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
      </svg>
    </button>
  );
};

export default BookmarkButton;
