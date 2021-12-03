export * from "./castMaps";
export * from "./syntax/syntax";
import { $ } from "edgedb";
import * as $syntax from "./syntax/syntax";
import _std from "./modules/std";
import _cal from "./modules/cal";
import _cfg from "./modules/cfg";
import _schema from "./modules/schema";
import _sys from "./modules/sys";
import _default from "./modules/default";
import _math from "./modules/math";
const ExportDefault: typeof _std & 
  typeof _default & 
  $.util.OmitDollarPrefixed<typeof $syntax> & {
  "std": typeof _std;
  "cal": typeof _cal;
  "cfg": typeof _cfg;
  "schema": typeof _schema;
  "sys": typeof _sys;
  "default": typeof _default;
  "math": typeof _math;
} = {
  ..._std,
  ..._default,
  ...$.util.omitDollarPrefixed($syntax),
  "std": _std,
  "cal": _cal,
  "cfg": _cfg,
  "schema": _schema,
  "sys": _sys,
  "default": _default,
  "math": _math,
};


export default ExportDefault;
