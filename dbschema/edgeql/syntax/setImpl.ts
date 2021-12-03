import { TypeKind, ExpressionKind, Cardinality, cardinalityUtil, $mergeObjectTypes } from "edgedb/dist/reflection/index";
import * as castMaps from "../castMaps";
import { $expressionify } from "./path";
import * as _std from "../modules/std";
import type {
  ArrayType,
  TypeSet,
  BaseType,
  ObjectTypeSet,
  PrimitiveTypeSet,
  AnyTupleType,
} from "edgedb/dist/reflection";
import type {
  $expr_Set,
  mergeObjectTypesVariadic,
  getTypesFromExprs,
  getTypesFromObjectExprs,
  getCardsFromExprs,
  getSharedParentPrimitiveVariadic,
  getPrimitiveBaseType,
  LooseTypeSet,
} from "./set";
type getSetTypeFromExprs<
  Exprs extends [TypeSet, ...TypeSet[]]
> = LooseTypeSet<
  getSharedParentPrimitiveVariadic<getTypesFromExprs<Exprs>>,
  cardinalityUtil.mergeCardinalitiesVariadic<getCardsFromExprs<Exprs>>
>;
function set<Type extends BaseType>(
  type: Type
): $expr_Set<TypeSet<Type, Cardinality.Empty>>;
function set<
  Expr extends TypeSet
>(expr: Expr): $expr_Set<Expr>;
function set<
  Expr extends TypeSet<_std.$decimalλICastableTo>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<Exprs>>;
function set<
  Expr extends TypeSet<ArrayType<_std.$decimalλICastableTo>>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<Exprs>>;
function set<
  Expr extends TypeSet<_std.$float64λICastableTo>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<Exprs>>;
function set<
  Expr extends TypeSet<ArrayType<_std.$float64λICastableTo>>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<Exprs>>;
function set<
  Expr extends ObjectTypeSet,
  Exprs extends [Expr, ...Expr[]]
>(
  ...exprs: Exprs
): $expr_Set<
  LooseTypeSet<
    mergeObjectTypesVariadic<getTypesFromObjectExprs<Exprs>>,
    cardinalityUtil.mergeCardinalitiesVariadic<getCardsFromExprs<Exprs>>
  >
>;
function set<
  Expr extends TypeSet<AnyTupleType>,
  Exprs extends [Expr, ...Expr[]]
>(...exprs: Exprs): $expr_Set<getSetTypeFromExprs<Exprs>>;
function set<
  Expr extends PrimitiveTypeSet,
  Exprs extends
    TypeSet<getPrimitiveBaseType<Expr["__element__"]>>[]
>(
  expr: Expr,
  ...exprs: Exprs
): $expr_Set<
  TypeSet<
    getPrimitiveBaseType<Expr["__element__"]>,
    cardinalityUtil.mergeCardinalitiesVariadic<
      getCardsFromExprs<[Expr, ...Exprs]>
    >
  >
>;
function set(..._exprs: any[]) {
  // if arg
  //   return empty set
  // if object set
  //   merged objects
  // if primitive
  //   return shared parent of scalars
  if (
    _exprs.length === 1 &&
    Object.values(TypeKind).includes(_exprs[0].__kind__)
  ) {
    const element: BaseType = _exprs[0] as any;
    return $expressionify({
      __kind__: ExpressionKind.Set,
      __element__: element,
      __cardinality__: Cardinality.Empty,
      __exprs__: [],
    }) as any;
  }
  const exprs: TypeSet[] = _exprs;
  if (exprs.every((expr) => expr.__element__.__kind__ === TypeKind.object)) {
    // merge object types;
    return $expressionify({
      __kind__: ExpressionKind.Set,
      __element__: exprs
        .map((expr) => expr.__element__ as any)
        .reduce($mergeObjectTypes),
      __cardinality__: cardinalityUtil.mergeCardinalitiesVariadic(
        exprs.map((expr) => expr.__cardinality__) as any
      ),
      __exprs__: exprs,
    }) as any;
  }
  if (exprs.every((expr) => expr.__element__.__kind__ !== TypeKind.object)) {
    return $expressionify({
      __kind__: ExpressionKind.Set,
      __element__: exprs
        .map((expr) => expr.__element__ as any)
        .reduce(castMaps.getSharedParentScalar),
      __cardinality__: cardinalityUtil.mergeCardinalitiesVariadic(
        exprs.map((expr) => expr.__cardinality__) as any
      ),
      __exprs__: exprs,
    }) as any;
  }
  throw new Error(
    `Invalid arguments to set constructor: ${(_exprs as TypeSet[])
      .map((expr) => expr.__element__.__name__)
      .join(", ")}`
  );
}


export { set };
