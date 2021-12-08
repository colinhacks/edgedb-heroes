import * as edgedb from 'edgedb';
import e, { $infer } from './dbschema/edgeql';

async function run() {
  console.time(`query`);

  const list = e.set(e.str('asdf'), e.str('qwer'), e.str('fghj'));
  e.select({ list });

  const client = await edgedb.createClient();

  e.select(e.Person, (char) => ({
    id: true,
    name: true,
    // polymorphic fields
    ...e.is(e.Hero, { secret_identity: true }),
    ...e.is(e.Villain, { nemesis: true }),
  }));

  // extract type of expression
  const expr = e.array([e.int64(23), e.int64(52)]);
  type expr = $infer<typeof expr>;

  const arrg = e
    .select(e.Person, (person) => ({
      id: true,
      name: true,
      uppercase_name: e.str_upper(person.name),
      is_hero: e.select(person.$is(e.Hero)),
    }))
    .run(client);

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
      characters: (c) => ({
        id: true,
        name: true,
        // polymorphic fields
        ...e.is(e.Hero, { secret_identity: true }),
        ...e.is(e.Villain, { nemesis: true }),
      }),
      filter: e.in(movie.characters, hero),
    })),
    filter: e.eq(hero.name, e.str('Captain America')),
  }));

  e.Hero['<nemesis'].$is(e.Villain);

  const query = e
    .select(e.Hero, (hero) => ({
      id: 1 > 0, // optional
      name: true,
      villains: {
        id: true,
        name: true,
      },
    }))
    .run(client);

  e.destructure;
  QUERY.__element__.__shape__.movies.__element__.__shape__.characters;

  // e.is(e.Hero, { secret_identity: true }).secret_identity.__shapeElement__;
  // run query and print result
  const result = await QUERY.run(client);
  console.log(JSON.stringify(result, null, 2));
  type RESULT = typeof result;

  await client.close();
  console.timeEnd(`query`);
}

run();
