import '@testing-library/jest-dom';

import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'
import MyCourse from '../../components/MyCourse';

jest.mock('../../components/MyCourse', () => () => <div id="MyCourse">MyCourse</div>);
describe('MyCourse Component', () => {
  test('renders MyCourse in the DOM', () => {
    const { container } = render(<MyCourse />);
    const mockComponent = container.querySelector('div#MyCourse');

    expect(mockComponent).toBeInTheDocument();
    expect(mockComponent).not.toHaveTextContent(/^arbitrary$/); // to match the whole content
    expect(mockComponent).not.toHaveTextContent(/fire$/i); // to use case-insensitive match
    expect(mockComponent).toHaveTextContent('MyCourse');
  });
});

describe('MyCourse Component', () => {
  afterEach(cleanup);

  it('should take a snapshot for MyCourse Component', () => {
    const asFragment = renderer.create(<MyCourse />).toJSON()
    expect(asFragment).toMatchSnapshot();
  });
});