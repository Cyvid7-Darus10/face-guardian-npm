"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = exports.STORAGE_KEY = exports.FaceLogin = void 0;
var tslib_1 = require("tslib");
var FaceLogin_1 = tslib_1.__importStar(require("./components/FaceLogin"));
exports.FaceLogin = FaceLogin_1.default;
Object.defineProperty(exports, "STORAGE_KEY", { enumerable: true, get: function () { return FaceLogin_1.STORAGE_KEY; } });
var useUserData_1 = tslib_1.__importDefault(require("./components/useUserData"));
exports.useUserData = useUserData_1.default;
//# sourceMappingURL=index.js.map