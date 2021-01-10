import type { Todo } from '../../model';
import { Component } from '../../lib/types';
import { createVnode } from '../../lib';
import styles from './Footer.module.scss';
import Checkbox from '../atom/CheckBox';
import Button from '../atom/Button';

interface IProps {
  todos: Todo[];
}

export class Footer extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return createVnode(
      'footer',
      { className: styles.footer },
      createVnode(Checkbox, {
        type: 'checkbox',
        textContent: 'Mark all as complete',
      }),
      createVnode(
        'div',
        { className: styles.clearCompleted },
        createVnode(Button, null, 'Clear Completed', `(${3})`),
      ),
      createVnode('div', null, `${4} items Left`),
    );
  }
}
