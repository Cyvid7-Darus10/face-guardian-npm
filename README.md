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
import { FaceLogin, useUserData } from 'face-guardian';

const App = () => {
  const userData = useUserData();

  return (
    <React.StrictMode>
      <FaceLogin
        appId="your-app-id"
        buttonStyles={{ background: 'red', fontSize: '20px' }}
        buttonText="Custom Button Text"
      />
      {userData && <div>Welcome, {userData.name}!</div>}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
```

## Contributing

We welcome contributions to the Face Guardian package! Please refer to our [Contributing Guidelines](https://github.com/Cyvid7-Darus10/face-guardian-npm/blob/main/CONTRIBUTING.md) for detailed information on how you can contribute.

## Support

If you're having trouble with the package, please open an issue on the [GitHub repository](https://github.com/Cyvid7-Darus10/face-guardian-npm/issues). We'll do our best to help you out.

## License

The Face Guardian package is open source software [licensed as MIT](https://github.com/Cyvid7-Darus10/face-guardian-npm/blob/main/LICENSE).

[npm-url]: https://www.npmjs.com/package/face-guardian
[npm-image]: https://img.shields.io/npm/v/face-guardian
[github-license]: https://img.shields.io/github/license/Cyvid7-Darus10/face-guardian-npm
[github-license-url]: https://github.com/Cyvid7-Darus10/face-guardian-npm/blob/main/LICENSE
[github-build]: https://github.com/Cyvid7-Darus10/face-guardian-npm/actions/workflows/npm-publish.yml/badge.svg
[github-build-url]: https://github.com/Cyvid7-Darus10/face-guardian-npm/actions/workflows/npm-publish.yml
[npm-typescript]: https://img.shields.io/npm/types/face-guardian
