// import '@testing-library/jest-dom';

// import * as React from 'react';
// import { render, screen } from '@testing-library/react';
// // import { unmountComponentAtNode } from 'react-dom';
// // import { act } from 'react-dom/test-utils';
// import Course from '../../components/Course';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from '../../store';

// jest.mock('../../components/Course', () => {
//   return jest.fn(() => null)
// })
// const mySubjects = []
// let img1 = 'fat.png'
// let img2 = 'small.png'
// let image = [img1, img2].split('')
// let name ={}
// let id = {}

// describe('Measure Component', () => {
//   test('renders Measure component without crashing', () => {
//     const nonExist = 'No such text';
//     render(<Provider store={store}><Router>
//       <Course
//       handleClick ={jest.fn()}
//       mySubjects ={mySubjects}
    
//       image ={image}
//       // image ={jest.fn()}
//       subject ={name,id} 
//       // id ={jest.fn()}
      
//     /></Router></Provider>);

//     expect(screen.queryByText(nonExist)).toBeNull();
//   });
// });



// jest.mock('../../components/Course', () => 
//   (props) => <div data-test-id="fetchCourse" {...props} />);

// Course
// expect(getByTestId("FetchNextPageButton")).toHaveAttribute("path", "viewer.news");
// expect(getByTestId("FetchNextPageButton")).toHaveAttribute("path", "viewer.news");

// ... in your test
// expect(Course).toHaveBeenCalledWith(props, context)

// describe('Home Component', () => {
//   test('renders Home component without crashing', () => {
//     const nonExist = 'No such text';
//     render(<Provider store={store}><Router><Home /></Router></Provider>);

//     expect(screen.queryByText(nonExist)).toBeNull();
//   });
// });