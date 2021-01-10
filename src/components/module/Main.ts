import { createVnode } from '../../lib';
import { Component } from '../../lib/types';
import type { Todo } from '../../model';
import Form from './Form';
import { UList } from './UList';
import styles from './Main.module.scss';
import { Footer } from './Footer';

interface IProps {
  todos: Todo[];
  onSubmit: () => Promise<void>;
  onRemove: () => Promise<void>;
  onToggle: () => Promise<void>;
}

export class Main extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { todos, onSubmit, onRemove, onToggle } = this.props;
    return createVnode(
      'main',
      { className: styles.main },
      createVnode(Form, { onSubmit }),
      createVnode(UList, { todos, onRemove, onToggle }),
      createVnode(Footer),
    );
  }
}
