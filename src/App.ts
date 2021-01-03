export class Component<T, U> {
  state: U;
  constructor(private props: T) {}
}

interface IProps {}
interface IState {}

class App extends Component<IProps, IState> {
  private globalState = {};

  li = document.createElement('li');
  li2 = document.createElement('li');

  constructor(props) {
    super(props);
    this.li.textContent = 'todo1';
    this.li2.textContent = 'todo2';
  }

  render() {
    return {
      type: 'ul',
      props: null,
      children: [this.li2, this.li],
    };
  }
}

export default App;
