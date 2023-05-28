import { __assign } from "tslib";
import React, { useEffect } from 'react';
var FaceLogin = function (_a) {
    var appId = _a.appId, buttonStyles = _a.buttonStyles, _b = _a.buttonText, buttonText = _b === void 0 ? 'Face Guardian' : _b;
    var isClient = typeof window !== 'undefined';
    var currentUrl = isClient ? window.location.href : '';
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#9fdbfd',
        borderRadius: '5px',
        padding: '10px',
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: 600,
        cursor: 'pointer',
        width: '100%',
        gap: '2px',
        border: 'none',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        outline: 'none'
    };
    var combinedStyles = __assign(__assign({}, defaultStyles), buttonStyles);
    return (React.createElement("button", { onClick: handleButtonClick, style: combinedStyles, disabled: !appId },
        isClient && (React.createElement("img", { src: "https://i.ibb.co/sthHtZP/fg-logo.webp", alt: "Face Guardian Logo", style: { marginRight: '10px', height: '24px', width: '24px' } })),
        buttonText));
};
export default FaceLogin;
//# sourceMappingURL=index.js.map