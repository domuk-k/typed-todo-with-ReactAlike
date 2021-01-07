import { createVnode } from '../lib';
import { Component } from '../lib/types';

interface IProps {}

class Modal extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return createVnode('div', { ...this.props });
  }
}

export default Modal;
