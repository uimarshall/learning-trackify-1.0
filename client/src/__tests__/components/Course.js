import '@testing-library/jest-dom';

import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'
import Course from '../../components/Course';

jest.mock('../../components/Course', () => () => <div id="Course">Course</div>);
describe('Course Component', () => {
  test('renders Course in the DOM', () => {
    const { container } = render(<Course />);
    const mockComponent = container.querySelector('div#Course');

    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).not.toHaveTextContent(/^arbitrary$/); // to match the whole content
    expect(mockComponent).not.toHaveTextContent(/fire$/i); // to use case-insensitive match
    expect(mockComponent).toHaveTextContent('Course');
  });
});

describe('Course Component', () => {
  afterEach(cleanup);

  it('should take a snapshot for Course Component', () => {
    const asFragment = renderer.create(<Course />).toJSON()
    expect(asFragment).toMatchSnapshot();
  });
});