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
  const isClient = typeof window !== 'undefined';
  const currentUrl = isClient ? window.location.href : '';

  const handleButtonClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `https://www.face-guardian.vercel.app/login?appId=${appId}&redirectUrl=${currentUrl}`;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for authorization code in URL
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get('authorizationCode');
      const redirectUrl = urlParams.get('redirectUrl');

      if (authorizationCode) {
        // Call API with authorization code
        fetch('https://www.face-guardian.vercel.app/api/request-token', {
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
    }
  }, []);

  const defaultStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#9fdbfd',
    borderRadius: '5px',
    padding: '10px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    width: '100%',
    gap: '2px',
    border: 'none',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
    outline: 'none',
  };

  const combinedStyles = { ...defaultStyles, ...buttonStyles };

  return (
    <button
      onClick={handleButtonClick}
      style={combinedStyles}
      disabled={!appId}
    >
      {isClient && (
        <img
          src="https://i.ibb.co/sthHtZP/fg-logo.webp"
          alt="Face Guardian Logo"
          style={{ marginRight: '10px', height: '24px', width: '24px' }}
        />
      )}
      {buttonText}
    </button>
  );
};

export default FaceLogin;
