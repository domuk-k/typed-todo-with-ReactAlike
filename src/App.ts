import { createVnode } from './lib';
import Header from './components/module/Header';
import { Main } from './components/module/Main';
import { Component } from './lib/types';
import type { Todo } from './model';
import todoService from './model/TodoService';

interface IProps {}
interface IState {
  loading: boolean;
  todos: Todo[];
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: false,
      todos: [],
    };
    // need to implement ComponentDidMount
    this.getInitialState.call(this);
  }

  async getInitialState() {
    const todos = await todoService.fetchTodos();

    if (todos instanceof Error) {
      this.setState({ ...this.state, todos: [] });
    }

    this.setState({
      ...this.state,
      todos,
    });
  }

  render() {
    return createVnode(
      'fragment',
      null,
      createVnode(Header, null),
      createVnode(Main, { todos: this.state.todos }),
    );
  }
}
export default App;
