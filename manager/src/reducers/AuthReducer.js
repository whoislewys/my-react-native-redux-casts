import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  // this obejct is not necessary,
  // but is good so future engineers can easily see what state is involved with this reducer
  loading: false,
  email: '',
  password: '',
  error: '',
  user: null
};

export default (state=INITIAL_STATE, action) => {
  console.log(action);

  switch(action.type) {
    case EMAIL_CHANGED:
      /*
      cannot do
      state.email = action.payload
      return state
      because redux will not recongize your returned state as a new object,
      which results in componoents not re rendering
      */
      // instead make new object, take props in state and put them in the new object
      // then define new prop email, give it a value of action.payload, and toss it into the new object
      // if email prop already exists, our new email prop will overwrite the value that already exists
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: ''}
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false } //could also set password: '' for security
    default:
      return state;
  }
};
