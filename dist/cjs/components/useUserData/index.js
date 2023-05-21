"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = require("react");
var js_cookie_1 = tslib_1.__importDefault(require("js-cookie"));
var useUserData = function () {
    var _a = (0, react_1.useState)(null), userData = _a[0], setUserData = _a[1];
    (0, react_1.useEffect)(function () {
        // Check if user data already exists in cookie
        var existingUserData = js_cookie_1["default"].get('userData');
        if (existingUserData) {
            setUserData(existingUserData);
            return;
        }
        // Get token from cookie
        var token = js_cookie_1["default"].get('token');
        // Fetch user data if token exists
        if (token) {
            fetch('/api/get-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer ".concat(token)
                }
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                // Save user data to cookie and state
                js_cookie_1["default"].set('userData', JSON.stringify(data));
                setUserData(data);
            })["catch"](function (err) { return console.error(err); });
        }
    }, []);
    return userData;
};
exports["default"] = useUserData;
//# sourceMappingURL=index.js.map