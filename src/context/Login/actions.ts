export enum ActionTypes {
  LOGIN_PENDING = 'LOGIN_PENDING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGOUT = 'LOGOUT',
}

export interface Action {
  type: ActionTypes;
  payload?: any;
}
