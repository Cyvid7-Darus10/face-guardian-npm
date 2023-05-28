import * as React from 'react';
import { render } from '@testing-library/react';
import { FaceLogin } from '../src';

const TestComponent = () => {
  return (
    <div>
      <FaceLogin
        appId="c6574956-1a75-46a1-94be-aeebe5716458"
        buttonText="Test Login"
        buttonStyles={{ color: 'red' }}
      />
    </div>
  );
};

describe('Common render', () => {
  it('renders FaceLogin component with correct button text and style', () => {
    const { getByText } = render(<TestComponent />);
    const button = getByText('Test Login');
    expect(button).toBeDefined();
    expect(button.style.color).toBe('red');
  });
});
