import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { cleanAuthMessage } from '../../actions';
import { signUpThunk } from '../../reduxThunks/auth';
import '../../assets/css/SignUp.css';

function SignUp({ signUp, errorMessage, cleanAuthMessage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const showError = !errorMessage ? '' : (
    <span style={{ color: 'red', padding: '15px' }}>{errorMessage}</span>
  );

  function handleSubmit(e, obj) {
    e.preventDefault();
    cleanAuthMessage();
    signUp(obj);
  }

  return (
    <div className="container register">
      <div className="row">
        <div className="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3>Welcome</h3>
          <p>You are 30 seconds away from tracking your learning!</p>
          <Link to="/login" className="btn btn-white">Log In</Link>

          <br />
        </div>
        <div className="col-md-9 register-right">

          <h3 className="register-heading">Sign Up Here</h3>
          {showError}
          <form onSubmit={(e) => handleSubmit(e, {
            name, email, password, passwordConfirmation,
          })}
          >
            <div className="row register-form">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    autoComplete="new-name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    autoComplete="new-email"
                    required
                    className="form-control"
                  />

                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    autoComplete="new-password"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="password confirmation"
                    name="passwordConfirmation"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    value={passwordConfirmation}
                    autoComplete="new-password"
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="mx-auto my-4">
                <div>
                  <input type="submit" className="btnRegister mb-3" value="Sign Up" />

                </div>

                <div>
                  <span className="text-secondary">Already have an account? </span>
                  {' '}
                  <Link to="/login">Log In</Link>
                </div>
              </div>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
}

SignUp.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  signUp: PropTypes.func.isRequired,
  cleanAuthMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errorMessage: state.auth.message,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (obj) => dispatch(signUpThunk(obj)),
  cleanAuthMessage: () => dispatch(cleanAuthMessage()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
