import * as edgedb from 'edgedb';
import e from './dbschema/edgeql';

const client = edgedb.createClient();

async function run() {
  // const q = e.withParams(
  //   {
  //     data: e.namedTuple({
  //       name: e.str,
  //       age: e.int64,
  //     }),
  //   },
  //   (params) =>
  //     e.insert(e.Hero, {
  //       name: params.data.name,
  //       age: params.data.age,
  //     })
  // );
  // q.run(client, {
  //   data: {name: "Iron Man", age: 5}
  // })

  console.log(
    await client.query(`select <bytes>$arg;`, { arg: Buffer.from('asdf') })
  );

  const asdf = e.select(
    e.concat(e.concat(e.Hero.name, e.str(' is ')), e.Hero.secret_identity)
  );
  console.log(asdf.toEdgeQL());

  const data = e.namedTuple({
    name: e.str,
    age: e.int64,
  });

  const query = e.withParams({ data: e.json, buf: e.bytes }, (params) => {
    const parsed = e.cast(data, params.data);
    return e.select(params);
    // return e.insert(e.Hero, {
    //   name: parsed.name,
    //   age: parsed.age,
    // });
  });

  query.run(client, {
    data: 'asdf',
    buf: Buffer.from('asdf'),
  });

  const literal = e.namedTuple({
    arg: e.str('asdf'),
  });
}

run();
