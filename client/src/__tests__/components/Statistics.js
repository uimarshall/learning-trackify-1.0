import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Statistics from '../../components/Statistics';


describe('Statistics Component', () => {
  test('renders Statistics component without crashing', () => {
    const nonExist = 'No such text';
    render(<Provider store={store}><Router>
      <Statistics
      minutes = {jest.fn()}
      subjects = {jest.fn()}
      loadingSubjects = {jest.fn()}
      measurements = {jest.fn()}
      loadingMeasurements = {jest.fn()}
      
    /></Router></Provider>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});

