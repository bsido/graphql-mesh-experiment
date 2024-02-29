# graphql-mesh-experiment

We are trying to deploy GraphQL Mesh on our local machines.

When we execute:

```bash
yarn build
```

It fails with:

```text
➜ yarn build
yarn run v1.22.19
$ mesh build
🕸️  Mesh 💡 Cleaning existing artifacts
🕸️  Mesh 💡 Reading the configuration
🕸️  Mesh 💡 Generating the unified schema
🕸️  Mesh - Supergraph 💥 Failed to generate the schema Error: Unknown type: "Node".
```

When we change the line in the graphql file:

```graphql
type ReactionAuthor implements Node @join__owner(graph: PB_BACKEND) @join__type(graph: PB_BACKEND, key: "id") {
```

to:

```graphql
type ReactionAuthor implements Node @join__owner(graph: PB_BACKEND) {
```

The build is successful.
