/**
 *
 * @fileoverview Reproduces a problem where a value that is only referenced in enum member
 * initializers would not be considered referenced as a value by TS, and thus wouldn't get an import
 * emitted for it.
 *
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.enum_ref_import.enum_ref_import');
var module = module || { id: 'test_files/enum_ref_import/enum_ref_import.ts' };
module = module;
exports = {};
const exporter_1 = goog.require("test_files.enum_ref_import.exporter");
const tsickle_exporter_1 = goog.requireType("test_files.enum_ref_import.exporter");
/** @enum {string} */
const ValuesInInitializer = {
    ENUM_MEMBER: exporter_1.Enum.X,
};
exports.ValuesInInitializer = ValuesInInitializer;
