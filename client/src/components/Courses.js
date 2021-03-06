import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Subject from './Course';
import { subjectsThunk, subjectRegisterThunk, mySubjectsThunk } from '../reduxThunks/courses';
import '../assets/css/Courses.css';

function Subjects({
  subjects, mySubjects, fetchMySubjects,
  fetchSubjects, registerSubject, history,
}) {
  useEffect(() => {
    fetchSubjects();
    fetchMySubjects();
  }, []);

  function handleClick(subject) {
    registerSubject(subject).then(() => {
      history.push('/');
    });
  }

  const mySubjectsIds = mySubjects.map((x) => x.id);

  return (
    <div className="bg-gray full-screen course-wrapper">
      <div className="row">
        <div className="subjects-list col-sm-12 col-md-8 offset-md-2">
          {subjects.map((x) => (
            <Subject key={x.id} handleClick={handleClick} subject={x} mySubjects={mySubjectsIds} />
          ))}
        </div>
      </div>
    </div>
  );
}

Subjects.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  subjects: PropTypes.arrayOf(PropTypes.object).isRequired,
  mySubjects: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchMySubjects: PropTypes.func.isRequired,
  fetchSubjects: PropTypes.func.isRequired,
  registerSubject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  subjects: state.subject.subjects,
  mySubjects: state.subject.mySubjects,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSubjects: () => dispatch(subjectsThunk()),
  fetchMySubjects: () => dispatch(mySubjectsThunk()),
  registerSubject: (subject) => dispatch(subjectRegisterThunk(subject)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Subjects));
