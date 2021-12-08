import { $ } from 'edgedb';
import * as _ from '../imports';
import * as _cal from './cal';
import * as _cfg from './cfg';
import * as _schema from './schema';
type $anyscalar =
  | $uuid
  | $str
  | $bytes
  | $bool
  | $datetime
  | _cal.$local_datetime
  | _cal.$local_date
  | _cal.$local_time
  | $duration
  | $json
  | _cal.$relative_duration
  | _cfg.$memory
  | $anyreal
  | $.EnumType;
const $anyscalar: $anyscalar = $.makeType<$anyscalar>(
  _.spec,
  'e17b7aa2-533a-11ec-86b0-53c8974039de',
  _.syntax.literal
);

type $anyreal = $anyint | $anyfloat | $anynumeric;
const $anyreal: $anyreal = $.makeType<$anyreal>(
  _.spec,
  'e181adc8-533a-11ec-9860-675dabf4e0ee',
  _.syntax.literal
);

type $anyfloat = $float32 | $float64;
const $anyfloat: $anyfloat = $.makeType<$anyfloat>(
  _.spec,
  'e1867a06-533a-11ec-9d94-33792b7d52d2',
  _.syntax.literal
);

type $anyint = $int16 | $int32 | $int64 | $bigint;
const $anyint: $anyint = $.makeType<$anyint>(
  _.spec,
  'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
  _.syntax.literal
);

type $anynumeric = $decimal | $bigint;
const $anynumeric: $anynumeric = $.makeType<$anynumeric>(
  _.spec,
  'e1894d4e-533a-11ec-9c91-c714115ae305',
  _.syntax.literal
);

export type $bigint = $.ScalarType<'std::bigint', bigint>;
const bigint: $bigint = $.makeType<$bigint>(
  _.spec,
  '00000000-0000-0000-0000-000000000110',
  _.syntax.literal
);
export type $bigintλICastableTo = $bigint | $int64 | $int32 | $int16;
export type $bigintλIAssignableBy = $int64 | $int32 | $int16;

export type $bool = $.ScalarType<'std::bool', boolean>;
const bool: $bool = $.makeType<$bool>(
  _.spec,
  '00000000-0000-0000-0000-000000000109',
  _.syntax.literal
);

export type $bytes = $.ScalarType<'std::bytes', Buffer>;
const bytes: $bytes = $.makeType<$bytes>(
  _.spec,
  '00000000-0000-0000-0000-000000000102',
  _.syntax.literal
);

export type $datetime = $.ScalarType<'std::datetime', Date>;
const datetime: $datetime = $.makeType<$datetime>(
  _.spec,
  '00000000-0000-0000-0000-00000000010a',
  _.syntax.literal
);

export type $decimal = $.ScalarType<'std::decimal', unknown>;
const decimal: $decimal = $.makeType<$decimal>(
  _.spec,
  '00000000-0000-0000-0000-000000000108',
  _.syntax.literal
);
export type $decimalλICastableTo =
  | $decimal
  | $bigint
  | $int64
  | $int32
  | $int16;
export type $decimalλIAssignableBy = $bigint | $int64 | $int32 | $int16;

export type $duration = $.ScalarType<'std::duration', _.edgedb.Duration>;
const duration: $duration = $.makeType<$duration>(
  _.spec,
  '00000000-0000-0000-0000-00000000010e',
  _.syntax.literal
);

export type $float32 = $.ScalarType<'std::float32', number>;
const float32: $float32 = $.makeType<$float32>(
  _.spec,
  '00000000-0000-0000-0000-000000000106',
  _.syntax.literal
);
export type $float32λICastableTo = $float32 | $int16;
export type $float32λIAssignableBy =
  | $float64
  | $float32
  | $int64
  | $int32
  | $int16;

export type $float64 = $.ScalarType<'std::float64', number>;
const float64: $float64 = $.makeType<$float64>(
  _.spec,
  '00000000-0000-0000-0000-000000000107',
  _.syntax.literal
);
export type $float64λICastableTo =
  | $float64
  | $float32
  | $int16
  | $int64
  | $int32;
export type $float64λIAssignableBy =
  | $float32
  | $float64
  | $int64
  | $int32
  | $int16;

export type $int16 = $.ScalarType<'std::int16', number>;
const int16: $int16 = $.makeType<$int16>(
  _.spec,
  '00000000-0000-0000-0000-000000000103',
  _.syntax.literal
);
export type $int16λIAssignableBy = $int64 | $int32 | $int16;

export type $int32 = $.ScalarType<'std::int32', number>;
const int32: $int32 = $.makeType<$int32>(
  _.spec,
  '00000000-0000-0000-0000-000000000104',
  _.syntax.literal
);
export type $int32λICastableTo = $int32 | $int16;
export type $int32λIAssignableBy = $int64 | $int32 | $int16;

export type $int64 = $.ScalarType<'std::int64', number>;
const int64: $int64 = $.makeType<$int64>(
  _.spec,
  '00000000-0000-0000-0000-000000000105',
  _.syntax.literal
);
export type $int64λICastableTo = $int64 | $int32 | $int16;
export type $int64λIAssignableBy = $int32 | $int64 | $int16;

export type $json = $.ScalarType<'std::json', string>;
const json: $json = $.makeType<$json>(
  _.spec,
  '00000000-0000-0000-0000-00000000010f',
  _.syntax.literal
);

interface $sequence extends $int64 {}
const $sequence: $sequence = $.makeType<$sequence>(
  _.spec,
  'e18bd154-533a-11ec-886b-91e79765c301',
  _.syntax.literal
);

export type $str = $.ScalarType<'std::str', string>;
const str: $str = $.makeType<$str>(
  _.spec,
  '00000000-0000-0000-0000-000000000101',
  _.syntax.literal
);

export type $uuid = $.ScalarType<'std::uuid', string>;
const uuid: $uuid = $.makeType<$uuid>(
  _.spec,
  '00000000-0000-0000-0000-000000000100',
  _.syntax.literal
);

export type $BaseObjectλShape = $.typeutil.flatten<{
  id: $.PropertyDesc<$uuid, $.Cardinality.One, true, false>;
  __type__: $.LinkDesc<_schema.$Type, $.Cardinality.One, {}, false, false>;
}>;
type $BaseObject = $.ObjectType<'std::BaseObject', $BaseObjectλShape, null>;
const $BaseObject = $.makeType<$BaseObject>(
  _.spec,
  'e8d4db72-533a-11ec-9694-37637f2abd9c',
  _.syntax.literal
);

const BaseObject: $.$expr_PathNode<
  $.TypeSet<$BaseObject, $.Cardinality.Many>,
  null,
  true
> = _.syntax.$expr_PathNode(
  $.$toSet($BaseObject, $.Cardinality.Many),
  null,
  true
);

export type $Object_e8dc454c533a11ecb6a0056082757897λShape = $.typeutil.flatten<
  $BaseObjectλShape & {}
>;
type $Object_e8dc454c533a11ecb6a0056082757897 = $.ObjectType<
  'std::Object',
  $Object_e8dc454c533a11ecb6a0056082757897λShape,
  null
>;
const $Object_e8dc454c533a11ecb6a0056082757897 =
  $.makeType<$Object_e8dc454c533a11ecb6a0056082757897>(
    _.spec,
    'e8dc454c-533a-11ec-b6a0-056082757897',
    _.syntax.literal
  );

const Object_e8dc454c533a11ecb6a0056082757897: $.$expr_PathNode<
  $.TypeSet<$Object_e8dc454c533a11ecb6a0056082757897, $.Cardinality.Many>,
  null,
  true
> = _.syntax.$expr_PathNode(
  $.$toSet($Object_e8dc454c533a11ecb6a0056082757897, $.Cardinality.Many),
  null,
  true
);

export type $FreeObjectλShape = $.typeutil.flatten<$BaseObjectλShape & {}>;
type $FreeObject = $.ObjectType<'std::FreeObject', $FreeObjectλShape, null>;
const $FreeObject = $.makeType<$FreeObject>(
  _.spec,
  'e8e3f288-533a-11ec-81d0-17cb2a17a40a',
  _.syntax.literal
);

const FreeObject: $.$expr_PathNode<
  $.TypeSet<$FreeObject, $.Cardinality.One>,
  null,
  true
> = _.syntax.$expr_PathNode(
  $.$toSet($FreeObject, $.Cardinality.One),
  null,
  true
);

type assert_singleλFuncExpr<P1 extends $.TypeSet<$.BaseType>> =
  _.syntax.$expr_Function<
    'std::assert_single',
    [P1],
    {},
    $.TypeSet<
      $.getPrimitiveBaseType<P1['__element__']>,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
/**
 * Check that the input set contains at most one element, raise
         CardinalityViolationError otherwise.
 */
function assert_single<P1 extends $.TypeSet<$.BaseType>>(
  input: P1
): assert_singleλFuncExpr<P1>;
function assert_single(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::assert_single', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000001',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::assert_single',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type assert_existsλFuncExpr<P1 extends $.TypeSet<$.BaseType>> =
  _.syntax.$expr_Function<
    'std::assert_exists',
    [P1],
    {},
    $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>, $.Cardinality.Many>
  >;
/**
 * Check that the input set contains at least one element, raise
         CardinalityViolationError otherwise.
 */
function assert_exists<P1 extends $.TypeSet<$.BaseType>>(
  input: P1
): assert_existsλFuncExpr<P1>;
function assert_exists(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::assert_exists', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000001',
      returnTypemod: 'SetOfType',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::assert_exists',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type assert_distinctλFuncExpr<P1 extends $.TypeSet<$.BaseType>> =
  _.syntax.$expr_Function<
    'std::assert_distinct',
    [P1],
    {},
    $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>, $.Cardinality.Many>
  >;
/**
 * Check that the input set is a proper set, i.e. all elements
         are unique
 */
function assert_distinct<P1 extends $.TypeSet<$.BaseType>>(
  input: P1
): assert_distinctλFuncExpr<P1>;
function assert_distinct(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::assert_distinct', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000001',
      returnTypemod: 'SetOfType',
      preservesOptionality: true,
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::assert_distinct',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type lenλFuncExpr<P1 extends $.TypeSet<$str>> = _.syntax.$expr_Function<
  'std::len',
  [P1],
  {},
  $.TypeSet<$int64, P1['__cardinality__']>
>;
type lenλFuncExpr2<P1 extends $.TypeSet<$bytes>> = _.syntax.$expr_Function<
  'std::len',
  [P1],
  {},
  $.TypeSet<$int64, P1['__cardinality__']>
>;
type lenλFuncExpr3<P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>> =
  _.syntax.$expr_Function<
    'std::len',
    [P1],
    {},
    $.TypeSet<$int64, P1['__cardinality__']>
  >;
/**
 * A polymorphic function to calculate a "length" of its first argument.
 */
function len<P1 extends $.TypeSet<$str>>(str: P1): lenλFuncExpr<P1>;
/**
 * A polymorphic function to calculate a "length" of its first argument.
 */
function len<P1 extends $.TypeSet<$bytes>>(bytes: P1): lenλFuncExpr2<P1>;
/**
 * A polymorphic function to calculate a "length" of its first argument.
 */
function len<P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>>(
  array: P1
): lenλFuncExpr3<P1>;
function len(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::len', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::len',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type sumλFuncExpr<P1 extends $.TypeSet<$int32λICastableTo>> =
  _.syntax.$expr_Function<
    'std::sum',
    [P1],
    {},
    $.TypeSet<$int64, $.Cardinality.One>
  >;
type sumλFuncExpr2<P1 extends $.TypeSet<$float32λICastableTo>> =
  _.syntax.$expr_Function<
    'std::sum',
    [P1],
    {},
    $.TypeSet<$float32, $.Cardinality.One>
  >;
type sumλFuncExpr3<P1 extends $.TypeSet<$int64λICastableTo>> =
  _.syntax.$expr_Function<
    'std::sum',
    [P1],
    {},
    $.TypeSet<$int64, $.Cardinality.One>
  >;
type sumλFuncExpr4<P1 extends $.TypeSet<$bigintλICastableTo>> =
  _.syntax.$expr_Function<
    'std::sum',
    [P1],
    {},
    $.TypeSet<$bigint, $.Cardinality.One>
  >;
type sumλFuncExpr5<P1 extends $.TypeSet<$float64λICastableTo>> =
  _.syntax.$expr_Function<
    'std::sum',
    [P1],
    {},
    $.TypeSet<$float64, $.Cardinality.One>
  >;
type sumλFuncExpr6<P1 extends $.TypeSet<$decimalλICastableTo>> =
  _.syntax.$expr_Function<
    'std::sum',
    [P1],
    {},
    $.TypeSet<$decimal, $.Cardinality.One>
  >;
/**
 * Return the sum of the set of numbers.
 */
function sum<P1 extends $.TypeSet<$int32λICastableTo>>(s: P1): sumλFuncExpr<P1>;
/**
 * Return the sum of the set of numbers.
 */
function sum<P1 extends $.TypeSet<$float32λICastableTo>>(
  s: P1
): sumλFuncExpr2<P1>;
/**
 * Return the sum of the set of numbers.
 */
function sum<P1 extends $.TypeSet<$int64λICastableTo>>(
  s: P1
): sumλFuncExpr3<P1>;
/**
 * Return the sum of the set of numbers.
 */
function sum<P1 extends $.TypeSet<$bigintλICastableTo>>(
  s: P1
): sumλFuncExpr4<P1>;
/**
 * Return the sum of the set of numbers.
 */
function sum<P1 extends $.TypeSet<$float64λICastableTo>>(
  s: P1
): sumλFuncExpr5<P1>;
/**
 * Return the sum of the set of numbers.
 */
function sum<P1 extends $.TypeSet<$decimalλICastableTo>>(
  s: P1
): sumλFuncExpr6<P1>;
function sum(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::sum', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000106',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000110',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::sum',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type countλFuncExpr<P1 extends $.TypeSet<$.BaseType>> = _.syntax.$expr_Function<
  'std::count',
  [P1],
  {},
  $.TypeSet<$int64, $.Cardinality.One>
>;
/**
 * Return the number of elements in a set.
 */
function count<P1 extends $.TypeSet<$.BaseType>>(s: P1): countλFuncExpr<P1>;
function count(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::count', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::count',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type randomλFuncExpr = _.syntax.$expr_Function<
  'std::random',
  [],
  {},
  $.TypeSet<$float64, $.Cardinality.One>
>;
/**
 * Return a pseudo-random number in the range `0.0 <= x < 1.0`
 */
function random(): randomλFuncExpr;
function random(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::random', args, _.spec, [
    { args: [], returnTypeId: '00000000-0000-0000-0000-000000000107' },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::random',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type minλFuncExpr<P1 extends $.TypeSet<$anyreal>> = _.syntax.$expr_Function<
  'std::min',
  [P1],
  {},
  $.TypeSet<
    $anyreal,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
type minλFuncExpr2<P1 extends $.TypeSet<$.EnumType>> = _.syntax.$expr_Function<
  'std::min',
  [P1],
  {},
  $.TypeSet<
    $.EnumType,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
type minλFuncExpr3<P1 extends $.TypeSet<$str>> = _.syntax.$expr_Function<
  'std::min',
  [P1],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
type minλFuncExpr4<P1 extends $.TypeSet<$datetime>> = _.syntax.$expr_Function<
  'std::min',
  [P1],
  {},
  $.TypeSet<
    $datetime,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
type minλFuncExpr5<P1 extends $.TypeSet<$duration>> = _.syntax.$expr_Function<
  'std::min',
  [P1],
  {},
  $.TypeSet<
    $duration,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
type minλFuncExpr6<P1 extends $.TypeSet<_cal.$local_datetime>> =
  _.syntax.$expr_Function<
    'std::min',
    [P1],
    {},
    $.TypeSet<
      _cal.$local_datetime,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
type minλFuncExpr7<P1 extends $.TypeSet<_cal.$local_date>> =
  _.syntax.$expr_Function<
    'std::min',
    [P1],
    {},
    $.TypeSet<
      _cal.$local_date,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
type minλFuncExpr8<P1 extends $.TypeSet<_cal.$local_time>> =
  _.syntax.$expr_Function<
    'std::min',
    [P1],
    {},
    $.TypeSet<
      _cal.$local_time,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
type minλFuncExpr9<P1 extends $.TypeSet<$.ArrayType<_cal.$local_datetime>>> =
  _.syntax.$expr_Function<
    'std::min',
    [P1],
    {},
    $.TypeSet<
      $.ArrayType<_cal.$local_datetime>,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
type minλFuncExpr10<P1 extends $.TypeSet<$.ArrayType<_cal.$local_date>>> =
  _.syntax.$expr_Function<
    'std::min',
    [P1],
    {},
    $.TypeSet<
      $.ArrayType<_cal.$local_date>,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
type minλFuncExpr11<P1 extends $.TypeSet<$.ArrayType<_cal.$local_time>>> =
  _.syntax.$expr_Function<
    'std::min',
    [P1],
    {},
    $.TypeSet<
      $.ArrayType<_cal.$local_time>,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
type minλFuncExpr12<
  P1 extends $.TypeSet<$.ArrayType<_cal.$relative_duration>>
> = _.syntax.$expr_Function<
  'std::min',
  [P1],
  {},
  $.TypeSet<
    $.ArrayType<_cal.$relative_duration>,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
type minλFuncExpr13<P1 extends $.TypeSet<$.BaseType>> = _.syntax.$expr_Function<
  'std::min',
  [P1],
  {},
  $.TypeSet<
    $.getPrimitiveBaseType<P1['__element__']>,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<$anyreal>>(vals: P1): minλFuncExpr<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<$.EnumType>>(vals: P1): minλFuncExpr2<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<$str>>(vals: P1): minλFuncExpr3<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<$datetime>>(vals: P1): minλFuncExpr4<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<$duration>>(vals: P1): minλFuncExpr5<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<_cal.$local_datetime>>(
  vals: P1
): minλFuncExpr6<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<_cal.$local_date>>(
  vals: P1
): minλFuncExpr7<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<_cal.$local_time>>(
  vals: P1
): minλFuncExpr8<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<$.ArrayType<_cal.$local_datetime>>>(
  vals: P1
): minλFuncExpr9<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<$.ArrayType<_cal.$local_date>>>(
  vals: P1
): minλFuncExpr10<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<$.ArrayType<_cal.$local_time>>>(
  vals: P1
): minλFuncExpr11<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<$.ArrayType<_cal.$relative_duration>>>(
  vals: P1
): minλFuncExpr12<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<P1 extends $.TypeSet<$.BaseType>>(vals: P1): minλFuncExpr13<P1>;
function min(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::min', args, _.spec, [
    {
      args: [
        {
          typeId: 'e181adc8-533a-11ec-9860-675dabf4e0ee',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: 'e181adc8-533a-11ec-9860-675dabf4e0ee',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010e',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010b',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010c',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010d',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '44a76fab-349d-00e9-396b-1000d7e967da',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '44a76fab-349d-00e9-396b-1000d7e967da',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '076e1d6f-f104-88b2-0632-d53171d9c827',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '076e1d6f-f104-88b2-0632-d53171d9c827',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '82ea7b30-73d3-c79c-86fb-b253f194f53e',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '82ea7b30-73d3-c79c-86fb-b253f194f53e',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '63acbf06-4c0c-67ac-c508-50a5ef4f4b16',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '63acbf06-4c0c-67ac-c508-50a5ef4f4b16',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000001',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::min',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type maxλFuncExpr<P1 extends $.TypeSet<$anyreal>> = _.syntax.$expr_Function<
  'std::max',
  [P1],
  {},
  $.TypeSet<
    $anyreal,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
type maxλFuncExpr2<P1 extends $.TypeSet<$.EnumType>> = _.syntax.$expr_Function<
  'std::max',
  [P1],
  {},
  $.TypeSet<
    $.EnumType,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
type maxλFuncExpr3<P1 extends $.TypeSet<$str>> = _.syntax.$expr_Function<
  'std::max',
  [P1],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
type maxλFuncExpr4<P1 extends $.TypeSet<$datetime>> = _.syntax.$expr_Function<
  'std::max',
  [P1],
  {},
  $.TypeSet<
    $datetime,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
type maxλFuncExpr5<P1 extends $.TypeSet<$duration>> = _.syntax.$expr_Function<
  'std::max',
  [P1],
  {},
  $.TypeSet<
    $duration,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
type maxλFuncExpr6<P1 extends $.TypeSet<_cal.$local_datetime>> =
  _.syntax.$expr_Function<
    'std::max',
    [P1],
    {},
    $.TypeSet<
      _cal.$local_datetime,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
type maxλFuncExpr7<P1 extends $.TypeSet<_cal.$local_date>> =
  _.syntax.$expr_Function<
    'std::max',
    [P1],
    {},
    $.TypeSet<
      _cal.$local_date,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
type maxλFuncExpr8<P1 extends $.TypeSet<_cal.$local_time>> =
  _.syntax.$expr_Function<
    'std::max',
    [P1],
    {},
    $.TypeSet<
      _cal.$local_time,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
type maxλFuncExpr9<P1 extends $.TypeSet<$.ArrayType<_cal.$local_datetime>>> =
  _.syntax.$expr_Function<
    'std::max',
    [P1],
    {},
    $.TypeSet<
      $.ArrayType<_cal.$local_datetime>,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
type maxλFuncExpr10<P1 extends $.TypeSet<$.ArrayType<_cal.$local_date>>> =
  _.syntax.$expr_Function<
    'std::max',
    [P1],
    {},
    $.TypeSet<
      $.ArrayType<_cal.$local_date>,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
type maxλFuncExpr11<P1 extends $.TypeSet<$.ArrayType<_cal.$local_time>>> =
  _.syntax.$expr_Function<
    'std::max',
    [P1],
    {},
    $.TypeSet<
      $.ArrayType<_cal.$local_time>,
      $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
    >
  >;
type maxλFuncExpr12<
  P1 extends $.TypeSet<$.ArrayType<_cal.$relative_duration>>
> = _.syntax.$expr_Function<
  'std::max',
  [P1],
  {},
  $.TypeSet<
    $.ArrayType<_cal.$relative_duration>,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
type maxλFuncExpr13<P1 extends $.TypeSet<$.BaseType>> = _.syntax.$expr_Function<
  'std::max',
  [P1],
  {},
  $.TypeSet<
    $.getPrimitiveBaseType<P1['__element__']>,
    $.cardinalityUtil.overrideUpperBound<P1['__cardinality__'], 'One'>
  >
>;
/**
 * Return the greatest value of the input set.
 */
function max<P1 extends $.TypeSet<$anyreal>>(vals: P1): maxλFuncExpr<P1>;
/**
 * Return the greatest value of the input set.
 */
function max<P1 extends $.TypeSet<$.EnumType>>(vals: P1): maxλFuncExpr2<P1>;
/**
 * Return the greatest value of the input set.
 */
function max<P1 extends $.TypeSet<$str>>(vals: P1): maxλFuncExpr3<P1>;
/**
 * Return the greatest value of the input set.
 */
function max<P1 extends $.TypeSet<$datetime>>(vals: P1): maxλFuncExpr4<P1>;
/**
 * Return the greatest value of the input set.
 */
function max<P1 extends $.TypeSet<$duration>>(vals: P1): maxλFuncExpr5<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<P1 extends $.TypeSet<_cal.$local_datetime>>(
  vals: P1
): maxλFuncExpr6<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<P1 extends $.TypeSet<_cal.$local_date>>(
  vals: P1
): maxλFuncExpr7<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<P1 extends $.TypeSet<_cal.$local_time>>(
  vals: P1
): maxλFuncExpr8<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<P1 extends $.TypeSet<$.ArrayType<_cal.$local_datetime>>>(
  vals: P1
): maxλFuncExpr9<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<P1 extends $.TypeSet<$.ArrayType<_cal.$local_date>>>(
  vals: P1
): maxλFuncExpr10<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<P1 extends $.TypeSet<$.ArrayType<_cal.$local_time>>>(
  vals: P1
): maxλFuncExpr11<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<P1 extends $.TypeSet<$.ArrayType<_cal.$relative_duration>>>(
  vals: P1
): maxλFuncExpr12<P1>;
/**
 * Return the greatest value of the input set.
 */
function max<P1 extends $.TypeSet<$.BaseType>>(vals: P1): maxλFuncExpr13<P1>;
function max(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::max', args, _.spec, [
    {
      args: [
        {
          typeId: 'e181adc8-533a-11ec-9860-675dabf4e0ee',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: 'e181adc8-533a-11ec-9860-675dabf4e0ee',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010e',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010b',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010c',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010d',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '44a76fab-349d-00e9-396b-1000d7e967da',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '44a76fab-349d-00e9-396b-1000d7e967da',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '076e1d6f-f104-88b2-0632-d53171d9c827',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '076e1d6f-f104-88b2-0632-d53171d9c827',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '82ea7b30-73d3-c79c-86fb-b253f194f53e',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '82ea7b30-73d3-c79c-86fb-b253f194f53e',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '63acbf06-4c0c-67ac-c508-50a5ef4f4b16',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '63acbf06-4c0c-67ac-c508-50a5ef4f4b16',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000001',
      returnTypemod: 'OptionalType',
      preservesOptionality: true,
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::max',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type allλFuncExpr<P1 extends $.TypeSet<$bool>> = _.syntax.$expr_Function<
  'std::all',
  [P1],
  {},
  $.TypeSet<$bool, $.Cardinality.One>
>;
/**
 * Generalized boolean `AND` applied to the set of *values*.
 */
function all<P1 extends $.TypeSet<$bool>>(vals: P1): allλFuncExpr<P1>;
function all(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::all', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::all',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type anyλFuncExpr<P1 extends $.TypeSet<$bool>> = _.syntax.$expr_Function<
  'std::any',
  [P1],
  {},
  $.TypeSet<$bool, $.Cardinality.One>
>;
/**
 * Generalized boolean `OR` applied to the set of *values*.
 */
function any<P1 extends $.TypeSet<$bool>>(vals: P1): anyλFuncExpr<P1>;
function any(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::any', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::any',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type enumerateλFuncExpr<P1 extends $.TypeSet<$.BaseType>> =
  _.syntax.$expr_Function<
    'std::enumerate',
    [P1],
    {},
    $.TypeSet<
      $.TupleType<[$int64, $.getPrimitiveBaseType<P1['__element__']>]>,
      $.Cardinality.Many
    >
  >;
/**
 * Return a set of tuples of the form `(index, element)`.
 */
function enumerate<P1 extends $.TypeSet<$.BaseType>>(
  vals: P1
): enumerateλFuncExpr<P1>;
function enumerate(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::enumerate', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '9c27acd9-0932-6050-c7b0-c7410e2e0a85',
      returnTypemod: 'SetOfType',
      preservesOptionality: true,
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::enumerate',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type roundλFuncExpr<P1 extends $.TypeSet<$int64λICastableTo>> =
  _.syntax.$expr_Function<
    'std::round',
    [P1],
    {},
    $.TypeSet<$int64, P1['__cardinality__']>
  >;
type roundλFuncExpr2<P1 extends $.TypeSet<$float64λICastableTo>> =
  _.syntax.$expr_Function<
    'std::round',
    [P1],
    {},
    $.TypeSet<$float64, P1['__cardinality__']>
  >;
type roundλFuncExpr3<P1 extends $.TypeSet<$bigintλICastableTo>> =
  _.syntax.$expr_Function<
    'std::round',
    [P1],
    {},
    $.TypeSet<$bigint, P1['__cardinality__']>
  >;
type roundλFuncExpr4<P1 extends $.TypeSet<$decimalλICastableTo>> =
  _.syntax.$expr_Function<
    'std::round',
    [P1],
    {},
    $.TypeSet<$decimal, P1['__cardinality__']>
  >;
type roundλFuncExpr5<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::round',
  [P1, P2],
  {},
  $.TypeSet<
    $decimal,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Round to the nearest value.
 */
function round<P1 extends $.TypeSet<$int64λICastableTo>>(
  val: P1
): roundλFuncExpr<P1>;
/**
 * Round to the nearest value.
 */
function round<P1 extends $.TypeSet<$float64λICastableTo>>(
  val: P1
): roundλFuncExpr2<P1>;
/**
 * Round to the nearest value.
 */
function round<P1 extends $.TypeSet<$bigintλICastableTo>>(
  val: P1
): roundλFuncExpr3<P1>;
/**
 * Round to the nearest value.
 */
function round<P1 extends $.TypeSet<$decimalλICastableTo>>(
  val: P1
): roundλFuncExpr4<P1>;
/**
 * Round to the nearest value.
 */
function round<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(val: P1, d: P2): roundλFuncExpr5<P1, P2>;
function round(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::round', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000110',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::round',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type containsλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::contains',
  [P1, P2],
  {},
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type containsλFuncExpr2<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>
> = _.syntax.$expr_Function<
  'std::contains',
  [P1, P2],
  {},
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type containsλFuncExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Function<
  'std::contains',
  [P1, P2],
  {},
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type containsλFuncExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Function<
  'std::contains',
  [P1, P2],
  {},
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type containsλFuncExpr5<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Function<
  'std::contains',
  [P1, P2],
  {},
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type containsλFuncExpr6<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Function<
  'std::contains',
  [P1, P2],
  {},
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type containsλFuncExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
> = _.syntax.$expr_Function<
  'std::contains',
  [P1, P2],
  {},
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  haystack: P1,
  needle: P2
): containsλFuncExpr<P1, P2>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<P1 extends $.TypeSet<$bytes>, P2 extends $.TypeSet<$bytes>>(
  haystack: P1,
  needle: P2
): containsλFuncExpr2<P1, P2>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(haystack: P1, needle: P2): containsλFuncExpr3<P1, P2>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(haystack: P1, needle: P2): containsλFuncExpr4<P1, P2>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ObjectType>
>(haystack: P1, needle: P2): containsλFuncExpr5<P1, P2>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(haystack: P1, needle: P2): containsλFuncExpr6<P1, P2>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
>(haystack: P1, needle: P2): containsλFuncExpr7<P1, P2>;
function contains(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::contains', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::contains',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type findλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::find',
  [P1, P2],
  {},
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type findλFuncExpr2<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>
> = _.syntax.$expr_Function<
  'std::find',
  [P1, P2],
  {},
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type findλFuncExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$decimalλICastableTo>,
  P3 extends $.TypeSet<$int64λICastableTo> | undefined
> = _.syntax.$expr_Function<
  'std::find',
  [P1, P2, P3],
  {},
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      $.cardinalityUtil.optionalParamCardinality<P3>
    >
  >
>;
type findλFuncExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$float64λICastableTo>,
  P3 extends $.TypeSet<$int64λICastableTo> | undefined
> = _.syntax.$expr_Function<
  'std::find',
  [P1, P2, P3],
  {},
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      $.cardinalityUtil.optionalParamCardinality<P3>
    >
  >
>;
type findλFuncExpr5<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ObjectType>,
  P3 extends $.TypeSet<$int64λICastableTo> | undefined
> = _.syntax.$expr_Function<
  'std::find',
  [P1, P2, P3],
  {},
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      $.cardinalityUtil.optionalParamCardinality<P3>
    >
  >
>;
type findλFuncExpr6<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.AnyTupleType>,
  P3 extends $.TypeSet<$int64λICastableTo> | undefined
> = _.syntax.$expr_Function<
  'std::find',
  [P1, P2, P3],
  {},
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      $.cardinalityUtil.optionalParamCardinality<P3>
    >
  >
>;
type findλFuncExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.getPrimitiveBaseType<P1['__element__']['__element__']>
  >,
  P3 extends $.TypeSet<$int64λICastableTo> | undefined
> = _.syntax.$expr_Function<
  'std::find',
  [P1, P2, P3],
  {},
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      $.cardinalityUtil.optionalParamCardinality<P3>
    >
  >
>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  haystack: P1,
  needle: P2
): findλFuncExpr<P1, P2>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<P1 extends $.TypeSet<$bytes>, P2 extends $.TypeSet<$bytes>>(
  haystack: P1,
  needle: P2
): findλFuncExpr2<P1, P2>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$decimalλICastableTo>,
  P3 extends $.TypeSet<$int64λICastableTo> | undefined
>(haystack: P1, needle: P2, from_pos?: P3): findλFuncExpr3<P1, P2, P3>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$float64λICastableTo>,
  P3 extends $.TypeSet<$int64λICastableTo> | undefined
>(haystack: P1, needle: P2, from_pos?: P3): findλFuncExpr4<P1, P2, P3>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ObjectType>,
  P3 extends $.TypeSet<$int64λICastableTo> | undefined
>(haystack: P1, needle: P2, from_pos?: P3): findλFuncExpr5<P1, P2, P3>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.AnyTupleType>,
  P3 extends $.TypeSet<$int64λICastableTo> | undefined
>(haystack: P1, needle: P2, from_pos?: P3): findλFuncExpr6<P1, P2, P3>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.getPrimitiveBaseType<P1['__element__']['__element__']>
  >,
  P3 extends $.TypeSet<$int64λICastableTo> | undefined
>(haystack: P1, needle: P2, from_pos?: P3): findλFuncExpr7<P1, P2, P3>;
function find(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::find', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::find',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type array_aggλFuncExpr<P1 extends $.TypeSet<$.NonArrayType>> =
  _.syntax.$expr_Function<
    'std::array_agg',
    [P1],
    {},
    $.TypeSet<
      $.ArrayType<$.getPrimitiveBaseType<P1['__element__']>>,
      $.Cardinality.One
    >
  >;
/**
 * Return the array made from all of the input set elements.
 */
function array_agg<P1 extends $.TypeSet<$.NonArrayType>>(
  s: P1
): array_aggλFuncExpr<P1>;
function array_agg(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::array_agg', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::array_agg',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type array_unpackλFuncExpr<P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>> =
  _.syntax.$expr_Function<
    'std::array_unpack',
    [P1],
    {},
    $.TypeSet<
      $.getPrimitiveBaseType<P1['__element__']['__element__']>,
      $.Cardinality.Many
    >
  >;
/**
 * Return array elements as a set.
 */
function array_unpack<P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>>(
  array: P1
): array_unpackλFuncExpr<P1>;
function array_unpack(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::array_unpack', args, _.spec, [
    {
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000001',
      returnTypemod: 'SetOfType',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::array_unpack',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type array_getλFuncExpr<
  NamedArgs extends {
    default?: $.TypeSet<$decimalλICastableTo>;
  },
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::array_get',
  [P1, P2],
  NamedArgs,
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<
      NamedArgs['default'] extends $.TypeSet
        ? NamedArgs['default']['__element__']
        : undefined,
      P1['__element__']['__element__']
    >,
    $.cardinalityUtil.overrideLowerBound<
      $.cardinalityUtil.multiplyCardinalities<
        $.cardinalityUtil.multiplyCardinalities<
          P1['__cardinality__'],
          P2['__cardinality__']
        >,
        $.cardinalityUtil.optionalParamCardinality<NamedArgs['default']>
      >,
      'Zero'
    >
  >
>;
type array_getλFuncExpr2<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::array_get',
  [P1, P2],
  {},
  $.TypeSet<
    P1['__element__']['__element__'],
    $.cardinalityUtil.overrideLowerBound<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      'Zero'
    >
  >
>;
type array_getλFuncExpr3<
  NamedArgs extends {
    default?: $.TypeSet<$float64λICastableTo>;
  },
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::array_get',
  [P1, P2],
  NamedArgs,
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<
      NamedArgs['default'] extends $.TypeSet
        ? NamedArgs['default']['__element__']
        : undefined,
      P1['__element__']['__element__']
    >,
    $.cardinalityUtil.overrideLowerBound<
      $.cardinalityUtil.multiplyCardinalities<
        $.cardinalityUtil.multiplyCardinalities<
          P1['__cardinality__'],
          P2['__cardinality__']
        >,
        $.cardinalityUtil.optionalParamCardinality<NamedArgs['default']>
      >,
      'Zero'
    >
  >
>;
type array_getλFuncExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::array_get',
  [P1, P2],
  {},
  $.TypeSet<
    P1['__element__']['__element__'],
    $.cardinalityUtil.overrideLowerBound<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      'Zero'
    >
  >
>;
type array_getλFuncExpr5<
  NamedArgs extends {
    default?: $.TypeSet<$.ObjectType>;
  },
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::array_get',
  [P1, P2],
  NamedArgs,
  $.TypeSet<
    _.syntax.mergeObjectTypes<
      NamedArgs['default'] extends $.TypeSet
        ? NamedArgs['default']['__element__']
        : undefined,
      P1['__element__']['__element__']
    >,
    $.cardinalityUtil.overrideLowerBound<
      $.cardinalityUtil.multiplyCardinalities<
        $.cardinalityUtil.multiplyCardinalities<
          P1['__cardinality__'],
          P2['__cardinality__']
        >,
        $.cardinalityUtil.optionalParamCardinality<NamedArgs['default']>
      >,
      'Zero'
    >
  >
>;
type array_getλFuncExpr6<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::array_get',
  [P1, P2],
  {},
  $.TypeSet<
    P1['__element__']['__element__'],
    $.cardinalityUtil.overrideLowerBound<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      'Zero'
    >
  >
>;
type array_getλFuncExpr7<
  NamedArgs extends {
    default?: $.TypeSet<$.AnyTupleType>;
  },
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::array_get',
  [P1, P2],
  NamedArgs,
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<
      NamedArgs['default'] extends $.TypeSet
        ? NamedArgs['default']['__element__']
        : undefined,
      P1['__element__']['__element__']
    >,
    $.cardinalityUtil.overrideLowerBound<
      $.cardinalityUtil.multiplyCardinalities<
        $.cardinalityUtil.multiplyCardinalities<
          P1['__cardinality__'],
          P2['__cardinality__']
        >,
        $.cardinalityUtil.optionalParamCardinality<NamedArgs['default']>
      >,
      'Zero'
    >
  >
>;
type array_getλFuncExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::array_get',
  [P1, P2],
  {},
  $.TypeSet<
    P1['__element__']['__element__'],
    $.cardinalityUtil.overrideLowerBound<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      'Zero'
    >
  >
>;
type array_getλFuncExpr9<
  NamedArgs extends {
    default?: $.TypeSet<
      $.getPrimitiveBaseType<P1['__element__']['__element__']>
    >;
  },
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::array_get',
  [P1, P2],
  NamedArgs,
  $.TypeSet<
    $.getPrimitiveBaseType<P1['__element__']['__element__']>,
    $.cardinalityUtil.overrideLowerBound<
      $.cardinalityUtil.multiplyCardinalities<
        $.cardinalityUtil.multiplyCardinalities<
          P1['__cardinality__'],
          P2['__cardinality__']
        >,
        $.cardinalityUtil.optionalParamCardinality<NamedArgs['default']>
      >,
      'Zero'
    >
  >
>;
type array_getλFuncExpr10<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::array_get',
  [P1, P2],
  {},
  $.TypeSet<
    $.getPrimitiveBaseType<P1['__element__']['__element__']>,
    $.cardinalityUtil.overrideLowerBound<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      'Zero'
    >
  >
>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  NamedArgs extends {
    default?: $.TypeSet<$decimalλICastableTo>;
  },
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(
  namedArgs: NamedArgs,
  array: P1,
  idx: P2
): array_getλFuncExpr<NamedArgs, P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(array: P1, idx: P2): array_getλFuncExpr2<P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  NamedArgs extends {
    default?: $.TypeSet<$float64λICastableTo>;
  },
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(
  namedArgs: NamedArgs,
  array: P1,
  idx: P2
): array_getλFuncExpr3<NamedArgs, P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(array: P1, idx: P2): array_getλFuncExpr4<P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  NamedArgs extends {
    default?: $.TypeSet<$.ObjectType>;
  },
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(
  namedArgs: NamedArgs,
  array: P1,
  idx: P2
): array_getλFuncExpr5<NamedArgs, P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(array: P1, idx: P2): array_getλFuncExpr6<P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  NamedArgs extends {
    default?: $.TypeSet<$.AnyTupleType>;
  },
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(
  namedArgs: NamedArgs,
  array: P1,
  idx: P2
): array_getλFuncExpr7<NamedArgs, P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(array: P1, idx: P2): array_getλFuncExpr8<P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  NamedArgs extends {
    default?: $.TypeSet<
      $.getPrimitiveBaseType<P1['__element__']['__element__']>
    >;
  },
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(
  namedArgs: NamedArgs,
  array: P1,
  idx: P2
): array_getλFuncExpr9<NamedArgs, P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(array: P1, idx: P2): array_getλFuncExpr10<P1, P2>;
function array_get(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::array_get', args, _.spec, [
    {
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      namedArgs: {
        default: {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      },
      returnTypeId: '00000000-0000-0000-0000-000000000001',
      returnTypemod: 'OptionalType',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::array_get',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type array_joinλFuncExpr<
  P1 extends $.TypeSet<$.ArrayType<$str>>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::array_join',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Render an array to a string.
 */
function array_join<
  P1 extends $.TypeSet<$.ArrayType<$str>>,
  P2 extends $.TypeSet<$str>
>(array: P1, delimiter: P2): array_joinλFuncExpr<P1, P2>;
function array_join(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::array_join', args, _.spec, [
    {
      args: [
        {
          typeId: '05f91774-15ea-9001-038e-092c1cad80af',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::array_join',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type bytes_get_bitλFuncExpr<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::bytes_get_bit',
  [P1, P2],
  {},
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Get the *nth* bit of the *bytes* value.
 */
function bytes_get_bit<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(bytes: P1, num: P2): bytes_get_bitλFuncExpr<P1, P2>;
function bytes_get_bit(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::bytes_get_bit', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::bytes_get_bit',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type datetime_currentλFuncExpr = _.syntax.$expr_Function<
  'std::datetime_current',
  [],
  {},
  $.TypeSet<$datetime, $.Cardinality.One>
>;
/**
 * Return the current server date and time.
 */
function datetime_current(): datetime_currentλFuncExpr;
function datetime_current(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::datetime_current', args, _.spec, [
    { args: [], returnTypeId: '00000000-0000-0000-0000-00000000010a' },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::datetime_current',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type datetime_of_transactionλFuncExpr = _.syntax.$expr_Function<
  'std::datetime_of_transaction',
  [],
  {},
  $.TypeSet<$datetime, $.Cardinality.One>
>;
/**
 * Return the date and time of the start of the current transaction.
 */
function datetime_of_transaction(): datetime_of_transactionλFuncExpr;
function datetime_of_transaction(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::datetime_of_transaction', args, _.spec, [
    { args: [], returnTypeId: '00000000-0000-0000-0000-00000000010a' },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::datetime_of_transaction',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type datetime_of_statementλFuncExpr = _.syntax.$expr_Function<
  'std::datetime_of_statement',
  [],
  {},
  $.TypeSet<$datetime, $.Cardinality.One>
>;
/**
 * Return the date and time of the start of the current statement.
 */
function datetime_of_statement(): datetime_of_statementλFuncExpr;
function datetime_of_statement(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::datetime_of_statement', args, _.spec, [
    { args: [], returnTypeId: '00000000-0000-0000-0000-00000000010a' },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::datetime_of_statement',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type datetime_getλFuncExpr<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::datetime_get',
  [P1, P2],
  {},
  $.TypeSet<
    $float64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type datetime_getλFuncExpr2<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::datetime_get',
  [P1, P2],
  {},
  $.TypeSet<
    $float64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Extract a specific element of input datetime by name.
 */
function datetime_get<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$str>
>(dt: P1, el: P2): datetime_getλFuncExpr<P1, P2>;
/**
 * Extract a specific element of input datetime by name.
 */
function datetime_get<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$str>
>(dt: P1, el: P2): datetime_getλFuncExpr2<P1, P2>;
function datetime_get(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::datetime_get', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::datetime_get',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type datetime_truncateλFuncExpr<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::datetime_truncate',
  [P1, P2],
  {},
  $.TypeSet<
    $datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Truncate the input datetime to a particular precision.
 */
function datetime_truncate<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$str>
>(dt: P1, unit: P2): datetime_truncateλFuncExpr<P1, P2>;
function datetime_truncate(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::datetime_truncate', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::datetime_truncate',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type duration_truncateλFuncExpr<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::duration_truncate',
  [P1, P2],
  {},
  $.TypeSet<
    $duration,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Truncate the input duration to a particular precision.
 */
function duration_truncate<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$str>
>(dt: P1, unit: P2): duration_truncateλFuncExpr<P1, P2>;
function duration_truncate(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::duration_truncate', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010e',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::duration_truncate',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type duration_to_secondsλFuncExpr<P1 extends $.TypeSet<$duration>> =
  _.syntax.$expr_Function<
    'std::duration_to_seconds',
    [P1],
    {},
    $.TypeSet<$decimal, P1['__cardinality__']>
  >;
/**
 * Return duration as total number of seconds in interval.
 */
function duration_to_seconds<P1 extends $.TypeSet<$duration>>(
  dur: P1
): duration_to_secondsλFuncExpr<P1>;
function duration_to_seconds(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::duration_to_seconds', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::duration_to_seconds',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type json_typeofλFuncExpr<P1 extends $.TypeSet<$json>> =
  _.syntax.$expr_Function<
    'std::json_typeof',
    [P1],
    {},
    $.TypeSet<$str, P1['__cardinality__']>
  >;
/**
 * Return the type of the outermost JSON value as a string.
 */
function json_typeof<P1 extends $.TypeSet<$json>>(
  json: P1
): json_typeofλFuncExpr<P1>;
function json_typeof(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::json_typeof', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::json_typeof',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type json_array_unpackλFuncExpr<P1 extends $.TypeSet<$json>> =
  _.syntax.$expr_Function<
    'std::json_array_unpack',
    [P1],
    {},
    $.TypeSet<$json, $.Cardinality.Many>
  >;
/**
 * Return elements of JSON array as a set of `json`.
 */
function json_array_unpack<P1 extends $.TypeSet<$json>>(
  array: P1
): json_array_unpackλFuncExpr<P1>;
function json_array_unpack(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::json_array_unpack', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010f',
      returnTypemod: 'SetOfType',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::json_array_unpack',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type json_object_unpackλFuncExpr<P1 extends $.TypeSet<$json>> =
  _.syntax.$expr_Function<
    'std::json_object_unpack',
    [P1],
    {},
    $.TypeSet<$.TupleType<[$str, $json]>, $.Cardinality.Many>
  >;
/**
 * Return set of key/value tuples that make up the JSON object.
 */
function json_object_unpack<P1 extends $.TypeSet<$json>>(
  obj: P1
): json_object_unpackλFuncExpr<P1>;
function json_object_unpack(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::json_object_unpack', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '79d8ede8-30f1-a805-fbc3-503ece3c9205',
      returnTypemod: 'SetOfType',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::json_object_unpack',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type json_getλFuncExpr<
  NamedArgs extends {
    default?: $.TypeSet<$json>;
  },
  P1 extends $.TypeSet<$json>,
  P2 extends [$.TypeSet<$str>, ...$.TypeSet<$str>[]]
> = _.syntax.$expr_Function<
  'std::json_get',
  [P1, ...P2],
  NamedArgs,
  $.TypeSet<
    $json,
    $.cardinalityUtil.overrideLowerBound<
      $.cardinalityUtil.multiplyCardinalities<
        $.cardinalityUtil.multiplyCardinalities<
          P1['__cardinality__'],
          $.cardinalityUtil.multiplyCardinalitiesVariadic<
            $.cardinalityUtil.paramArrayCardinality<P2>
          >
        >,
        $.cardinalityUtil.optionalParamCardinality<NamedArgs['default']>
      >,
      'Zero'
    >
  >
>;
type json_getλFuncExpr2<
  P1 extends $.TypeSet<$json>,
  P2 extends [$.TypeSet<$str>, ...$.TypeSet<$str>[]]
> = _.syntax.$expr_Function<
  'std::json_get',
  [P1, ...P2],
  {},
  $.TypeSet<
    $json,
    $.cardinalityUtil.overrideLowerBound<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        $.cardinalityUtil.multiplyCardinalitiesVariadic<
          $.cardinalityUtil.paramArrayCardinality<P2>
        >
      >,
      'Zero'
    >
  >
>;
/**
 * Return the JSON value at the end of the specified path or an empty set.
 */
function json_get<
  NamedArgs extends {
    default?: $.TypeSet<$json>;
  },
  P1 extends $.TypeSet<$json>,
  P2 extends [$.TypeSet<$str>, ...$.TypeSet<$str>[]]
>(
  namedArgs: NamedArgs,
  json: P1,
  ...path: P2
): json_getλFuncExpr<NamedArgs, P1, P2>;
/**
 * Return the JSON value at the end of the specified path or an empty set.
 */
function json_get<
  P1 extends $.TypeSet<$json>,
  P2 extends [$.TypeSet<$str>, ...$.TypeSet<$str>[]]
>(json: P1, ...path: P2): json_getλFuncExpr2<P1, P2>;
function json_get(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::json_get', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: true,
        },
      ],
      namedArgs: {
        default: {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      },
      returnTypeId: '00000000-0000-0000-0000-00000000010f',
      returnTypemod: 'OptionalType',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::json_get',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type re_matchλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::re_match',
  [P1, P2],
  {},
  $.TypeSet<
    $.ArrayType<$str>,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Find the first regular expression match in a string.
 */
function re_match<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  pattern: P1,
  str: P2
): re_matchλFuncExpr<P1, P2>;
function re_match(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::re_match', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '05f91774-15ea-9001-038e-092c1cad80af',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::re_match',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type re_match_allλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::re_match_all',
  [P1, P2],
  {},
  $.TypeSet<$.ArrayType<$str>, $.Cardinality.Many>
>;
/**
 * Find all regular expression matches in a string.
 */
function re_match_all<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  pattern: P1,
  str: P2
): re_match_allλFuncExpr<P1, P2>;
function re_match_all(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::re_match_all', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '05f91774-15ea-9001-038e-092c1cad80af',
      returnTypemod: 'SetOfType',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::re_match_all',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type re_testλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::re_test',
  [P1, P2],
  {},
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Test if a regular expression has a match in a string.
 */
function re_test<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  pattern: P1,
  str: P2
): re_testλFuncExpr<P1, P2>;
function re_test(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::re_test', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::re_test',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type re_replaceλFuncExpr<
  NamedArgs extends {
    flags?: $.TypeSet<$str>;
  },
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
  P3 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::re_replace',
  [P1, P2, P3],
  NamedArgs,
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        $.cardinalityUtil.multiplyCardinalities<
          P1['__cardinality__'],
          P2['__cardinality__']
        >,
        P3['__cardinality__']
      >,
      $.cardinalityUtil.optionalParamCardinality<NamedArgs['flags']>
    >
  >
>;
type re_replaceλFuncExpr2<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
  P3 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::re_replace',
  [P1, P2, P3],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      P3['__cardinality__']
    >
  >
>;
/**
 * Replace matching substrings in a given string.
 */
function re_replace<
  NamedArgs extends {
    flags?: $.TypeSet<$str>;
  },
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
  P3 extends $.TypeSet<$str>
>(
  namedArgs: NamedArgs,
  pattern: P1,
  sub: P2,
  str: P3
): re_replaceλFuncExpr<NamedArgs, P1, P2, P3>;
/**
 * Replace matching substrings in a given string.
 */
function re_replace<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
  P3 extends $.TypeSet<$str>
>(pattern: P1, sub: P2, str: P3): re_replaceλFuncExpr2<P1, P2, P3>;
function re_replace(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::re_replace', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      namedArgs: {
        flags: {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      },
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::re_replace',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_repeatλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::str_repeat',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Repeat the input *string* *n* times.
 */
function str_repeat<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(s: P1, n: P2): str_repeatλFuncExpr<P1, P2>;
function str_repeat(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_repeat', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_repeat',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_lowerλFuncExpr<P1 extends $.TypeSet<$str>> = _.syntax.$expr_Function<
  'std::str_lower',
  [P1],
  {},
  $.TypeSet<$str, P1['__cardinality__']>
>;
/**
 * Return a lowercase copy of the input *string*.
 */
function str_lower<P1 extends $.TypeSet<$str>>(s: P1): str_lowerλFuncExpr<P1>;
function str_lower(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_lower', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_lower',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_upperλFuncExpr<P1 extends $.TypeSet<$str>> = _.syntax.$expr_Function<
  'std::str_upper',
  [P1],
  {},
  $.TypeSet<$str, P1['__cardinality__']>
>;
/**
 * Return an uppercase copy of the input *string*.
 */
function str_upper<P1 extends $.TypeSet<$str>>(s: P1): str_upperλFuncExpr<P1>;
function str_upper(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_upper', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_upper',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_titleλFuncExpr<P1 extends $.TypeSet<$str>> = _.syntax.$expr_Function<
  'std::str_title',
  [P1],
  {},
  $.TypeSet<$str, P1['__cardinality__']>
>;
/**
 * Return a titlecase copy of the input *string*.
 */
function str_title<P1 extends $.TypeSet<$str>>(s: P1): str_titleλFuncExpr<P1>;
function str_title(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_title', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_title',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_pad_startλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64λICastableTo>,
  P3 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::str_pad_start',
  [P1, P2, P3],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      $.cardinalityUtil.optionalParamCardinality<P3>
    >
  >
>;
/**
 * Return the input string padded at the start to the length *n*.
 */
function str_pad_start<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64λICastableTo>,
  P3 extends $.TypeSet<$str> | undefined
>(s: P1, n: P2, fill?: P3): str_pad_startλFuncExpr<P1, P2, P3>;
function str_pad_start(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_pad_start', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_pad_start',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_lpadλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64λICastableTo>,
  P3 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::str_lpad',
  [P1, P2, P3],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      $.cardinalityUtil.optionalParamCardinality<P3>
    >
  >
>;
/**
 * Return the input string left-padded to the length *n*.
 */
function str_lpad<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64λICastableTo>,
  P3 extends $.TypeSet<$str> | undefined
>(s: P1, n: P2, fill?: P3): str_lpadλFuncExpr<P1, P2, P3>;
function str_lpad(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_lpad', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_lpad',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_pad_endλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64λICastableTo>,
  P3 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::str_pad_end',
  [P1, P2, P3],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      $.cardinalityUtil.optionalParamCardinality<P3>
    >
  >
>;
/**
 * Return the input string padded at the end to the length *n*.
 */
function str_pad_end<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64λICastableTo>,
  P3 extends $.TypeSet<$str> | undefined
>(s: P1, n: P2, fill?: P3): str_pad_endλFuncExpr<P1, P2, P3>;
function str_pad_end(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_pad_end', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_pad_end',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_rpadλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64λICastableTo>,
  P3 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::str_rpad',
  [P1, P2, P3],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        P1['__cardinality__'],
        P2['__cardinality__']
      >,
      $.cardinalityUtil.optionalParamCardinality<P3>
    >
  >
>;
/**
 * Return the input string right-padded to the length *n*.
 */
function str_rpad<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64λICastableTo>,
  P3 extends $.TypeSet<$str> | undefined
>(s: P1, n: P2, fill?: P3): str_rpadλFuncExpr<P1, P2, P3>;
function str_rpad(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_rpad', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_rpad',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_trim_startλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::str_trim_start',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Return the input string with all *trim* characters removed from its start.
 */
function str_trim_start<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, tr?: P2): str_trim_startλFuncExpr<P1, P2>;
function str_trim_start(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_trim_start', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_trim_start',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_ltrimλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::str_ltrim',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Return the input string with all leftmost *trim* characters removed.
 */
function str_ltrim<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, tr?: P2): str_ltrimλFuncExpr<P1, P2>;
function str_ltrim(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_ltrim', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_ltrim',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_trim_endλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::str_trim_end',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Return the input string with all *trim* characters removed from its end.
 */
function str_trim_end<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, tr?: P2): str_trim_endλFuncExpr<P1, P2>;
function str_trim_end(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_trim_end', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_trim_end',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_rtrimλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::str_rtrim',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Return the input string with all rightmost *trim* characters removed.
 */
function str_rtrim<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, tr?: P2): str_rtrimλFuncExpr<P1, P2>;
function str_rtrim(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_rtrim', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_rtrim',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_trimλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::str_trim',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Return the input string with *trim* characters removed from both ends.
 */
function str_trim<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, tr?: P2): str_trimλFuncExpr<P1, P2>;
function str_trim(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_trim', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_trim',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type str_splitλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::str_split',
  [P1, P2],
  {},
  $.TypeSet<
    $.ArrayType<$str>,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Split string into array elements using the supplied delimiter.
 */
function str_split<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  s: P1,
  delimiter: P2
): str_splitλFuncExpr<P1, P2>;
function str_split(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::str_split', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '05f91774-15ea-9001-038e-092c1cad80af',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::str_split',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type uuid_generate_v1mcλFuncExpr = _.syntax.$expr_Function<
  'std::uuid_generate_v1mc',
  [],
  {},
  $.TypeSet<$uuid, $.Cardinality.One>
>;
/**
 * Return a version 1 UUID.
 */
function uuid_generate_v1mc(): uuid_generate_v1mcλFuncExpr;
function uuid_generate_v1mc(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::uuid_generate_v1mc', args, _.spec, [
    { args: [], returnTypeId: '00000000-0000-0000-0000-000000000100' },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::uuid_generate_v1mc',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type to_strλFuncExpr<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_str',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type to_strλFuncExpr2<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_str',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type to_strλFuncExpr3<
  P1 extends $.TypeSet<$.ArrayType<$str>>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::to_str',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type to_strλFuncExpr4<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_str',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type to_strλFuncExpr5<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_str',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type to_strλFuncExpr6<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_str',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type to_strλFuncExpr7<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_str',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type to_strλFuncExpr8<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_str',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type to_strλFuncExpr9<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_str',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type to_strλFuncExpr10<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_str',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type to_strλFuncExpr11<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_str',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type to_strλFuncExpr12<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_str',
  [P1, P2],
  {},
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$str> | undefined
>(dt: P1, fmt?: P2): to_strλFuncExpr<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$str> | undefined
>(td: P1, fmt?: P2): to_strλFuncExpr2<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$.ArrayType<$str>>,
  P2 extends $.TypeSet<$str>
>(array: P1, delimiter: P2): to_strλFuncExpr3<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$str> | undefined
>(json: P1, fmt?: P2): to_strλFuncExpr4<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$str> | undefined
>(dt: P1, fmt?: P2): to_strλFuncExpr5<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<$str> | undefined
>(d: P1, fmt?: P2): to_strλFuncExpr6<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<$str> | undefined
>(nt: P1, fmt?: P2): to_strλFuncExpr7<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$str> | undefined
>(rd: P1, fmt?: P2): to_strλFuncExpr8<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$str> | undefined
>(i: P1, fmt?: P2): to_strλFuncExpr9<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$str> | undefined
>(f: P1, fmt?: P2): to_strλFuncExpr10<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$str> | undefined
>(d: P1, fmt?: P2): to_strλFuncExpr11<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$str> | undefined
>(d: P1, fmt?: P2): to_strλFuncExpr12<P1, P2>;
function to_str(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::to_str', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
    {
      args: [
        {
          typeId: '05f91774-15ea-9001-038e-092c1cad80af',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::to_str',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type to_jsonλFuncExpr<P1 extends $.TypeSet<$str>> = _.syntax.$expr_Function<
  'std::to_json',
  [P1],
  {},
  $.TypeSet<$json, P1['__cardinality__']>
>;
/**
 * Return JSON value represented by the input *string*.
 */
function to_json<P1 extends $.TypeSet<$str>>(str: P1): to_jsonλFuncExpr<P1>;
function to_json(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::to_json', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010f',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::to_json',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type to_datetimeλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_datetime',
  [P1, P2],
  {},
  $.TypeSet<
    $datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type to_datetimeλFuncExpr2<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::to_datetime',
  [P1, P2],
  {},
  $.TypeSet<
    $datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type to_datetimeλFuncExpr3<P1 extends $.TypeSet<$int64λICastableTo>> =
  _.syntax.$expr_Function<
    'std::to_datetime',
    [P1],
    {},
    $.TypeSet<$datetime, P1['__cardinality__']>
  >;
type to_datetimeλFuncExpr4<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>,
  P3 extends $.TypeSet<$int64λICastableTo>,
  P4 extends $.TypeSet<$int64λICastableTo>,
  P5 extends $.TypeSet<$int64λICastableTo>,
  P6 extends $.TypeSet<$float64λICastableTo>,
  P7 extends $.TypeSet<$str>
> = _.syntax.$expr_Function<
  'std::to_datetime',
  [P1, P2, P3, P4, P5, P6, P7],
  {},
  $.TypeSet<
    $datetime,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        $.cardinalityUtil.multiplyCardinalities<
          $.cardinalityUtil.multiplyCardinalities<
            $.cardinalityUtil.multiplyCardinalities<
              $.cardinalityUtil.multiplyCardinalities<
                P1['__cardinality__'],
                P2['__cardinality__']
              >,
              P3['__cardinality__']
            >,
            P4['__cardinality__']
          >,
          P5['__cardinality__']
        >,
        P6['__cardinality__']
      >,
      P7['__cardinality__']
    >
  >
>;
type to_datetimeλFuncExpr5<P1 extends $.TypeSet<$float64λICastableTo>> =
  _.syntax.$expr_Function<
    'std::to_datetime',
    [P1],
    {},
    $.TypeSet<$datetime, P1['__cardinality__']>
  >;
type to_datetimeλFuncExpr6<P1 extends $.TypeSet<$decimalλICastableTo>> =
  _.syntax.$expr_Function<
    'std::to_datetime',
    [P1],
    {},
    $.TypeSet<$datetime, P1['__cardinality__']>
  >;
/**
 * Create a `datetime` value.
 */
function to_datetime<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, fmt?: P2): to_datetimeλFuncExpr<P1, P2>;
/**
 * Create a `datetime` value.
 */
function to_datetime<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$str>
>(local: P1, zone: P2): to_datetimeλFuncExpr2<P1, P2>;
/**
 * Create a `datetime` value.
 */
function to_datetime<P1 extends $.TypeSet<$int64λICastableTo>>(
  epochseconds: P1
): to_datetimeλFuncExpr3<P1>;
/**
 * Create a `datetime` value.
 */
function to_datetime<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>,
  P3 extends $.TypeSet<$int64λICastableTo>,
  P4 extends $.TypeSet<$int64λICastableTo>,
  P5 extends $.TypeSet<$int64λICastableTo>,
  P6 extends $.TypeSet<$float64λICastableTo>,
  P7 extends $.TypeSet<$str>
>(
  year: P1,
  month: P2,
  day: P3,
  hour: P4,
  min: P5,
  sec: P6,
  timezone: P7
): to_datetimeλFuncExpr4<P1, P2, P3, P4, P5, P6, P7>;
/**
 * Create a `datetime` value.
 */
function to_datetime<P1 extends $.TypeSet<$float64λICastableTo>>(
  epochseconds: P1
): to_datetimeλFuncExpr5<P1>;
/**
 * Create a `datetime` value.
 */
function to_datetime<P1 extends $.TypeSet<$decimalλICastableTo>>(
  epochseconds: P1
): to_datetimeλFuncExpr6<P1>;
function to_datetime(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::to_datetime', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::to_datetime',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type to_durationλFuncExpr<
  NamedArgs extends {
    hours?: $.TypeSet<$int64λICastableTo>;
    minutes?: $.TypeSet<$int64λICastableTo>;
    seconds?: $.TypeSet<$float64λICastableTo>;
    microseconds?: $.TypeSet<$int64λICastableTo>;
  }
> = _.syntax.$expr_Function<
  'std::to_duration',
  [],
  NamedArgs,
  $.TypeSet<
    $duration,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.multiplyCardinalities<
        $.cardinalityUtil.multiplyCardinalities<
          $.cardinalityUtil.optionalParamCardinality<NamedArgs['hours']>,
          $.cardinalityUtil.optionalParamCardinality<NamedArgs['minutes']>
        >,
        $.cardinalityUtil.optionalParamCardinality<NamedArgs['seconds']>
      >,
      $.cardinalityUtil.optionalParamCardinality<NamedArgs['microseconds']>
    >
  >
>;
/**
 * Create a `duration` value.
 */
function to_duration<
  NamedArgs extends {
    hours?: $.TypeSet<$int64λICastableTo>;
    minutes?: $.TypeSet<$int64λICastableTo>;
    seconds?: $.TypeSet<$float64λICastableTo>;
    microseconds?: $.TypeSet<$int64λICastableTo>;
  }
>(namedArgs: NamedArgs): to_durationλFuncExpr<NamedArgs>;
function to_duration(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::to_duration', args, _.spec, [
    {
      args: [],
      namedArgs: {
        hours: {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        minutes: {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        seconds: {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        microseconds: {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      },
      returnTypeId: '00000000-0000-0000-0000-00000000010e',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::to_duration',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type to_bigintλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_bigint',
  [P1, P2],
  {},
  $.TypeSet<
    $bigint,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Create a `bigint` value.
 */
function to_bigint<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, fmt?: P2): to_bigintλFuncExpr<P1, P2>;
function to_bigint(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::to_bigint', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000110',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::to_bigint',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type to_decimalλFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_decimal',
  [P1, P2],
  {},
  $.TypeSet<
    $decimal,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Create a `decimal` value.
 */
function to_decimal<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, fmt?: P2): to_decimalλFuncExpr<P1, P2>;
function to_decimal(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::to_decimal', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::to_decimal',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type to_int64λFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_int64',
  [P1, P2],
  {},
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Create a `int64` value.
 */
function to_int64<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, fmt?: P2): to_int64λFuncExpr<P1, P2>;
function to_int64(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::to_int64', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::to_int64',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type to_int32λFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_int32',
  [P1, P2],
  {},
  $.TypeSet<
    $int32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Create a `int32` value.
 */
function to_int32<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, fmt?: P2): to_int32λFuncExpr<P1, P2>;
function to_int32(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::to_int32', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000104',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::to_int32',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type to_int16λFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_int16',
  [P1, P2],
  {},
  $.TypeSet<
    $int16,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Create a `int16` value.
 */
function to_int16<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, fmt?: P2): to_int16λFuncExpr<P1, P2>;
function to_int16(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::to_int16', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000103',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::to_int16',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type to_float64λFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_float64',
  [P1, P2],
  {},
  $.TypeSet<
    $float64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Create a `float64` value.
 */
function to_float64<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, fmt?: P2): to_float64λFuncExpr<P1, P2>;
function to_float64(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::to_float64', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::to_float64',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type to_float32λFuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
> = _.syntax.$expr_Function<
  'std::to_float32',
  [P1, P2],
  {},
  $.TypeSet<
    $float32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Create a `float32` value.
 */
function to_float32<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined
>(s: P1, fmt?: P2): to_float32λFuncExpr<P1, P2>;
function to_float32(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::to_float32', args, _.spec, [
    {
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000106',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::to_float32',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type sequence_resetλFuncExpr<P1 extends $.TypeSet<_schema.$ScalarType>> =
  _.syntax.$expr_Function<
    'std::sequence_reset',
    [P1],
    {},
    $.TypeSet<$int64, P1['__cardinality__']>
  >;
type sequence_resetλFuncExpr2<
  P1 extends $.TypeSet<_schema.$ScalarType>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Function<
  'std::sequence_reset',
  [P1, P2],
  {},
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
function sequence_reset<P1 extends $.TypeSet<_schema.$ScalarType>>(
  seq: P1
): sequence_resetλFuncExpr<P1>;
function sequence_reset<
  P1 extends $.TypeSet<_schema.$ScalarType>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(seq: P1, value: P2): sequence_resetλFuncExpr2<P1, P2>;
function sequence_reset(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::sequence_reset', args, _.spec, [
    {
      args: [
        {
          typeId: 'ec7063e6-533a-11ec-92d7-e783585da7cb',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      args: [
        {
          typeId: 'ec7063e6-533a-11ec-92d7-e783585da7cb',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::sequence_reset',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type sequence_nextλFuncExpr<P1 extends $.TypeSet<_schema.$ScalarType>> =
  _.syntax.$expr_Function<
    'std::sequence_next',
    [P1],
    {},
    $.TypeSet<$int64, P1['__cardinality__']>
  >;
function sequence_next<P1 extends $.TypeSet<_schema.$ScalarType>>(
  seq: P1
): sequence_nextλFuncExpr<P1>;
function sequence_next(...args: any[]) {
  const {
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::sequence_next', args, _.spec, [
    {
      args: [
        {
          typeId: 'ec7063e6-533a-11ec-92d7-e783585da7cb',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::sequence_next',
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
}

type eqλOpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr25<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr26<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr27<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr28<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr29<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr30<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr31<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr32<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr33<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr34<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr35<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr36<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type eqλOpExpr37<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(l: P1, r: P2): eqλOpExpr<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<P1 extends $.TypeSet<$bool>, P2 extends $.TypeSet<$bool>>(
  l: P1,
  r: P2
): eqλOpExpr2<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<P1 extends $.TypeSet<$.EnumType>, P2 extends $.TypeSet<$.EnumType>>(
  l: P1,
  r: P2
): eqλOpExpr3<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  l: P1,
  r: P2
): eqλOpExpr4<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(l: P1, r: P2): eqλOpExpr5<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(l: P1, r: P2): eqλOpExpr6<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
>(l: P1, r: P2): eqλOpExpr7<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
>(l: P1, r: P2): eqλOpExpr8<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
>(l: P1, r: P2): eqλOpExpr9<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<P1 extends $.TypeSet<$bytes>, P2 extends $.TypeSet<$bytes>>(
  l: P1,
  r: P2
): eqλOpExpr10<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<P1 extends $.TypeSet<$datetime>, P2 extends $.TypeSet<$datetime>>(
  l: P1,
  r: P2
): eqλOpExpr11<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<P1 extends $.TypeSet<$duration>, P2 extends $.TypeSet<$duration>>(
  l: P1,
  r: P2
): eqλOpExpr12<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<P1 extends $.TypeSet<$json>, P2 extends $.TypeSet<$json>>(
  l: P1,
  r: P2
): eqλOpExpr13<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  l: P1,
  r: P2
): eqλOpExpr14<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<P1 extends $.TypeSet<$uuid>, P2 extends $.TypeSet<$uuid>>(
  l: P1,
  r: P2
): eqλOpExpr15<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
>(l: P1, r: P2): eqλOpExpr16<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
>(l: P1, r: P2): eqλOpExpr17<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
>(l: P1, r: P2): eqλOpExpr18<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
>(l: P1, r: P2): eqλOpExpr19<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
>(l: P1, r: P2): eqλOpExpr20<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): eqλOpExpr21<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): eqλOpExpr22<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): eqλOpExpr23<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): eqλOpExpr24<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): eqλOpExpr25<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): eqλOpExpr26<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): eqλOpExpr27<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): eqλOpExpr28<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): eqλOpExpr29<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): eqλOpExpr30<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): eqλOpExpr31<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): eqλOpExpr32<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): eqλOpExpr33<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): eqλOpExpr34<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(l: P1, r: P2): eqλOpExpr35<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
>(l: P1, r: P2): eqλOpExpr36<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): eqλOpExpr37<P1, P2>;
function eq(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::eq', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::=',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type coal_eqλOpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr25<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr26<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr27<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr28<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr29<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr30<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr31<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr32<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr33<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr34<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr35<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr36<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_eqλOpExpr37<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::?=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(l: P1, r: P2): coal_eqλOpExpr<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<P1 extends $.TypeSet<$bool>, P2 extends $.TypeSet<$bool>>(
  l: P1,
  r: P2
): coal_eqλOpExpr2<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
>(l: P1, r: P2): coal_eqλOpExpr3<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  l: P1,
  r: P2
): coal_eqλOpExpr4<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(l: P1, r: P2): coal_eqλOpExpr5<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(l: P1, r: P2): coal_eqλOpExpr6<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
>(l: P1, r: P2): coal_eqλOpExpr7<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
>(l: P1, r: P2): coal_eqλOpExpr8<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
>(l: P1, r: P2): coal_eqλOpExpr9<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<P1 extends $.TypeSet<$bytes>, P2 extends $.TypeSet<$bytes>>(
  l: P1,
  r: P2
): coal_eqλOpExpr10<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>
>(l: P1, r: P2): coal_eqλOpExpr11<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
>(l: P1, r: P2): coal_eqλOpExpr12<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<P1 extends $.TypeSet<$json>, P2 extends $.TypeSet<$json>>(
  l: P1,
  r: P2
): coal_eqλOpExpr13<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  l: P1,
  r: P2
): coal_eqλOpExpr14<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<P1 extends $.TypeSet<$uuid>, P2 extends $.TypeSet<$uuid>>(
  l: P1,
  r: P2
): coal_eqλOpExpr15<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
>(l: P1, r: P2): coal_eqλOpExpr16<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
>(l: P1, r: P2): coal_eqλOpExpr17<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
>(l: P1, r: P2): coal_eqλOpExpr18<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
>(l: P1, r: P2): coal_eqλOpExpr19<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
>(l: P1, r: P2): coal_eqλOpExpr20<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): coal_eqλOpExpr21<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr22<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr23<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr24<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): coal_eqλOpExpr25<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr26<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr27<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr28<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr29<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): coal_eqλOpExpr30<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr31<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr32<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr33<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr34<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr35<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
>(l: P1, r: P2): coal_eqλOpExpr36<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): coal_eqλOpExpr37<P1, P2>;
function coal_eq(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::coal_eq', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::?=',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type neqλOpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr25<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr26<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr27<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr28<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr29<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr30<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr31<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr32<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr33<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr34<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr35<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr36<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type neqλOpExpr37<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(l: P1, r: P2): neqλOpExpr<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<P1 extends $.TypeSet<$bool>, P2 extends $.TypeSet<$bool>>(
  l: P1,
  r: P2
): neqλOpExpr2<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
>(l: P1, r: P2): neqλOpExpr3<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  l: P1,
  r: P2
): neqλOpExpr4<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(l: P1, r: P2): neqλOpExpr5<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(l: P1, r: P2): neqλOpExpr6<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
>(l: P1, r: P2): neqλOpExpr7<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
>(l: P1, r: P2): neqλOpExpr8<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
>(l: P1, r: P2): neqλOpExpr9<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<P1 extends $.TypeSet<$bytes>, P2 extends $.TypeSet<$bytes>>(
  l: P1,
  r: P2
): neqλOpExpr10<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<P1 extends $.TypeSet<$datetime>, P2 extends $.TypeSet<$datetime>>(
  l: P1,
  r: P2
): neqλOpExpr11<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<P1 extends $.TypeSet<$duration>, P2 extends $.TypeSet<$duration>>(
  l: P1,
  r: P2
): neqλOpExpr12<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<P1 extends $.TypeSet<$json>, P2 extends $.TypeSet<$json>>(
  l: P1,
  r: P2
): neqλOpExpr13<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  l: P1,
  r: P2
): neqλOpExpr14<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<P1 extends $.TypeSet<$uuid>, P2 extends $.TypeSet<$uuid>>(
  l: P1,
  r: P2
): neqλOpExpr15<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
>(l: P1, r: P2): neqλOpExpr16<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
>(l: P1, r: P2): neqλOpExpr17<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
>(l: P1, r: P2): neqλOpExpr18<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
>(l: P1, r: P2): neqλOpExpr19<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
>(l: P1, r: P2): neqλOpExpr20<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): neqλOpExpr21<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): neqλOpExpr22<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): neqλOpExpr23<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): neqλOpExpr24<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): neqλOpExpr25<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): neqλOpExpr26<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): neqλOpExpr27<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): neqλOpExpr28<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): neqλOpExpr29<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): neqλOpExpr30<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): neqλOpExpr31<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): neqλOpExpr32<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): neqλOpExpr33<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): neqλOpExpr34<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(l: P1, r: P2): neqλOpExpr35<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
>(l: P1, r: P2): neqλOpExpr36<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): neqλOpExpr37<P1, P2>;
function neq(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::neq', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::!=',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type coal_neqλOpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr25<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr26<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr27<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr28<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr29<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr30<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr31<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr32<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr33<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr34<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr35<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr36<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
type coal_neqλOpExpr37<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::?!=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.optionalParamCardinality<P1>,
      $.cardinalityUtil.optionalParamCardinality<P2>
    >
  >
>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(l: P1, r: P2): coal_neqλOpExpr<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<P1 extends $.TypeSet<$bool>, P2 extends $.TypeSet<$bool>>(
  l: P1,
  r: P2
): coal_neqλOpExpr2<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
>(l: P1, r: P2): coal_neqλOpExpr3<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  l: P1,
  r: P2
): coal_neqλOpExpr4<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(l: P1, r: P2): coal_neqλOpExpr5<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(l: P1, r: P2): coal_neqλOpExpr6<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
>(l: P1, r: P2): coal_neqλOpExpr7<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
>(l: P1, r: P2): coal_neqλOpExpr8<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
>(l: P1, r: P2): coal_neqλOpExpr9<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<P1 extends $.TypeSet<$bytes>, P2 extends $.TypeSet<$bytes>>(
  l: P1,
  r: P2
): coal_neqλOpExpr10<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>
>(l: P1, r: P2): coal_neqλOpExpr11<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
>(l: P1, r: P2): coal_neqλOpExpr12<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<P1 extends $.TypeSet<$json>, P2 extends $.TypeSet<$json>>(
  l: P1,
  r: P2
): coal_neqλOpExpr13<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  l: P1,
  r: P2
): coal_neqλOpExpr14<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<P1 extends $.TypeSet<$uuid>, P2 extends $.TypeSet<$uuid>>(
  l: P1,
  r: P2
): coal_neqλOpExpr15<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
>(l: P1, r: P2): coal_neqλOpExpr16<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
>(l: P1, r: P2): coal_neqλOpExpr17<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
>(l: P1, r: P2): coal_neqλOpExpr18<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
>(l: P1, r: P2): coal_neqλOpExpr19<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
>(l: P1, r: P2): coal_neqλOpExpr20<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): coal_neqλOpExpr21<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr22<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr23<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr24<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): coal_neqλOpExpr25<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr26<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr27<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr28<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr29<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): coal_neqλOpExpr30<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr31<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr32<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr33<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr34<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr35<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
>(l: P1, r: P2): coal_neqλOpExpr36<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): coal_neqλOpExpr37<P1, P2>;
function coal_neq(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::coal_neq', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: true,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::?!=',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type gteλOpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr25<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr26<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr27<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr28<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr29<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr30<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr31<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr32<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr33<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr34<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr35<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr36<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr37<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr38<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr39<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr40<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gteλOpExpr41<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::>=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(l: P1, r: P2): gteλOpExpr<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<P1 extends $.TypeSet<$bool>, P2 extends $.TypeSet<$bool>>(
  l: P1,
  r: P2
): gteλOpExpr2<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
>(l: P1, r: P2): gteλOpExpr3<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  l: P1,
  r: P2
): gteλOpExpr4<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(l: P1, r: P2): gteλOpExpr5<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(l: P1, r: P2): gteλOpExpr6<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
>(l: P1, r: P2): gteλOpExpr7<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
>(l: P1, r: P2): gteλOpExpr8<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
>(l: P1, r: P2): gteλOpExpr9<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<P1 extends $.TypeSet<$bytes>, P2 extends $.TypeSet<$bytes>>(
  l: P1,
  r: P2
): gteλOpExpr10<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<P1 extends $.TypeSet<$datetime>, P2 extends $.TypeSet<$datetime>>(
  l: P1,
  r: P2
): gteλOpExpr11<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<P1 extends $.TypeSet<$duration>, P2 extends $.TypeSet<$duration>>(
  l: P1,
  r: P2
): gteλOpExpr12<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<P1 extends $.TypeSet<$json>, P2 extends $.TypeSet<$json>>(
  l: P1,
  r: P2
): gteλOpExpr13<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  l: P1,
  r: P2
): gteλOpExpr14<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<P1 extends $.TypeSet<$uuid>, P2 extends $.TypeSet<$uuid>>(
  l: P1,
  r: P2
): gteλOpExpr15<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
>(l: P1, r: P2): gteλOpExpr16<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
>(l: P1, r: P2): gteλOpExpr17<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
>(l: P1, r: P2): gteλOpExpr18<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
>(l: P1, r: P2): gteλOpExpr19<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
>(l: P1, r: P2): gteλOpExpr20<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): gteλOpExpr21<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): gteλOpExpr22<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): gteλOpExpr23<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): gteλOpExpr24<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): gteλOpExpr25<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): gteλOpExpr26<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): gteλOpExpr27<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): gteλOpExpr28<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): gteλOpExpr29<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): gteλOpExpr30<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): gteλOpExpr31<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): gteλOpExpr32<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): gteλOpExpr33<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): gteλOpExpr34<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): gteλOpExpr35<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): gteλOpExpr36<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): gteλOpExpr37<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): gteλOpExpr38<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(l: P1, r: P2): gteλOpExpr39<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
>(l: P1, r: P2): gteλOpExpr40<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): gteλOpExpr41<P1, P2>;
function gte(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::gte', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::>=',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type gtλOpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr12<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr13<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr14<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr15<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr25<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr26<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr27<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr28<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr29<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr30<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr31<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr32<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr33<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr34<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr35<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr36<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr37<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr38<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr39<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr40<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type gtλOpExpr41<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::>',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(l: P1, r: P2): gtλOpExpr<P1, P2>;
/**
 * Greater than.
 */
function gt<P1 extends $.TypeSet<$bool>, P2 extends $.TypeSet<$bool>>(
  l: P1,
  r: P2
): gtλOpExpr2<P1, P2>;
/**
 * Greater than.
 */
function gt<P1 extends $.TypeSet<$.EnumType>, P2 extends $.TypeSet<$.EnumType>>(
  l: P1,
  r: P2
): gtλOpExpr3<P1, P2>;
/**
 * Greater than.
 */
function gt<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  l: P1,
  r: P2
): gtλOpExpr4<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(l: P1, r: P2): gtλOpExpr5<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(l: P1, r: P2): gtλOpExpr6<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
>(l: P1, r: P2): gtλOpExpr7<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
>(l: P1, r: P2): gtλOpExpr8<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
>(l: P1, r: P2): gtλOpExpr9<P1, P2>;
/**
 * Greater than.
 */
function gt<P1 extends $.TypeSet<$bytes>, P2 extends $.TypeSet<$bytes>>(
  l: P1,
  r: P2
): gtλOpExpr10<P1, P2>;
/**
 * Greater than.
 */
function gt<P1 extends $.TypeSet<$datetime>, P2 extends $.TypeSet<$datetime>>(
  l: P1,
  r: P2
): gtλOpExpr11<P1, P2>;
/**
 * Greater than.
 */
function gt<P1 extends $.TypeSet<$uuid>, P2 extends $.TypeSet<$uuid>>(
  l: P1,
  r: P2
): gtλOpExpr12<P1, P2>;
/**
 * Greater than.
 */
function gt<P1 extends $.TypeSet<$duration>, P2 extends $.TypeSet<$duration>>(
  l: P1,
  r: P2
): gtλOpExpr13<P1, P2>;
/**
 * Greater than.
 */
function gt<P1 extends $.TypeSet<$json>, P2 extends $.TypeSet<$json>>(
  l: P1,
  r: P2
): gtλOpExpr14<P1, P2>;
/**
 * Greater than.
 */
function gt<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  l: P1,
  r: P2
): gtλOpExpr15<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
>(l: P1, r: P2): gtλOpExpr16<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
>(l: P1, r: P2): gtλOpExpr17<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
>(l: P1, r: P2): gtλOpExpr18<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
>(l: P1, r: P2): gtλOpExpr19<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
>(l: P1, r: P2): gtλOpExpr20<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): gtλOpExpr21<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): gtλOpExpr22<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): gtλOpExpr23<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): gtλOpExpr24<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): gtλOpExpr25<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): gtλOpExpr26<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): gtλOpExpr27<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): gtλOpExpr28<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): gtλOpExpr29<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): gtλOpExpr30<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): gtλOpExpr31<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): gtλOpExpr32<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): gtλOpExpr33<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): gtλOpExpr34<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): gtλOpExpr35<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): gtλOpExpr36<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): gtλOpExpr37<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): gtλOpExpr38<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(l: P1, r: P2): gtλOpExpr39<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
>(l: P1, r: P2): gtλOpExpr40<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): gtλOpExpr41<P1, P2>;
function gt(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::gt', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::>',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type lteλOpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr25<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr26<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr27<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr28<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr29<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr30<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr31<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr32<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr33<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr34<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr35<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr36<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr37<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr38<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr39<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr40<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type lteλOpExpr41<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::<=',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(l: P1, r: P2): lteλOpExpr<P1, P2>;
/**
 * Less than or equal.
 */
function lte<P1 extends $.TypeSet<$bool>, P2 extends $.TypeSet<$bool>>(
  l: P1,
  r: P2
): lteλOpExpr2<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
>(l: P1, r: P2): lteλOpExpr3<P1, P2>;
/**
 * Less than or equal.
 */
function lte<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  l: P1,
  r: P2
): lteλOpExpr4<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(l: P1, r: P2): lteλOpExpr5<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(l: P1, r: P2): lteλOpExpr6<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
>(l: P1, r: P2): lteλOpExpr7<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
>(l: P1, r: P2): lteλOpExpr8<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
>(l: P1, r: P2): lteλOpExpr9<P1, P2>;
/**
 * Less than or equal.
 */
function lte<P1 extends $.TypeSet<$bytes>, P2 extends $.TypeSet<$bytes>>(
  l: P1,
  r: P2
): lteλOpExpr10<P1, P2>;
/**
 * Less than or equal.
 */
function lte<P1 extends $.TypeSet<$datetime>, P2 extends $.TypeSet<$datetime>>(
  l: P1,
  r: P2
): lteλOpExpr11<P1, P2>;
/**
 * Less than or equal.
 */
function lte<P1 extends $.TypeSet<$duration>, P2 extends $.TypeSet<$duration>>(
  l: P1,
  r: P2
): lteλOpExpr12<P1, P2>;
/**
 * Less than or equal.
 */
function lte<P1 extends $.TypeSet<$json>, P2 extends $.TypeSet<$json>>(
  l: P1,
  r: P2
): lteλOpExpr13<P1, P2>;
/**
 * Less than or equal.
 */
function lte<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  l: P1,
  r: P2
): lteλOpExpr14<P1, P2>;
/**
 * Less than or equal.
 */
function lte<P1 extends $.TypeSet<$uuid>, P2 extends $.TypeSet<$uuid>>(
  l: P1,
  r: P2
): lteλOpExpr15<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
>(l: P1, r: P2): lteλOpExpr16<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
>(l: P1, r: P2): lteλOpExpr17<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
>(l: P1, r: P2): lteλOpExpr18<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
>(l: P1, r: P2): lteλOpExpr19<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
>(l: P1, r: P2): lteλOpExpr20<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): lteλOpExpr21<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): lteλOpExpr22<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): lteλOpExpr23<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): lteλOpExpr24<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): lteλOpExpr25<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): lteλOpExpr26<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): lteλOpExpr27<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): lteλOpExpr28<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): lteλOpExpr29<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): lteλOpExpr30<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): lteλOpExpr31<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): lteλOpExpr32<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): lteλOpExpr33<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): lteλOpExpr34<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): lteλOpExpr35<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): lteλOpExpr36<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): lteλOpExpr37<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): lteλOpExpr38<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(l: P1, r: P2): lteλOpExpr39<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
>(l: P1, r: P2): lteλOpExpr40<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): lteλOpExpr41<P1, P2>;
function lte(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::lte', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::<=',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type ltλOpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr25<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr26<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr27<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr28<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr29<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr30<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr31<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr32<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr33<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr34<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr35<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr36<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr37<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr38<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr39<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr40<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type ltλOpExpr41<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::<',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(l: P1, r: P2): ltλOpExpr<P1, P2>;
/**
 * Less than.
 */
function lt<P1 extends $.TypeSet<$bool>, P2 extends $.TypeSet<$bool>>(
  l: P1,
  r: P2
): ltλOpExpr2<P1, P2>;
/**
 * Less than.
 */
function lt<P1 extends $.TypeSet<$.EnumType>, P2 extends $.TypeSet<$.EnumType>>(
  l: P1,
  r: P2
): ltλOpExpr3<P1, P2>;
/**
 * Less than.
 */
function lt<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  l: P1,
  r: P2
): ltλOpExpr4<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(l: P1, r: P2): ltλOpExpr5<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(l: P1, r: P2): ltλOpExpr6<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
>(l: P1, r: P2): ltλOpExpr7<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
>(l: P1, r: P2): ltλOpExpr8<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
>(l: P1, r: P2): ltλOpExpr9<P1, P2>;
/**
 * Less than.
 */
function lt<P1 extends $.TypeSet<$bytes>, P2 extends $.TypeSet<$bytes>>(
  l: P1,
  r: P2
): ltλOpExpr10<P1, P2>;
/**
 * Less than.
 */
function lt<P1 extends $.TypeSet<$datetime>, P2 extends $.TypeSet<$datetime>>(
  l: P1,
  r: P2
): ltλOpExpr11<P1, P2>;
/**
 * Less than.
 */
function lt<P1 extends $.TypeSet<$duration>, P2 extends $.TypeSet<$duration>>(
  l: P1,
  r: P2
): ltλOpExpr12<P1, P2>;
/**
 * Less than.
 */
function lt<P1 extends $.TypeSet<$json>, P2 extends $.TypeSet<$json>>(
  l: P1,
  r: P2
): ltλOpExpr13<P1, P2>;
/**
 * Less than.
 */
function lt<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  l: P1,
  r: P2
): ltλOpExpr14<P1, P2>;
/**
 * Less than.
 */
function lt<P1 extends $.TypeSet<$uuid>, P2 extends $.TypeSet<$uuid>>(
  l: P1,
  r: P2
): ltλOpExpr15<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
>(l: P1, r: P2): ltλOpExpr16<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>
>(l: P1, r: P2): ltλOpExpr17<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>
>(l: P1, r: P2): ltλOpExpr18<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>
>(l: P1, r: P2): ltλOpExpr19<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>
>(l: P1, r: P2): ltλOpExpr20<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): ltλOpExpr21<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): ltλOpExpr22<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): ltλOpExpr23<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): ltλOpExpr24<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): ltλOpExpr25<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): ltλOpExpr26<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): ltλOpExpr27<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): ltλOpExpr28<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): ltλOpExpr29<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): ltλOpExpr30<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): ltλOpExpr31<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int16>
>(l: P1, r: P2): ltλOpExpr32<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): ltλOpExpr33<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): ltλOpExpr34<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): ltλOpExpr35<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): ltλOpExpr36<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): ltλOpExpr37<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): ltλOpExpr38<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(l: P1, r: P2): ltλOpExpr39<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$anyint>
>(l: P1, r: P2): ltλOpExpr40<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): ltλOpExpr41<P1, P2>;
function lt(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::lt', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000002',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e18cbcb8-533a-11ec-91db-255a0e558b87',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000100',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e8d4db72-533a-11ec-9694-37637f2abd9c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000130',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'e1829af8-533a-11ec-bf2b-95e706f5bdaf',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::<',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type orλOpExpr<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>
> = _.syntax.$expr_Operator<
  'std::OR',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Logical disjunction.
 */
function or<P1 extends $.TypeSet<$bool>, P2 extends $.TypeSet<$bool>>(
  a: P1,
  b: P2
): orλOpExpr<P1, P2>;
function or(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::or', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::OR',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type andλOpExpr<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>
> = _.syntax.$expr_Operator<
  'std::AND',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Logical conjunction.
 */
function and<P1 extends $.TypeSet<$bool>, P2 extends $.TypeSet<$bool>>(
  a: P1,
  b: P2
): andλOpExpr<P1, P2>;
function and(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::and', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::AND',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type notλOpExpr<P1 extends $.TypeSet<$bool>> = _.syntax.$expr_Operator<
  'std::NOT',
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$bool, P1['__cardinality__']>
>;
/**
 * Logical negation.
 */
function not<P1 extends $.TypeSet<$bool>>(v: P1): notλOpExpr<P1>;
function not(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::not', args, _.spec, [
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::NOT',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type plusλOpExpr<P1 extends $.TypeSet<$int16>> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$int16, P1['__cardinality__']>
>;
type plusλOpExpr2<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int16,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr3<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr4<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$datetime>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr5<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $duration,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr6<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr7<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$datetime>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr8<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr9<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$local_datetime>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr10<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr11<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$local_datetime>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr12<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_date,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr13<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$local_date>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_date,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr14<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_date,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr15<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$local_date>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_date,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr16<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_time,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr17<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$local_time>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_time,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr18<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_time,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr19<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$local_time>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_time,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr20<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$relative_duration,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr21<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$relative_duration,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr22<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$relative_duration,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr23<P1 extends $.TypeSet<$int32λICastableTo>> =
  _.syntax.$expr_Operator<
    'std::+',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$int32, P1['__cardinality__']>
  >;
type plusλOpExpr24<P1 extends $.TypeSet<$float32λICastableTo>> =
  _.syntax.$expr_Operator<
    'std::+',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$float32, P1['__cardinality__']>
  >;
type plusλOpExpr25<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr26<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr27<P1 extends $.TypeSet<$int64λICastableTo>> =
  _.syntax.$expr_Operator<
    'std::+',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$int64, P1['__cardinality__']>
  >;
type plusλOpExpr28<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr29<P1 extends $.TypeSet<$float64λICastableTo>> =
  _.syntax.$expr_Operator<
    'std::+',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$float64, P1['__cardinality__']>
  >;
type plusλOpExpr30<P1 extends $.TypeSet<$bigintλICastableTo>> =
  _.syntax.$expr_Operator<
    'std::+',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$bigint, P1['__cardinality__']>
  >;
type plusλOpExpr31<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr32<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bigint,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type plusλOpExpr33<P1 extends $.TypeSet<$decimalλICastableTo>> =
  _.syntax.$expr_Operator<
    'std::+',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$decimal, P1['__cardinality__']>
  >;
type plusλOpExpr34<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::+',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $decimal,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Arithmetic addition.
 */
function plus<P1 extends $.TypeSet<$int16>>(l: P1): plusλOpExpr<P1>;
/**
 * Arithmetic addition.
 */
function plus<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  l: P1,
  r: P2
): plusλOpExpr2<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<P1 extends $.TypeSet<$datetime>, P2 extends $.TypeSet<$duration>>(
  l: P1,
  r: P2
): plusλOpExpr3<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<P1 extends $.TypeSet<$duration>, P2 extends $.TypeSet<$datetime>>(
  l: P1,
  r: P2
): plusλOpExpr4<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<P1 extends $.TypeSet<$duration>, P2 extends $.TypeSet<$duration>>(
  l: P1,
  r: P2
): plusλOpExpr5<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): plusλOpExpr6<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$datetime>
>(l: P1, r: P2): plusλOpExpr7<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$duration>
>(l: P1, r: P2): plusλOpExpr8<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$local_datetime>
>(l: P1, r: P2): plusλOpExpr9<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): plusλOpExpr10<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$local_datetime>
>(l: P1, r: P2): plusλOpExpr11<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<$duration>
>(l: P1, r: P2): plusλOpExpr12<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$local_date>
>(l: P1, r: P2): plusλOpExpr13<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): plusλOpExpr14<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$local_date>
>(l: P1, r: P2): plusλOpExpr15<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<$duration>
>(l: P1, r: P2): plusλOpExpr16<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$local_time>
>(l: P1, r: P2): plusλOpExpr17<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): plusλOpExpr18<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$local_time>
>(l: P1, r: P2): plusλOpExpr19<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): plusλOpExpr20<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): plusλOpExpr21<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$duration>
>(l: P1, r: P2): plusλOpExpr22<P1, P2>;
/**
 * Arithmetic addition.
 */
function plus<P1 extends $.TypeSet<$int32λICastableTo>>(
  l: P1
): plusλOpExpr23<P1>;
/**
 * Arithmetic addition.
 */
function plus<P1 extends $.TypeSet<$float32λICastableTo>>(
  l: P1
): plusλOpExpr24<P1>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): plusλOpExpr25<P1, P2>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): plusλOpExpr26<P1, P2>;
/**
 * Arithmetic addition.
 */
function plus<P1 extends $.TypeSet<$int64λICastableTo>>(
  l: P1
): plusλOpExpr27<P1>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): plusλOpExpr28<P1, P2>;
/**
 * Arithmetic addition.
 */
function plus<P1 extends $.TypeSet<$float64λICastableTo>>(
  l: P1
): plusλOpExpr29<P1>;
/**
 * Arithmetic addition.
 */
function plus<P1 extends $.TypeSet<$bigintλICastableTo>>(
  l: P1
): plusλOpExpr30<P1>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): plusλOpExpr31<P1, P2>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(l: P1, r: P2): plusλOpExpr32<P1, P2>;
/**
 * Arithmetic addition.
 */
function plus<P1 extends $.TypeSet<$decimalλICastableTo>>(
  l: P1
): plusλOpExpr33<P1>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): plusλOpExpr34<P1, P2>;
function plus(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::plus', args, _.spec, [
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000103',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000103',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010e',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010b',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010b',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010b',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010b',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010c',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010c',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010c',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010c',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010d',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010d',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010d',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010d',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000111',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000111',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000111',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000104',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000106',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000104',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000106',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000110',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000110',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::+',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type minusλOpExpr<P1 extends $.TypeSet<$int16>> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$int16, P1['__cardinality__']>
>;
type minusλOpExpr2<P1 extends $.TypeSet<$duration>> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$duration, P1['__cardinality__']>
>;
type minusλOpExpr3<P1 extends $.TypeSet<_cal.$relative_duration>> =
  _.syntax.$expr_Operator<
    'std::-',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<_cal.$relative_duration, P1['__cardinality__']>
  >;
type minusλOpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int16,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr5<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr6<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $duration,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr7<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $duration,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr8<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr9<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr10<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_datetime,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr11<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_date,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr12<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_date,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr13<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_time,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr14<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$local_time,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr15<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$relative_duration,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr16<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$relative_duration,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr17<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$duration>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _cal.$relative_duration,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr18<P1 extends $.TypeSet<$int32λICastableTo>> =
  _.syntax.$expr_Operator<
    'std::-',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$int32, P1['__cardinality__']>
  >;
type minusλOpExpr19<P1 extends $.TypeSet<$float32λICastableTo>> =
  _.syntax.$expr_Operator<
    'std::-',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$float32, P1['__cardinality__']>
  >;
type minusλOpExpr20<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr21<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr22<P1 extends $.TypeSet<$int64λICastableTo>> =
  _.syntax.$expr_Operator<
    'std::-',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$int64, P1['__cardinality__']>
  >;
type minusλOpExpr23<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr24<P1 extends $.TypeSet<$float64λICastableTo>> =
  _.syntax.$expr_Operator<
    'std::-',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$float64, P1['__cardinality__']>
  >;
type minusλOpExpr25<P1 extends $.TypeSet<$bigintλICastableTo>> =
  _.syntax.$expr_Operator<
    'std::-',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$bigint, P1['__cardinality__']>
  >;
type minusλOpExpr26<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr27<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bigint,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type minusλOpExpr28<P1 extends $.TypeSet<$decimalλICastableTo>> =
  _.syntax.$expr_Operator<
    'std::-',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$decimal, P1['__cardinality__']>
  >;
type minusλOpExpr29<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::-',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $decimal,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Arithmetic subtraction.
 */
function minus<P1 extends $.TypeSet<$int16>>(l: P1): minusλOpExpr<P1>;
/**
 * Time interval and date/time subtraction.
 */
function minus<P1 extends $.TypeSet<$duration>>(v: P1): minusλOpExpr2<P1>;
/**
 * Time interval and date/time subtraction.
 */
function minus<P1 extends $.TypeSet<_cal.$relative_duration>>(
  v: P1
): minusλOpExpr3<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  l: P1,
  r: P2
): minusλOpExpr4<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$duration>
>(l: P1, r: P2): minusλOpExpr5<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>
>(l: P1, r: P2): minusλOpExpr6<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>
>(l: P1, r: P2): minusλOpExpr7<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): minusλOpExpr8<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$duration>
>(l: P1, r: P2): minusλOpExpr9<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): minusλOpExpr10<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<$duration>
>(l: P1, r: P2): minusλOpExpr11<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): minusλOpExpr12<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<$duration>
>(l: P1, r: P2): minusλOpExpr13<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): minusλOpExpr14<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): minusλOpExpr15<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>
>(l: P1, r: P2): minusλOpExpr16<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$duration>
>(l: P1, r: P2): minusλOpExpr17<P1, P2>;
/**
 * Arithmetic subtraction.
 */
function minus<P1 extends $.TypeSet<$int32λICastableTo>>(
  l: P1
): minusλOpExpr18<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<P1 extends $.TypeSet<$float32λICastableTo>>(
  l: P1
): minusλOpExpr19<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): minusλOpExpr20<P1, P2>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): minusλOpExpr21<P1, P2>;
/**
 * Arithmetic subtraction.
 */
function minus<P1 extends $.TypeSet<$int64λICastableTo>>(
  l: P1
): minusλOpExpr22<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): minusλOpExpr23<P1, P2>;
/**
 * Arithmetic subtraction.
 */
function minus<P1 extends $.TypeSet<$float64λICastableTo>>(
  l: P1
): minusλOpExpr24<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<P1 extends $.TypeSet<$bigintλICastableTo>>(
  l: P1
): minusλOpExpr25<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): minusλOpExpr26<P1, P2>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(l: P1, r: P2): minusλOpExpr27<P1, P2>;
/**
 * Arithmetic subtraction.
 */
function minus<P1 extends $.TypeSet<$decimalλICastableTo>>(
  l: P1
): minusλOpExpr28<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): minusλOpExpr29<P1, P2>;
function minus(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::minus', args, _.spec, [
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000103',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010e',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000111',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000103',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010e',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010e',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010a',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010a',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010b',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010b',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010b',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010c',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010c',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010c',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010d',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010d',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010d',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000111',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000111',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000111',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010e',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000111',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000104',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000106',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000104',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000106',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000110',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000110',
    },
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::-',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type multλOpExpr<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::*',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int16,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type multλOpExpr2<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::*',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type multλOpExpr3<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::*',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type multλOpExpr4<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::*',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type multλOpExpr5<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::*',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type multλOpExpr6<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::*',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bigint,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type multλOpExpr7<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::*',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $decimal,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Arithmetic multiplication.
 */
function mult<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  l: P1,
  r: P2
): multλOpExpr<P1, P2>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(l: P1, r: P2): multλOpExpr2<P1, P2>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): multλOpExpr3<P1, P2>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): multλOpExpr4<P1, P2>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): multλOpExpr5<P1, P2>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(l: P1, r: P2): multλOpExpr6<P1, P2>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): multλOpExpr7<P1, P2>;
function mult(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::mult', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000103',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000104',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000106',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000110',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::*',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type divλOpExpr<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::/',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type divλOpExpr2<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::/',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type divλOpExpr3<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::/',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type divλOpExpr4<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::/',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $decimal,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Arithmetic division.
 */
function div<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(l: P1, r: P2): divλOpExpr<P1, P2>;
/**
 * Arithmetic division.
 */
function div<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): divλOpExpr2<P1, P2>;
/**
 * Arithmetic division.
 */
function div<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): divλOpExpr3<P1, P2>;
/**
 * Arithmetic division.
 */
function div<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): divλOpExpr4<P1, P2>;
function div(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::div', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000106',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::/',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type floordivλOpExpr<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std:://',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int16,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type floordivλOpExpr2<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std:://',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type floordivλOpExpr3<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std:://',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type floordivλOpExpr4<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std:://',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type floordivλOpExpr5<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std:://',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type floordivλOpExpr6<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std:://',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bigint,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type floordivλOpExpr7<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std:://',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $decimal,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  n: P1,
  d: P2
): floordivλOpExpr<P1, P2>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(n: P1, d: P2): floordivλOpExpr2<P1, P2>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(n: P1, d: P2): floordivλOpExpr3<P1, P2>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(n: P1, d: P2): floordivλOpExpr4<P1, P2>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(n: P1, d: P2): floordivλOpExpr5<P1, P2>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(n: P1, d: P2): floordivλOpExpr6<P1, P2>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(n: P1, d: P2): floordivλOpExpr7<P1, P2>;
function floordiv(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::floordiv', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000103',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000104',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000106',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000110',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std:://',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type modλOpExpr<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>
> = _.syntax.$expr_Operator<
  'std::%',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int16,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type modλOpExpr2<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::%',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type modλOpExpr3<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::%',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type modλOpExpr4<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::%',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $int64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type modλOpExpr5<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::%',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type modλOpExpr6<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::%',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bigint,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type modλOpExpr7<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::%',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $decimal,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Remainder from division (modulo).
 */
function mod<P1 extends $.TypeSet<$int16>, P2 extends $.TypeSet<$int16>>(
  n: P1,
  d: P2
): modλOpExpr<P1, P2>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$int32λICastableTo>,
  P2 extends $.TypeSet<$int32λICastableTo>
>(n: P1, d: P2): modλOpExpr2<P1, P2>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(n: P1, d: P2): modλOpExpr3<P1, P2>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(n: P1, d: P2): modλOpExpr4<P1, P2>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(n: P1, d: P2): modλOpExpr5<P1, P2>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(n: P1, d: P2): modλOpExpr6<P1, P2>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(n: P1, d: P2): modλOpExpr7<P1, P2>;
function mod(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::mod', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000103',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000103',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000104',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000104',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000106',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000105',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000110',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::%',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type powλOpExpr<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
> = _.syntax.$expr_Operator<
  'std::^',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float32,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type powλOpExpr2<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::^',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type powλOpExpr3<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::^',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $float64,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type powλOpExpr4<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
> = _.syntax.$expr_Operator<
  'std::^',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $decimal,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type powλOpExpr5<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::^',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $decimal,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Power operation.
 */
function pow<
  P1 extends $.TypeSet<$float32λICastableTo>,
  P2 extends $.TypeSet<$float32λICastableTo>
>(n: P1, p: P2): powλOpExpr<P1, P2>;
/**
 * Power operation.
 */
function pow<
  P1 extends $.TypeSet<$int64λICastableTo>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(n: P1, p: P2): powλOpExpr2<P1, P2>;
/**
 * Power operation.
 */
function pow<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(n: P1, p: P2): powλOpExpr3<P1, P2>;
/**
 * Power operation.
 */
function pow<
  P1 extends $.TypeSet<$bigintλICastableTo>,
  P2 extends $.TypeSet<$bigintλICastableTo>
>(n: P1, p: P2): powλOpExpr4<P1, P2>;
/**
 * Power operation.
 */
function pow<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(n: P1, p: P2): powλOpExpr5<P1, P2>;
function pow(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::pow', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000106',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000106',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000107',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000107',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000110',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000108',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000108',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::^',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type in_e664723a533a11ec97367d35f44a5c55λOpExpr<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
type in_e664723a533a11ec97367d35f44a5c55λOpExpr2<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
type in_e664723a533a11ec97367d35f44a5c55λOpExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
type in_e664723a533a11ec97367d35f44a5c55λOpExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
type in_e664723a533a11ec97367d35f44a5c55λOpExpr5<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
type in_e664723a533a11ec97367d35f44a5c55λOpExpr6<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
type in_e664723a533a11ec97367d35f44a5c55λOpExpr7<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>>
> = _.syntax.$expr_Operator<
  'std::IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(e: P1, s: P2): in_e664723a533a11ec97367d35f44a5c55λOpExpr<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(e: P1, s: P2): in_e664723a533a11ec97367d35f44a5c55λOpExpr2<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(e: P1, s: P2): in_e664723a533a11ec97367d35f44a5c55λOpExpr3<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(e: P1, s: P2): in_e664723a533a11ec97367d35f44a5c55λOpExpr4<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
>(e: P1, s: P2): in_e664723a533a11ec97367d35f44a5c55λOpExpr5<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(e: P1, s: P2): in_e664723a533a11ec97367d35f44a5c55λOpExpr6<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>>
>(e: P1, s: P2): in_e664723a533a11ec97367d35f44a5c55λOpExpr7<P1, P2>;
function in_e664723a533a11ec97367d35f44a5c55(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::in', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::IN',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type not_inλOpExpr<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::NOT IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
type not_inλOpExpr2<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::NOT IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
type not_inλOpExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::NOT IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
type not_inλOpExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::NOT IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
type not_inλOpExpr5<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::NOT IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
type not_inλOpExpr6<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::NOT IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
type not_inλOpExpr7<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>>
> = _.syntax.$expr_Operator<
  'std::NOT IN',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      $.Cardinality.One
    >
  >
>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(e: P1, s: P2): not_inλOpExpr<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(e: P1, s: P2): not_inλOpExpr2<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(e: P1, s: P2): not_inλOpExpr3<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(e: P1, s: P2): not_inλOpExpr4<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
>(e: P1, s: P2): not_inλOpExpr5<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(e: P1, s: P2): not_inλOpExpr6<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>>
>(e: P1, s: P2): not_inλOpExpr7<P1, P2>;
function not_in(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::not_in', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::NOT IN',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type existsλOpExpr<P1 extends $.TypeSet<$.BaseType>> = _.syntax.$expr_Operator<
  'std::EXISTS',
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$bool, $.Cardinality.One>
>;
/**
 * Test whether a set is not empty.
 */
function exists<P1 extends $.TypeSet<$.BaseType>>(s: P1): existsλOpExpr<P1>;
function exists(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::exists', args, _.spec, [
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::EXISTS',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type distinctλOpExpr<P1 extends $.TypeSet<$.BaseType>> =
  _.syntax.$expr_Operator<
    'std::DISTINCT',
    $.OperatorKind.Prefix,
    [P1],
    $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>, $.Cardinality.Many>
  >;
/**
 * Return a set without repeating any elements.
 */
function distinct<P1 extends $.TypeSet<$.BaseType>>(s: P1): distinctλOpExpr<P1>;
function distinct(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::distinct', args, _.spec, [
    {
      kind: 'Prefix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000001',
      returnTypemod: 'SetOfType',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::DISTINCT',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type unionλOpExpr<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::UNION',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P2['__element__']>,
    $.Cardinality.Many
  >
>;
type unionλOpExpr2<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::UNION',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P2['__element__']>,
    $.Cardinality.Many
  >
>;
type unionλOpExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::UNION',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P2['__element__']>,
    $.Cardinality.Many
  >
>;
type unionλOpExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::UNION',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P2['__element__']>,
    $.Cardinality.Many
  >
>;
type unionλOpExpr5<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::UNION',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _.syntax.mergeObjectTypes<P1['__element__'], P2['__element__']>,
    $.Cardinality.Many
  >
>;
type unionλOpExpr6<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::UNION',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P2['__element__']>,
    $.Cardinality.Many
  >
>;
type unionλOpExpr7<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>>
> = _.syntax.$expr_Operator<
  'std::UNION',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>, $.Cardinality.Many>
>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(s1: P1, s2: P2): unionλOpExpr<P1, P2>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(s1: P1, s2: P2): unionλOpExpr2<P1, P2>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(s1: P1, s2: P2): unionλOpExpr3<P1, P2>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(s1: P1, s2: P2): unionλOpExpr4<P1, P2>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
>(s1: P1, s2: P2): unionλOpExpr5<P1, P2>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(s1: P1, s2: P2): unionλOpExpr6<P1, P2>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>>
>(s1: P1, s2: P2): unionλOpExpr7<P1, P2>;
function union(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::union', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000001',
      returnTypemod: 'SetOfType',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::UNION',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type coalesceλOpExpr<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::??',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P2['__element__']>,
    $.Cardinality.Many
  >
>;
type coalesceλOpExpr2<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::??',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P2['__element__']>,
    $.Cardinality.Many
  >
>;
type coalesceλOpExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::??',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P2['__element__']>,
    $.Cardinality.Many
  >
>;
type coalesceλOpExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::??',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P2['__element__']>,
    $.Cardinality.Many
  >
>;
type coalesceλOpExpr5<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::??',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _.syntax.mergeObjectTypes<P1['__element__'], P2['__element__']>,
    $.Cardinality.Many
  >
>;
type coalesceλOpExpr6<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::??',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P2['__element__']>,
    $.Cardinality.Many
  >
>;
type coalesceλOpExpr7<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>>
> = _.syntax.$expr_Operator<
  'std::??',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>, $.Cardinality.Many>
>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$decimalλICastableTo>
>(l: P1, r: P2): coalesceλOpExpr<P1, P2>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$float64λICastableTo>
>(l: P1, r: P2): coalesceλOpExpr2<P1, P2>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(l: P1, r: P2): coalesceλOpExpr3<P1, P2>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(l: P1, r: P2): coalesceλOpExpr4<P1, P2>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>
>(l: P1, r: P2): coalesceλOpExpr5<P1, P2>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>
>(l: P1, r: P2): coalesceλOpExpr6<P1, P2>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>>
>(l: P1, r: P2): coalesceλOpExpr7<P1, P2>;
function coalesce(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::coalesce', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: true,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000001',
      returnTypemod: 'SetOfType',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::??',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type if_elseλOpExpr<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$decimalλICastableTo>
> = _.syntax.$expr_Operator<
  'std::IF',
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P3['__element__']>,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.orCardinalities<
        P1['__cardinality__'],
        P3['__cardinality__']
      >,
      P2['__cardinality__']
    >
  >
>;
type if_elseλOpExpr2<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$float64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::IF',
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P3['__element__']>,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.orCardinalities<
        P1['__cardinality__'],
        P3['__cardinality__']
      >,
      P2['__cardinality__']
    >
  >
>;
type if_elseλOpExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::IF',
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P3['__element__']>,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.orCardinalities<
        P1['__cardinality__'],
        P3['__cardinality__']
      >,
      P2['__cardinality__']
    >
  >
>;
type if_elseλOpExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::IF',
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P3['__element__']>,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.orCardinalities<
        P1['__cardinality__'],
        P3['__cardinality__']
      >,
      P2['__cardinality__']
    >
  >
>;
type if_elseλOpExpr5<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.ObjectType>
> = _.syntax.$expr_Operator<
  'std::IF',
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<
    _.syntax.mergeObjectTypes<P1['__element__'], P3['__element__']>,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.orCardinalities<
        P1['__cardinality__'],
        P3['__cardinality__']
      >,
      P2['__cardinality__']
    >
  >
>;
type if_elseλOpExpr6<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.AnyTupleType>
> = _.syntax.$expr_Operator<
  'std::IF',
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<
    _.syntax.getSharedParentPrimitive<P1['__element__'], P3['__element__']>,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.orCardinalities<
        P1['__cardinality__'],
        P3['__cardinality__']
      >,
      P2['__cardinality__']
    >
  >
>;
type if_elseλOpExpr7<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>>
> = _.syntax.$expr_Operator<
  'std::IF',
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<
    $.getPrimitiveBaseType<P1['__element__']>,
    $.cardinalityUtil.multiplyCardinalities<
      $.cardinalityUtil.orCardinalities<
        P1['__cardinality__'],
        P3['__cardinality__']
      >,
      P2['__cardinality__']
    >
  >
>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$decimalλICastableTo>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$decimalλICastableTo>
>(if_true: P1, condition: P2, if_false: P3): if_elseλOpExpr<P1, P2, P3>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$float64λICastableTo>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$float64λICastableTo>
>(if_true: P1, condition: P2, if_false: P3): if_elseλOpExpr2<P1, P2, P3>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(if_true: P1, condition: P2, if_false: P3): if_elseλOpExpr3<P1, P2, P3>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(if_true: P1, condition: P2, if_false: P3): if_elseλOpExpr4<P1, P2, P3>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.ObjectType>
>(if_true: P1, condition: P2, if_false: P3): if_elseλOpExpr5<P1, P2, P3>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.AnyTupleType>
>(if_true: P1, condition: P2, if_false: P3): if_elseλOpExpr6<P1, P2, P3>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.getPrimitiveBaseType<P1['__element__']>>
>(if_true: P1, condition: P2, if_false: P3): if_elseλOpExpr7<P1, P2, P3>;
function if_else(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::if_else', args, _.spec, [
    {
      kind: 'Ternary',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000109',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000001',
          optional: false,
          setoftype: true,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000001',
      returnTypemod: 'SetOfType',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::IF',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type concatλOpExpr<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
> = _.syntax.$expr_Operator<
  'std::++',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $.ArrayType<
      _.syntax.getSharedParentPrimitive<
        P1['__element__']['__element__'],
        P2['__element__']['__element__']
      >
    >,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type concatλOpExpr2<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
> = _.syntax.$expr_Operator<
  'std::++',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $.ArrayType<
      _.syntax.getSharedParentPrimitive<
        P1['__element__']['__element__'],
        P2['__element__']['__element__']
      >
    >,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type concatλOpExpr3<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
> = _.syntax.$expr_Operator<
  'std::++',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $.ArrayType<
      _.syntax.mergeObjectTypes<
        P1['__element__']['__element__'],
        P2['__element__']['__element__']
      >
    >,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type concatλOpExpr4<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
> = _.syntax.$expr_Operator<
  'std::++',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $.ArrayType<
      _.syntax.getSharedParentPrimitive<
        P1['__element__']['__element__'],
        P2['__element__']['__element__']
      >
    >,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type concatλOpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
> = _.syntax.$expr_Operator<
  'std::++',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type concatλOpExpr6<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>
> = _.syntax.$expr_Operator<
  'std::++',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bytes,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type concatλOpExpr7<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::++',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Array concatenation.
 */
function concat<
  P1 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimalλICastableTo>>
>(l: P1, r: P2): concatλOpExpr<P1, P2>;
/**
 * Array concatenation.
 */
function concat<
  P1 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64λICastableTo>>
>(l: P1, r: P2): concatλOpExpr2<P1, P2>;
/**
 * Array concatenation.
 */
function concat<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>
>(l: P1, r: P2): concatλOpExpr3<P1, P2>;
/**
 * Array concatenation.
 */
function concat<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>
>(l: P1, r: P2): concatλOpExpr4<P1, P2>;
/**
 * Array concatenation.
 */
function concat<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>
  >
>(l: P1, r: P2): concatλOpExpr5<P1, P2>;
/**
 * Bytes concatenation.
 */
function concat<P1 extends $.TypeSet<$bytes>, P2 extends $.TypeSet<$bytes>>(
  l: P1,
  r: P2
): concatλOpExpr6<P1, P2>;
/**
 * String concatenation.
 */
function concat<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  l: P1,
  r: P2
): concatλOpExpr7<P1, P2>;
function concat(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::concat', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000102',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::++',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type indexλOpExpr<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::[]',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $.getPrimitiveBaseType<P1['__element__']['__element__']>,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type indexλOpExpr2<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::[]',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bytes,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type indexλOpExpr3<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::[]',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $json,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type indexλOpExpr4<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64λICastableTo>
> = _.syntax.$expr_Operator<
  'std::[]',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Array indexing.
 */
function index<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): indexλOpExpr<P1, P2>;
/**
 * Bytes indexing.
 */
function index<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): indexλOpExpr2<P1, P2>;
/**
 * JSON array/string indexing.
 */
function index<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): indexλOpExpr3<P1, P2>;
/**
 * String indexing.
 */
function index<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64λICastableTo>
>(l: P1, r: P2): indexλOpExpr4<P1, P2>;
function index(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::index', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000001',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000102',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010f',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000105',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::[]',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type sliceλOpExpr<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.TupleType<[$int64λICastableTo, $int64λICastableTo]>>
> = _.syntax.$expr_Operator<
  'std::[]',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $.ArrayType<$.getPrimitiveBaseType<P1['__element__']['__element__']>>,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type sliceλOpExpr2<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$.TupleType<[$int64λICastableTo, $int64λICastableTo]>>
> = _.syntax.$expr_Operator<
  'std::[]',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bytes,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type sliceλOpExpr3<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$.TupleType<[$int64λICastableTo, $int64λICastableTo]>>
> = _.syntax.$expr_Operator<
  'std::[]',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $json,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
type sliceλOpExpr4<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$.TupleType<[$int64λICastableTo, $int64λICastableTo]>>
> = _.syntax.$expr_Operator<
  'std::[]',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $str,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Array slicing.
 */
function slice<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.TupleType<[$int64λICastableTo, $int64λICastableTo]>>
>(l: P1, r: P2): sliceλOpExpr<P1, P2>;
/**
 * Bytes slicing.
 */
function slice<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$.TupleType<[$int64λICastableTo, $int64λICastableTo]>>
>(l: P1, r: P2): sliceλOpExpr2<P1, P2>;
/**
 * JSON array/string slicing.
 */
function slice<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$.TupleType<[$int64λICastableTo, $int64λICastableTo]>>
>(l: P1, r: P2): sliceλOpExpr3<P1, P2>;
/**
 * String slicing.
 */
function slice<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$.TupleType<[$int64λICastableTo, $int64λICastableTo]>>
>(l: P1, r: P2): sliceλOpExpr4<P1, P2>;
function slice(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::slice', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'b6dce0a9-a33c-8f05-943f-f7187bfabdce',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '5d31584b-3a5f-533d-3d64-fab0fdab61b3',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000102',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'b6dce0a9-a33c-8f05-943f-f7187bfabdce',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000102',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'b6dce0a9-a33c-8f05-943f-f7187bfabdce',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010f',
    },
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: 'b6dce0a9-a33c-8f05-943f-f7187bfabdce',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000101',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::[]',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type destructureλOpExpr<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::[]',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $json,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * JSON object property access.
 */
function destructure<P1 extends $.TypeSet<$json>, P2 extends $.TypeSet<$str>>(
  l: P1,
  r: P2
): destructureλOpExpr<P1, P2>;
function destructure(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::destructure', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010f',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::[]',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type concatenateλOpExpr<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>
> = _.syntax.$expr_Operator<
  'std::++',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $json,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Concatenate two JSON values into a new JSON value.
 */
function concatenate<P1 extends $.TypeSet<$json>, P2 extends $.TypeSet<$json>>(
  l: P1,
  r: P2
): concatenateλOpExpr<P1, P2>;
function concatenate(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::concatenate', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-00000000010f',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-00000000010f',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::++',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type likeλOpExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::LIKE',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Case-sensitive simple string matching.
 */
function like<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  string: P1,
  pattern: P2
): likeλOpExpr<P1, P2>;
function like(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::like', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::LIKE',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type ilikeλOpExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::ILIKE',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Case-insensitive simple string matching.
 */
function ilike<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  string: P1,
  pattern: P2
): ilikeλOpExpr<P1, P2>;
function ilike(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::ilike', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::ILIKE',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type not_likeλOpExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::NOT LIKE',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Case-sensitive simple string matching.
 */
function not_like<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  string: P1,
  pattern: P2
): not_likeλOpExpr<P1, P2>;
function not_like(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::not_like', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::NOT LIKE',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

type not_ilikeλOpExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>
> = _.syntax.$expr_Operator<
  'std::NOT ILIKE',
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<
    $bool,
    $.cardinalityUtil.multiplyCardinalities<
      P1['__cardinality__'],
      P2['__cardinality__']
    >
  >
>;
/**
 * Case-insensitive simple string matching.
 */
function not_ilike<P1 extends $.TypeSet<$str>, P2 extends $.TypeSet<$str>>(
  string: P1,
  pattern: P2
): not_ilikeλOpExpr<P1, P2>;
function not_ilike(...args: any[]) {
  const {
    kind,
    returnType,
    cardinality,
    args: positionalArgs,
    namedArgs,
  } = _.syntax.$resolveOverload('std::not_ilike', args, _.spec, [
    {
      kind: 'Infix',
      args: [
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
        {
          typeId: '00000000-0000-0000-0000-000000000101',
          optional: false,
          setoftype: false,
          variadic: false,
        },
      ],
      returnTypeId: '00000000-0000-0000-0000-000000000109',
    },
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: 'std::NOT ILIKE',
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
}

export {
  $anyscalar,
  $anyreal,
  $anyfloat,
  $anyint,
  $anynumeric,
  bigint,
  bool,
  bytes,
  datetime,
  decimal,
  duration,
  float32,
  float64,
  int16,
  int32,
  int64,
  json,
  $sequence,
  str,
  uuid,
  $BaseObject,
  BaseObject,
  $Object_e8dc454c533a11ecb6a0056082757897,
  Object_e8dc454c533a11ecb6a0056082757897,
  $FreeObject,
  FreeObject,
};

type __defaultExports = {
  $anyscalar: typeof $anyscalar;
  $anyreal: typeof $anyreal;
  $anyfloat: typeof $anyfloat;
  $anyint: typeof $anyint;
  $anynumeric: typeof $anynumeric;
  bigint: typeof bigint;
  bool: typeof bool;
  bytes: typeof bytes;
  datetime: typeof datetime;
  decimal: typeof decimal;
  duration: typeof duration;
  float32: typeof float32;
  float64: typeof float64;
  int16: typeof int16;
  int32: typeof int32;
  int64: typeof int64;
  json: typeof json;
  $sequence: typeof $sequence;
  str: typeof str;
  uuid: typeof uuid;
  $BaseObject: typeof $BaseObject;
  BaseObject: typeof BaseObject;
  $Object: typeof $Object_e8dc454c533a11ecb6a0056082757897;
  Object: typeof Object_e8dc454c533a11ecb6a0056082757897;
  $FreeObject: typeof $FreeObject;
  FreeObject: typeof FreeObject;
  assert_single: typeof assert_single;
  assert_exists: typeof assert_exists;
  assert_distinct: typeof assert_distinct;
  len: typeof len;
  sum: typeof sum;
  count: typeof count;
  random: typeof random;
  min: typeof min;
  max: typeof max;
  all: typeof all;
  any: typeof any;
  enumerate: typeof enumerate;
  round: typeof round;
  contains: typeof contains;
  find: typeof find;
  array_agg: typeof array_agg;
  array_unpack: typeof array_unpack;
  array_get: typeof array_get;
  array_join: typeof array_join;
  bytes_get_bit: typeof bytes_get_bit;
  datetime_current: typeof datetime_current;
  datetime_of_transaction: typeof datetime_of_transaction;
  datetime_of_statement: typeof datetime_of_statement;
  datetime_get: typeof datetime_get;
  datetime_truncate: typeof datetime_truncate;
  duration_truncate: typeof duration_truncate;
  duration_to_seconds: typeof duration_to_seconds;
  json_typeof: typeof json_typeof;
  json_array_unpack: typeof json_array_unpack;
  json_object_unpack: typeof json_object_unpack;
  json_get: typeof json_get;
  re_match: typeof re_match;
  re_match_all: typeof re_match_all;
  re_test: typeof re_test;
  re_replace: typeof re_replace;
  str_repeat: typeof str_repeat;
  str_lower: typeof str_lower;
  str_upper: typeof str_upper;
  str_title: typeof str_title;
  str_pad_start: typeof str_pad_start;
  str_lpad: typeof str_lpad;
  str_pad_end: typeof str_pad_end;
  str_rpad: typeof str_rpad;
  str_trim_start: typeof str_trim_start;
  str_ltrim: typeof str_ltrim;
  str_trim_end: typeof str_trim_end;
  str_rtrim: typeof str_rtrim;
  str_trim: typeof str_trim;
  str_split: typeof str_split;
  uuid_generate_v1mc: typeof uuid_generate_v1mc;
  to_str: typeof to_str;
  to_json: typeof to_json;
  to_datetime: typeof to_datetime;
  to_duration: typeof to_duration;
  to_bigint: typeof to_bigint;
  to_decimal: typeof to_decimal;
  to_int64: typeof to_int64;
  to_int32: typeof to_int32;
  to_int16: typeof to_int16;
  to_float64: typeof to_float64;
  to_float32: typeof to_float32;
  sequence_reset: typeof sequence_reset;
  sequence_next: typeof sequence_next;
  eq: typeof eq;
  coal_eq: typeof coal_eq;
  neq: typeof neq;
  coal_neq: typeof coal_neq;
  gte: typeof gte;
  gt: typeof gt;
  lte: typeof lte;
  lt: typeof lt;
  or: typeof or;
  and: typeof and;
  not: typeof not;
  plus: typeof plus;
  minus: typeof minus;
  mult: typeof mult;
  div: typeof div;
  floordiv: typeof floordiv;
  mod: typeof mod;
  pow: typeof pow;
  in: typeof in_e664723a533a11ec97367d35f44a5c55;
  not_in: typeof not_in;
  exists: typeof exists;
  distinct: typeof distinct;
  union: typeof union;
  coalesce: typeof coalesce;
  if_else: typeof if_else;
  concat: typeof concat;
  index: typeof index;
  slice: typeof slice;
  destructure: typeof destructure;
  concatenate: typeof concatenate;
  like: typeof like;
  ilike: typeof ilike;
  not_like: typeof not_like;
  not_ilike: typeof not_ilike;
};
const __defaultExports: __defaultExports = {
  $anyscalar: $anyscalar,
  $anyreal: $anyreal,
  $anyfloat: $anyfloat,
  $anyint: $anyint,
  $anynumeric: $anynumeric,
  bigint: bigint,
  bool: bool,
  bytes: bytes,
  datetime: datetime,
  decimal: decimal,
  duration: duration,
  float32: float32,
  float64: float64,
  int16: int16,
  int32: int32,
  int64: int64,
  json: json,
  $sequence: $sequence,
  str: str,
  uuid: uuid,
  $BaseObject: $BaseObject,
  BaseObject: BaseObject,
  $Object: $Object_e8dc454c533a11ecb6a0056082757897,
  Object: Object_e8dc454c533a11ecb6a0056082757897,
  $FreeObject: $FreeObject,
  FreeObject: FreeObject,
  assert_single: assert_single,
  assert_exists: assert_exists,
  assert_distinct: assert_distinct,
  len: len,
  sum: sum,
  count: count,
  random: random,
  min: min,
  max: max,
  all: all,
  any: any,
  enumerate: enumerate,
  round: round,
  contains: contains,
  find: find,
  array_agg: array_agg,
  array_unpack: array_unpack,
  array_get: array_get,
  array_join: array_join,
  bytes_get_bit: bytes_get_bit,
  datetime_current: datetime_current,
  datetime_of_transaction: datetime_of_transaction,
  datetime_of_statement: datetime_of_statement,
  datetime_get: datetime_get,
  datetime_truncate: datetime_truncate,
  duration_truncate: duration_truncate,
  duration_to_seconds: duration_to_seconds,
  json_typeof: json_typeof,
  json_array_unpack: json_array_unpack,
  json_object_unpack: json_object_unpack,
  json_get: json_get,
  re_match: re_match,
  re_match_all: re_match_all,
  re_test: re_test,
  re_replace: re_replace,
  str_repeat: str_repeat,
  str_lower: str_lower,
  str_upper: str_upper,
  str_title: str_title,
  str_pad_start: str_pad_start,
  str_lpad: str_lpad,
  str_pad_end: str_pad_end,
  str_rpad: str_rpad,
  str_trim_start: str_trim_start,
  str_ltrim: str_ltrim,
  str_trim_end: str_trim_end,
  str_rtrim: str_rtrim,
  str_trim: str_trim,
  str_split: str_split,
  uuid_generate_v1mc: uuid_generate_v1mc,
  to_str: to_str,
  to_json: to_json,
  to_datetime: to_datetime,
  to_duration: to_duration,
  to_bigint: to_bigint,
  to_decimal: to_decimal,
  to_int64: to_int64,
  to_int32: to_int32,
  to_int16: to_int16,
  to_float64: to_float64,
  to_float32: to_float32,
  sequence_reset: sequence_reset,
  sequence_next: sequence_next,
  eq: eq,
  coal_eq: coal_eq,
  neq: neq,
  coal_neq: coal_neq,
  gte: gte,
  gt: gt,
  lte: lte,
  lt: lt,
  or: or,
  and: and,
  not: not,
  plus: plus,
  minus: minus,
  mult: mult,
  div: div,
  floordiv: floordiv,
  mod: mod,
  pow: pow,
  in: in_e664723a533a11ec97367d35f44a5c55,
  not_in: not_in,
  exists: exists,
  distinct: distinct,
  union: union,
  coalesce: coalesce,
  if_else: if_else,
  concat: concat,
  index: index,
  slice: slice,
  destructure: destructure,
  concatenate: concatenate,
  like: like,
  ilike: ilike,
  not_like: not_like,
  not_ilike: not_ilike,
};
export default __defaultExports;
