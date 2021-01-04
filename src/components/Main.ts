import type { Todo } from '../model';
import { createVnode } from '../lib';
import { Component } from '../lib/types';
import Input from './Input';
import { UList } from './UList';

interface IProps {
  todos: Todo[];
}

export class Main extends Component<IProps> {
  props: IProps;
  constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  render() {
    return createVnode(
      'main',
      null,
      createVnode(Input),
      createVnode(UList, this.props),
    );
  }
}
