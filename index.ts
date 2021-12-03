import * as edgedb from 'edgedb';
import e from './dbschema/edgeql';

async function run() {
  console.time(`query`);

  const list = e.set(e.str('asdf'), e.str('qwer'), e.str('fghj'));
  e.select({ list });

  const client = await edgedb.createClient();
  try {
    const QUERY = e.select(e.Hero, (hero) => ({
      id: true,
      name: false,
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

    const result = await QUERY.run(client);
    console.log(JSON.stringify(result, null, 2));
    type RESULT = typeof result;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.close();
  }
  console.timeEnd(`query`);
}

run();
