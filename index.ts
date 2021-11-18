import * as edgedb from 'edgedb';
import e from './dbschema/edgeql';

async function run() {
  const client = await edgedb.createClient();
  console.time(`query`);

  const arg = e.array([e.str('asdf')]);

  const query = e.select(e.Hero, (hero) => ({
    id: true,
    name_arr: arg,
    name: false,
    computed: e.str_upper(hero.name),
    villains: (v) => ({
      id: true,
      name: true,
      upper: e.str_upper(v.name),
      nem_name: v.nemesis.name,
    }),

    nested: e.select(e.Movie, (movie) => ({
      title: true,
      characters: true,
    })),
    filter: e.eq(hero.name, e.str('asdf')),
  }));
  const result = await query.run(client);
  console.log(JSON.stringify(result, null, 2));
  console.timeEnd(`query`);

  client.close();
}

run();
