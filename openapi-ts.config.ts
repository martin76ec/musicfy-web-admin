import { defaultPlugins, defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: "openapi.json",
  output: {
    clean: true,
    path: "app/server/infrastructure/musicfy-api",
  },
  plugins: [
    ...defaultPlugins,
    {
      asClass: true,
      name: "@hey-api/sdk",
    }
  ]
});
