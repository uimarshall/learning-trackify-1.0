import axios from 'axios';
import Storage from '../helpers/localStorage';
import { SignUpFailure, signUpOk } from '../actions';

export const signUpThunk = ({
  name, email, password, passwordConfirmation,
}) => dispatch => {
  axios
    .post(
      '/api/v1/signup',
      {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 201) {
        Storage.setToken(response.data.auth_token);
        dispatch(signUpOk(response.data));
      }
      return response.data;
    })
    .catch(error => {
      dispatch(SignUpFailure(error.response.data));
    });
};

export const logInThunk = ({ email, password }) => dispatch => {
  axios
    .post('/api/v1/auth/login', { email, password }, { withCredentials: true })
    .then(response => {
      if (response.status === 200) {
        Storage.setToken(response.data.auth_token);
        dispatch(signUpOk(response.data));
      }
      return response.data;
    })
    .catch(error => {
      dispatch(SignUpFailure(error.response.data));
    });
};