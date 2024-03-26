import { writeFileSync } from "fs";
import { defineConfig } from "@graphql-mesh/serve-cli";
import { createSupergraphSDLFetcher } from "@graphql-hive/client";

const supergraphFetcher = createSupergraphSDLFetcher({
  key: process.env.HIVE_CDN_KEY,
  endpoint: process.env.HIVE_CDN_URL,
});

const writeSDLToFile = (result: { 
  id: string;
  supergraphSdl: string;
}) => {
  const { supergraphSdl } = result;
  writeFileSync("./.mesh/sdl.graphqls", supergraphSdl);

  return Promise.resolve(result);
}

export const serveConfig = defineConfig({
  supergraph: "./supergraph.graphql", // <-- uncommenting this, you're able to access graphiql,
  //supergraph: supergraphFetcher().then(writeSDLToFile).then(({ supergraphSdl }) => supergraphSdl),
  graphiql: true,
});
