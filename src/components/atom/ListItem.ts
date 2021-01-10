import type { Todo } from '../../model';
import { createVnode } from '../../lib';
import { Component } from '../../lib/types';
import styles from './ListItem.module.scss';
import Checkbox from './CheckBox';

interface IProps {
  todo: Todo;
  onRemove: () => Promise<void>;
  onToggle: () => Promise<void>;
}

export class ListItem extends Component {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const {
      todo: { id, content, completed },
      onRemove,
      onToggle,
    } = this.props;

    return createVnode(
      'li',
      { id, className: styles.listItem },
      createVnode(Checkbox, {
        id: `ck-${id}`,
        checked: completed,
        textContent: `${content}`,
        onToggle: onToggle,
      }),
      createVnode('div', {
        'aria-label': 'button',
        className: styles.button,
        onclick: onRemove,
      }),
    );
  }
}
