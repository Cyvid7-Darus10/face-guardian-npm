import { __awaiter, __generator } from "tslib";
import { useEffect, useState, useRef } from 'react';
var videoConstraints = {
    width: 480,
    height: 480,
    facingMode: 'user'
};
var FaceFunction = function () {
    var webcamRef = useRef(null);
    var _a = useState(null), imageURL = _a[0], setImageURL = _a[1];
    var _b = useState(''), message = _b[0], setMessage = _b[1];
    var _c = useState(null), user = _c[0], setUser = _c[1];
    useEffect(function () {
        capture();
    }, []);
    var capture = function () { return __awaiter(void 0, void 0, void 0, function () {
        var isCameraReady, getScreenshot, screenShot, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isCameraReady = false;
                    getScreenshot = true;
                    _a.label = 1;
                case 1:
                    if (!getScreenshot) return [3 /*break*/, 3];
                    if (webcamRef === null || webcamRef === void 0 ? void 0 : webcamRef.current) {
                        if (!isCameraReady && webcamRef.current.video.readyState === 4) {
                            isCameraReady = true;
                            setMessage('Camera is ready, please smile');
                        }
                        screenShot = webcamRef.current.getScreenshot();
                        if (screenShot) {
                            result = {
                                isMultipleFace: false,
                                isFaceDetected: true,
                                user: {
                                    id: '1',
                                    name: 'John Doe',
                                    email: 'test@gmail.com',
                                    phone: '1234567890',
                                    image: 'https://i.imgur.com/1J8ZQYt.jpg'
                                },
                                token: 'ajsflasjdfladsjklfajsdl'
                            };
                            if (result.isMultipleFace) {
                                setMessage('Multiple faces detected');
                            }
                            else if (result === null || result === void 0 ? void 0 : result.user) {
                                setUser(result.user);
                                setImageURL(screenShot);
                                getScreenshot = false;
                            }
                            else {
                                setMessage('User is not registered');
                            }
                        }
                        else {
                            setMessage('Login Failed. Try Again.');
                        }
                    }
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 250); })];
                case 2:
                    _a.sent(); // wait for 100ms before trying again
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return {
        videoConstraints: videoConstraints,
        webcamRef: webcamRef,
        imageURL: imageURL,
        setImageURL: setImageURL,
        message: message,
        user: user,
        capture: capture
    };
};
export default FaceFunction;
//# sourceMappingURL=useFaceFunction.js.map