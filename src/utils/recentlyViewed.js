const STORAGE_KEY = "scaffold_recently_viewed";
const MAX_ITEMS = 10;

export function getRecentlyViewed() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * @param {{ type: string, slug: string, title: string, link: string }} item
 */
export function trackRecentlyViewed(item) {
  try {
    const current = getRecentlyViewed();
    // Remove duplicate if already exists
    const filtered = current.filter(
      (r) => !(r.type === item.type && r.slug === item.slug)
    );
    // Add to front, cap at MAX_ITEMS
    const updated = [{ ...item, viewedAt: Date.now() }, ...filtered].slice(0, MAX_ITEMS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // silently fail
  }
}
