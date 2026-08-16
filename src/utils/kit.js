const STORAGE_KEY = "scaffold_kit";

export function getKit() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Failed to parse kit from localStorage", error);
    return [];
  }
}

export function addToKit(item) {
  try {
    const kit = getKit();
    const exists = kit.some((k) => k.type === item.type && k.slug === item.slug);
    if (!exists) {
      const newKit = [...kit, item];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newKit));
      window.dispatchEvent(new Event("kit-updated"));
    }
  } catch (error) {
    console.warn("Failed to add to kit in localStorage", error);
  }
}

export function removeFromKit(type, slug) {
  try {
    const kit = getKit();
    const newKit = kit.filter((k) => !(k.type === type && k.slug === slug));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newKit));
    window.dispatchEvent(new Event("kit-updated"));
  } catch (error) {
    console.warn("Failed to remove from kit in localStorage", error);
  }
}

export function isInKit(type, slug) {
  const kit = getKit();
  return kit.some((k) => k.type === type && k.slug === slug);
}
