import React, { CSSProperties, useEffect } from 'react';

type FaceLoginProps = {
  appId: string;
  buttonStyles?: CSSProperties;
  buttonText?: string;
  onError?: (error: Error) => void;
};

const STORAGE_KEY = 'face-guardian:token';

const isSameOrigin = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return parsed.origin === window.location.origin;
  } catch {
    return false;
  }
};

const FaceLogin: React.FC<FaceLoginProps> = ({
  appId,
  buttonStyles,
  buttonText = 'Face Guardian',
  onError,
}) => {
  const isClient = typeof window !== 'undefined';
  const currentUrl = isClient ? window.location.href : '';

  const handleButtonClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `https://www.face-guardian.vercel.app/login?appId=${encodeURIComponent(appId)}&redirectUrl=${encodeURIComponent(currentUrl)}`;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get('authorizationCode');
      const redirectUrl = urlParams.get('redirectUrl');

      if (authorizationCode) {
        // Clean auth code from URL to prevent leaking via history/Referer
        const cleanUrl = new URL(window.location.href);
        cleanUrl.searchParams.delete('authorizationCode');
        cleanUrl.searchParams.delete('redirectUrl');
        window.history.replaceState({}, document.title, cleanUrl.toString());

        fetch('https://www.face-guardian.vercel.app/api/request-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ authorizationCode }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Token request failed: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            if (typeof data.token !== 'string' || data.token.length === 0) {
              throw new Error('Invalid token received');
            }
            localStorage.setItem(STORAGE_KEY, data.token);
            if (redirectUrl && isSameOrigin(redirectUrl)) {
              window.location.href = redirectUrl;
            }
          })
          .catch((err) => {
            if (onError) {
              onError(err instanceof Error ? err : new Error(String(err)));
            }
          });
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

export { STORAGE_KEY };
export default FaceLogin;
