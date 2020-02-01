import { compose, setDisplayName } from 'recompose';

import { NoteComponent, NoteInnerProps, NoteProps } from './component';

import { withAppContext } from 'context';

export const Note = withAppContext(compose<NoteInnerProps, NoteProps>(setDisplayName('Note'))(NoteComponent));
