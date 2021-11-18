import * as edgedb from 'edgedb';

const heroes = [
  { name: 'Captain America', secret_identity: 'Steve Rogers' },
  { name: 'Iron Man', secret_identity: 'Tony Stark' },
  { name: 'The Hulk', secret_identity: 'Bruce Banner' },
  { name: 'Hawkeye', secret_identity: 'Clint Barton' },
  { name: 'Spider-Man', secret_identity: 'Peter Parker,' },
  { name: 'Black Widow', secret_identity: 'Natasha Romanoff' },
  { name: 'Thor', secret_identity: ' ' },
  { name: 'Ant-Man', secret_identity: 'Scott Lang' },
  { name: 'Doctor Strange', secret_identity: 'Stephen Strange' },
];

const villains = [
  { name: 'Abomination', nemesis: 'The Hulk' },
  { name: 'Doc Ock', nemesis: 'Spider-Man' },
  { name: 'Green Goblin', nemesis: 'Spider-Man' },
  { name: 'Justin Hammer', nemesis: 'Iron Man' },
  { name: 'Kraven the Hunter', nemesis: 'Spider-Man' },
  { name: 'Loki', nemesis: 'Thor' },
  { name: 'Malekith', nemesis: 'Thor' },
  { name: 'Red Skull', nemesis: 'Captain America' },
  { name: 'Sandman', nemesis: 'Spider-Man' },
  { name: 'Shocker', nemesis: 'Spider-Man' },
  { name: 'The Mandarin', nemesis: 'Iron Man' },
  { name: 'The Vulture', nemesis: 'Spider-Man' },
  { name: 'The Winter Soldier', nemesis: 'Captain America' },
  { name: 'Tinkerer', nemesis: 'Spider-Man' },
  { name: 'Venom', nemesis: 'Spider-Man' },
  { name: 'Whiplash', nemesis: 'Iron Man' },
  { name: 'Zemo', nemesis: 'Captain America' },
  { name: 'Hela', nemesis: 'Thor' },
];

const movies = [
  { title: 'Spider-Man', characters: ['Spider-Man', 'Green Goblin'] },
  { title: 'Spider-Man 2', characters: ['Spider-Man', 'Doc Ock'] },
  { title: 'Spider-Man 3', characters: ['Spider-Man', 'Sandman', 'Venom'] },
  { title: 'Iron Man', characters: ['Iron Man'] },
  { title: 'The Incredible Hulk', characters: ['The Hulk', 'Abomination'] },
  {
    title: 'Iron Man 2',
    characters: ['Iron Man', 'Black Widow', 'Justin Hammer'],
  },
  { title: 'Thor', characters: ['Thor', 'Loki'] },
  {
    title: 'Captain America: The First Avenger',
    characters: ['Captain America', 'Red Skull'],
  },
  {
    title: 'The Avengers',
    characters: [
      'Iron Man',
      'Thor',
      'Captain America',
      'Hawkeye',
      'Black Widow',
      'The Hulk',
    ],
  },
  { title: 'Iron Man 3', characters: ['Iron Man', 'The Mandarin'] },
  { title: 'Thor: The Dark World', characters: ['Thor', 'Loki', 'Malekith'] },
  {
    title: 'Captain America: The Winter Soldier',
    characters: ['Captain America', 'The Winter Soldier'],
  },
  { title: 'Ant-Man', characters: ['Ant-Man'] },
  {
    title: 'Captain America: Civil War',
    characters: [
      'Captain America',
      'Iron Man',
      'Black Widow',
      'Hawkeye',
      'Spider-Man',
      'The Winter Soldier',
      'Ant-Man',
    ],
  },
  { title: 'Doctor Strange', characters: ['Doctor Strange'] },
  {
    title: 'Spider-Man: Homecoming',
    characters: ['Spider-Man', 'The Vulture', 'Shocker', 'Tinkerer'],
  },
  { title: 'Thor: Ragnarok', characters: ['Thor', 'Loki', 'Hela'] },

  { title: 'Ant-Man and the Wasp', characters: ['Ant-Man'] },
  {
    title: 'Spider-Man: No Way Home',
    characters: ['Spider-Man', 'Doc Ock', 'Green Goblin', 'Doctor Strange'],
  },
];

async function run() {
  const pool = await edgedb.createClient({
    dsn: 'edgedb://...',
  });

  try {
    await pool.execute(`delete Movie;`);
    await pool.execute(`delete Villain;`);
    await pool.execute(`delete Hero;`);

    for (const hero of heroes) {
      console.log(`creating ${hero.name}`);
      await pool.querySingle(
        `
      with name := <str>$name,
        secret_identity := <str>$secret_identity
      insert Hero { 
        name := name, 
        secret_identity := secret_identity
      };
    `,
        hero
      );
    }

    for (const villain of villains) {
      console.log(`creating ${villain.name}`);
      await pool.querySingle(
        `
      with name := <str>$name,
        nemesis_name := <str>$nemesis
      insert Villain { 
        name := name, 
        nemesis := assert_exists((
          select Hero 
          filter .name = nemesis_name
        ))
      };
    `,
        villain
      );
    }

    for (const movie of movies) {
      console.log(`creating ${movie.title}`);
      await pool.querySingle(
        `
      with title := <str>$title,
        chars := distinct <array<str>>$characters
      insert Movie { 
        title := title, 
        characters := (
          distinct (for c in {array_unpack(chars)} union (
            assert_exists((
              select Person filter .name = c
            ))
          ))
        )
      };
    `,
        movie
      );
    }
  } catch (err) {
    console.log(err);
  }
  pool.close();
}

run();
