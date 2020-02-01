import { ActionTypes as NoteActionTypes } from './Note';
import { ActionTypes as LoginActionTypes } from './Login';

export type ActionTypes = typeof NoteActionTypes & typeof LoginActionTypes;

export interface Action {
  type: ActionTypes;
  payload?: any;
}
