import React, { CSSProperties } from 'react';
type FaceLoginProps = {
    appId: string;
    buttonStyles?: CSSProperties;
    buttonText?: string;
    onError?: (error: Error) => void;
};
declare const STORAGE_KEY = "face-guardian:token";
declare const FaceLogin: React.FC<FaceLoginProps>;
export { STORAGE_KEY };
export default FaceLogin;
