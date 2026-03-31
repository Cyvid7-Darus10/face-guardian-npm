"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var FaceLogin_1 = require("../FaceLogin");
var useUserData = function () {
    var _a = (0, react_1.useState)(null), userData = _a[0], setUserData = _a[1];
    var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
    (0, react_1.useEffect)(function () {
        var token = localStorage.getItem(FaceLogin_1.STORAGE_KEY);
        if (token) {
            fetch('https://www.face-guardian.vercel.app/api/get-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer ".concat(token),
                },
            })
                .then(function (response) {
                if (!response.ok) {
                    throw new Error("Failed to fetch user data: ".concat(response.status));
                }
                return response.json();
            })
                .then(function (data) {
                setUserData(data);
            })
                .catch(function (err) {
                setError(err instanceof Error ? err : new Error(String(err)));
            });
        }
    }, []);
    return { userData: userData, error: error };
};
exports.default = useUserData;
//# sourceMappingURL=index.js.map