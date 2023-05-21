"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var FaceLogin = function (_a) {
    var appId = _a.appId, buttonStyles = _a.buttonStyles, _b = _a.buttonText, buttonText = _b === void 0 ? 'Face Guardian' : _b;
    var currentUrl = window.location.href;
    var handleButtonClick = function () {
        window.location.href = "https://www.face-guardian.com/login?appId=".concat(appId, "&redirectUrl=").concat(currentUrl);
    };
    (0, react_1.useEffect)(function () {
        // Check for authorization code in URL
        var urlParams = new URLSearchParams(window.location.search);
        var authorizationCode = urlParams.get('authorizationCode');
        var redirectUrl = urlParams.get('redirectUrl');
        if (authorizationCode) {
            // Call API with authorization code
            fetch('https://www.face-guardian.com/api/request-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ authorizationCode: authorizationCode })
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                // Save token in local storage
                localStorage.setItem('token', data.token);
                if (redirectUrl) {
                    window.location.href = redirectUrl;
                }
            })["catch"](function (err) { return console.error(err); });
        }
    }, []);
    var defaultStyles = {
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
        fontWeight: 600,
        cursor: 'pointer'
    };
    var combinedStyles = tslib_1.__assign(tslib_1.__assign({}, defaultStyles), buttonStyles);
    return (react_1["default"].createElement("button", { onClick: handleButtonClick, style: combinedStyles }, buttonText));
};
exports["default"] = FaceLogin;
//# sourceMappingURL=index.js.map