import React, { useState, useEffect } from 'react';

const FaceLogin: React.FC<{ appId: string; clientSecret: string }> = ({
  appId,
  clientSecret,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await fetch(
          'https://face-guardian.com/api/authenticate',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ appId, clientSecret }),
          }
        );

        if (response.status) {
          setIsAuthenticated(true);
        } else {
          console.error('Authentication failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    authenticate();
  }, [appId, clientSecret]);

  const handleButtonClick = () => {
    if (isAuthenticated) {
      window.location.href = 'https://www.face-guardian.com/authenticate';
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      style={{
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
        cursor: isAuthenticated ? 'pointer' : 'not-allowed',
        opacity: isAuthenticated ? 1 : 0.5,
      }}
      disabled={!isAuthenticated}
    >
      Face Guardian
    </button>
  );
};

export default FaceLogin;
