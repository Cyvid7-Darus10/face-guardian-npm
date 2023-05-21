import { useState, useEffect } from 'react';
var useUserData = function () {
    var _a = useState(null), userData = _a[0], setUserData = _a[1];
    useEffect(function () {
        // Check if user data already exists in local storage
        var existingUserData = localStorage.getItem('userData');
        if (existingUserData) {
            setUserData(JSON.parse(existingUserData));
            return;
        }
        // Get token from local storage
        var token = localStorage.getItem('token');
        // Fetch user data if token exists
        if (token) {
            fetch('https://www.face-guardian.com/api/get-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer ".concat(token)
                }
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                // Save user data to local storage and state
                localStorage.setItem('userData', JSON.stringify(data));
                setUserData(data);
            })["catch"](function (err) { return console.error(err); });
        }
    }, []);
    return userData;
};
export default useUserData;
//# sourceMappingURL=index.js.map