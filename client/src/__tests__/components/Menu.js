import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from '../../components/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';


describe('Menu Component', () => {
  test('renders Menu component without crashing', () => {
    const nonExist = 'No such text';
    render(<Provider store={store}><Router>
      <Menu
      isLogged ={jest.fn()}
      logout ={jest.fn()}
      
    /></Router></Provider>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});
Menu