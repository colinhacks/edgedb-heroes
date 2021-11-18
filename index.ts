import * as edgedb from 'edgedb';
import e, { $infer } from './dbschema/edgeql';

async function run() {
  console.time(`query`);
  const client = await edgedb.createClient();

  // extract type of expression
  const expr = e.array([e.int64(23), e.int64(52)]);
  type expr = $infer<typeof expr>;

  // write query
  const QUERY = e.select(e.Hero, (hero) => ({
    id: false,
    name: true,
    computed: e.str_upper(hero.name),
    villains: (v) => ({
      id: true,
      name: true,
      upper: e.str_upper(v.name),
      nemesis_name: v.nemesis.name,
    }),
    movies: e.select(e.Movie, (movie) => ({
      title: true,
      character_names: movie.characters.name,
      filter: e.in(movie.characters, hero),
    })),
    filter: e.eq(hero.name, e.str('Captain America')),
  }));

  // run query and print result
  const result = await QUERY.run(client);
  console.log(JSON.stringify(result, null, 2));
  type RESULT = typeof result;

  await client.close();
  console.timeEnd(`query`);
}

run();
