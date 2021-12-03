import { $ } from "edgedb";
import * as _ from "../imports";
import * as _std from "./std";
export type $memory = $.ScalarType<"cfg::memory", unknown>;
const memory: $memory = $.makeType<$memory>(_.spec, "00000000-0000-0000-0000-000000000130", _.syntax.literal);

export type $ConfigObjectλShape = $.typeutil.flatten<_std.$BaseObjectλShape & {
}>;
type $ConfigObject = $.ObjectType<"cfg::ConfigObject", $ConfigObjectλShape, null>;
const $ConfigObject = $.makeType<$ConfigObject>(_.spec, "4ba67440-5075-11ec-baa3-214d5875319f", _.syntax.literal);

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
const $AbstractConfig = $.makeType<$AbstractConfig>(_.spec, "4bf5723e-5075-11ec-ba69-13061275b3a1", _.syntax.literal);

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
const $Auth = $.makeType<$Auth>(_.spec, "4bdce0fc-5075-11ec-8f6f-f990ceb66bd7", _.syntax.literal);

const Auth: $.$expr_PathNode<$.TypeSet<$Auth, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Auth, $.Cardinality.Many), null, true);

export type $AuthMethodλShape = $.typeutil.flatten<$ConfigObjectλShape & {
  "<method[IS cfg::Auth]": $.LinkDesc<$Auth, $.Cardinality.AtMostOne, {}, true, false>;
  "<method": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $AuthMethod = $.ObjectType<"cfg::AuthMethod", $AuthMethodλShape, null>;
const $AuthMethod = $.makeType<$AuthMethod>(_.spec, "4bb20012-5075-11ec-a4d8-8d68ff295d1d", _.syntax.literal);

const AuthMethod: $.$expr_PathNode<$.TypeSet<$AuthMethod, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($AuthMethod, $.Cardinality.Many), null, true);

export type $ConfigλShape = $.typeutil.flatten<$AbstractConfigλShape & {
}>;
type $Config = $.ObjectType<"cfg::Config", $ConfigλShape, null>;
const $Config = $.makeType<$Config>(_.spec, "4c1feaf0-5075-11ec-ad93-0d30325bf1d4", _.syntax.literal);

const Config: $.$expr_PathNode<$.TypeSet<$Config, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Config, $.Cardinality.Many), null, true);

export type $DatabaseConfigλShape = $.typeutil.flatten<$AbstractConfigλShape & {
}>;
type $DatabaseConfig = $.ObjectType<"cfg::DatabaseConfig", $DatabaseConfigλShape, null>;
const $DatabaseConfig = $.makeType<$DatabaseConfig>(_.spec, "4c86eae8-5075-11ec-9c25-cd5de7fc1863", _.syntax.literal);

const DatabaseConfig: $.$expr_PathNode<$.TypeSet<$DatabaseConfig, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($DatabaseConfig, $.Cardinality.Many), null, true);

export type $InstanceConfigλShape = $.typeutil.flatten<$AbstractConfigλShape & {
}>;
type $InstanceConfig = $.ObjectType<"cfg::InstanceConfig", $InstanceConfigλShape, null>;
const $InstanceConfig = $.makeType<$InstanceConfig>(_.spec, "4c533d60-5075-11ec-87fe-e7b235671023", _.syntax.literal);

const InstanceConfig: $.$expr_PathNode<$.TypeSet<$InstanceConfig, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($InstanceConfig, $.Cardinality.Many), null, true);

export type $SCRAMλShape = $.typeutil.flatten<$AuthMethodλShape & {
}>;
type $SCRAM = $.ObjectType<"cfg::SCRAM", $SCRAMλShape, null>;
const $SCRAM = $.makeType<$SCRAM>(_.spec, "4bcfdb8c-5075-11ec-85a3-073f9277f4b5", _.syntax.literal);

const SCRAM: $.$expr_PathNode<$.TypeSet<$SCRAM, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($SCRAM, $.Cardinality.Many), null, true);

export type $TrustλShape = $.typeutil.flatten<$AuthMethodλShape & {
}>;
type $Trust = $.ObjectType<"cfg::Trust", $TrustλShape, null>;
const $Trust = $.makeType<$Trust>(_.spec, "4bc3e78c-5075-11ec-b3e9-c787fd850f0f", _.syntax.literal);

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
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload(args, _.spec, [
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
