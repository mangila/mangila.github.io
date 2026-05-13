import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  downloadsFolder: "cypress/downloads",
  video: true,
  e2e: {
    baseUrl: "http://localhost:4321",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
