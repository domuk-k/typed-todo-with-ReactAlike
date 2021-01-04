import { createVnode } from '../lib';
import { Component } from '../lib/types';

interface IProps {}

class Input extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e: KeyboardEvent) {
    if (e.key !== 'Enter' || !(e?.target as HTMLInputElement).value) return;
    console.log('Valid now, Yet implemented');
  }

  render() {
    return createVnode('input', {
      type: 'text',
      onkeyup: this.inputHandler,
    });
  }
}

export default Input;
