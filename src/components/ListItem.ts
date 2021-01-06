import type { Todo } from '../model';
import { createVnode } from '../lib';
import { Component } from '../lib/types';

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
      { id },
      createVnode(
        'label',
        {
          for: `ck-${id}`,
        },
        createVnode('div', { className: 'todo-label' }),
      ),
      createVnode('input', {
        id: `ck-${id}`,
        type: 'checkbox',
        checked: completed,
      }),
      createVnode('span', { textContent: `${content}` }),
      createVnode('button', null, 'X'),
    );
  }
}
