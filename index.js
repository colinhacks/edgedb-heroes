const edgedb = require('edgedb');
const e = require('./dbschema/edgeql/index.js').default;

console.log(`DEFAULT`);
console.log(e.str);
console.log(Object.keys(e));

async function run() {
  console.time(`query`);
  const client = await edgedb.createClient();
  try {
    // console.log(e);
    console.log(e.str);
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
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.close();
  }
  console.timeEnd(`query`);
}

run();
