import { LoginState } from './state';
import { ActionTypes, Action } from './actions';

export const initialState: LoginState = {
  username: '',
  authenticated: false,
  pending: false,
  error: false,
};

export const reducer = (state: LoginState, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        username: action.payload,
        authenticated: true,
        pending: false,
        error: false,
      };
    }
    case ActionTypes.LOGIN_PENDING: {
      return {
        ...state,
        pending: true,
        error: false,
      };
    }
    case ActionTypes.LOGIN_ERROR: {
      return {
        ...state,
        pending: false,
        error: true,
      };
    }
    case ActionTypes.LOGOUT: {
      return {
        ...state,
        username: '',
        authenticated: false,
        pending: false,
        error: false,
      };
    }
    default:
      return state;
  }
};
