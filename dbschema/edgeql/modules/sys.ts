import { $ } from "edgedb";
import * as _ from "../imports";
import * as _schema from "./schema";
import * as _std from "./std";
enum $TransactionIsolationλEnum {
  RepeatableRead = "RepeatableRead",
  Serializable = "Serializable",
}
export type $TransactionIsolation = typeof $TransactionIsolationλEnum & $.EnumType<"sys::TransactionIsolation", $TransactionIsolationλEnum, `${$TransactionIsolationλEnum}`>;
const TransactionIsolation: $TransactionIsolation = $.makeType<$TransactionIsolation>(_.spec, "4ae3bf04-5075-11ec-a87f-ab94530f284b", _.syntax.literal);

enum $VersionStageλEnum {
  dev = "dev",
  alpha = "alpha",
  beta = "beta",
  rc = "rc",
  final = "final",
}
export type $VersionStage = typeof $VersionStageλEnum & $.EnumType<"sys::VersionStage", $VersionStageλEnum, `${$VersionStageλEnum}`>;
const VersionStage: $VersionStage = $.makeType<$VersionStage>(_.spec, "4ae47552-5075-11ec-8c92-0b7e1c665d62", _.syntax.literal);

export type $SystemObjectλShape = $.typeutil.flatten<_schema.$AnnotationSubjectλShape & {
}>;
type $SystemObject = $.ObjectType<"sys::SystemObject", $SystemObjectλShape, null>;
const $SystemObject = $.makeType<$SystemObject>(_.spec, "4ae52ba0-5075-11ec-b342-157763cb4117", _.syntax.literal);

const SystemObject: $.$expr_PathNode<$.TypeSet<$SystemObject, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($SystemObject, $.Cardinality.Many), null, true);

export type $DatabaseλShape = $.typeutil.flatten<$SystemObjectλShape & _schema.$AnnotationSubjectλShape & {
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, true, true>;
}>;
type $Database = $.ObjectType<"sys::Database", $DatabaseλShape, null>;
const $Database = $.makeType<$Database>(_.spec, "4b040b7e-5075-11ec-8d17-0dca78da17de", _.syntax.literal);

const Database: $.$expr_PathNode<$.TypeSet<$Database, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Database, $.Cardinality.Many), null, true);

export type $ExtensionPackageλShape = $.typeutil.flatten<$SystemObjectλShape & _schema.$AnnotationSubjectλShape & {
  "script": $.PropertyDesc<_std.$str, $.Cardinality.One, false, true>;
  "version": $.PropertyDesc<$.NamedTupleType<{major: _std.$int64, minor: _std.$int64, stage: $VersionStage, stage_no: _std.$int64, local: $.ArrayType<_std.$str>}>, $.Cardinality.One, false, true>;
  "<package[IS schema::Extension]": $.LinkDesc<_schema.$Extension, $.Cardinality.AtMostOne, {}, true, false>;
  "<package": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $ExtensionPackage = $.ObjectType<"sys::ExtensionPackage", $ExtensionPackageλShape, null>;
const $ExtensionPackage = $.makeType<$ExtensionPackage>(_.spec, "4b2646c6-5075-11ec-b3a1-f1f48ec4db71", _.syntax.literal);

const ExtensionPackage: $.$expr_PathNode<$.TypeSet<$ExtensionPackage, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($ExtensionPackage, $.Cardinality.Many), null, true);

export type $RoleλShape = $.typeutil.flatten<$SystemObjectλShape & _schema.$InheritingObjectλShape & _schema.$AnnotationSubjectλShape & {
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, true, true>;
  "superuser": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, true>;
  "is_superuser": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false>;
  "password": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "member_of": $.LinkDesc<$Role, $.Cardinality.Many, {}, false, true>;
  "<member_of[IS sys::Role]": $.LinkDesc<$Role, $.Cardinality.Many, {}, false, false>;
  "<member_of": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Role = $.ObjectType<"sys::Role", $RoleλShape, null>;
const $Role = $.makeType<$Role>(_.spec, "4b51f802-5075-11ec-bb07-eb44a9e6e948", _.syntax.literal);

const Role: $.$expr_PathNode<$.TypeSet<$Role, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Role, $.Cardinality.Many), null, true);

type get_versionλFuncExpr = _.syntax.$expr_Function<
  "sys::get_version",
  [],
  {},
  $.TypeSet<$.NamedTupleType<{major: _std.$int64, minor: _std.$int64, stage: $VersionStage, stage_no: _std.$int64, local: $.ArrayType<_std.$str>}>, $.Cardinality.One>
>;
/**
 * Return the server version as a tuple.
 */
function get_version(): get_versionλFuncExpr;
function get_version(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [], returnTypeId: "9eeb93bf-0411-bcb5-53d0-e9c4e29e9920"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_version",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type get_version_as_strλFuncExpr = _.syntax.$expr_Function<
  "sys::get_version_as_str",
  [],
  {},
  $.TypeSet<_std.$str, $.Cardinality.One>
>;
/**
 * Return the server version as a string.
 */
function get_version_as_str(): get_version_as_strλFuncExpr;
function get_version_as_str(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_version_as_str",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type get_transaction_isolationλFuncExpr = _.syntax.$expr_Function<
  "sys::get_transaction_isolation",
  [],
  {},
  $.TypeSet<$TransactionIsolation, $.Cardinality.One>
>;
/**
 * Return the isolation level of the current transaction.
 */
function get_transaction_isolation(): get_transaction_isolationλFuncExpr;
function get_transaction_isolation(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [], returnTypeId: "4ae3bf04-5075-11ec-a87f-ab94530f284b"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_transaction_isolation",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type get_current_databaseλFuncExpr = _.syntax.$expr_Function<
  "sys::get_current_database",
  [],
  {},
  $.TypeSet<_std.$str, $.Cardinality.One>
>;
/**
 * Return the name of the current database as a string.
 */
function get_current_database(): get_current_databaseλFuncExpr;
function get_current_database(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_current_database",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};



export { $TransactionIsolationλEnum, TransactionIsolation, $VersionStageλEnum, VersionStage, $SystemObject, SystemObject, $Database, Database, $ExtensionPackage, ExtensionPackage, $Role, Role };

type __defaultExports = {
  "TransactionIsolation": typeof TransactionIsolation;
  "VersionStage": typeof VersionStage;
  "$SystemObject": typeof $SystemObject;
  "SystemObject": typeof SystemObject;
  "$Database": typeof $Database;
  "Database": typeof Database;
  "$ExtensionPackage": typeof $ExtensionPackage;
  "ExtensionPackage": typeof ExtensionPackage;
  "$Role": typeof $Role;
  "Role": typeof Role;
  "get_version": typeof get_version;
  "get_version_as_str": typeof get_version_as_str;
  "get_transaction_isolation": typeof get_transaction_isolation;
  "get_current_database": typeof get_current_database
};
const __defaultExports: __defaultExports = {
  "TransactionIsolation": TransactionIsolation,
  "VersionStage": VersionStage,
  "$SystemObject": $SystemObject,
  "SystemObject": SystemObject,
  "$Database": $Database,
  "Database": Database,
  "$ExtensionPackage": $ExtensionPackage,
  "ExtensionPackage": ExtensionPackage,
  "$Role": $Role,
  "Role": Role,
  "get_version": get_version,
  "get_version_as_str": get_version_as_str,
  "get_transaction_isolation": get_transaction_isolation,
  "get_current_database": get_current_database
};
export default __defaultExports;
