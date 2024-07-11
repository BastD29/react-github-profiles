/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_API_BASE_URL: string;
  readonly VITE_ENVIRONMENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
