import { $ } from "edgedb";
import * as _ from "../imports";
import * as _std from "./std";
type var_4ad707b5507511ec89dbf58396b3b548λFuncExpr<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::var",
  [P1],
  {},
  $.TypeSet<_std.$float64, $.cardinalityUtil.overrideLowerBound<$.Cardinality.One, 'Zero'>>
>;
type var_4ad707b5507511ec89dbf58396b3b548λFuncExpr2<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::var",
  [P1],
  {},
  $.TypeSet<_std.$float64, $.cardinalityUtil.overrideLowerBound<$.Cardinality.One, 'Zero'>>
>;
type var_4ad707b5507511ec89dbf58396b3b548λFuncExpr3<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
> = _.syntax.$expr_Function<
  "math::var",
  [P1],
  {},
  $.TypeSet<_std.$decimal, $.cardinalityUtil.overrideLowerBound<$.Cardinality.One, 'Zero'>>
>;
/**
 * Return the sample variance of the input set.
 */
function var_4ad707b5507511ec89dbf58396b3b548<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
>(
  vals: P1,
): var_4ad707b5507511ec89dbf58396b3b548λFuncExpr<P1>;
/**
 * Return the sample variance of the input set.
 */
function var_4ad707b5507511ec89dbf58396b3b548<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
>(
  vals: P1,
): var_4ad707b5507511ec89dbf58396b3b548λFuncExpr2<P1>;
/**
 * Return the sample variance of the input set.
 */
function var_4ad707b5507511ec89dbf58396b3b548<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  vals: P1,
): var_4ad707b5507511ec89dbf58396b3b548λFuncExpr3<P1>;
function var_4ad707b5507511ec89dbf58396b3b548(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107", returnTypemod: "OptionalType"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107", returnTypemod: "OptionalType"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108", returnTypemod: "OptionalType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::var",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type absλFuncExpr<
  P1 extends $.TypeSet<_std.$anyreal>,
> = _.syntax.$expr_Function<
  "math::abs",
  [P1],
  {},
  $.TypeSet<_std.$anyreal, P1["__cardinality__"]>
>;
/**
 * Return the absolute value of the input *x*.
 */
function abs<
  P1 extends $.TypeSet<_std.$anyreal>,
>(
  x: P1,
): absλFuncExpr<P1>;
function abs(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [{typeId: "3eadc9aa-5075-11ec-b5c4-af895c68219f", optional: false, setoftype: false, variadic: false}], returnTypeId: "3eadc9aa-5075-11ec-b5c4-af895c68219f"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::abs",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type ceilλFuncExpr<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::ceil",
  [P1],
  {},
  $.TypeSet<_std.$int64, P1["__cardinality__"]>
>;
type ceilλFuncExpr2<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::ceil",
  [P1],
  {},
  $.TypeSet<_std.$float64, P1["__cardinality__"]>
>;
type ceilλFuncExpr3<
  P1 extends $.TypeSet<_std.$bigintλICastableTo>,
> = _.syntax.$expr_Function<
  "math::ceil",
  [P1],
  {},
  $.TypeSet<_std.$bigint, P1["__cardinality__"]>
>;
type ceilλFuncExpr4<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
> = _.syntax.$expr_Function<
  "math::ceil",
  [P1],
  {},
  $.TypeSet<_std.$decimal, P1["__cardinality__"]>
>;
/**
 * Round up to the nearest integer.
 */
function ceil<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
>(
  x: P1,
): ceilλFuncExpr<P1>;
/**
 * Round up to the nearest integer.
 */
function ceil<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
>(
  x: P1,
): ceilλFuncExpr2<P1>;
/**
 * Round up to the nearest integer.
 */
function ceil<
  P1 extends $.TypeSet<_std.$bigintλICastableTo>,
>(
  x: P1,
): ceilλFuncExpr3<P1>;
/**
 * Round up to the nearest integer.
 */
function ceil<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  x: P1,
): ceilλFuncExpr4<P1>;
function ceil(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::ceil",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type floorλFuncExpr<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::floor",
  [P1],
  {},
  $.TypeSet<_std.$int64, P1["__cardinality__"]>
>;
type floorλFuncExpr2<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::floor",
  [P1],
  {},
  $.TypeSet<_std.$float64, P1["__cardinality__"]>
>;
type floorλFuncExpr3<
  P1 extends $.TypeSet<_std.$bigintλICastableTo>,
> = _.syntax.$expr_Function<
  "math::floor",
  [P1],
  {},
  $.TypeSet<_std.$bigint, P1["__cardinality__"]>
>;
type floorλFuncExpr4<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
> = _.syntax.$expr_Function<
  "math::floor",
  [P1],
  {},
  $.TypeSet<_std.$decimal, P1["__cardinality__"]>
>;
/**
 * Round down to the nearest integer.
 */
function floor<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
>(
  x: P1,
): floorλFuncExpr<P1>;
/**
 * Round down to the nearest integer.
 */
function floor<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
>(
  x: P1,
): floorλFuncExpr2<P1>;
/**
 * Round down to the nearest integer.
 */
function floor<
  P1 extends $.TypeSet<_std.$bigintλICastableTo>,
>(
  x: P1,
): floorλFuncExpr3<P1>;
/**
 * Round down to the nearest integer.
 */
function floor<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  x: P1,
): floorλFuncExpr4<P1>;
function floor(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::floor",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type lnλFuncExpr<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::ln",
  [P1],
  {},
  $.TypeSet<_std.$float64, P1["__cardinality__"]>
>;
type lnλFuncExpr2<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::ln",
  [P1],
  {},
  $.TypeSet<_std.$float64, P1["__cardinality__"]>
>;
type lnλFuncExpr3<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
> = _.syntax.$expr_Function<
  "math::ln",
  [P1],
  {},
  $.TypeSet<_std.$decimal, P1["__cardinality__"]>
>;
/**
 * Return the natural logarithm of the input value.
 */
function ln<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
>(
  x: P1,
): lnλFuncExpr<P1>;
/**
 * Return the natural logarithm of the input value.
 */
function ln<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
>(
  x: P1,
): lnλFuncExpr2<P1>;
/**
 * Return the natural logarithm of the input value.
 */
function ln<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  x: P1,
): lnλFuncExpr3<P1>;
function ln(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::ln",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type lgλFuncExpr<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::lg",
  [P1],
  {},
  $.TypeSet<_std.$float64, P1["__cardinality__"]>
>;
type lgλFuncExpr2<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::lg",
  [P1],
  {},
  $.TypeSet<_std.$float64, P1["__cardinality__"]>
>;
type lgλFuncExpr3<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
> = _.syntax.$expr_Function<
  "math::lg",
  [P1],
  {},
  $.TypeSet<_std.$decimal, P1["__cardinality__"]>
>;
/**
 * Return the base 10 logarithm of the input value.
 */
function lg<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
>(
  x: P1,
): lgλFuncExpr<P1>;
/**
 * Return the base 10 logarithm of the input value.
 */
function lg<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
>(
  x: P1,
): lgλFuncExpr2<P1>;
/**
 * Return the base 10 logarithm of the input value.
 */
function lg<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  x: P1,
): lgλFuncExpr3<P1>;
function lg(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::lg",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type logλFuncExpr<
  NamedArgs extends {
    "base": $.TypeSet<_std.$decimalλICastableTo>,
  },
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
> = _.syntax.$expr_Function<
  "math::log",
  [P1],
  NamedArgs,
  $.TypeSet<_std.$decimal, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], NamedArgs["base"]["__cardinality__"]>>
>;
/**
 * Return the logarithm of the input value in the specified *base*.
 */
function log<
  NamedArgs extends {
    "base": $.TypeSet<_std.$decimalλICastableTo>,
  },
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  namedArgs: NamedArgs,
  x: P1,
): logλFuncExpr<NamedArgs, P1>;
function log(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], namedArgs: {"base": {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::log",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type meanλFuncExpr<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::mean",
  [P1],
  {},
  $.TypeSet<_std.$float64, $.Cardinality.One>
>;
type meanλFuncExpr2<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::mean",
  [P1],
  {},
  $.TypeSet<_std.$float64, $.Cardinality.One>
>;
type meanλFuncExpr3<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
> = _.syntax.$expr_Function<
  "math::mean",
  [P1],
  {},
  $.TypeSet<_std.$decimal, $.Cardinality.One>
>;
/**
 * Return the arithmetic mean of the input set.
 */
function mean<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
>(
  vals: P1,
): meanλFuncExpr<P1>;
/**
 * Return the arithmetic mean of the input set.
 */
function mean<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
>(
  vals: P1,
): meanλFuncExpr2<P1>;
/**
 * Return the arithmetic mean of the input set.
 */
function mean<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  vals: P1,
): meanλFuncExpr3<P1>;
function mean(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::mean",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type stddevλFuncExpr<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::stddev",
  [P1],
  {},
  $.TypeSet<_std.$float64, $.Cardinality.One>
>;
type stddevλFuncExpr2<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::stddev",
  [P1],
  {},
  $.TypeSet<_std.$float64, $.Cardinality.One>
>;
type stddevλFuncExpr3<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
> = _.syntax.$expr_Function<
  "math::stddev",
  [P1],
  {},
  $.TypeSet<_std.$decimal, $.Cardinality.One>
>;
/**
 * Return the sample standard deviation of the input set.
 */
function stddev<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
>(
  vals: P1,
): stddevλFuncExpr<P1>;
/**
 * Return the sample standard deviation of the input set.
 */
function stddev<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
>(
  vals: P1,
): stddevλFuncExpr2<P1>;
/**
 * Return the sample standard deviation of the input set.
 */
function stddev<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  vals: P1,
): stddevλFuncExpr3<P1>;
function stddev(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::stddev",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type stddev_popλFuncExpr<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::stddev_pop",
  [P1],
  {},
  $.TypeSet<_std.$float64, $.Cardinality.One>
>;
type stddev_popλFuncExpr2<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::stddev_pop",
  [P1],
  {},
  $.TypeSet<_std.$float64, $.Cardinality.One>
>;
type stddev_popλFuncExpr3<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
> = _.syntax.$expr_Function<
  "math::stddev_pop",
  [P1],
  {},
  $.TypeSet<_std.$decimal, $.Cardinality.One>
>;
/**
 * Return the population standard deviation of the input set.
 */
function stddev_pop<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
>(
  vals: P1,
): stddev_popλFuncExpr<P1>;
/**
 * Return the population standard deviation of the input set.
 */
function stddev_pop<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
>(
  vals: P1,
): stddev_popλFuncExpr2<P1>;
/**
 * Return the population standard deviation of the input set.
 */
function stddev_pop<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  vals: P1,
): stddev_popλFuncExpr3<P1>;
function stddev_pop(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::stddev_pop",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type var_popλFuncExpr<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::var_pop",
  [P1],
  {},
  $.TypeSet<_std.$float64, $.cardinalityUtil.overrideLowerBound<$.Cardinality.One, 'Zero'>>
>;
type var_popλFuncExpr2<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
> = _.syntax.$expr_Function<
  "math::var_pop",
  [P1],
  {},
  $.TypeSet<_std.$float64, $.cardinalityUtil.overrideLowerBound<$.Cardinality.One, 'Zero'>>
>;
type var_popλFuncExpr3<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
> = _.syntax.$expr_Function<
  "math::var_pop",
  [P1],
  {},
  $.TypeSet<_std.$decimal, $.cardinalityUtil.overrideLowerBound<$.Cardinality.One, 'Zero'>>
>;
/**
 * Return the population variance of the input set.
 */
function var_pop<
  P1 extends $.TypeSet<_std.$int64λICastableTo>,
>(
  vals: P1,
): var_popλFuncExpr<P1>;
/**
 * Return the population variance of the input set.
 */
function var_pop<
  P1 extends $.TypeSet<_std.$float64λICastableTo>,
>(
  vals: P1,
): var_popλFuncExpr2<P1>;
/**
 * Return the population variance of the input set.
 */
function var_pop<
  P1 extends $.TypeSet<_std.$decimalλICastableTo>,
>(
  vals: P1,
): var_popλFuncExpr3<P1>;
function var_pop(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107", returnTypemod: "OptionalType"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107", returnTypemod: "OptionalType"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108", returnTypemod: "OptionalType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::var_pop",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};



type __defaultExports = {
  "var": typeof var_4ad707b5507511ec89dbf58396b3b548;
  "abs": typeof abs;
  "ceil": typeof ceil;
  "floor": typeof floor;
  "ln": typeof ln;
  "lg": typeof lg;
  "log": typeof log;
  "mean": typeof mean;
  "stddev": typeof stddev;
  "stddev_pop": typeof stddev_pop;
  "var_pop": typeof var_pop
};
const __defaultExports: __defaultExports = {
  "var": var_4ad707b5507511ec89dbf58396b3b548,
  "abs": abs,
  "ceil": ceil,
  "floor": floor,
  "ln": ln,
  "lg": lg,
  "log": log,
  "mean": mean,
  "stddev": stddev,
  "stddev_pop": stddev_pop,
  "var_pop": var_pop
};
export default __defaultExports;
