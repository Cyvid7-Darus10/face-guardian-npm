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
import React from 'react'
import ReactDOM from 'react-dom/client'
import { FaceLogin } from 'face-guardian'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Face Guardian</h2>
            <FaceLogin />
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/face-guardian
[npm-image]: https://img.shields.io/npm/v/face-guardian
[github-license]: https://img.shields.io/github/license/Cyvid7-Darus10/face-guardian-npm
[github-license-url]: https://github.com/Cyvid7-Darus10/face-guardian-npm/blob/main/LICENSE
[github-build]: https://github.com/Cyvid7-Darus10/face-guardian-npm/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/Cyvid7-Darus10/face-guardian-npm/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/face-guardian
