import React, { CSSProperties, useEffect } from 'react';

type FaceLoginProps = {
  appId: string;
  buttonStyles?: CSSProperties;
  buttonText?: string;
};

const FaceLogin: React.FC<FaceLoginProps> = ({
  appId,
  buttonStyles,
  buttonText = 'Face Guardian',
}) => {
  const currentUrl = window.location.href;

  const handleButtonClick = () => {
    window.location.href = `https://www.face-guardian.com/login?appId=${appId}&redirectUrl=${currentUrl}`;
  };

  useEffect(() => {
    // Check for authorization code in URL
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('authorizationCode');
    const redirectUrl = urlParams.get('redirectUrl');

    if (authorizationCode) {
      // Call API with authorization code
      fetch('https://www.face-guardian.com/api/request-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ authorizationCode }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Save token in local storage
          localStorage.setItem('token', data.token);
          if (redirectUrl) {
            window.location.href = redirectUrl;
          }
        })
        .catch((err) => console.error(err));
    }
  }, []);

  const defaultStyles: CSSProperties = {
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
    fontWeight: 600,
    cursor: 'pointer',
  };

  const combinedStyles = { ...defaultStyles, ...buttonStyles };

  return (
    <button onClick={handleButtonClick} style={combinedStyles}>
      {buttonText}
    </button>
  );
};

export default FaceLogin;
