import lean from 'leancloud-storage'
import createReducer from '../../../util/createReducer'
import { push } from 'react-router-redux'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants'

export const login = (data) => {

  return async dispatch => {
    try {
      const user = await lean.User.logIn(data.name, data.password)
      dispatch({
        type: LOGIN_SUCCESS,
        data: user
      })
      setTimeout(() => {
        dispatch(push(`/${user.attributes.username}`))
      }, 1000)
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        data: error
      })
    }
  }
}

export const checkLogin = () => {
  return dispatch => {
    const currentUser = lean.User.current()
    if(!currentUser) {
      dispatch(push('/login'))
    } else {
      dispatch({
        type: LOGIN_SUCCESS,
        data: currentUser
      })
    }
  }
}

const initialState = {
  data: null,
  error: null,
  pending: false,
}

export const loginReducer = createReducer(initialState, {
  [LOGIN_REQUEST](state, action) {
    return {
      ...state,
      pending: true,
      error: null,
    }
  },
  [LOGIN_SUCCESS](state, action) {
    return {
      ...state,
      pending: false,
      error: null,
      data: action.data.attributes,
    }
  },
  [LOGIN_FAILURE](state, action) {
    return {
      ...state,
      pending: false,
      error: action.data.error,
    }
  },
})
