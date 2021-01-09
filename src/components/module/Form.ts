import type { SyntheticEvent } from '../../model';
import { createVnode } from '../../lib';
import { Component } from '../../lib/types';
import styles from './Form.module.scss';
import todoService from '../../model/TodoService';
import Todo from '../../model/Todo';

interface IProps {}

class Form extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e: SyntheticEvent) {
    e.preventDefault();
    const inputValue = e.target.todoValue.value;
    if (!inputValue) return;
    // 이렇게 된 이상 리덕스로 간다.;
    const res = (async () =>
      await todoService.postTodo(new Todo(inputValue)))();
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
