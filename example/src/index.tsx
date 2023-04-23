import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaceLogin } from 'face-guardian';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <h2>Face Guardian</h2>
      <FaceLogin />
    </div>
    <hr />
    <div>
      <FaceLogin />
    </div>
  </React.StrictMode>
);
