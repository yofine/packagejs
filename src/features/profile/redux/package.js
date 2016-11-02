import lean from 'leancloud-storage'
import createReducer from '../../../util/createReducer'
import { push } from 'react-router-redux'
import { initalPackage } from './initalPackage'

import {
  FETCH_PACKAGE_REQUEST,
  FETCH_PACKAGE_SUCCESS,
  FETCH_PACKAGE_FAILURE,
  CREATE_PACKAGE_REQUEST,
  CREATE_PACKAGE_SUCCESS,
  CREATE_PACKAGE_FAILURE,
  UPDATE_PACKAGE_REQUEST,
  UPDATE_PACKAGE_SUCCESS,
  UPDATE_PACKAGE_FAILURE,
  REMOVE_PACKAGE_REQUEST,
  REMOVE_PACKAGE_SUCCESS,
  REMOVE_PACKAGE_FAILURE,
} from './constants'

export const fetchPackage = (params={}) => {
  return async dispatch => {
    dispatch({ type: FETCH_PACKAGE_REQUEST })
    const query = new lean.Query('package')
    try {
      const ret = await query.find()
      dispatch({
        type: FETCH_PACKAGE_SUCCESS,
        data: ret
      })
    } catch(error) {
      dispatch({
        type: FETCH_PACKAGE_FAILURE,
        data: error
      })
    }
  }
}

export const createPackage = () => {
  return async dispatch => {
    dispatch({type: CREATE_PACKAGE_REQUEST})
    const P = lean.Object.extend('package')
    const p = new P()
    try {
      const currentUser = lean.User.current()
      const ret = await p.save({content: initalPackage})
      dispatch(push(`/${currentUser.attributes.username}/${ret.id}`))
      dispatch({
        type: CREATE_PACKAGE_SUCCESS,
        data: ret
      })
    } catch (error) {
      dispatch({
        type: CREATE_PACKAGE_FAILURE,
        data: error
      })
    }
  }
}

export const updatePackage = (data, params) => {
  return async dispatch => {
    dispatch({type: UPDATE_PACKAGE_REQUEST})
    const p = lean.Object.createWithoutData('package', params.id)
    const query = new lean.Query('package')
    _.each(data, (v, k) => {
      p.set(k, v)
    })
    try {
      await p.save()
      const ret = await query.get(params.id)
      dispatch({
        type: UPDATE_PACKAGE_SUCCESS,
        data: ret
      })
    } catch(error) {
      dispatch({
        type: UPDATE_PACKAGE_FAILURE,
        data: error
      })
    }
  }
}

export const removePackage = (params) => {
  return async dispatch => {
    dispatch({type: UPDATE_PACKAGE_REQUEST})
    const p = lean.Object.createWithoutData('package', params.id)
    try {
      const ret = await p.destroy()
      dispatch({
        type: REMOVE_PACKAGE_SUCCESS,
        data: ret
      })
      const currentUser = lean.User.current()
      dispatch(push(`/${currentUser.attributes.username}`))
    } catch(error) {
      dispatch({
        type: REMOVE_PACKAGE_FAILURE,
        data: error
      })
    }
  }
}



const initialState = {
  data: null,
  error: null,
  pending: false,
  updating: false,
}


export const packageReducer = createReducer(initialState, {
  [FETCH_PACKAGE_REQUEST](state, action) {
    return {
      ...state,
      pending: true,
      error: null,
    }
  },
  [FETCH_PACKAGE_SUCCESS](state, action) {
    return {
      ...state,
      pending: false,
      error: null,
      data: action.data,
    }
  },
  [FETCH_PACKAGE_FAILURE](state, action) {
    return {
      ...state,
      pending: false,
      error: action.data.error,
    }
  },
  [CREATE_PACKAGE_REQUEST](state, action) {
    return {
      ...state,
      pending: true,
      error: null,
    }
  },
  [CREATE_PACKAGE_SUCCESS](state, action) {
    state.data.push(action.data)
    return {
      ...state,
      pending: false,
      error: null,
    }
  },
  [CREATE_PACKAGE_FAILURE](state, action) {
    return {
      ...state,
      pending: false,
      error: action.data.error,
    }
  },
  [UPDATE_PACKAGE_REQUEST](state, action) {
    return {
      ...state,
      updating: true,
    }
  },
  [UPDATE_PACKAGE_SUCCESS](state, action) {
    if(!state.data) {
      state.data = [action.data]
    } else {
      _.each(state.data, e => {
        if(e.id == action.data.id) {
          e.set(action.data.attributes)
          e.updatedAt = action.data.updatedAt
        }
      })
    }
    return {
      ...state,
      updating: false,
      error: null,
      data: state.data,
    }
  },
  [UPDATE_PACKAGE_FAILURE](state, action) {
    return {
      ...state,
      updating: false,
      error: action.data.error,
    }
  },
  [REMOVE_PACKAGE_REQUEST](state, action) {
    return {
      ...state,
      pending: true,
      error: null,
    }
  },
  [REMOVE_PACKAGE_SUCCESS](state, action) {
    const data = _.filter(state.data, e => (e.id !== action.data.id))
    return {
      ...state,
      pending: false,
      error: null,
      data,
    }
  },
  [REMOVE_PACKAGE_FAILURE](state, action) {
    return {
      ...state,
      pending: false,
      error: action.data.error,
    }
  },
})
