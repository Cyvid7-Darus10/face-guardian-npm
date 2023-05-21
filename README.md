# Face Guardian Package

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

[**Live Demo**](https://cyvid7-darus10.github.io/face-guardian-npm/)

## Installation:

```bash
npm install face-guardian --save-dev
```

or

```bash
yarn add -D face-guardian
```

## Usage :

Add `FaceLogin` to your component:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import FaceLogin from 'face-guardian';

const App = () => {
  return (
    <React.StrictMode>
      <FaceLogin
        appId="6d30891b-50de-401e-8dc2-b5af36a24b94"
        clientSecret="U2FsdGVkX18yg0ug3i04CFKc5B7YnoozRd8lbroU2k3KNxNerIeajRpgYB0Q0p0/m3nwS6I8Yvc6CoKdYtYO099qk+iJMROvjaBPwArp8etwBfaLUuQc4Q7EaSzWrpHk1zFZla24F29tr4lUad1UMJN2WJ8B9v/7UBRs+GIynehCbSe6vvase+wAVrT7dWiQ4/O5B2mZ/75IbHgwDHeeK9IOyBcMspE/+q2Nqc9BtLhmvVDjZMkdsE66N6PhEqhzFGuHRt99Wk7vduYYYAOv/fNXdKOCG/izsAe25SYdBQE2o9Af/j4wQwXetpDzj/8gWMEmT+x6Dht64g9TJBFpdPrHwgnBM1cSN1tncirzRNGsNDS1XVOR5s4WbX0Pawvu"
      />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
```

[npm-url]: https://www.npmjs.com/package/face-guardian
[npm-image]: https://img.shields.io/npm/v/face-guardian
[github-license]: https://img.shields.io/github/license/Cyvid7-Darus10/face-guardian-npm
[github-license-url]: https://github.com/Cyvid7-Darus10/face-guardian-npm/blob/main/LICENSE
[github-build]: https://github.com/Cyvid7-Darus10/face-guardian-npm/actions/workflows/npm-publish.yml/badge.svg
[github-build-url]: https://github.com/Cyvid7-Darus10/face-guardian-npm/actions/workflows/npm-publish.yml
[npm-typescript]: https://img.shields.io/npm/types/face-guardian
