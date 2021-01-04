import { Component } from '../lib/types';
import { createVnode } from '../lib';
import { Title } from './Title';

class Header extends Component {
  render() {
    return createVnode(
      'header',
      { className: 'todo-header' },
      createVnode(Title),
    );
  }
}

export default Header;
