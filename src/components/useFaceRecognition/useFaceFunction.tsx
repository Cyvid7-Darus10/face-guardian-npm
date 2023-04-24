import { useEffect, useState, useRef } from 'react';

const videoConstraints = {
  width: 480,
  height: 480,
  facingMode: 'user',
};

const FaceFunction = () => {
  const webcamRef = useRef<any>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    capture();
  }, []);

  const capture = async () => {
    let isCameraReady = false;
    let getScreenshot = true;
    while (getScreenshot) {
      if (webcamRef?.current) {
        if (!isCameraReady && webcamRef.current.video.readyState === 4) {
          isCameraReady = true;
          setMessage('Camera is ready, please smile');
        }

        const screenShot = webcamRef.current.getScreenshot();
        if (screenShot) {
          // call api to detect face
          const result = {
            isMultipleFace: false,
            isFaceDetected: true,
            user: {
              id: '1',
              name: 'John Doe',
              email: 'test@gmail.com',
              phone: '1234567890',
              image: 'https://i.imgur.com/1J8ZQYt.jpg',
            },
            token: 'ajsflasjdfladsjklfajsdl',
          };
          if (result.isMultipleFace) {
            setMessage('Multiple faces detected');
          } else if (result?.user) {
            setUser(result.user);
            setImageURL(screenShot);
            getScreenshot = false;
          } else {
            setMessage('User is not registered');
          }
        } else {
          setMessage('Login Failed. Try Again.');
        }
      }
      await new Promise((resolve) => setTimeout(resolve, 250)); // wait for 100ms before trying again
    }
  };

  return {
    videoConstraints,
    webcamRef,
    imageURL,
    setImageURL,
    message,
    user,
    capture,
  };
};

export default FaceFunction;
