import type { Todo } from '../../model';
import { createVnode } from '../../lib';
import { Component } from '../../lib/types';
import styles from './ListItem.module.scss';

interface IProps {
  todo: Todo;
}

export class ListItem extends Component {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { id, content, completed } = this.props.todo;
    return createVnode(
      'li',
      { id, className: styles.listItem },
      createVnode('input', {
        id: `ck-${id}`,
        type: 'checkbox',
        className: styles.checkbox,
        checked: completed,
      }),
      createVnode('label', {
        for: `ck-${id}`,
        className: styles.label,
        textContent: `${content}`,
      }),
      createVnode('div', { 'aria-label': 'button', className: styles.button }),
    );
  }
}
