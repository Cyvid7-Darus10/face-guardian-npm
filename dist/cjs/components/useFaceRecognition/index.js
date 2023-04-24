"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_webcam_1 = tslib_1.__importDefault(require("react-webcam"));
var useFaceFunction_1 = tslib_1.__importDefault(require("./useFaceFunction"));
var useFaceRecognition = function () {
    var _a = (0, useFaceFunction_1["default"])(), videoConstraints = _a.videoConstraints, webcamRef = _a.webcamRef, imageURL = _a.imageURL, setImageURL = _a.setImageURL, message = _a.message, user = _a.user, capture = _a.capture;
    var FaceLogin = function () {
        return (react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center gap-5 w-[400px] h-[400px] bg-[#ddf3ff] p-2 shadow z-50" },
            !imageURL && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(react_webcam_1["default"], { audio: false, height: 480, ref: webcamRef, screenshotFormat: "image/jpeg", width: 480, videoConstraints: videoConstraints, mirrored: true }),
                react_1["default"].createElement("img", { src: "../../assets/face-guide.png", width: 480, height: 480, alt: "face-guide", className: "z-50 w-[300px] h-[300px] absolute opacity-60" }))),
            imageURL && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("img", { src: imageURL, width: 480, height: 480, alt: "face-guide", className: "z-50 w-[400px] h-[400px] absolute border-4 border-[#5f9cbf] rounded-md" }),
                react_1["default"].createElement("button", { onClick: function () {
                        setImageURL(null);
                        capture();
                    }, className: "bg-[#5f9cbf] text-white rounded-full hover:bg-[#ddf3ff] hover:text-[#5f9cbf] m-auto z-50 p-4 border" },
                    react_1["default"].createElement("img", { src: "https://svgshare.com/i/sTV.svg", alt: "refresh", width: 20, height: 20 }))))));
    };
    return {
        FaceLogin: FaceLogin,
        message: message,
        user: user
    };
};
exports["default"] = useFaceRecognition;
//# sourceMappingURL=index.js.map