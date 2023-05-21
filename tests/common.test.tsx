// tests/useFaceRecognition.test.js
import * as React from 'react';
import { render } from '@testing-library/react';
import FaceLogin from '../src';

const TestComponent = () => {
  return (
    <div>
      <FaceLogin appId="6d30891b-50de-401e-8dc2-b5af36a24b94" />
    </div>
  );
};

describe('Common render', () => {
  it('renders FaceLogin component and user, message', () => {
    render(<TestComponent />);
  });
});
