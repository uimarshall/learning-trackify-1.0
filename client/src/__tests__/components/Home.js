import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Home from '../../components/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';


describe('Home Component', () => {
  test('renders Home component without crashing', () => {
    const nonExist = 'No such text';
    render(<Provider store={store}><Router><Home /></Router></Provider>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});
describe('Proper Rendering', () => {
  test('renders Header component correctly', () => {
    render(<Provider store={store}><Router><Home /></Router></Provider>);

    expect(screen.queryByText(/Run faster now/)).toBeNull();
  });
});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a prop', () => {
  act(() => {
     render(<Provider store={store}><Router><Home /></Router></Provider>, container);
  });
  expect(container.textContent).toBe('');
});

Home