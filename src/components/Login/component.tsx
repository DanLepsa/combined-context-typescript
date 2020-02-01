import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LoginContextInterface, ActionTypes } from 'context/Login';

export interface LoginProps {
  context: LoginContextInterface;
}

export interface LoginInnerProps extends LoginProps, RouteComponentProps {}

export const LoginComponent: React.FC<LoginInnerProps> = ({ context }) => {
  const mockLogin = () => {
    context.dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: 'Dan' });
  };

  return (
    <div>
      Login component context: {JSON.stringify(context)}
      <button onClick={mockLogin}>Login</button>
    </div>
  );
};
