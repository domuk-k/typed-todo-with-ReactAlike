import type { SyntheticEvent } from '../model';
import { createVnode } from '../lib';
import { Component } from '../lib/types';
import styles from './Form.module.scss';

interface IProps {}

class Form extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e: SyntheticEvent) {
    e.preventDefault();
    if (!e.target.todoValue.value) return;
    console.log('Valid now, Yet implemented');
  }

  render() {
    return createVnode(
      'form',
      { onsubmit: this.inputHandler, className: styles.formTodo },
      createVnode(
        'label',
        {
          className: styles.visualyHidden,
        },
        'enter todo',
      ),
      createVnode('input', {
        type: 'text',
        name: 'todoValue',
        autofocus: true,
        autocomplete: 'off',
        placeholder: 'enter todo here',
      }),
    );
  }
}

export default Form;
