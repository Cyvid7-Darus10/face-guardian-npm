'use strict';
exports.__esModule = true;
var react_1 = require('react');
var useUserData = function () {
  var _a = (0, react_1.useState)(null),
    userData = _a[0],
    setUserData = _a[1];
  (0, react_1.useEffect)(function () {
    // Get token from local storage
    var token = localStorage.getItem('token');
    // Fetch user data if token exists
    if (token) {
      fetch('https://www.face-guardian.vercel.app/api/get-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer '.concat(token),
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setUserData(data);
        })
        ['catch'](function (err) {
          return console.error(err);
        });
    }
  }, []);
  return userData;
};
exports['default'] = useUserData;
//# sourceMappingURL=index.js.map
