import { Component } from '../lib/types';
import { createVnode } from '../lib';

export class Title extends Component {
  render() {
    return createVnode('h1', { className: 'todo-title' }, 'Todo v.5');
  }
}
