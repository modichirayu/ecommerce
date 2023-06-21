import { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS } from './actionTypes';
import { Post } from '../../services/baseServices';

export const ResetPasswordRequest = () => {
  return async (dispatch) => {
    dispatch({type: RESET_PASSWORD_REQUEST});

    await Post('/auth/password/email').then((response) =>
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: response,
      })
    ).catch((error) =>
      console.error(error));
  }
};