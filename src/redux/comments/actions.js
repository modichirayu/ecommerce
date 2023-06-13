import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR, EDIT_COMMENT_REQUEST, EDIT_COMMENT_SUCCESS
} from './actionTypes';
import {Get, Post, Put} from '../../services/baseServices';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(localStorage.getItem('user')),
  }
};

/*Get all comments*/

export const CommentsRequest = () => {

  return async (dispatch) => {
    dispatch({type: FETCH_COMMENTS_REQUEST});

    await Get('comment', config).then((response) =>
      dispatch({
        type: FETCH_COMMENTS_SUCCESS,
        payload: response.data
      })
    )
  }
};

/*Add comment*/

export const AddCommentRequest = (params) => {
  return async (dispatch) => {
    dispatch({type: ADD_COMMENT_REQUEST});

    await Post('comment', params, config).then((response) =>
      dispatch({
        type: ADD_COMMENT_REQUEST,
        payload: response.data
      })
    )
  }
};

/*Edit comment*/

export const EditCommentRequest = (params) => {
  return async (dispatch) => {
    dispatch({type: EDIT_COMMENT_REQUEST});

    await Put('comment', params, config).then((response) =>
      dispatch({
        type: EDIT_COMMENT_SUCCESS,
        payload: response.data
      })
    )
  }
};