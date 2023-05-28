import { __assign } from "tslib";
import React, { useEffect } from 'react';
var FaceLogin = function (_a) {
    var appId = _a.appId, buttonStyles = _a.buttonStyles, _b = _a.buttonText, buttonText = _b === void 0 ? 'Face Guardian' : _b;
    var currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    var handleButtonClick = function () {
        if (typeof window !== 'undefined') {
            window.location.href = "https://www.face-guardian.com/login?appId=".concat(appId, "&redirectUrl=").concat(currentUrl);
        }
    };
    useEffect(function () {
        if (typeof window !== 'undefined') {
            // Check for authorization code in URL
            var urlParams = new URLSearchParams(window.location.search);
            var authorizationCode = urlParams.get('authorizationCode');
            var redirectUrl_1 = urlParams.get('redirectUrl');
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
                    if (redirectUrl_1) {
                        window.location.href = redirectUrl_1;
                    }
                })["catch"](function (err) { return console.error(err); });
            }
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
    var combinedStyles = __assign(__assign({}, defaultStyles), buttonStyles);
    return (React.createElement("button", { onClick: handleButtonClick, style: combinedStyles }, buttonText));
};
export default FaceLogin;
//# sourceMappingURL=index.js.map