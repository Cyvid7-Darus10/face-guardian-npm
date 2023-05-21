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
      <FaceLogin
        appId="6d30891b-50de-401e-8dc2-b5af36a24b94"
        clientSecret="U2FsdGVkX18yg0ug3i04CFKc5B7YnoozRd8lbroU2k3KNxNerIeajRpgYB0Q0p0/m3nwS6I8Yvc6CoKdYtYO099qk+iJMROvjaBPwArp8etwBfaLUuQc4Q7EaSzWrpHk1zFZla24F29tr4lUad1UMJN2WJ8B9v/7UBRs+GIynehCbSe6vvase+wAVrT7dWiQ4/O5B2mZ/75IbHgwDHeeK9IOyBcMspE/+q2Nqc9BtLhmvVDjZMkdsE66N6PhEqhzFGuHRt99Wk7vduYYYAOv/fNXdKOCG/izsAe25SYdBQE2o9Af/j4wQwXetpDzj/8gWMEmT+x6Dht64g9TJBFpdPrHwgnBM1cSN1tncirzRNGsNDS1XVOR5s4WbX0Pawvu"
      />
    </div>
  </React.StrictMode>
);
