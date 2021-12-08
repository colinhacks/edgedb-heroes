import * as edgedb from 'edgedb';

const heroes = [
  { name: 'Captain America', secret_identity: 'Steve Rogers' },
  { name: 'Iron Man', secret_identity: 'Tony Stark' },

  { name: 'The Hulk', secret_identity: 'Bruce Banner' },
  { name: 'Hawkeye', secret_identity: 'Clint Barton' },
  { name: 'Spider-Man', secret_identity: 'Peter Parker' },
  { name: 'Black Widow', secret_identity: 'Natasha Romanoff' },
  { name: 'Yelena Belova' },
  { name: 'Thor' },
  { name: 'The Falcon', secret_identity: 'Sam Wilson' },
  { name: 'Valkyrie' },
  { name: 'Ant-Man', secret_identity: 'Scott Lang' },
  { name: 'The Wasp', secret_identity: 'Hope van Dyne' },
  { name: 'Doctor Strange', secret_identity: 'Stephen Strange' },
  { name: 'Black Panther', secret_identity: "T'Challa" },
  { name: 'Scarlet Witch', secret_identity: 'Wanda Maximoff' },
  { name: 'Quicksilver', secret_identity: 'Pietro Maximoff' },
  { name: 'Vision' },
  { name: 'Captain Marvel', secret_identity: 'Carol Danvers' },
  { name: 'War Machine', secret_identity: 'James Rhodes' },
  { name: 'Drax' },
  { name: 'Gamora' },
  { name: 'Star-Lord', secret_identity: 'Peter Quill' },
  { name: 'Rocket' },
  { name: 'Nebula' },
  { name: 'Groot' },
  { name: 'Yondu' },
  { name: 'Mantis' },

  { name: 'Nick Fury' },
  { name: 'Ajak' },
  { name: 'Sersi' },
  { name: 'Ikaris' },
  { name: 'Kingo' },
  { name: 'Sprite' },
  { name: 'Phastos' },
  { name: 'Makkari' },
  { name: 'Druig' },
  { name: 'Gilgamesh' },
  { name: 'Thena' },
  { name: 'Black Knight', secret_identity: 'Dane Whitman' },
  { name: 'Okoye' },
  { name: 'Shuri' },
  { name: 'Wong' },
  { name: 'Shang Chi' },
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
  { name: 'Shocker', nemesis: 'Spider-Man' },
  { name: 'The Mandarin', nemesis: 'Iron Man' },
  { name: 'Darren Cross', nemesis: 'Ant-Man' },
  { name: 'The Vulture', nemesis: 'Spider-Man' },
  { name: 'The Winter Soldier', nemesis: 'Captain America' },
  { name: 'Tinkerer', nemesis: 'Spider-Man' },
  { name: 'Venom', nemesis: 'Spider-Man' },
  { name: 'Whiplash', nemesis: 'Iron Man' },
  { name: 'Zemo', nemesis: 'Captain America' },
  { name: 'Hela', nemesis: 'Thor' },
  { name: 'Aldrich Killian', nemesis: 'Iron Man' },
  { name: 'Killmonger', nemesis: 'Black Panther' },
  { name: 'Ronin the Accuser' },
  { name: 'Ultron', nemesis: 'Iron Man' },
  { name: 'Ego', nemesis: 'Star-Lord' },
  { name: 'Kaecilius', nemesis: 'Doctor Strange' },
  { name: 'Thanos' },
  { name: 'Ghost', nemesis: 'Ant-Man' },
  { name: 'Yon-Rogg', nemesis: 'Captain Marvel' },
  { name: 'Taskmaster', nemesis: 'Black Widow' },
  { name: 'General Dreykov', nemesis: 'Black Widow' },
  { name: 'Arishem' },
  { name: 'Electro', nemesis: 'Spider-Man' },
  { name: 'Sandman', nemesis: 'Spider-Man' },
  { name: 'The Lizard', nemesis: 'Spider-Man' },
  { name: 'Mysterio', nemesis: 'Spider-Man' },
];

const movies = [
  { title: 'Iron Man', release_year: 2008, characters: ['Iron Man'] },
  {
    title: 'The Incredible Hulk',
    release_year: 2008,
    characters: ['The Hulk', 'Abomination'],
  },
  {
    title: 'Iron Man 2',
    release_year: 2010,
    characters: ['Iron Man', 'Black Widow', 'Justin Hammer', 'Whiplash'],
  },
  { title: 'Thor', release_year: 2010, characters: ['Thor', 'Loki'] },
  {
    title: 'Captain America: The First Avenger',
    release_year: 2011,
    characters: ['Captain America', 'Red Skull'],
  },
  {
    title: 'The Avengers',
    release_year: 2012,
    characters: [
      'Iron Man',
      'Thor',
      'Captain America',
      'Hawkeye',
      'Black Widow',
      'The Hulk',
      'Loki',
    ],
  },
  {
    title: 'Iron Man 3',
    release_year: 2013,
    characters: ['Iron Man', 'The Mandarin', 'Aldrich Killian'],
  },
  {
    title: 'Thor: The Dark World',
    release_year: 2013,
    characters: ['Thor', 'Loki', 'Malekith'],
  },
  {
    title: 'Captain America: The Winter Soldier',
    release_year: 2014,
    characters: [
      'Captain America',
      'The Winter Soldier',
      'Black Widow',
      'Nick Fury',
    ],
  },
  {
    title: 'Guardians of the Galaxy',
    release_year: 2014,
    characters: [
      'Drax',
      'Gamora',
      'Star-Lord',
      'Rocket',
      'Nebula',
      'Groot',
      'Yondu',
      'Ronin the Accuser',
    ],
  },
  {
    title: 'Avengers: Age of Ultron',
    release_year: 2015,
    characters: [
      'Iron Man',
      'Thor',
      'Captain America',
      'Hawkeye',
      'Black Widow',
      'The Hulk',
      'Scarlet Witch',
      'Quicksilver',
      'Ultron',
      'Nick Fury',
      'Vision',
    ],
  },
  { title: 'Ant-Man', release_year: 2015, characters: ['Ant-Man'] },
  {
    title: 'Captain America: Civil War',
    release_year: 2016,
    characters: [
      'Captain America',
      'Iron Man',
      'Black Widow',
      'Hawkeye',
      'Spider-Man',
      'The Winter Soldier',
      'Ant-Man',
      'Nick Fury',
      'Vision',
      'The Falcon',
      'Scarlet Witch',
      'Black Panther',
      'War Machine',
      'Zemo',
    ],
  },
  {
    title: 'Doctor Strange',
    release_year: 2016,
    characters: ['Doctor Strange', 'Wong', 'Kaecilius'],
  },
  {
    title: 'Guardians of the Galaxy Vol. 2',
    release_year: 2017,
    characters: [
      'Drax',
      'Gamora',
      'Star-Lord',
      'Rocket',
      'Nebula',
      'Groot',
      'Ego',
      'Mantis',
      'Yondu',
    ],
  },
  {
    title: 'Spider-Man: Homecoming',
    release_year: 2017,
    characters: [
      'Spider-Man',
      'Iron Man',
      'The Vulture',
      'Shocker',
      'Tinkerer',
    ],
  },
  {
    title: 'Thor: Ragnarok',
    release_year: 2017,
    characters: ['Thor', 'Valkyrie', 'Loki', 'Hela'],
  },
  {
    title: 'Black Panther',
    release_year: 2018,
    characters: ['Black Panther', 'Shuri', 'Okoye', 'Killmonger'],
  },
  {
    title: 'Avengers: Infinity War',
    release_year: 2018,
    characters: [
      'Iron Man',
      'Thanos',
      'Thor',
      'Captain America',
      'Doctor Strange',
      'Wong',
      'Scarlet Witch',
      'Vision',
      'Nebula',
      'Black Panther',
      'Okoye',
      'Shuri',
      'The Falcon',
      'The Hulk',
      'The Winter Soldier',
      'Black Widow',
      'Spider-Man',
      'Star-Lord',
      'Gamora',
      'Mantis',
      'Rocket',
      'Groot',
      'Drax',
      'War Machine',
      'Loki',
    ],
  },
  {
    title: 'Ant-Man and the Wasp',
    release_year: 2018,
    characters: ['Ant-Man', 'The Wasp', 'Ghost'],
  },
  {
    title: 'Captain Marvel',
    release_year: 2019,
    characters: ['Captain Marvel', 'Nick Fury', 'Yon-Rogg'],
  },
  {
    title: 'Avengers: Endgame',
    release_year: 2019,
    characters: [
      'Ant-Man',
      'The Wasp',
      'Captain Marvel',
      'Hawkeye',
      'Iron Man',
      'Thanos',
      'Thor',
      'Captain America',
      'Doctor Strange',
      'Wong',
      'Scarlet Witch',
      'Vision',
      'Nebula',
      'Black Panther',
      'Okoye',
      'Shuri',
      'The Falcon',
      'The Hulk',
      'The Winter Soldier',
      'Black Widow',
      'Spider-Man',
      'Star-Lord',
      'Gamora',
      'Mantis',
      'Rocket',
      'Groot',
      'Drax',
      'War Machine',
      'Loki',
      'Valkyrie',
    ],
  },
  {
    title: 'Spider-Man: Far From Home',
    release_year: 2019,
    characters: ['Spider-Man', 'Mysterio', 'Nick Fury'],
  },
  {
    title: 'Black Widow',
    release_year: 2021,
    characters: [
      'Black Widow',
      'Yelena Belova',
      'Taskmaster',
      'General Dreykov',
    ],
  },
  {
    title: 'Shang Chi and the Legend of the Ten Rings',
    release_year: 2021,
    characters: ['Shang Chi', 'The Mandarin'],
  },
  {
    title: 'Eternals',
    release_year: 2021,
    characters: [
      'Ajak',
      'Sersi',
      'Ikaris',
      'Kingo',
      'Sprite',
      'Phastos',
      'Makkari',
      'Druig',
      'Gilgamesh',
      'Thena',
      'Arishem',
      'Black Knight',
    ],
  },
  {
    title: 'Spider-Man: No Way Home',
    release_year: 2021,
    characters: [
      'Spider-Man',
      'Doc Ock',
      'Green Goblin',
      'Doctor Strange',
      'Electro',
      'Sandman',
      'The Lizard',
    ],
  },
];

async function run() {
  const pool = edgedb.createClient({
    // dsn: 'edgedb://...',
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
        secret_identity := <optional str>$secret_identity
      insert Hero { 
        name := name, 
        secret_identity := secret_identity
      };
    `,
        {
          name: hero.name,
          secret_identity: hero.secret_identity ?? '',
        }
      );
    }

    for (const villain of villains) {
      console.log(`creating ${villain.name}`);
      await pool.querySingle(
        `
      with name := <str>$name,
        nemesis_name := <optional str>$nemesis
      insert Villain { 
        name := name, 
        nemesis := assert_exists((
          select Hero 
          filter .name = nemesis_name
        )) if exists nemesis_name else <Hero>{}
      };
    `,
        {
          name: villain.name,
          nemesis: villain.nemesis ?? null,
        }
      );
    }

    for (const movie of movies) {
      console.log(`creating ${movie.title}`);
      await pool.querySingle(
        `
      with title := <str>$title,
        release_year := <int64>$release_year,
        chars := distinct <array<str>>$characters
      insert Movie { 
        title := title, 
        release_year := release_year,
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
