import React from 'react';
import ReactDOM from 'react-dom/client';
import FaceLogin from 'face-guardian';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <h2>Face Guardian</h2>
      <FaceLogin appId="6d30891b-50de-401e-8dc2-b5af36a24b94" />
    </div>
  </React.StrictMode>
);
