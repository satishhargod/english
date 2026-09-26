// Har "Day" ko ek color theme milta hai (id ke hisaab se rotate hota hai).
// Naya day add karoge to color apne aap assign ho jayega — kuch karna nahi.

const palette = [
  { from: "#6366f1", to: "#ec4899" }, // indigo -> pink
  { from: "#06b6d4", to: "#3b82f6" }, // cyan -> blue
  { from: "#f97316", to: "#ef4444" }, // orange -> red
  { from: "#10b981", to: "#22d3ee" }, // green -> cyan
  { from: "#a855f7", to: "#6366f1" }, // purple -> indigo
  { from: "#f43f5e", to: "#f97316" }, // rose -> orange
  { from: "#0ea5e9", to: "#8b5cf6" }, // sky -> violet
];

export function getTheme(id) {
  const index = (Number(id) - 1) % palette.length;
  return palette[index];
}

export default palette;
