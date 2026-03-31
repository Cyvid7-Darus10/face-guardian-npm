"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORAGE_KEY = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var STORAGE_KEY = 'face-guardian:token';
exports.STORAGE_KEY = STORAGE_KEY;
var isSameOrigin = function (url) {
    try {
        var parsed = new URL(url);
        return parsed.origin === window.location.origin;
    }
    catch (_a) {
        return false;
    }
};
var FaceLogin = function (_a) {
    var appId = _a.appId, buttonStyles = _a.buttonStyles, _b = _a.buttonText, buttonText = _b === void 0 ? 'Face Guardian' : _b, onError = _a.onError;
    var isClient = typeof window !== 'undefined';
    var currentUrl = isClient ? window.location.href : '';
    var handleButtonClick = function () {
        if (typeof window !== 'undefined') {
            window.location.href = "https://www.face-guardian.vercel.app/login?appId=".concat(encodeURIComponent(appId), "&redirectUrl=").concat(encodeURIComponent(currentUrl));
        }
    };
    (0, react_1.useEffect)(function () {
        if (typeof window !== 'undefined') {
            var urlParams = new URLSearchParams(window.location.search);
            var authorizationCode = urlParams.get('authorizationCode');
            var redirectUrl_1 = urlParams.get('redirectUrl');
            if (authorizationCode) {
                // Clean auth code from URL to prevent leaking via history/Referer
                var cleanUrl = new URL(window.location.href);
                cleanUrl.searchParams.delete('authorizationCode');
                cleanUrl.searchParams.delete('redirectUrl');
                window.history.replaceState({}, document.title, cleanUrl.toString());
                fetch('https://www.face-guardian.vercel.app/api/request-token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ authorizationCode: authorizationCode }),
                })
                    .then(function (response) {
                    if (!response.ok) {
                        throw new Error("Token request failed: ".concat(response.status));
                    }
                    return response.json();
                })
                    .then(function (data) {
                    if (typeof data.token !== 'string' || data.token.length === 0) {
                        throw new Error('Invalid token received');
                    }
                    localStorage.setItem(STORAGE_KEY, data.token);
                    if (redirectUrl_1 && isSameOrigin(redirectUrl_1)) {
                        window.location.href = redirectUrl_1;
                    }
                })
                    .catch(function (err) {
                    if (onError) {
                        onError(err instanceof Error ? err : new Error(String(err)));
                    }
                });
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
        outline: 'none',
    };
    var combinedStyles = tslib_1.__assign(tslib_1.__assign({}, defaultStyles), buttonStyles);
    return (react_1.default.createElement("button", { onClick: handleButtonClick, style: combinedStyles, disabled: !appId },
        isClient && (react_1.default.createElement("img", { src: "https://i.ibb.co/sthHtZP/fg-logo.webp", alt: "Face Guardian Logo", style: { marginRight: '10px', height: '24px', width: '24px' } })),
        buttonText));
};
exports.default = FaceLogin;
//# sourceMappingURL=index.js.map