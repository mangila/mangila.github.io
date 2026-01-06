/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
// src/env.d.ts
interface ImportMetaEnv {
  readonly GITHUB_USER_TOKEN: string;
  readonly PUBLIC_GITHUB_USERNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
