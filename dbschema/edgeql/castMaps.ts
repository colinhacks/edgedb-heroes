import { $ } from "edgedb";
import * as _std from "./modules/std";
import * as _cfg from "./modules/cfg";
import * as _cal from "./modules/cal";
export type scalarAssignableBy<T extends $.ScalarType> =
  T extends _std.$uuid ? _std.$uuid : 
  T extends _std.$str ? _std.$str : 
  T extends _std.$json ? _std.$json : 
  T extends _std.$int64 ? _std.$int64λIAssignableBy : 
  T extends _std.$int32 ? _std.$int32λIAssignableBy : 
  T extends _std.$int16 ? _std.$int16λIAssignableBy : 
  T extends _std.$float64 ? _std.$float64λIAssignableBy : 
  T extends _std.$float32 ? _std.$float32λIAssignableBy : 
  T extends _std.$duration ? _std.$duration : 
  T extends _std.$decimal ? _std.$decimalλIAssignableBy : 
  T extends _std.$datetime ? _std.$datetime : 
  T extends _std.$bytes ? _std.$bytes : 
  T extends _std.$bool ? _std.$bool : 
  T extends _std.$bigint ? _std.$bigintλIAssignableBy : 
  T extends _cfg.$memory ? _cfg.$memory : 
  T extends _cal.$relative_duration ? _cal.$relative_duration : 
  T extends _cal.$local_time ? _cal.$local_time : 
  T extends _cal.$local_datetime ? _cal.$local_datetime : 
  T extends _cal.$local_date ? _cal.$local_date : 
  never

export type scalarCastableFrom<T extends $.ScalarType> =
  T extends _std.$uuid ? _std.$uuid : 
  T extends _std.$str ? _std.$str : 
  T extends _std.$json ? _std.$json : 
  T extends _std.$int64 ? _std.$int64λICastableTo : 
  T extends _std.$int32 ? _std.$int32λICastableTo : 
  T extends _std.$int16 ? _std.$int16 : 
  T extends _std.$float64 ? _std.$float64λICastableTo : 
  T extends _std.$float32 ? _std.$float32λICastableTo : 
  T extends _std.$duration ? _std.$duration : 
  T extends _std.$decimal ? _std.$decimalλICastableTo : 
  T extends _std.$datetime ? _std.$datetime : 
  T extends _std.$bytes ? _std.$bytes : 
  T extends _std.$bool ? _std.$bool : 
  T extends _std.$bigint ? _std.$bigintλICastableTo : 
  T extends _cfg.$memory ? _cfg.$memory : 
  T extends _cal.$relative_duration ? _cal.$relative_duration : 
  T extends _cal.$local_time ? _cal.$local_time : 
  T extends _cal.$local_datetime ? _cal.$local_datetime : 
  T extends _cal.$local_date ? _cal.$local_date : 
  never

type getSharedParentScalar<A, B> =
  A extends _std.$uuid ?
    B extends _std.$uuid ?
    B
    :
    never
  :
  A extends _std.$str ?
    B extends _std.$str ?
    B
    :
    never
  :
  A extends _std.$json ?
    B extends _std.$json ?
    B
    :
    never
  :
  A extends _std.$int64 ?
    B extends _std.$int64 ?
    B
    :
    B extends _std.$int32 ?
    A
    :
    B extends _std.$int16 ?
    A
    :
    B extends _std.$float64 ?
    B
    :
    B extends _std.$float32 ?
    _std.$float64
    :
    B extends _std.$decimal ?
    B
    :
    B extends _std.$bigint ?
    B
    :
    never
  :
  A extends _std.$int32 ?
    B extends _std.$int64 ?
    B
    :
    B extends _std.$int32 ?
    B
    :
    B extends _std.$int16 ?
    A
    :
    B extends _std.$float64 ?
    B
    :
    B extends _std.$float32 ?
    _std.$float64
    :
    B extends _std.$decimal ?
    B
    :
    B extends _std.$bigint ?
    B
    :
    never
  :
  A extends _std.$int16 ?
    B extends _std.$int64 ?
    B
    :
    B extends _std.$int32 ?
    B
    :
    B extends _std.$int16 ?
    B
    :
    B extends _std.$float64 ?
    B
    :
    B extends _std.$float32 ?
    B
    :
    B extends _std.$decimal ?
    B
    :
    B extends _std.$bigint ?
    B
    :
    never
  :
  A extends _std.$float64 ?
    B extends _std.$int64 ?
    A
    :
    B extends _std.$int32 ?
    A
    :
    B extends _std.$int16 ?
    A
    :
    B extends _std.$float64 ?
    B
    :
    B extends _std.$float32 ?
    A
    :
    never
  :
  A extends _std.$float32 ?
    B extends _std.$int64 ?
    _std.$float64
    :
    B extends _std.$int32 ?
    _std.$float64
    :
    B extends _std.$int16 ?
    A
    :
    B extends _std.$float64 ?
    B
    :
    B extends _std.$float32 ?
    B
    :
    never
  :
  A extends _std.$duration ?
    B extends _std.$duration ?
    B
    :
    never
  :
  A extends _std.$decimal ?
    B extends _std.$int64 ?
    A
    :
    B extends _std.$int32 ?
    A
    :
    B extends _std.$int16 ?
    A
    :
    B extends _std.$decimal ?
    B
    :
    B extends _std.$bigint ?
    A
    :
    never
  :
  A extends _std.$datetime ?
    B extends _std.$datetime ?
    B
    :
    never
  :
  A extends _std.$bytes ?
    B extends _std.$bytes ?
    B
    :
    never
  :
  A extends _std.$bool ?
    B extends _std.$bool ?
    B
    :
    never
  :
  A extends _std.$bigint ?
    B extends _std.$int64 ?
    A
    :
    B extends _std.$int32 ?
    A
    :
    B extends _std.$int16 ?
    A
    :
    B extends _std.$decimal ?
    B
    :
    B extends _std.$bigint ?
    B
    :
    never
  :
  A extends _cfg.$memory ?
    B extends _cfg.$memory ?
    B
    :
    never
  :
  A extends _cal.$relative_duration ?
    B extends _cal.$relative_duration ?
    B
    :
    never
  :
  A extends _cal.$local_time ?
    B extends _cal.$local_time ?
    B
    :
    never
  :
  A extends _cal.$local_datetime ?
    B extends _cal.$local_datetime ?
    B
    :
    never
  :
  A extends _cal.$local_date ?
    B extends _cal.$local_date ?
    B
    :
    never
  :
never

function getSharedParentScalar<A extends $.ScalarType, B extends $.ScalarType>(a: A, b: B): A | B | _std.$float64 {
  if (a.__name__ === _std.uuid.__name__) {
    if(b.__name__ === _std.uuid.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.str.__name__) {
    if(b.__name__ === _std.str.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.json.__name__) {
    if(b.__name__ === _std.json.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.int64.__name__) {
    if(b.__name__ === _std.int64.__name__) {
      return b;
    }
    if(b.__name__ === _std.int32.__name__) {
      return a;
    }
    if(b.__name__ === _std.int16.__name__) {
      return a;
    }
    if(b.__name__ === _std.float64.__name__) {
      return b;
    }
    if(b.__name__ === _std.float32.__name__) {
      return _std.float64;
    }
    if(b.__name__ === _std.decimal.__name__) {
      return b;
    }
    if(b.__name__ === _std.bigint.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.int32.__name__) {
    if(b.__name__ === _std.int64.__name__) {
      return b;
    }
    if(b.__name__ === _std.int32.__name__) {
      return b;
    }
    if(b.__name__ === _std.int16.__name__) {
      return a;
    }
    if(b.__name__ === _std.float64.__name__) {
      return b;
    }
    if(b.__name__ === _std.float32.__name__) {
      return _std.float64;
    }
    if(b.__name__ === _std.decimal.__name__) {
      return b;
    }
    if(b.__name__ === _std.bigint.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.int16.__name__) {
    if(b.__name__ === _std.int64.__name__) {
      return b;
    }
    if(b.__name__ === _std.int32.__name__) {
      return b;
    }
    if(b.__name__ === _std.int16.__name__) {
      return b;
    }
    if(b.__name__ === _std.float64.__name__) {
      return b;
    }
    if(b.__name__ === _std.float32.__name__) {
      return b;
    }
    if(b.__name__ === _std.decimal.__name__) {
      return b;
    }
    if(b.__name__ === _std.bigint.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.float64.__name__) {
    if(b.__name__ === _std.int64.__name__) {
      return a;
    }
    if(b.__name__ === _std.int32.__name__) {
      return a;
    }
    if(b.__name__ === _std.int16.__name__) {
      return a;
    }
    if(b.__name__ === _std.float64.__name__) {
      return b;
    }
    if(b.__name__ === _std.float32.__name__) {
      return a;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.float32.__name__) {
    if(b.__name__ === _std.int64.__name__) {
      return _std.float64;
    }
    if(b.__name__ === _std.int32.__name__) {
      return _std.float64;
    }
    if(b.__name__ === _std.int16.__name__) {
      return a;
    }
    if(b.__name__ === _std.float64.__name__) {
      return b;
    }
    if(b.__name__ === _std.float32.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.duration.__name__) {
    if(b.__name__ === _std.duration.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.decimal.__name__) {
    if(b.__name__ === _std.int64.__name__) {
      return a;
    }
    if(b.__name__ === _std.int32.__name__) {
      return a;
    }
    if(b.__name__ === _std.int16.__name__) {
      return a;
    }
    if(b.__name__ === _std.decimal.__name__) {
      return b;
    }
    if(b.__name__ === _std.bigint.__name__) {
      return a;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.datetime.__name__) {
    if(b.__name__ === _std.datetime.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.bytes.__name__) {
    if(b.__name__ === _std.bytes.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.bool.__name__) {
    if(b.__name__ === _std.bool.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _std.bigint.__name__) {
    if(b.__name__ === _std.int64.__name__) {
      return a;
    }
    if(b.__name__ === _std.int32.__name__) {
      return a;
    }
    if(b.__name__ === _std.int16.__name__) {
      return a;
    }
    if(b.__name__ === _std.decimal.__name__) {
      return b;
    }
    if(b.__name__ === _std.bigint.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _cfg.memory.__name__) {
    if(b.__name__ === _cfg.memory.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _cal.relative_duration.__name__) {
    if(b.__name__ === _cal.relative_duration.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _cal.local_time.__name__) {
    if(b.__name__ === _cal.local_time.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _cal.local_datetime.__name__) {
    if(b.__name__ === _cal.local_datetime.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  if (a.__name__ === _cal.local_date.__name__) {
    if(b.__name__ === _cal.local_date.__name__) {
      return b;
    }
    throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
    }
  throw new Error(`Types are not castable: ${a.__name__}, ${b.__name__}`);
}

const implicitCastMap = new Map<string, Set<string>>([
  ["std::bigint", new Set(["std::decimal"])],
  ["std::int16", new Set(["std::int32", "std::int64", "std::float64", "std::decimal", "std::bigint", "std::float32"])],
  ["std::int32", new Set(["std::int64", "std::float64", "std::decimal", "std::bigint"])],
  ["std::int64", new Set(["std::float64", "std::decimal", "std::bigint"])],
  ["std::float32", new Set(["std::float64"])],
]);
function isImplicitlyCastableTo(from: string, to: string): boolean {
  const _a = implicitCastMap.get(from),
        _b = _a != null ? _a.has(to) : null;
  return _b != null ? _b : false;
};


export { getSharedParentScalar, isImplicitlyCastableTo };
