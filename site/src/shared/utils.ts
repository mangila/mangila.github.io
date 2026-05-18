export const GITHUB_USERNAME =
  import.meta.env.PUBLIC_GITHUB_USERNAME || "mangila";
export const NAME = import.meta.env.PUBLIC_NAME || "Erik Olsson";
export const EMAIL =
  import.meta.env.PUBLIC_EMAIL || "olsson.erik1993@gmail.com";

export function getLanguageBadgeBgColor(language: string | null): string {
  if (!language) return "bg-slate-500";

  switch (language.toLowerCase()) {
    // Web & Scripting
    case "javascript":
    case "js":
      return "bg-yellow-400 text-black";
    case "typescript":
    case "ts":
      return "bg-blue-600 text-white";
    case "html":
      return "bg-orange-600 text-white";
    case "css":
      return "bg-blue-500 text-white";

    // Back-End & Systems
    case "python":
      return "bg-sky-700 text-white";
    case "java":
      return "bg-amber-600 text-white";
    case "c#":
    case "csharp":
      return "bg-violet-700 text-white";
    case "c++":
    case "cpp":
      return "bg-blue-800 text-white";
    case "c":
      return "bg-gray-600 text-white";
    case "go":
    case "golang":
      return "bg-cyan-500 text-white";
    case "rust":
      return "bg-orange-800 text-white";
    case "php":
      return "bg-indigo-600 text-white";
    case "ruby":
      return "bg-red-600 text-white";
    case "kotlin":
      return "bg-purple-600 text-white";
    case "swift":
      return "bg-orange-500 text-white";

    // DevOps, Shell & Config
    case "shell":
    case "bash":
    case "sh":
      return "bg-lime-600 text-white";
    case "hcl":
    case "terraform":
      return "bg-violet-600 text-white";
    case "yaml":
    case "yml":
      return "bg-green-600 text-white";
    case "dockerfile":
    case "docker":
      return "bg-sky-500 text-white";

    // Data & Docs
    case "sql":
      return "bg-blue-400 text-white";
    case "markdown":
    case "md":
      return "bg-neutral-800 text-white";

    // Default fallback for any other language string
    default:
      return "bg-slate-500 text-white";
  }
}
