import { useState, useEffect } from 'react';
var useUserData = function () {
    var _a = useState(null), userData = _a[0], setUserData = _a[1];
    useEffect(function () {
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
                setUserData(data);
            })["catch"](function (err) { return console.error(err); });
        }
    }, []);
    return userData;
};
export default useUserData;
//# sourceMappingURL=index.js.map