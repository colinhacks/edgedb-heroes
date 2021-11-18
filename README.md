# Heroes

## Query builder

```
git clone git@github.com:colinhacks/edgedb-heroes.git
cd edgedb-heroes
yarn
edgedb project init --no-migrations
edgedb restore heroes.dump
npx edgedb-generate
yarn play
```

Write queries inside `index.ts` then execute the file by running `yarn play`.

## Generation targets

`npx edgedb-generate --target <target>`

### `ts`

Generate TypeScript files.
Run with `yarn play`.

### `cjs`

Generate JavaScript (.js) files with `require()` syntax.

```
npx edgedb-generate --target cjs
node index.ts
```

👆 Requires Node.js 14+

### `esm`

Generate JavaScript (.mjs) files with `import/export` syntax.

```
npx edgedb-generate --target esm
node index.mjs
```

👆 Requires Node.js 14+

## `edgedb-generate`

Introspects the schema of an EdgeDB instance and generates a TypeScript/JavaScript query builder

CONNECTION OPTIONS:
-I, --instance <instance>
--dsn <dsn>
--credentials-file <path/to/credentials.json>
-H, --host <host>
-P, --port <port>
-d, --database <database>
-u, --user <user>
--password
--password-from-stdin
--tls-ca-file <path/to/certificate>
--tls-security <insecure | no_host_verification | strict | default>

OPTIONS:
--target [ts,esm,cjs]

        ts     Generate TypeScript files
        esm    Generate JavaScript with ES Module syntax
        cjs    Generate JavaScript with CommonJS syntax

    --output-dir <output-dir>
    --force-overwrite
        If 'output-dir' already exists, will overwrite without confirmation

## Testing

Things to test:

- All statements: `select`, `insert`, `update`, `delete`
- Advanced clauses: `on conflict`
- Polymorphic queries
- Set merging and literals (and whether type/cardinality is correct)
  - https://www.edgedb.com/docs/edgeql/sets
- All functions and operators are available on the top-level `e` import
- Deeply nested queries
- Complex `with` behavior
- Cardinality inference. These two cases are implemented:
  - `e.eq(<exclusive property expr>, <singleton scalar expr>)`
  - `e.eq(<exclusive link expr>, <singleton object>)`
