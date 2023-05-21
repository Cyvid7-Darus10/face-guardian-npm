import React from 'react';
var FaceLogin = function (_a) {
    var appId = _a.appId;
    var handleButtonClick = function () {
        window.location.href = "https://www.face-guardian.com/login?appId=".concat(appId);
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
            cursor: 'pointer'
        } }, "Face Guardian"));
};
export default FaceLogin;
//# sourceMappingURL=index.js.map