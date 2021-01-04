import type { Todo } from '../model';
import { createVnode } from '../lib';
import { Component } from '../lib/types';

interface IProps {
  todo: Todo;
}

export class ListItem extends Component {
  private props: IProps;

  constructor(props: IProps) {
    super(props);
    this.props = props;
    console.log(this.props);
  }

  render() {
    const { id, content, completed } = this.props.todo;
    return createVnode(
      'li',
      null,
      createVnode('input', {
        type: 'checkbox',
        checked: completed,
      }),
      createVnode('span', { textContent: `${content}` }),
      createVnode('button', null, 'X'),
    );
  }
}
