import { $ } from "edgedb";
import * as _ from "../imports";
import * as _std from "./std";
export type $PersonλShape = $.typeutil.flatten<_std.$Object_e8dc454c533a11ecb6a0056082757897λShape & {
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, true, true>;
  "<characters[IS default::Movie]": $.LinkDesc<$Movie, $.Cardinality.Many, {}, false, false>;
  "<characters": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Person = $.ObjectType<"default::Person", $PersonλShape, null>;
const $Person = $.makeType<$Person>(_.spec, "3235b7d4-53e8-11ec-a1c4-0bb848e2406b", _.syntax.literal);

const Person: $.$expr_PathNode<$.TypeSet<$Person, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Person, $.Cardinality.Many), null, true);

export type $HeroλShape = $.typeutil.flatten<$PersonλShape & {
  "secret_identity": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "villains": $.LinkDesc<$Villain, $.Cardinality.Many, {}, false, false>;
  "movies": $.LinkDesc<$Movie, $.Cardinality.Many, {}, false, false>;
  "<nemesis[IS default::Villain]": $.LinkDesc<$Villain, $.Cardinality.Many, {}, false, false>;
  "<nemesis": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Hero = $.ObjectType<"default::Hero", $HeroλShape, null>;
const $Hero = $.makeType<$Hero>(_.spec, "32377a74-53e8-11ec-8334-dd5af5bd1396", _.syntax.literal);

const Hero: $.$expr_PathNode<$.TypeSet<$Hero, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Hero, $.Cardinality.Many), null, true);

export type $MovieλShape = $.typeutil.flatten<_std.$Object_e8dc454c533a11ecb6a0056082757897λShape & {
  "characters": $.LinkDesc<$Person, $.Cardinality.Many, {}, false, true>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, true, true>;
  "release_year": $.PropertyDesc<_std.$int64, $.Cardinality.AtMostOne, false, true>;
  "<movies[IS default::Hero]": $.LinkDesc<$Hero, $.Cardinality.Many, {}, false, false>;
  "<movies": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Movie = $.ObjectType<"default::Movie", $MovieλShape, null>;
const $Movie = $.makeType<$Movie>(_.spec, "323d5cf0-53e8-11ec-98d8-0318a9033f12", _.syntax.literal);

const Movie: $.$expr_PathNode<$.TypeSet<$Movie, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Movie, $.Cardinality.Many), null, true);

export type $VillainλShape = $.typeutil.flatten<$PersonλShape & {
  "nemesis": $.LinkDesc<$Hero, $.Cardinality.AtMostOne, {}, false, true>;
  "<villains[IS default::Hero]": $.LinkDesc<$Hero, $.Cardinality.Many, {}, false, false>;
  "<villains": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Villain = $.ObjectType<"default::Villain", $VillainλShape, null>;
const $Villain = $.makeType<$Villain>(_.spec, "323972a2-53e8-11ec-a8a8-abd7e8414a12", _.syntax.literal);

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
