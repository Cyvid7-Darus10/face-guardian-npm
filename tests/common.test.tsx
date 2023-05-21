import * as React from 'react';
import { render } from '@testing-library/react';
import { FaceLogin } from '../src';

const TestComponent = () => {
  return (
    <div>
      <FaceLogin
        appId="6ba4b716-dcb0-4493-8e02-c405071c80aa"
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
