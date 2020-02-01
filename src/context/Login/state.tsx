import * as React from 'react';
import { Dispatch } from 'react';

import { Action } from './actions';

export interface LoginState {
  username?: string;
  authenticated?: boolean;
  pending?: boolean;
  error?: boolean;
}

export interface LoginContextInterface {
  state: LoginState;
  dispatch: Dispatch<Action>;
}

const ctxt = React.createContext<LoginContextInterface | null>(null);

export const LoginContextProvider = ctxt.Provider;

export const LoginContextConsumer = ctxt.Consumer;

// === HOC for context
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withLoginContext<P extends { context?: P }, R = Omit<P, 'context'>>(Component: any): React.SFC<R> {
  return function BoundComponent(props: R) {
    return <LoginContextConsumer>{(value) => <Component {...props} context={value} />}</LoginContextConsumer>;
  };
}
