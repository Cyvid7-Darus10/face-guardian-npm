import React, { ReactComponentElement } from 'react';
import Webcam from 'react-webcam';
import useFaceFunction from './useFaceFunction';

const useFaceRecognition = () => {
  const {
    videoConstraints,
    webcamRef,
    imageURL,
    setImageURL,
    message,
    user,
    capture,
  } = useFaceFunction();

  const FaceLogin: React.FC = (): ReactComponentElement<'div'> => {
    return (
      <div className="flex flex-col items-center justify-center gap-5 w-[400px] h-[400px] bg-[#ddf3ff] p-2 shadow z-50">
        {!imageURL && (
          <>
            <Webcam
              audio={false}
              height={480}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={480}
              videoConstraints={videoConstraints}
              mirrored={true}
            />
            <img
              src="../../assets/face-guide.png"
              width={480}
              height={480}
              alt="face-guide"
              className="z-50 w-[300px] h-[300px] absolute opacity-60"
            />
          </>
        )}
        {imageURL && (
          <>
            <img
              src={imageURL}
              width={480}
              height={480}
              alt="face-guide"
              className="z-50 w-[400px] h-[400px] absolute border-4 border-[#5f9cbf] rounded-md"
            />
            <button
              onClick={() => {
                setImageURL(null);
                capture();
              }}
              className="bg-[#5f9cbf] text-white rounded-full hover:bg-[#ddf3ff] hover:text-[#5f9cbf] m-auto z-50 p-4 border"
            >
              <img
                src="https://svgshare.com/i/sTV.svg"
                alt="refresh"
                width={20}
                height={20}
              />
            </button>
          </>
        )}
      </div>
    );
  };

  return {
    FaceLogin,
    message,
    user,
  };
};

export default useFaceRecognition;
