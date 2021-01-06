import type { Todo } from '../../model';
import { createVnode } from '../../lib';
import { Component } from '../../lib/types';
import styles from './ListItem.module.scss';
import Checkbox from './CheckBox';

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
      createVnode(Checkbox, {
        id: `ck-${id}`,
        checked: completed,
        textContent: `${content}`,
      }),
      createVnode('div', { 'aria-label': 'button', className: styles.button }),
    );
  }
}
