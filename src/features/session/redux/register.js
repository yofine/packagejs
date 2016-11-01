import lean from 'leancloud-storage'
import createReducer from '../../../util/createReducer'
import { push } from 'react-router-redux'

import {
  REGISTE_REQUEST,
  REGISTE_SUCCESS,
  REGISTE_FAILURE,
} from './constants'

export const regist = (data) => {

  return async dispatch => {
    dispatch({type: REGISTE_REQUEST})
    const user = new lean.User()
    user.setUsername(data.name)
    user.setPassword(data.password)
    user.setEmail(data.email)
    try {
      const ret = await user.signUp()
      dispatch({
        type: REGISTE_SUCCESS,
        data: ret
      })
      setTimeout(() => {
        dispatch(push('/login'))
      }, 1000)
    } catch (error) {
      dispatch({
        type: REGISTE_FAILURE,
        data: error
      })
    }
  }
}


const initialState = {
  data: null,
  error: null,
  pending: false,
}


export const registReducer = createReducer(initialState, {
  [REGISTE_REQUEST](state, action) {
    return {
      ...state,
      pending: true,
      error: null,
    }
  },
  [REGISTE_SUCCESS](state, action) {
    return {
      ...state,
      pending: false,
      error: null,
      data: action.data.attributes,
    }
  },
  [REGISTE_FAILURE](state, action) {
    return {
      ...state,
      pending: false,
      error: action.data.error,
    }
  },
})
