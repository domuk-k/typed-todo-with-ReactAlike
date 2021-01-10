import { createVnode } from './lib';
import Header from './components/module/Header';
import { Main } from './components/module/Main';
import { Component } from './lib/types';
import type { SyntheticEvent } from './model';
import todoService from './model/TodoService';
import { reillyDOM } from './index';
import Todo from './model/Todo';

interface IProps {}
interface IState {
  loading: boolean;
  todos: Todo[];
  error: null | Error;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      loading: false,
      todos: [],
      error: null,
    };
    // need to implement ComponentDidMount
    this.getTodos.call(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  async getTodos() {
    const todos = await todoService.fetchTodos();

    if (todos instanceof Error) {
      reillyDOM.createModal(
        `네트워크 에러입니다 다시 시도해주세요. 비동기처리 중 이슈에 대한 상태관리와 대응이 중요합니다. 이 고민에서 자연스럽게 redux-saga의 아이디어가 나오는 군요!`,
      );
    }

    this.setState({
      ...this.state,
      todos,
    });
  }

  async addTodo(e: SyntheticEvent) {
    e.preventDefault();
    const inputValue = e.target.todoValue.value;
    if (!inputValue) return;
    const todo = await todoService.postTodo(new Todo(inputValue));

    this.setState({
      ...this.state,
      todos: [todo, ...this.state.todos],
    });

    document.getElementById('todoValue')?.focus();
  }

  async removeTodo(e: MouseEvent) {
    const targetId = (e.target as HTMLDivElement)?.parentElement?.id;
    const result = await todoService.removeTodo({ id: targetId });
    if (result instanceof Error) console.error(result);

    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => todo.id !== targetId),
    });
  }

  async toggleTodo(e: InputEvent) {
    e.preventDefault();
    const targetId = (e.target as HTMLInputElement)?.parentElement?.id;

    const result = await todoService.patchTodo({
      id: targetId,
      completed: (e.target as HTMLInputElement)?.checked,
    });
    if (result instanceof Error) console.error(result);

    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) =>
        todo.id !== targetId ? todo : result,
      ),
    });
  }

  render() {
    return createVnode(
      'fragment',
      null,
      createVnode(Header, null),
      createVnode(Main, {
        todos: this.state.todos,
        onSubmit: this.addTodo,
        onRemove: this.removeTodo,
        onToggle: this.toggleTodo,
      }),
    );
  }
}

export default App;
