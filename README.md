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

The graphql file is taken from our real schema we just removed 99% of it, to create a simple example.
