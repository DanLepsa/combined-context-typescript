import * as React from 'react';
import { Dispatch } from 'react';

import { Action } from './actions';

export interface NoteState {
  userId: string;
  id: string;
  title?: string;
  completed: boolean;
}

export interface NoteContextInterface {
  state: NoteState;
  dispatch: Dispatch<Action>;
}

const ctxt = React.createContext<NoteContextInterface | null>(null);

export const NoteContextProvider = ctxt.Provider;

export const NoteContextConsumer = ctxt.Consumer;

// === HOC for context
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withNoteContext<P extends { context?: P }, R = Omit<P, 'context'>>(Component: any): React.SFC<R> {
  return function BoundComponent(props: R) {
    return <NoteContextConsumer>{(value) => <Component {...props} context={value} />}</NoteContextConsumer>;
  };
}
