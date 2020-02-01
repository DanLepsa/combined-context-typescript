export enum ActionTypes {
  SAVE_NOTE_PENDING = 'SAVE_NOTE_PENDING',
  SAVE_NOTE_SUCCESS = 'SAVE_NOTE_SUCCESS',
  SAVE_NOTE_ERROR = 'SAVE_NOTE_ERROR',
  SET_NOTE = 'SET_NOTE',
}

export interface Action {
  type: ActionTypes;
  payload?: any;
}
