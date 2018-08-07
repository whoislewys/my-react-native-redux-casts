import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  // the keys are the prop of state you aare producing with the reducer
  auth: AuthReducer
});
