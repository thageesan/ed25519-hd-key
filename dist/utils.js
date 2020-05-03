"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathRegex = new RegExp("^44'(\\/[0-9]+')+$");
exports.replaceDerive = (val) => val.replace("'", '');
