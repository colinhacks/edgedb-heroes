import { $ } from "edgedb";
import * as _ from "../imports";
import * as _std from "./std";
export type $memory = $.ScalarType<"cfg::memory", _.edgedb.ConfigMemory>;
const memory: $memory = $.makeType<$memory>(_.spec, "00000000-0000-0000-0000-000000000130", _.syntax.literal);

export type $ConfigObjectλShape = $.typeutil.flatten<_std.$BaseObjectλShape & {
}>;
type $ConfigObject = $.ObjectType<"cfg::ConfigObject", $ConfigObjectλShape, null>;
const $ConfigObject = $.makeType<$ConfigObject>(_.spec, "f093bf86-533a-11ec-97a4-5d19b1d4a6df", _.syntax.literal);

const ConfigObject: $.$expr_PathNode<$.TypeSet<$ConfigObject, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($ConfigObject, $.Cardinality.Many), null, true);

export type $AbstractConfigλShape = $.typeutil.flatten<$ConfigObjectλShape & {
  "session_idle_timeout": $.PropertyDesc<_std.$duration, $.Cardinality.One, false, true>;
  "session_idle_transaction_timeout": $.PropertyDesc<_std.$duration, $.Cardinality.One, false, true>;
  "query_execution_timeout": $.PropertyDesc<_std.$duration, $.Cardinality.One, false, true>;
  "listen_port": $.PropertyDesc<_std.$int16, $.Cardinality.One, false, true>;
  "listen_addresses": $.PropertyDesc<_std.$str, $.Cardinality.Many, false, true>;
  "auth": $.LinkDesc<$Auth, $.Cardinality.Many, {}, false, true>;
  "allow_dml_in_functions": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, true>;
  "shared_buffers": $.PropertyDesc<$memory, $.Cardinality.AtMostOne, false, true>;
  "query_work_mem": $.PropertyDesc<$memory, $.Cardinality.AtMostOne, false, true>;
  "effective_cache_size": $.PropertyDesc<$memory, $.Cardinality.AtMostOne, false, true>;
  "effective_io_concurrency": $.PropertyDesc<_std.$int64, $.Cardinality.AtMostOne, false, true>;
  "default_statistics_target": $.PropertyDesc<_std.$int64, $.Cardinality.AtMostOne, false, true>;
}>;
type $AbstractConfig = $.ObjectType<"cfg::AbstractConfig", $AbstractConfigλShape, null>;
const $AbstractConfig = $.makeType<$AbstractConfig>(_.spec, "f0ef9f7c-533a-11ec-8fb2-8da73461085e", _.syntax.literal);

const AbstractConfig: $.$expr_PathNode<$.TypeSet<$AbstractConfig, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($AbstractConfig, $.Cardinality.Many), null, true);

export type $AuthλShape = $.typeutil.flatten<$ConfigObjectλShape & {
  "priority": $.PropertyDesc<_std.$int64, $.Cardinality.One, true, false>;
  "user": $.PropertyDesc<_std.$str, $.Cardinality.Many, false, false>;
  "method": $.LinkDesc<$AuthMethod, $.Cardinality.AtMostOne, {}, true, true>;
  "comment": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false>;
  "<auth[IS cfg::AbstractConfig]": $.LinkDesc<$AbstractConfig, $.Cardinality.Many, {}, false, false>;
  "<auth[IS cfg::Config]": $.LinkDesc<$Config, $.Cardinality.Many, {}, false, false>;
  "<auth[IS cfg::InstanceConfig]": $.LinkDesc<$InstanceConfig, $.Cardinality.Many, {}, false, false>;
  "<auth[IS cfg::DatabaseConfig]": $.LinkDesc<$DatabaseConfig, $.Cardinality.Many, {}, false, false>;
  "<auth": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Auth = $.ObjectType<"cfg::Auth", $AuthλShape, null>;
const $Auth = $.makeType<$Auth>(_.spec, "f0d18154-533a-11ec-ad9d-d1ab017089d2", _.syntax.literal);

const Auth: $.$expr_PathNode<$.TypeSet<$Auth, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Auth, $.Cardinality.Many), null, true);

export type $AuthMethodλShape = $.typeutil.flatten<$ConfigObjectλShape & {
  "<method[IS cfg::Auth]": $.LinkDesc<$Auth, $.Cardinality.AtMostOne, {}, true, false>;
  "<method": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $AuthMethod = $.ObjectType<"cfg::AuthMethod", $AuthMethodλShape, null>;
const $AuthMethod = $.makeType<$AuthMethod>(_.spec, "f0a2f7b2-533a-11ec-8f6b-190ab56e8564", _.syntax.literal);

const AuthMethod: $.$expr_PathNode<$.TypeSet<$AuthMethod, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($AuthMethod, $.Cardinality.Many), null, true);

export type $ConfigλShape = $.typeutil.flatten<$AbstractConfigλShape & {
}>;
type $Config = $.ObjectType<"cfg::Config", $ConfigλShape, null>;
const $Config = $.makeType<$Config>(_.spec, "f123469c-533a-11ec-8142-99d4fe6c98c0", _.syntax.literal);

const Config: $.$expr_PathNode<$.TypeSet<$Config, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Config, $.Cardinality.Many), null, true);

export type $DatabaseConfigλShape = $.typeutil.flatten<$AbstractConfigλShape & {
}>;
type $DatabaseConfig = $.ObjectType<"cfg::DatabaseConfig", $DatabaseConfigλShape, null>;
const $DatabaseConfig = $.makeType<$DatabaseConfig>(_.spec, "f18fd4ce-533a-11ec-85d0-a388855506f2", _.syntax.literal);

const DatabaseConfig: $.$expr_PathNode<$.TypeSet<$DatabaseConfig, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($DatabaseConfig, $.Cardinality.Many), null, true);

export type $InstanceConfigλShape = $.typeutil.flatten<$AbstractConfigλShape & {
}>;
type $InstanceConfig = $.ObjectType<"cfg::InstanceConfig", $InstanceConfigλShape, null>;
const $InstanceConfig = $.makeType<$InstanceConfig>(_.spec, "f159f232-533a-11ec-ba1c-cfc0295c419c", _.syntax.literal);

const InstanceConfig: $.$expr_PathNode<$.TypeSet<$InstanceConfig, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($InstanceConfig, $.Cardinality.Many), null, true);

export type $SCRAMλShape = $.typeutil.flatten<$AuthMethodλShape & {
}>;
type $SCRAM = $.ObjectType<"cfg::SCRAM", $SCRAMλShape, null>;
const $SCRAM = $.makeType<$SCRAM>(_.spec, "f0c13740-533a-11ec-8b63-af6385c58e44", _.syntax.literal);

const SCRAM: $.$expr_PathNode<$.TypeSet<$SCRAM, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($SCRAM, $.Cardinality.Many), null, true);

export type $TrustλShape = $.typeutil.flatten<$AuthMethodλShape & {
}>;
type $Trust = $.ObjectType<"cfg::Trust", $TrustλShape, null>;
const $Trust = $.makeType<$Trust>(_.spec, "f0b28ee8-533a-11ec-8f04-219f6fb4f0f1", _.syntax.literal);

const Trust: $.$expr_PathNode<$.TypeSet<$Trust, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Trust, $.Cardinality.Many), null, true);

type get_config_jsonλFuncExpr<
  NamedArgs extends {
    "sources"?: $.TypeSet<$.ArrayType<_std.$str>>,
    "max_source"?: $.TypeSet<_std.$str>,
  },
> = _.syntax.$expr_Function<
  "cfg::get_config_json",
  [],
  NamedArgs,
  $.TypeSet<_std.$json, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<NamedArgs["sources"]>, $.cardinalityUtil.optionalParamCardinality<NamedArgs["max_source"]>>>
>;
function get_config_json<
  NamedArgs extends {
    "sources"?: $.TypeSet<$.ArrayType<_std.$str>>,
    "max_source"?: $.TypeSet<_std.$str>,
  },
>(
  namedArgs: NamedArgs,
): get_config_jsonλFuncExpr<NamedArgs>;
function get_config_json(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('cfg::get_config_json', args, _.spec, [
    {args: [], namedArgs: {"sources": {typeId: "05f91774-15ea-9001-038e-092c1cad80af", optional: true, setoftype: false, variadic: false}, "max_source": {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-00000000010f"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "cfg::get_config_json",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};



export { memory, $ConfigObject, ConfigObject, $AbstractConfig, AbstractConfig, $Auth, Auth, $AuthMethod, AuthMethod, $Config, Config, $DatabaseConfig, DatabaseConfig, $InstanceConfig, InstanceConfig, $SCRAM, SCRAM, $Trust, Trust };

type __defaultExports = {
  "memory": typeof memory;
  "$ConfigObject": typeof $ConfigObject;
  "ConfigObject": typeof ConfigObject;
  "$AbstractConfig": typeof $AbstractConfig;
  "AbstractConfig": typeof AbstractConfig;
  "$Auth": typeof $Auth;
  "Auth": typeof Auth;
  "$AuthMethod": typeof $AuthMethod;
  "AuthMethod": typeof AuthMethod;
  "$Config": typeof $Config;
  "Config": typeof Config;
  "$DatabaseConfig": typeof $DatabaseConfig;
  "DatabaseConfig": typeof DatabaseConfig;
  "$InstanceConfig": typeof $InstanceConfig;
  "InstanceConfig": typeof InstanceConfig;
  "$SCRAM": typeof $SCRAM;
  "SCRAM": typeof SCRAM;
  "$Trust": typeof $Trust;
  "Trust": typeof Trust;
  "get_config_json": typeof get_config_json
};
const __defaultExports: __defaultExports = {
  "memory": memory,
  "$ConfigObject": $ConfigObject,
  "ConfigObject": ConfigObject,
  "$AbstractConfig": $AbstractConfig,
  "AbstractConfig": AbstractConfig,
  "$Auth": $Auth,
  "Auth": Auth,
  "$AuthMethod": $AuthMethod,
  "AuthMethod": AuthMethod,
  "$Config": $Config,
  "Config": Config,
  "$DatabaseConfig": $DatabaseConfig,
  "DatabaseConfig": DatabaseConfig,
  "$InstanceConfig": $InstanceConfig,
  "InstanceConfig": InstanceConfig,
  "$SCRAM": $SCRAM,
  "SCRAM": SCRAM,
  "$Trust": $Trust,
  "Trust": Trust,
  "get_config_json": get_config_json
};
export default __defaultExports;
