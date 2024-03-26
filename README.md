# graphql-mesh-experiment

Use `pnpm` to install dependencies and run the server.

## Using pre-built SDL schema

Uncomment line in `mesh.config.ts` and run `pnpm start`. You're able to open GraphiQL interface and see documentation for the schema.

## Using Hive schema

Provide environment variables:

- `HIVE_CDN_KEY` - CDN access key
- `HIVE_CDN_URL` - URL to schema on CDN (make sure to omit `/sdl` at the end)

Ru `pnpm start` and you get an error when starting the gateway:

```
🕸️  Mesh 💥 Error: Expected join__Graph to be an enum
    at convertSupergraphToFusiongraph (/Users/<username>/graphql-mesh-experiment/node_modules/.pnpm/@graphql-mesh+fusion-federation@0.0.1_graphql@16.8.1/node_modules/@graphql-mesh/fusion-federation/cjs/index.js:21:15)
    at /Users/<username>/graphql-mesh-experiment/node_modules/.pnpm/@graphql-mesh+serve-runtime@0.2.9_@graphql-mesh+types@0.97.5_@types+node@20.11.30_graphql@16.8.1_tslib@2.6.2/node_modules/@graphql-mesh/serve-runtime/cjs/createServeRuntime.js:45:114
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async handle (/Users/<username>/graphql-mesh-experiment/node_modules/.pnpm/graphql-yoga@5.2.0_graphql@16.8.1/node_modules/graphql-yoga/cjs/server.js:329:13)

```

Opening GraphiQL interface also displays this in the right sidebar:

```
{
  "errors": [
    {
      "message": "Unexpected error.",
      "extensions": {}
    }
  ]
```

You will find the retrieved schema SDL in `.mesh/sdl.graphqls` file.
