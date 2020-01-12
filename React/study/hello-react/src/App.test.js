import React from 'react';
import { render } from '@testing-library/react';
import App1 from './App1';

test('renders learn react link', () => {
  const { getByText } = render(<App1 />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
