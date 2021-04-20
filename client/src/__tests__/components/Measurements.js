import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Measurements from '../../components/Measurements';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';


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