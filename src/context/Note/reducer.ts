import { ActionTypes, Action } from './actions';
import { NoteState } from './state';

export const initialState: NoteState = {
  id: '',
  userId: '',
  title: '',
  completed: false,
};

export const reducer = (state: NoteState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_NOTE: {
      return {
        ...state,
        id: action.payload.id,
        userId: action.payload.userId,
        title: action.payload.title,
      };
    }
    default:
      return state;
  }
};
