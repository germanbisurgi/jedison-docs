// Turns heading text into a URL-safe fragment id, e.g. "x-arrayAdd" -> "x-arrayadd",
// "getValue()" -> "getvalue", "Available Placeholders" -> "available-placeholders".
export function slugify (text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
