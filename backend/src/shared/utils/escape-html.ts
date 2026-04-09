// backend/src/shared/utils/escape-html.ts
const ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) => ESCAPE_MAP[character] ?? character,
  );
}
