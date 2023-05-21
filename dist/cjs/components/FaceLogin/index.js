"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var FaceLogin = function (_a) {
    var appId = _a.appId;
    var handleButtonClick = function () {
        window.location.href = "https://www.face-guardian.com/login?appId=".concat(appId);
    };
    return (react_1["default"].createElement("button", { onClick: handleButtonClick, style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#9fdbfd',
            border: '1px solid #5f9cbf',
            borderRadius: '5px',
            padding: '10px',
            color: '#ddf3ff',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer'
        } }, "Face Guardian"));
};
exports["default"] = FaceLogin;
//# sourceMappingURL=index.js.map