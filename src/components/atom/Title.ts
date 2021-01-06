import { Component } from '../../lib/types';
import { createVnode } from '../../lib';

interface IProps {
  [key: string]: string;
}

export class Title extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return createVnode('h1', { className: this.props.className }, 'Todos');
  }
}
