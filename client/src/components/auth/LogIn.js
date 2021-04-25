/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { cleanAuthMessage } from '../../actions';
import { logInThunk } from '../../reduxThunks/auth';
import '../../assets/css/LogIn.css';

function LogIn({ logIn, errorMessage, cleanAuthMessage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const showError = !errorMessage ? '' : (
    <span style={{ color: 'red', padding: '15px' }}>{errorMessage}</span>
  );

  function handleSubmit(e, obj) {
    e.preventDefault();
    cleanAuthMessage();
    logIn(obj);
  }

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  {showError}
                  <form onSubmit={(e) => handleSubmit(e, { email, password })}>
                    <div className="form-label-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email address"
                        autoComplete="email"
                        id="inputEmail"
                        required

                      />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        autoComplete="password"
                        required
                        id="inputPassword"
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                    <div className="text-center">
                      <span>Don&apos;t have an account?</span>
                      {' '}
                      <Link to="/signup" className="small">Create an account</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

LogIn.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  logIn: PropTypes.func.isRequired,
  cleanAuthMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errorMessage: state.auth.message,
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (obj) => dispatch(logInThunk(obj)),
  cleanAuthMessage: () => dispatch(cleanAuthMessage()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));
