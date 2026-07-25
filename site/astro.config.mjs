// @ts-check
import { defineConfig } from "astro/config";
import { execSync } from "node:child_process";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

const commitMessage = execSync("git rev-parse --short HEAD").toString().trim();
const buildDate = execSync(
  "git log -1 --format=%cd --date=format:%Y-%m-%d",
).toString();

// https://astro.build/config
export default defineConfig({
  site: "https://mangila.github.io",
  output: "static",
  trailingSlash: "never",
  image: {
    responsiveStyles: true,
  },
  integrations: [icon(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    define: {
      "import.meta.env.PUBLIC_BUILD_COMMIT": JSON.stringify(commitMessage),
      "import.meta.env.PUBLIC_BUILD_DATE": JSON.stringify(buildDate),
    },
  },
});
