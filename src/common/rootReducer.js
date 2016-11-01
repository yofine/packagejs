import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { registReducer } from '../features/session/redux/register'
import { loginReducer } from '../features/session/redux/login'
import { packageReducer } from '../features/profile/redux/package'

const rootReducer = combineReducers({
  routing: routerReducer,
  register: registReducer,
  login: loginReducer,
  packages: packageReducer,
});

export default rootReducer
