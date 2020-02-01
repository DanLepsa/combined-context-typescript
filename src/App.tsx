import React, { useReducer, useMemo } from 'react';
import useCombinedReducers from 'use-combined-reducers';
import logger from 'use-reducer-logger';

import { LoginContext, NoteContext, AppContextProvider, AppState, Action } from './context';

import { Login } from 'components/Login';
import { Note } from './components/Note';
import { LoginContextProvider } from 'context/Login';
import { ComposeContexts } from 'ComposeContexts';

const loginReducer = logger(LoginContext.reducer);
const noteReducer = logger(NoteContext.reducer);

export const App: React.FC = () => {
  const [loginState, loginDispatch] = useReducer(loginReducer, LoginContext.initialState);

  const [state, dispatch] = useCombinedReducers<AppState, Action>({
    login: [loginState, loginDispatch],
    note: useReducer(noteReducer, NoteContext.initialState),
  });

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <ComposeContexts
      components={[
        [AppContextProvider, contextValue],
        [LoginContextProvider, { state: loginState, dispatch: loginDispatch }],
      ]}
    >
      <div className="App">
        <header className="App-header">
          <Login />
          <Note />
        </header>
      </div>
    </ComposeContexts>
  );
};
