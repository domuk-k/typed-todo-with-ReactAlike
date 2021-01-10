import { Component } from '../../lib/types';
import { createVnode } from '../../lib';
import { ListItem } from '../atom/ListItem';
import type { Todo } from '../../model';
import { compareDate } from '../../utils';

interface IProps {
  todos: Todo[];
  onRemove: () => Promise<void>;
  onToggle: () => Promise<void>;
}

export class UList extends Component<IProps> {
  constructor(props: IProps) {
    super(props);

    if (!this.props.todos.length) this.props.todos = [];
  }

  render() {
    if (!this.props.todos.length) return 'nothing yet, add some tasks';

    const { todos, onRemove, onToggle } = this.props;
    console.log(todos);

    return createVnode(
      'ul',
      null,
      ...[...todos.sort(compareDate)].map((todo) =>
        createVnode(ListItem, { todo, onRemove, onToggle }),
      ),
    );
  }
}
