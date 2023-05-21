import { __awaiter, __generator } from "tslib";
import React, { useState, useEffect } from 'react';
var FaceLogin = function (_a) {
    var appId = _a.appId, clientSecret = _a.clientSecret;
    var _b = useState(false), isAuthenticated = _b[0], setIsAuthenticated = _b[1];
    useEffect(function () {
        var authenticate = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetch('https://face-guardian.com/api/authenticate', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ appId: appId, clientSecret: clientSecret })
                            })];
                    case 1:
                        response = _a.sent();
                        if (response.status) {
                            setIsAuthenticated(true);
                        }
                        else {
                            console.error('Authentication failed');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error:', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        authenticate();
    }, [appId, clientSecret]);
    var handleButtonClick = function () {
        if (isAuthenticated) {
            window.location.href = 'https://www.face-guardian.com/authenticate';
        }
    };
    return (React.createElement("button", { onClick: handleButtonClick, style: {
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
            cursor: isAuthenticated ? 'pointer' : 'not-allowed',
            opacity: isAuthenticated ? 1 : 0.5
        }, disabled: !isAuthenticated }, "Face Guardian"));
};
export default FaceLogin;
//# sourceMappingURL=index.js.map