import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { AppContextInterface } from 'context';

export interface NoteProps {
  context: AppContextInterface;
}

export interface NoteInnerProps extends NoteProps, RouteComponentProps {}

export const NoteComponent: React.FC<NoteInnerProps> = ({ context, ...props }) => {
  return <div>Note component context: {JSON.stringify(context)}</div>;
};
