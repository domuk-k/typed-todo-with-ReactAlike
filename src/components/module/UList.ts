import { Component } from '../../lib/types';
import { createVnode } from '../../lib';
import { ListItem } from '../atom/ListItem';
import type { Todo } from '../../model';

interface IProps {
  todos: Todo[];
}

export class UList extends Component<IProps> {
  constructor(props: IProps) {
    super(props);

    if (!this.props.todos.length) this.props.todos = [];
  }

  render() {
    return createVnode(
      'ul',
      null,
      ...this.props.todos.map((todo) => createVnode(ListItem, { todo })),
    );
  }
}
