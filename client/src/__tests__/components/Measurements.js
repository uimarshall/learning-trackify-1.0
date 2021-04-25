import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Measurements from '../../components/Measurements';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Measurement from '../../components/Measurement';


describe('Measurements Component', () => {
  test('renders Measurements component without crashing', () => {
    const nonExist = 'No such text';
    render(<Provider store={store}><Router>
      <Measurements
      measurement = {jest.fn()}
      fetchMeasurements = {jest.fn()}
      
    /></Router></Provider>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});

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