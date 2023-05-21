import React from 'react';
import ReactDOM from 'react-dom';
import { FaceLogin, useUserData } from 'face-guardian';

const App = () => {
  const userData = useUserData();

  return (
    <React.StrictMode>
      <div>
        <h2>Face Guardian</h2>
        <FaceLogin
          appId="6ba4b716-dcb0-4493-8e02-c405071c80aa"
          buttonStyles={{ background: 'blue', fontSize: '20px' }}
          buttonText="Login with Face Guardian"
        />
        {userData && (
          <div>
            <h2>User Data:</h2>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          </div>
        )}
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
