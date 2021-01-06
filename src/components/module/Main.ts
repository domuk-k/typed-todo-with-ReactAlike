import { createVnode } from '../../lib';
import { Component } from '../../lib/types';
import type { Todo } from '../../model';
import Form from './Form';
import { UList } from './UList';
import styles from './Main.module.scss';
import { Footer } from './Footer';

interface IProps {
  todos: Todo[];
}

export class Main extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return createVnode(
      'main',
      { className: styles.main },
      createVnode(Form),
      createVnode(UList, this.props),
      createVnode(Footer),
    );
  }
}
