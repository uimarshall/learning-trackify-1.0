import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Measure from '../../components/Measure';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';


const handleClick = () => { ''; };
describe('Measure Component', () => {
  test('renders Measure component without crashing', () => {
    const nonExist = 'No such text';
    render(<Provider store={store}><Router><Measure /></Router></Provider>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});
describe('Proper Rendering', () => {
  test('renders Measure component correctly', () => {
    render(<Provider store={store}><Router><Measure onClick={handleClick} /></Router></Provider>);

    expect(screen.queryByText(/Run faster now/)).toBeNull();
  });
});