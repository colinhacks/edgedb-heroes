import { $ } from "edgedb";
import * as _ from "../imports";
import * as _std from "./std";
import * as _sys from "./sys";
import * as _cfg from "./cfg";
import * as _default from "./default";
enum $CardinalityλEnum {
  One = "One",
  Many = "Many",
}
export type $Cardinality = typeof $CardinalityλEnum & $.EnumType<"schema::Cardinality", $CardinalityλEnum, `${$CardinalityλEnum}`>;
const Cardinality: $Cardinality = $.makeType<$Cardinality>(_.spec, "e96092de-533a-11ec-9659-63b5f0c486c0", _.syntax.literal);

enum $OperatorKindλEnum {
  Infix = "Infix",
  Postfix = "Postfix",
  Prefix = "Prefix",
  Ternary = "Ternary",
}
export type $OperatorKind = typeof $OperatorKindλEnum & $.EnumType<"schema::OperatorKind", $OperatorKindλEnum, `${$OperatorKindλEnum}`>;
const OperatorKind: $OperatorKind = $.makeType<$OperatorKind>(_.spec, "e962232e-533a-11ec-94c3-b58965cee5f2", _.syntax.literal);

enum $ParameterKindλEnum {
  VariadicParam = "VariadicParam",
  NamedOnlyParam = "NamedOnlyParam",
  PositionalParam = "PositionalParam",
}
export type $ParameterKind = typeof $ParameterKindλEnum & $.EnumType<"schema::ParameterKind", $ParameterKindλEnum, `${$ParameterKindλEnum}`>;
const ParameterKind: $ParameterKind = $.makeType<$ParameterKind>(_.spec, "e963a62c-533a-11ec-bc79-1732c0cc714f", _.syntax.literal);

enum $TargetDeleteActionλEnum {
  Restrict = "Restrict",
  DeleteSource = "DeleteSource",
  Allow = "Allow",
  DeferredRestrict = "DeferredRestrict",
}
export type $TargetDeleteAction = typeof $TargetDeleteActionλEnum & $.EnumType<"schema::TargetDeleteAction", $TargetDeleteActionλEnum, `${$TargetDeleteActionλEnum}`>;
const TargetDeleteAction: $TargetDeleteAction = $.makeType<$TargetDeleteAction>(_.spec, "e96160ec-533a-11ec-80ef-97c83d7dce0f", _.syntax.literal);

enum $TypeModifierλEnum {
  SetOfType = "SetOfType",
  OptionalType = "OptionalType",
  SingletonType = "SingletonType",
}
export type $TypeModifier = typeof $TypeModifierλEnum & $.EnumType<"schema::TypeModifier", $TypeModifierλEnum, `${$TypeModifierλEnum}`>;
const TypeModifier: $TypeModifier = $.makeType<$TypeModifier>(_.spec, "e96472e6-533a-11ec-9830-a18acd5de774", _.syntax.literal);

enum $VolatilityλEnum {
  Immutable = "Immutable",
  Stable = "Stable",
  Volatile = "Volatile",
}
export type $Volatility = typeof $VolatilityλEnum & $.EnumType<"schema::Volatility", $VolatilityλEnum, `${$VolatilityλEnum}`>;
const Volatility: $Volatility = $.makeType<$Volatility>(_.spec, "e962e5fc-533a-11ec-a961-19e4a7eec67c", _.syntax.literal);

export type $Object_e96560e8533a11ecaf96dbe70488c8d1λShape = $.typeutil.flatten<_std.$BaseObjectλShape & {
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, true>;
  "internal": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, true>;
  "builtin": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, true>;
  "computed_fields": $.PropertyDesc<$.ArrayType<_std.$str>, $.Cardinality.AtMostOne, false, true>;
}>;
type $Object_e96560e8533a11ecaf96dbe70488c8d1 = $.ObjectType<"schema::Object", $Object_e96560e8533a11ecaf96dbe70488c8d1λShape, null>;
const $Object_e96560e8533a11ecaf96dbe70488c8d1 = $.makeType<$Object_e96560e8533a11ecaf96dbe70488c8d1>(_.spec, "e96560e8-533a-11ec-af96-dbe70488c8d1", _.syntax.literal);

const Object_e96560e8533a11ecaf96dbe70488c8d1: $.$expr_PathNode<$.TypeSet<$Object_e96560e8533a11ecaf96dbe70488c8d1, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Object_e96560e8533a11ecaf96dbe70488c8d1, $.Cardinality.Many), null, true);

export type $AnnotationSubjectλShape = $.typeutil.flatten<$Object_e96560e8533a11ecaf96dbe70488c8d1λShape & {
  "annotations": $.LinkDesc<$Annotation, $.Cardinality.Many, {
    "@owned": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne>;
    "@value": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne>;
    "@is_owned": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne>;
  }, false, true>;
}>;
type $AnnotationSubject = $.ObjectType<"schema::AnnotationSubject", $AnnotationSubjectλShape, null>;
const $AnnotationSubject = $.makeType<$AnnotationSubject>(_.spec, "eabbb67c-533a-11ec-8a64-4ffa0dfa86dc", _.syntax.literal);

const AnnotationSubject: $.$expr_PathNode<$.TypeSet<$AnnotationSubject, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($AnnotationSubject, $.Cardinality.Many), null, true);

export type $AliasλShape = $.typeutil.flatten<$AnnotationSubjectλShape & {
  "expr": $.PropertyDesc<_std.$str, $.Cardinality.One, false, true>;
  "type": $.LinkDesc<$Type, $.Cardinality.One, {}, false, true>;
}>;
type $Alias = $.ObjectType<"schema::Alias", $AliasλShape, null>;
const $Alias = $.makeType<$Alias>(_.spec, "ec4a6fd8-533a-11ec-a91a-e7d9bcd7f60b", _.syntax.literal);

const Alias: $.$expr_PathNode<$.TypeSet<$Alias, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Alias, $.Cardinality.Many), null, true);

export type $SubclassableObjectλShape = $.typeutil.flatten<$Object_e96560e8533a11ecaf96dbe70488c8d1λShape & {
  "abstract": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, true>;
  "is_abstract": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, false>;
  "final": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false>;
  "is_final": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false>;
}>;
type $SubclassableObject = $.ObjectType<"schema::SubclassableObject", $SubclassableObjectλShape, null>;
const $SubclassableObject = $.makeType<$SubclassableObject>(_.spec, "e971beba-533a-11ec-911f-bba8f4f17786", _.syntax.literal);

const SubclassableObject: $.$expr_PathNode<$.TypeSet<$SubclassableObject, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($SubclassableObject, $.Cardinality.Many), null, true);

export type $InheritingObjectλShape = $.typeutil.flatten<$SubclassableObjectλShape & {
  "bases": $.LinkDesc<$InheritingObject, $.Cardinality.Many, {
    "@index": $.PropertyDesc<_std.$int64, $.Cardinality.AtMostOne>;
  }, false, true>;
  "ancestors": $.LinkDesc<$InheritingObject, $.Cardinality.Many, {
    "@index": $.PropertyDesc<_std.$int64, $.Cardinality.AtMostOne>;
  }, false, true>;
  "inherited_fields": $.PropertyDesc<$.ArrayType<_std.$str>, $.Cardinality.AtMostOne, false, true>;
  "<bases[IS schema::InheritingObject]": $.LinkDesc<$InheritingObject, $.Cardinality.Many, {}, false, false>;
  "<ancestors[IS schema::InheritingObject]": $.LinkDesc<$InheritingObject, $.Cardinality.Many, {}, false, false>;
  "<bases[IS schema::Constraint]": $.LinkDesc<$Constraint, $.Cardinality.Many, {}, false, false>;
  "<ancestors[IS schema::Constraint]": $.LinkDesc<$Constraint, $.Cardinality.Many, {}, false, false>;
  "<bases[IS schema::ScalarType]": $.LinkDesc<$ScalarType, $.Cardinality.Many, {}, false, false>;
  "<ancestors[IS schema::ScalarType]": $.LinkDesc<$ScalarType, $.Cardinality.Many, {}, false, false>;
  "<bases[IS schema::Pointer]": $.LinkDesc<$Pointer, $.Cardinality.Many, {}, false, false>;
  "<ancestors[IS schema::Pointer]": $.LinkDesc<$Pointer, $.Cardinality.Many, {}, false, false>;
  "<bases[IS schema::Property]": $.LinkDesc<$Property, $.Cardinality.Many, {}, false, false>;
  "<ancestors[IS schema::Property]": $.LinkDesc<$Property, $.Cardinality.Many, {}, false, false>;
  "<bases[IS schema::Link]": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, false>;
  "<ancestors[IS schema::Link]": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, false>;
  "<bases[IS schema::ObjectType]": $.LinkDesc<$ObjectType, $.Cardinality.Many, {}, false, false>;
  "<ancestors[IS schema::ObjectType]": $.LinkDesc<$ObjectType, $.Cardinality.Many, {}, false, false>;
  "<ancestors": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
  "<bases": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $InheritingObject = $.ObjectType<"schema::InheritingObject", $InheritingObjectλShape, null>;
const $InheritingObject = $.makeType<$InheritingObject>(_.spec, "ead5fec4-533a-11ec-a26f-cdf431f3f597", _.syntax.literal);

const InheritingObject: $.$expr_PathNode<$.TypeSet<$InheritingObject, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($InheritingObject, $.Cardinality.Many), null, true);

export type $AnnotationλShape = $.typeutil.flatten<$Object_e96560e8533a11ecaf96dbe70488c8d1λShape & $InheritingObjectλShape & {
  "inheritable": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, true>;
  "<annotations[IS schema::AnnotationSubject]": $.LinkDesc<$AnnotationSubject, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS sys::SystemObject]": $.LinkDesc<_sys.$SystemObject, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::CallableObject]": $.LinkDesc<$CallableObject, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::Operator]": $.LinkDesc<$Operator, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::Function]": $.LinkDesc<$Function, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::Cast]": $.LinkDesc<$Cast, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::Migration]": $.LinkDesc<$Migration, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::Constraint]": $.LinkDesc<$Constraint, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::ScalarType]": $.LinkDesc<$ScalarType, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::Index]": $.LinkDesc<$Index, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::Alias]": $.LinkDesc<$Alias, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::Pointer]": $.LinkDesc<$Pointer, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::Property]": $.LinkDesc<$Property, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::Link]": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::ObjectType]": $.LinkDesc<$ObjectType, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS sys::Role]": $.LinkDesc<_sys.$Role, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS sys::ExtensionPackage]": $.LinkDesc<_sys.$ExtensionPackage, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS schema::Extension]": $.LinkDesc<$Extension, $.Cardinality.Many, {}, false, false>;
  "<annotations[IS sys::Database]": $.LinkDesc<_sys.$Database, $.Cardinality.Many, {}, false, false>;
  "<annotations": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Annotation = $.ObjectType<"schema::Annotation", $AnnotationλShape, null>;
const $Annotation = $.makeType<$Annotation>(_.spec, "eaa50d00-533a-11ec-9088-b17537989a80", _.syntax.literal);

const Annotation: $.$expr_PathNode<$.TypeSet<$Annotation, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Annotation, $.Cardinality.Many), null, true);

export type $TypeλShape = $.typeutil.flatten<$SubclassableObjectλShape & $AnnotationSubjectλShape & {
  "expr": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "from_alias": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false>;
  "is_from_alias": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false>;
  "<__type__[IS std::BaseObject]": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS std::FreeObject]": $.LinkDesc<_std.$FreeObject, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Object]": $.LinkDesc<$Object_e96560e8533a11ecaf96dbe70488c8d1, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::SubclassableObject]": $.LinkDesc<$SubclassableObject, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS std::Object]": $.LinkDesc<_std.$Object_e8dc454c533a11ecb6a0056082757897, $.Cardinality.Many, {}, false, false>;
  "<element_type[IS schema::Array]": $.LinkDesc<$Array, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::TupleElement]": $.LinkDesc<$TupleElement, $.Cardinality.Many, {}, false, false>;
  "<type[IS schema::TupleElement]": $.LinkDesc<$TupleElement, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Delta]": $.LinkDesc<$Delta, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::AnnotationSubject]": $.LinkDesc<$AnnotationSubject, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::InheritingObject]": $.LinkDesc<$InheritingObject, $.Cardinality.Many, {}, false, false>;
  "<type[IS schema::Parameter]": $.LinkDesc<$Parameter, $.Cardinality.Many, {}, false, false>;
  "<return_type[IS schema::CallableObject]": $.LinkDesc<$CallableObject, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::VolatilitySubject]": $.LinkDesc<$VolatilitySubject, $.Cardinality.Many, {}, false, false>;
  "<from_type[IS schema::Cast]": $.LinkDesc<$Cast, $.Cardinality.Many, {}, false, false>;
  "<type[IS schema::Alias]": $.LinkDesc<$Alias, $.Cardinality.Many, {}, false, false>;
  "<to_type[IS schema::Cast]": $.LinkDesc<$Cast, $.Cardinality.Many, {}, false, false>;
  "<target[IS schema::Pointer]": $.LinkDesc<$Pointer, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS sys::SystemObject]": $.LinkDesc<_sys.$SystemObject, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS cfg::ConfigObject]": $.LinkDesc<_cfg.$ConfigObject, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS cfg::AuthMethod]": $.LinkDesc<_cfg.$AuthMethod, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS cfg::Trust]": $.LinkDesc<_cfg.$Trust, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS cfg::SCRAM]": $.LinkDesc<_cfg.$SCRAM, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS cfg::Auth]": $.LinkDesc<_cfg.$Auth, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS cfg::AbstractConfig]": $.LinkDesc<_cfg.$AbstractConfig, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS cfg::Config]": $.LinkDesc<_cfg.$Config, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS cfg::InstanceConfig]": $.LinkDesc<_cfg.$InstanceConfig, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS cfg::DatabaseConfig]": $.LinkDesc<_cfg.$DatabaseConfig, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Annotation]": $.LinkDesc<$Annotation, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Type]": $.LinkDesc<$Type, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::PrimitiveType]": $.LinkDesc<$PrimitiveType, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::CollectionType]": $.LinkDesc<$CollectionType, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Array]": $.LinkDesc<$Array, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Tuple]": $.LinkDesc<$Tuple, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Parameter]": $.LinkDesc<$Parameter, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::CallableObject]": $.LinkDesc<$CallableObject, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Operator]": $.LinkDesc<$Operator, $.Cardinality.Many, {}, false, false>;
  "<return_type[IS schema::Operator]": $.LinkDesc<$Operator, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Function]": $.LinkDesc<$Function, $.Cardinality.Many, {}, false, false>;
  "<return_type[IS schema::Function]": $.LinkDesc<$Function, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Cast]": $.LinkDesc<$Cast, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Migration]": $.LinkDesc<$Migration, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Module]": $.LinkDesc<$Module, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Constraint]": $.LinkDesc<$Constraint, $.Cardinality.Many, {}, false, false>;
  "<return_type[IS schema::Constraint]": $.LinkDesc<$Constraint, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::ConsistencySubject]": $.LinkDesc<$ConsistencySubject, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::ScalarType]": $.LinkDesc<$ScalarType, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::PseudoType]": $.LinkDesc<$PseudoType, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Index]": $.LinkDesc<$Index, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Alias]": $.LinkDesc<$Alias, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Pointer]": $.LinkDesc<$Pointer, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Property]": $.LinkDesc<$Property, $.Cardinality.Many, {}, false, false>;
  "<target[IS schema::Property]": $.LinkDesc<$Property, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Source]": $.LinkDesc<$Source, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Link]": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::ObjectType]": $.LinkDesc<$ObjectType, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS sys::Role]": $.LinkDesc<_sys.$Role, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS sys::ExtensionPackage]": $.LinkDesc<_sys.$ExtensionPackage, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS schema::Extension]": $.LinkDesc<$Extension, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS sys::Database]": $.LinkDesc<_sys.$Database, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS default::Person]": $.LinkDesc<_default.$Person, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS default::Hero]": $.LinkDesc<_default.$Hero, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS default::Villain]": $.LinkDesc<_default.$Villain, $.Cardinality.Many, {}, false, false>;
  "<__type__[IS default::Movie]": $.LinkDesc<_default.$Movie, $.Cardinality.Many, {}, false, false>;
  "<__type__": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
  "<element_type": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
  "<from_type": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
  "<return_type": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
  "<target": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
  "<to_type": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
  "<type": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Type = $.ObjectType<"schema::Type", $TypeλShape, null>;
const $Type = $.makeType<$Type>(_.spec, "e9857914-533a-11ec-a29a-4b2ea7cf26cf", _.syntax.literal);

const Type: $.$expr_PathNode<$.TypeSet<$Type, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Type, $.Cardinality.Many), null, true);

export type $PrimitiveTypeλShape = $.typeutil.flatten<$TypeλShape & {
}>;
type $PrimitiveType = $.ObjectType<"schema::PrimitiveType", $PrimitiveTypeλShape, null>;
const $PrimitiveType = $.makeType<$PrimitiveType>(_.spec, "e9ef4330-533a-11ec-a46d-e517449d54bc", _.syntax.literal);

const PrimitiveType: $.$expr_PathNode<$.TypeSet<$PrimitiveType, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($PrimitiveType, $.Cardinality.Many), null, true);

export type $CollectionTypeλShape = $.typeutil.flatten<$PrimitiveTypeλShape & {
}>;
type $CollectionType = $.ObjectType<"schema::CollectionType", $CollectionTypeλShape, null>;
const $CollectionType = $.makeType<$CollectionType>(_.spec, "ea0d8106-533a-11ec-9d23-c96392acdd14", _.syntax.literal);

const CollectionType: $.$expr_PathNode<$.TypeSet<$CollectionType, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($CollectionType, $.Cardinality.Many), null, true);

export type $ArrayλShape = $.typeutil.flatten<$CollectionTypeλShape & {
  "element_type": $.LinkDesc<$Type, $.Cardinality.One, {}, false, true>;
  "dimensions": $.PropertyDesc<$.ArrayType<_std.$int16>, $.Cardinality.AtMostOne, false, true>;
}>;
type $Array = $.ObjectType<"schema::Array", $ArrayλShape, null>;
const $Array = $.makeType<$Array>(_.spec, "ea2c766a-533a-11ec-8b55-3727ab8a8139", _.syntax.literal);

const Array: $.$expr_PathNode<$.TypeSet<$Array, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Array, $.Cardinality.Many), null, true);

export type $CallableObjectλShape = $.typeutil.flatten<$AnnotationSubjectλShape & {
  "params": $.LinkDesc<$Parameter, $.Cardinality.Many, {
    "@index": $.PropertyDesc<_std.$int64, $.Cardinality.AtMostOne>;
  }, false, true>;
  "return_type": $.LinkDesc<$Type, $.Cardinality.AtMostOne, {}, false, true>;
  "return_typemod": $.PropertyDesc<$TypeModifier, $.Cardinality.AtMostOne, false, true>;
}>;
type $CallableObject = $.ObjectType<"schema::CallableObject", $CallableObjectλShape, null>;
const $CallableObject = $.makeType<$CallableObject>(_.spec, "eb17c12e-533a-11ec-a234-83649001764d", _.syntax.literal);

const CallableObject: $.$expr_PathNode<$.TypeSet<$CallableObject, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($CallableObject, $.Cardinality.Many), null, true);

export type $VolatilitySubjectλShape = $.typeutil.flatten<$Object_e96560e8533a11ecaf96dbe70488c8d1λShape & {
  "volatility": $.PropertyDesc<$Volatility, $.Cardinality.AtMostOne, false, true>;
}>;
type $VolatilitySubject = $.ObjectType<"schema::VolatilitySubject", $VolatilitySubjectλShape, null>;
const $VolatilitySubject = $.makeType<$VolatilitySubject>(_.spec, "eb3e2e4a-533a-11ec-bc3f-0b14471b928f", _.syntax.literal);

const VolatilitySubject: $.$expr_PathNode<$.TypeSet<$VolatilitySubject, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($VolatilitySubject, $.Cardinality.Many), null, true);

export type $CastλShape = $.typeutil.flatten<$AnnotationSubjectλShape & $VolatilitySubjectλShape & {
  "from_type": $.LinkDesc<$Type, $.Cardinality.AtMostOne, {}, false, true>;
  "to_type": $.LinkDesc<$Type, $.Cardinality.AtMostOne, {}, false, true>;
  "allow_implicit": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, true>;
  "allow_assignment": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, true>;
}>;
type $Cast = $.ObjectType<"schema::Cast", $CastλShape, null>;
const $Cast = $.makeType<$Cast>(_.spec, "eec4ccc2-533a-11ec-a609-07dbe291722e", _.syntax.literal);

const Cast: $.$expr_PathNode<$.TypeSet<$Cast, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Cast, $.Cardinality.Many), null, true);

export type $ConsistencySubjectλShape = $.typeutil.flatten<$Object_e96560e8533a11ecaf96dbe70488c8d1λShape & $InheritingObjectλShape & $AnnotationSubjectλShape & {
  "constraints": $.LinkDesc<$Constraint, $.Cardinality.Many, {
    "@owned": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne>;
    "@is_owned": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne>;
  }, true, true>;
  "<subject[IS schema::Constraint]": $.LinkDesc<$Constraint, $.Cardinality.Many, {}, false, false>;
  "<subject": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $ConsistencySubject = $.ObjectType<"schema::ConsistencySubject", $ConsistencySubjectλShape, null>;
const $ConsistencySubject = $.makeType<$ConsistencySubject>(_.spec, "eb9b4544-533a-11ec-8031-95bbb089b0d7", _.syntax.literal);

const ConsistencySubject: $.$expr_PathNode<$.TypeSet<$ConsistencySubject, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($ConsistencySubject, $.Cardinality.Many), null, true);

export type $ConstraintλShape = $.typeutil.flatten<$CallableObjectλShape & $InheritingObjectλShape & {
  "params": $.LinkDesc<$Parameter, $.Cardinality.Many, {
    "@index": $.PropertyDesc<_std.$int64, $.Cardinality.AtMostOne>;
    "@value": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne>;
  }, false, true>;
  "expr": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "subjectexpr": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "finalexpr": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "errmessage": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "delegated": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, true>;
  "subject": $.LinkDesc<$ConsistencySubject, $.Cardinality.AtMostOne, {}, false, true>;
  "<constraints[IS schema::ConsistencySubject]": $.LinkDesc<$ConsistencySubject, $.Cardinality.AtMostOne, {}, false, false>;
  "<constraints[IS schema::ScalarType]": $.LinkDesc<$ScalarType, $.Cardinality.AtMostOne, {}, false, false>;
  "<constraints[IS schema::Pointer]": $.LinkDesc<$Pointer, $.Cardinality.AtMostOne, {}, false, false>;
  "<constraints[IS schema::Property]": $.LinkDesc<$Property, $.Cardinality.AtMostOne, {}, false, false>;
  "<constraints[IS schema::Link]": $.LinkDesc<$Link, $.Cardinality.AtMostOne, {}, false, false>;
  "<constraints[IS schema::ObjectType]": $.LinkDesc<$ObjectType, $.Cardinality.AtMostOne, {}, false, false>;
  "<constraints": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Constraint = $.ObjectType<"schema::Constraint", $ConstraintλShape, null>;
const $Constraint = $.makeType<$Constraint>(_.spec, "eb55d63a-533a-11ec-8831-5560d8d8c5de", _.syntax.literal);

const Constraint: $.$expr_PathNode<$.TypeSet<$Constraint, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Constraint, $.Cardinality.Many), null, true);

export type $DeltaλShape = $.typeutil.flatten<$Object_e96560e8533a11ecaf96dbe70488c8d1λShape & {
  "parents": $.LinkDesc<$Delta, $.Cardinality.Many, {}, false, true>;
  "<parents[IS schema::Delta]": $.LinkDesc<$Delta, $.Cardinality.Many, {}, false, false>;
  "<parents": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Delta = $.ObjectType<"schema::Delta", $DeltaλShape, null>;
const $Delta = $.makeType<$Delta>(_.spec, "ea8f4b78-533a-11ec-b1ef-7574a77181df", _.syntax.literal);

const Delta: $.$expr_PathNode<$.TypeSet<$Delta, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Delta, $.Cardinality.Many), null, true);

export type $ExtensionλShape = $.typeutil.flatten<$AnnotationSubjectλShape & $Object_e96560e8533a11ecaf96dbe70488c8d1λShape & {
  "package": $.LinkDesc<_sys.$ExtensionPackage, $.Cardinality.One, {}, true, true>;
}>;
type $Extension = $.ObjectType<"schema::Extension", $ExtensionλShape, null>;
const $Extension = $.makeType<$Extension>(_.spec, "ef225680-533a-11ec-8f73-61bededf5f53", _.syntax.literal);

const Extension: $.$expr_PathNode<$.TypeSet<$Extension, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Extension, $.Cardinality.Many), null, true);

export type $FunctionλShape = $.typeutil.flatten<$CallableObjectλShape & $VolatilitySubjectλShape & {
  "preserves_optionality": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, true>;
}>;
type $Function = $.ObjectType<"schema::Function", $FunctionλShape, null>;
const $Function = $.makeType<$Function>(_.spec, "ee58e4e4-533a-11ec-934b-1b14d8e63d8c", _.syntax.literal);

const Function: $.$expr_PathNode<$.TypeSet<$Function, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Function, $.Cardinality.Many), null, true);

export type $IndexλShape = $.typeutil.flatten<$AnnotationSubjectλShape & {
  "expr": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "<indexes[IS schema::Source]": $.LinkDesc<$Source, $.Cardinality.AtMostOne, {}, false, false>;
  "<indexes[IS schema::Link]": $.LinkDesc<$Link, $.Cardinality.AtMostOne, {}, false, false>;
  "<indexes[IS schema::ObjectType]": $.LinkDesc<$ObjectType, $.Cardinality.AtMostOne, {}, false, false>;
  "<indexes": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Index = $.ObjectType<"schema::Index", $IndexλShape, null>;
const $Index = $.makeType<$Index>(_.spec, "ebc09ac4-533a-11ec-b2f8-9f2074dc36fb", _.syntax.literal);

const Index: $.$expr_PathNode<$.TypeSet<$Index, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Index, $.Cardinality.Many), null, true);

export type $PointerλShape = $.typeutil.flatten<$InheritingObjectλShape & $ConsistencySubjectλShape & $AnnotationSubjectλShape & {
  "cardinality": $.PropertyDesc<$Cardinality, $.Cardinality.AtMostOne, false, true>;
  "required": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, true>;
  "readonly": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, true>;
  "default": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "expr": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "source": $.LinkDesc<$Source, $.Cardinality.AtMostOne, {}, false, true>;
  "target": $.LinkDesc<$Type, $.Cardinality.AtMostOne, {}, false, true>;
  "<pointers[IS schema::Source]": $.LinkDesc<$Source, $.Cardinality.AtMostOne, {}, false, false>;
  "<pointers[IS schema::Link]": $.LinkDesc<$Link, $.Cardinality.AtMostOne, {}, false, false>;
  "<pointers[IS schema::ObjectType]": $.LinkDesc<$ObjectType, $.Cardinality.AtMostOne, {}, false, false>;
  "<pointers": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Pointer = $.ObjectType<"schema::Pointer", $PointerλShape, null>;
const $Pointer = $.makeType<$Pointer>(_.spec, "ebfc1f22-533a-11ec-b569-098f8976d9ee", _.syntax.literal);

const Pointer: $.$expr_PathNode<$.TypeSet<$Pointer, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Pointer, $.Cardinality.Many), null, true);

export type $SourceλShape = $.typeutil.flatten<$Object_e96560e8533a11ecaf96dbe70488c8d1λShape & {
  "indexes": $.LinkDesc<$Index, $.Cardinality.Many, {}, true, true>;
  "pointers": $.LinkDesc<$Pointer, $.Cardinality.Many, {
    "@is_owned": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne>;
    "@owned": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne>;
  }, true, true>;
  "<source[IS schema::Pointer]": $.LinkDesc<$Pointer, $.Cardinality.Many, {}, false, false>;
  "<source[IS schema::Property]": $.LinkDesc<$Property, $.Cardinality.Many, {}, false, false>;
  "<source[IS schema::Link]": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, false>;
  "<source": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Source = $.ObjectType<"schema::Source", $SourceλShape, null>;
const $Source = $.makeType<$Source>(_.spec, "ebe07254-533a-11ec-a391-e9efd07b9b11", _.syntax.literal);

const Source: $.$expr_PathNode<$.TypeSet<$Source, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Source, $.Cardinality.Many), null, true);

export type $LinkλShape = $.typeutil.flatten<$PointerλShape & $SourceλShape & {
  "target": $.LinkDesc<$ObjectType, $.Cardinality.AtMostOne, {}, false, true>;
  "properties": $.LinkDesc<$Property, $.Cardinality.Many, {
    "@is_owned": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne>;
    "@owned": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne>;
  }, false, false>;
  "on_target_delete": $.PropertyDesc<$TargetDeleteAction, $.Cardinality.AtMostOne, false, true>;
  "<links[IS schema::ObjectType]": $.LinkDesc<$ObjectType, $.Cardinality.Many, {}, false, false>;
  "<links": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Link = $.ObjectType<"schema::Link", $LinkλShape, null>;
const $Link = $.makeType<$Link>(_.spec, "ed631596-533a-11ec-b8d7-b3d7b89e6d6e", _.syntax.literal);

const Link: $.$expr_PathNode<$.TypeSet<$Link, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Link, $.Cardinality.Many), null, true);

export type $MigrationλShape = $.typeutil.flatten<$AnnotationSubjectλShape & $Object_e96560e8533a11ecaf96dbe70488c8d1λShape & {
  "parents": $.LinkDesc<$Migration, $.Cardinality.Many, {}, false, true>;
  "script": $.PropertyDesc<_std.$str, $.Cardinality.One, false, true>;
  "message": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "<parents[IS schema::Migration]": $.LinkDesc<$Migration, $.Cardinality.Many, {}, false, false>;
  "<parents": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Migration = $.ObjectType<"schema::Migration", $MigrationλShape, null>;
const $Migration = $.makeType<$Migration>(_.spec, "eef8565a-533a-11ec-ace7-f7b01987c421", _.syntax.literal);

const Migration: $.$expr_PathNode<$.TypeSet<$Migration, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Migration, $.Cardinality.Many), null, true);

export type $ModuleλShape = $.typeutil.flatten<$Object_e96560e8533a11ecaf96dbe70488c8d1λShape & $AnnotationSubjectλShape & {
}>;
type $Module = $.ObjectType<"schema::Module", $ModuleλShape, null>;
const $Module = $.makeType<$Module>(_.spec, "e9de7c62-533a-11ec-98f7-01c6a397f7af", _.syntax.literal);

const Module: $.$expr_PathNode<$.TypeSet<$Module, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Module, $.Cardinality.Many), null, true);

export type $ObjectTypeλShape = $.typeutil.flatten<$InheritingObjectλShape & $ConsistencySubjectλShape & $AnnotationSubjectλShape & $TypeλShape & $SourceλShape & {
  "union_of": $.LinkDesc<$ObjectType, $.Cardinality.Many, {}, false, true>;
  "intersection_of": $.LinkDesc<$ObjectType, $.Cardinality.Many, {}, false, true>;
  "compound_type": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false>;
  "is_compound_type": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false>;
  "links": $.LinkDesc<$Link, $.Cardinality.Many, {
    "@is_owned": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne>;
    "@owned": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne>;
  }, false, false>;
  "properties": $.LinkDesc<$Property, $.Cardinality.Many, {
    "@is_owned": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne>;
    "@owned": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne>;
  }, false, false>;
  "<union_of[IS schema::ObjectType]": $.LinkDesc<$ObjectType, $.Cardinality.Many, {}, false, false>;
  "<intersection_of[IS schema::ObjectType]": $.LinkDesc<$ObjectType, $.Cardinality.Many, {}, false, false>;
  "<target[IS schema::Link]": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, false>;
  "<intersection_of": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
  "<target": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
  "<union_of": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $ObjectType = $.ObjectType<"schema::ObjectType", $ObjectTypeλShape, null>;
const $ObjectType = $.makeType<$ObjectType>(_.spec, "ecf4d720-533a-11ec-a95d-cb02ef3dc1f0", _.syntax.literal);

const ObjectType: $.$expr_PathNode<$.TypeSet<$ObjectType, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($ObjectType, $.Cardinality.Many), null, true);

export type $OperatorλShape = $.typeutil.flatten<$CallableObjectλShape & $VolatilitySubjectλShape & {
  "operator_kind": $.PropertyDesc<$OperatorKind, $.Cardinality.AtMostOne, false, true>;
  "abstract": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, true>;
  "is_abstract": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, false>;
}>;
type $Operator = $.ObjectType<"schema::Operator", $OperatorλShape, null>;
const $Operator = $.makeType<$Operator>(_.spec, "ee8c5b08-533a-11ec-bd2a-6de4b933ce5b", _.syntax.literal);

const Operator: $.$expr_PathNode<$.TypeSet<$Operator, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Operator, $.Cardinality.Many), null, true);

export type $ParameterλShape = $.typeutil.flatten<$Object_e96560e8533a11ecaf96dbe70488c8d1λShape & {
  "type": $.LinkDesc<$Type, $.Cardinality.One, {}, false, true>;
  "typemod": $.PropertyDesc<$TypeModifier, $.Cardinality.One, false, true>;
  "kind": $.PropertyDesc<$ParameterKind, $.Cardinality.One, false, true>;
  "num": $.PropertyDesc<_std.$int64, $.Cardinality.One, false, true>;
  "default": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "<params[IS schema::CallableObject]": $.LinkDesc<$CallableObject, $.Cardinality.Many, {}, false, false>;
  "<params[IS schema::Operator]": $.LinkDesc<$Operator, $.Cardinality.Many, {}, false, false>;
  "<params[IS schema::Function]": $.LinkDesc<$Function, $.Cardinality.Many, {}, false, false>;
  "<params[IS schema::Constraint]": $.LinkDesc<$Constraint, $.Cardinality.Many, {}, false, false>;
  "<params": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Parameter = $.ObjectType<"schema::Parameter", $ParameterλShape, null>;
const $Parameter = $.makeType<$Parameter>(_.spec, "eafc8864-533a-11ec-8296-8d5faba2086b", _.syntax.literal);

const Parameter: $.$expr_PathNode<$.TypeSet<$Parameter, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Parameter, $.Cardinality.Many), null, true);

export type $PropertyλShape = $.typeutil.flatten<$PointerλShape & {
  "<properties[IS schema::Link]": $.LinkDesc<$Link, $.Cardinality.Many, {}, false, false>;
  "<properties[IS schema::ObjectType]": $.LinkDesc<$ObjectType, $.Cardinality.Many, {}, false, false>;
  "<properties": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $Property = $.ObjectType<"schema::Property", $PropertyλShape, null>;
const $Property = $.makeType<$Property>(_.spec, "edc3f208-533a-11ec-ad7a-c91a7acd3b45", _.syntax.literal);

const Property: $.$expr_PathNode<$.TypeSet<$Property, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Property, $.Cardinality.Many), null, true);

export type $PseudoTypeλShape = $.typeutil.flatten<$InheritingObjectλShape & $TypeλShape & {
}>;
type $PseudoType = $.ObjectType<"schema::PseudoType", $PseudoTypeλShape, null>;
const $PseudoType = $.makeType<$PseudoType>(_.spec, "e99a0352-533a-11ec-9004-a90c7bb5ee04", _.syntax.literal);

const PseudoType: $.$expr_PathNode<$.TypeSet<$PseudoType, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($PseudoType, $.Cardinality.Many), null, true);

export type $ScalarTypeλShape = $.typeutil.flatten<$InheritingObjectλShape & $ConsistencySubjectλShape & $AnnotationSubjectλShape & $PrimitiveTypeλShape & {
  "default": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "enum_values": $.PropertyDesc<$.ArrayType<_std.$str>, $.Cardinality.AtMostOne, false, true>;
}>;
type $ScalarType = $.ObjectType<"schema::ScalarType", $ScalarTypeλShape, null>;
const $ScalarType = $.makeType<$ScalarType>(_.spec, "ec7063e6-533a-11ec-92d7-e783585da7cb", _.syntax.literal);

const ScalarType: $.$expr_PathNode<$.TypeSet<$ScalarType, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($ScalarType, $.Cardinality.Many), null, true);

export type $TupleλShape = $.typeutil.flatten<$CollectionTypeλShape & {
  "element_types": $.LinkDesc<$TupleElement, $.Cardinality.Many, {
    "@index": $.PropertyDesc<_std.$int64, $.Cardinality.AtMostOne>;
  }, true, true>;
}>;
type $Tuple = $.ObjectType<"schema::Tuple", $TupleλShape, null>;
const $Tuple = $.makeType<$Tuple>(_.spec, "ea64d9ec-533a-11ec-9cc9-1fe747f3f268", _.syntax.literal);

const Tuple: $.$expr_PathNode<$.TypeSet<$Tuple, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Tuple, $.Cardinality.Many), null, true);

export type $TupleElementλShape = $.typeutil.flatten<_std.$BaseObjectλShape & {
  "type": $.LinkDesc<$Type, $.Cardinality.One, {}, false, true>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, true>;
  "<element_types[IS schema::Tuple]": $.LinkDesc<$Tuple, $.Cardinality.AtMostOne, {}, false, false>;
  "<element_types": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false>;
}>;
type $TupleElement = $.ObjectType<"schema::TupleElement", $TupleElementλShape, null>;
const $TupleElement = $.makeType<$TupleElement>(_.spec, "ea54019e-533a-11ec-9906-35a9b173c9bc", _.syntax.literal);

const TupleElement: $.$expr_PathNode<$.TypeSet<$TupleElement, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($TupleElement, $.Cardinality.Many), null, true);



export { $CardinalityλEnum, Cardinality, $OperatorKindλEnum, OperatorKind, $ParameterKindλEnum, ParameterKind, $TargetDeleteActionλEnum, TargetDeleteAction, $TypeModifierλEnum, TypeModifier, $VolatilityλEnum, Volatility, $Object_e96560e8533a11ecaf96dbe70488c8d1, Object_e96560e8533a11ecaf96dbe70488c8d1, $AnnotationSubject, AnnotationSubject, $Alias, Alias, $SubclassableObject, SubclassableObject, $InheritingObject, InheritingObject, $Annotation, Annotation, $Type, Type, $PrimitiveType, PrimitiveType, $CollectionType, CollectionType, $Array, Array, $CallableObject, CallableObject, $VolatilitySubject, VolatilitySubject, $Cast, Cast, $ConsistencySubject, ConsistencySubject, $Constraint, Constraint, $Delta, Delta, $Extension, Extension, $Function, Function, $Index, Index, $Pointer, Pointer, $Source, Source, $Link, Link, $Migration, Migration, $Module, Module, $ObjectType, ObjectType, $Operator, Operator, $Parameter, Parameter, $Property, Property, $PseudoType, PseudoType, $ScalarType, ScalarType, $Tuple, Tuple, $TupleElement, TupleElement };

type __defaultExports = {
  "Cardinality": typeof Cardinality;
  "OperatorKind": typeof OperatorKind;
  "ParameterKind": typeof ParameterKind;
  "TargetDeleteAction": typeof TargetDeleteAction;
  "TypeModifier": typeof TypeModifier;
  "Volatility": typeof Volatility;
  "$Object": typeof $Object_e96560e8533a11ecaf96dbe70488c8d1;
  "Object": typeof Object_e96560e8533a11ecaf96dbe70488c8d1;
  "$AnnotationSubject": typeof $AnnotationSubject;
  "AnnotationSubject": typeof AnnotationSubject;
  "$Alias": typeof $Alias;
  "Alias": typeof Alias;
  "$SubclassableObject": typeof $SubclassableObject;
  "SubclassableObject": typeof SubclassableObject;
  "$InheritingObject": typeof $InheritingObject;
  "InheritingObject": typeof InheritingObject;
  "$Annotation": typeof $Annotation;
  "Annotation": typeof Annotation;
  "$Type": typeof $Type;
  "Type": typeof Type;
  "$PrimitiveType": typeof $PrimitiveType;
  "PrimitiveType": typeof PrimitiveType;
  "$CollectionType": typeof $CollectionType;
  "CollectionType": typeof CollectionType;
  "$Array": typeof $Array;
  "Array": typeof Array;
  "$CallableObject": typeof $CallableObject;
  "CallableObject": typeof CallableObject;
  "$VolatilitySubject": typeof $VolatilitySubject;
  "VolatilitySubject": typeof VolatilitySubject;
  "$Cast": typeof $Cast;
  "Cast": typeof Cast;
  "$ConsistencySubject": typeof $ConsistencySubject;
  "ConsistencySubject": typeof ConsistencySubject;
  "$Constraint": typeof $Constraint;
  "Constraint": typeof Constraint;
  "$Delta": typeof $Delta;
  "Delta": typeof Delta;
  "$Extension": typeof $Extension;
  "Extension": typeof Extension;
  "$Function": typeof $Function;
  "Function": typeof Function;
  "$Index": typeof $Index;
  "Index": typeof Index;
  "$Pointer": typeof $Pointer;
  "Pointer": typeof Pointer;
  "$Source": typeof $Source;
  "Source": typeof Source;
  "$Link": typeof $Link;
  "Link": typeof Link;
  "$Migration": typeof $Migration;
  "Migration": typeof Migration;
  "$Module": typeof $Module;
  "Module": typeof Module;
  "$ObjectType": typeof $ObjectType;
  "ObjectType": typeof ObjectType;
  "$Operator": typeof $Operator;
  "Operator": typeof Operator;
  "$Parameter": typeof $Parameter;
  "Parameter": typeof Parameter;
  "$Property": typeof $Property;
  "Property": typeof Property;
  "$PseudoType": typeof $PseudoType;
  "PseudoType": typeof PseudoType;
  "$ScalarType": typeof $ScalarType;
  "ScalarType": typeof ScalarType;
  "$Tuple": typeof $Tuple;
  "Tuple": typeof Tuple;
  "$TupleElement": typeof $TupleElement;
  "TupleElement": typeof TupleElement
};
const __defaultExports: __defaultExports = {
  "Cardinality": Cardinality,
  "OperatorKind": OperatorKind,
  "ParameterKind": ParameterKind,
  "TargetDeleteAction": TargetDeleteAction,
  "TypeModifier": TypeModifier,
  "Volatility": Volatility,
  "$Object": $Object_e96560e8533a11ecaf96dbe70488c8d1,
  "Object": Object_e96560e8533a11ecaf96dbe70488c8d1,
  "$AnnotationSubject": $AnnotationSubject,
  "AnnotationSubject": AnnotationSubject,
  "$Alias": $Alias,
  "Alias": Alias,
  "$SubclassableObject": $SubclassableObject,
  "SubclassableObject": SubclassableObject,
  "$InheritingObject": $InheritingObject,
  "InheritingObject": InheritingObject,
  "$Annotation": $Annotation,
  "Annotation": Annotation,
  "$Type": $Type,
  "Type": Type,
  "$PrimitiveType": $PrimitiveType,
  "PrimitiveType": PrimitiveType,
  "$CollectionType": $CollectionType,
  "CollectionType": CollectionType,
  "$Array": $Array,
  "Array": Array,
  "$CallableObject": $CallableObject,
  "CallableObject": CallableObject,
  "$VolatilitySubject": $VolatilitySubject,
  "VolatilitySubject": VolatilitySubject,
  "$Cast": $Cast,
  "Cast": Cast,
  "$ConsistencySubject": $ConsistencySubject,
  "ConsistencySubject": ConsistencySubject,
  "$Constraint": $Constraint,
  "Constraint": Constraint,
  "$Delta": $Delta,
  "Delta": Delta,
  "$Extension": $Extension,
  "Extension": Extension,
  "$Function": $Function,
  "Function": Function,
  "$Index": $Index,
  "Index": Index,
  "$Pointer": $Pointer,
  "Pointer": Pointer,
  "$Source": $Source,
  "Source": Source,
  "$Link": $Link,
  "Link": Link,
  "$Migration": $Migration,
  "Migration": Migration,
  "$Module": $Module,
  "Module": Module,
  "$ObjectType": $ObjectType,
  "ObjectType": ObjectType,
  "$Operator": $Operator,
  "Operator": Operator,
  "$Parameter": $Parameter,
  "Parameter": Parameter,
  "$Property": $Property,
  "Property": Property,
  "$PseudoType": $PseudoType,
  "PseudoType": PseudoType,
  "$ScalarType": $ScalarType,
  "ScalarType": ScalarType,
  "$Tuple": $Tuple,
  "Tuple": Tuple,
  "$TupleElement": $TupleElement,
  "TupleElement": TupleElement
};
export default __defaultExports;
