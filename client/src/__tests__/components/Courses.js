import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Courses from '../../components/Courses';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';


describe('Courses Component', () => {
  test('renders Courses component without crashing', () => {
    const nonExist = 'No such text';
    render(<Provider store={store}><Router>
      <Courses
      subjects = {jest.fn()}
      fetchMySubjects = {jest.fn()}
      fetchSubjects = {jest.fn()}
      registerSubject = {jest.fn()}
      handleClick ={jest.fn()}
      mySubjects = {jest.fn()}
      history = {jest.fn()}
      
    /></Router></Provider>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});



