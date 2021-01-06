import { createVnode } from './lib';
import Header from './components/module/Header';
import { Main } from './components/module/Main';
import { Component } from './lib/types';
import type { Todo } from './model';
import mockUpData from './mockUps';

interface IProps {}
interface IState {
  loading: boolean;
  todos: Todo[];
}

class App extends Component<IProps> {
  state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: false,
      todos: mockUpData,
    };
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
