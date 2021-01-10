import type { SyntheticEvent } from '../../model';
import { createVnode } from '../../lib';
import { Component } from '../../lib/types';
import styles from './Form.module.scss';
import todoService from '../../model/TodoService';
import Todo from '../../model/Todo';

interface IProps {
  onSubmit: () => Promise<void>;
}

class Form extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return createVnode(
      'form',
      { onsubmit: this.props.onSubmit, className: styles.formTodo },
      createVnode(
        'label',
        {
          className: styles.visualyHidden,
        },
        'enter todo',
      ),
      createVnode('input', {
        type: 'text',
        id: 'todoValue',
        name: 'todoValue',
        autofocus: true,
        autocomplete: 'off',
        placeholder: 'enter todo here',
      }),
    );
  }
}

export default Form;
