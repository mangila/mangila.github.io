export const GITHUB_USERNAME =
  import.meta.env.PUBLIC_GITHUB_USERNAME || "mangila";
export const NAME = "Erik Olsson";

export function getLanguageBadgeBgColor(language: string | null) {
  switch (language) {
    case "Java":
      return "bg-green-500";
    case "JavaScript":
      return "bg-yellow-500";
    case "C#":
      return "bg-blue-500";
    case "Go":
      return "bg-purple-500";
    case "Shell":
      return "bg-orange-500";
    case "HCL":
      return "bg-pink-500";
    case "Markdown":
      return "bg-white-500";
    default:
      if (language) {
        return "bg-slate-500";
      }
  }
  return "";
}
