/// <reference types="react" />
declare const FaceFunction: () => {
    videoConstraints: {
        width: number;
        height: number;
        facingMode: string;
    };
    webcamRef: import("react").MutableRefObject<any>;
    imageURL: string | null;
    setImageURL: import("react").Dispatch<import("react").SetStateAction<string | null>>;
    message: string;
    user: any;
    capture: () => Promise<void>;
};
export default FaceFunction;
