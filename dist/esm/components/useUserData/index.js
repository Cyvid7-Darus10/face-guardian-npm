import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
var useUserData = function () {
    var _a = useState(null), userData = _a[0], setUserData = _a[1];
    useEffect(function () {
        // Check if user data already exists in cookie
        var existingUserData = Cookies.get('userData');
        if (existingUserData) {
            setUserData(existingUserData);
            return;
        }
        // Get token from cookie
        var token = Cookies.get('token');
        // Fetch user data if token exists
        if (token) {
            fetch('/api/get-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                }
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                // Save user data to cookie and state
                Cookies.set('userData', JSON.stringify(data));
                setUserData(data);
            })["catch"](function (err) { return console.error(err); });
        }
    }, []);
    return userData;
};
export default useUserData;
//# sourceMappingURL=index.js.map