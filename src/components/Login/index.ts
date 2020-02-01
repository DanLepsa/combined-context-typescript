import { compose, setDisplayName } from 'recompose';

import { LoginComponent, LoginInnerProps, LoginProps } from './component';
import { withLoginContext } from 'context/Login';

export const Login = withLoginContext(compose<LoginInnerProps, LoginProps>(setDisplayName('Login'))(LoginComponent));
