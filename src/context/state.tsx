import React, { Dispatch } from 'react';
import { LoginState } from './Login/state';
import { NoteState } from './Note/state';
import { Action } from './action';

export interface AppState {
  login: LoginState;
  note: NoteState;
}

export interface AppContextInterface {
  state: AppState;
  dispatch: Dispatch<Action>;
}

const ctxt = React.createContext<unknown | null>(null);

export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;

// === HOC for context
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withAppContext<P extends { context?: P }, R = Omit<P, 'context'>>(Component: any): React.SFC<R> {
  return function BoundComponent(props: R) {
    return <AppContextConsumer>{(value) => <Component {...props} context={value} />}</AppContextConsumer>;
  };
}
