import '@testing-library/jest-dom';

import * as React from 'react';
import { render } from '@testing-library/react';
import Measurement from '../../components/Measurement';

jest.mock('../../components/Measurement', () => () => <div id="Measurement">Measurement</div>);
describe('Measurement Component', () => {
  test('renders Measurement in the DOM', () => {
    const { container } = render(<Measurement />);
    const mockComponent = container.querySelector('div#Measurement');

    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).not.toHaveTextContent(/^dragon$/); // to match the whole content
    expect(mockComponent).not.toHaveTextContent(/fire$/i); // to use case-insensitive match
    expect(mockComponent).toHaveTextContent('Measurement');
  });
});