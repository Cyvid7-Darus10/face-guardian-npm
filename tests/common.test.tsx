// tests/useFaceRecognition.test.js
import * as React from 'react';
import { render } from '@testing-library/react';
import { useFaceRecognition } from '../src';

const TestComponent = () => {
  const { FaceLogin, user, message } = useFaceRecognition();

  return (
    <div>
      <FaceLogin />
      <p>{user}</p>
      <p>{message}</p>
    </div>
  );
};

describe('Common render', () => {
  it('renders FaceLogin component and user, message', () => {
    render(<TestComponent />);
  });
});
