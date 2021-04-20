import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import MySubjects from '../../components/MyCourses';
import MySubject from '../../components/MyCourse';


describe('MySubjects Component', () => {
  test('renders MySubjects component without crashing', () => {
    const nonExist = 'No such text';
    render(<Provider store={store}><Router>
      <MySubjects
      subjects = {jest.fn()}
      fetchSubjects = {jest.fn()}
      date = {jest.fn()}
      measurements = {jest.fn()}
      fetchMeasurements = {jest.fn()}
      
    /></Router></Provider>);

    expect(screen.queryByText(nonExist)).toBeNull();
  });
});

jest.mock('../../components/MyCourse', () => () => <div id="MySubject">MySubject</div>);
describe('MySubject Component', () => {
  test('renders MySubject in the DOM', () => {
    const { container } = render(<MySubject />);
    const mockComponent = container.querySelector('div#MySubject');

    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).not.toHaveTextContent(/^dragon$/); // to match the whole content
    expect(mockComponent).not.toHaveTextContent(/fire$/i); // to use case-insensitive match
    expect(mockComponent).toHaveTextContent('MySubject');
  });
});