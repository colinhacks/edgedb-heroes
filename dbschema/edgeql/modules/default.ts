import { $ } from "edgedb";
import * as _ from "../imports";
import * as _std from "./std";
export type $PersonλShape = $.typeutil.flatten<_std.$Object_45272538507511ecbbb32598af9ab46cλShape & {
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, true, true>;
  "<characters[IS default::Movie]": $.LinkDesc<$Movie, $.Cardinality.Many, {}, false, false>;
  "<characters": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Person = $.ObjectType<"default::Person", $PersonλShape, null>;
const $Person = $.makeType<$Person>(_.spec, "f095721e-5217-11ec-8a2d-5704cbadb415", _.syntax.literal);

const Person: $.$expr_PathNode<$.TypeSet<$Person, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Person, $.Cardinality.Many), null, true);

export type $HeroλShape = $.typeutil.flatten<$PersonλShape & {
  "secret_identity": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "villains": $.LinkDesc<$Villain, $.Cardinality.Many, {}, false, false>;
  "<nemesis[IS default::Villain]": $.LinkDesc<$Villain, $.Cardinality.Many, {}, false, false>;
  "<nemesis": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Hero = $.ObjectType<"default::Hero", $HeroλShape, null>;
const $Hero = $.makeType<$Hero>(_.spec, "f0974c6a-5217-11ec-ba2c-25bfec173cfb", _.syntax.literal);

const Hero: $.$expr_PathNode<$.TypeSet<$Hero, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Hero, $.Cardinality.Many), null, true);

export type $MovieλShape = $.typeutil.flatten<_std.$Object_45272538507511ecbbb32598af9ab46cλShape & {
  "characters": $.LinkDesc<$Person, $.Cardinality.Many, {}, false, true>;
  "release_year": $.PropertyDesc<_std.$int64, $.Cardinality.One, false, true>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, true, true>;
}>;
type $Movie = $.ObjectType<"default::Movie", $MovieλShape, null>;
const $Movie = $.makeType<$Movie>(_.spec, "f09da1be-5217-11ec-bf4b-876b907da860", _.syntax.literal);

const Movie: $.$expr_PathNode<$.TypeSet<$Movie, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Movie, $.Cardinality.Many), null, true);

export type $VillainλShape = $.typeutil.flatten<$PersonλShape & {
  "nemesis": $.LinkDesc<$Hero, $.Cardinality.AtMostOne, {}, false, true>;
  "<villains[IS default::Hero]": $.LinkDesc<$Hero, $.Cardinality.Many, {}, false, false>;
  "<villains": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Villain = $.ObjectType<"default::Villain", $VillainλShape, null>;
const $Villain = $.makeType<$Villain>(_.spec, "f09961a8-5217-11ec-8a80-6d59ec0d9d27", _.syntax.literal);

const Villain: $.$expr_PathNode<$.TypeSet<$Villain, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Villain, $.Cardinality.Many), null, true);



export { $Person, Person, $Hero, Hero, $Movie, Movie, $Villain, Villain };

type __defaultExports = {
  "$Person": typeof $Person;
  "Person": typeof Person;
  "$Hero": typeof $Hero;
  "Hero": typeof Hero;
  "$Movie": typeof $Movie;
  "Movie": typeof Movie;
  "$Villain": typeof $Villain;
  "Villain": typeof Villain
};
const __defaultExports: __defaultExports = {
  "$Person": $Person,
  "Person": Person,
  "$Hero": $Hero,
  "Hero": Hero,
  "$Movie": $Movie,
  "Movie": Movie,
  "$Villain": $Villain,
  "Villain": Villain
};
export default __defaultExports;
