import { Component } from '../../lib/types';
import { createVnode } from '../../lib';
import { Title } from '../atom/Title';
import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return createVnode(
      'header',
      { className: styles.header },
      createVnode(Title, { className: styles.title }),
      createVnode('div', null, 'v.5.0'),
    );
  }
}

export default Header;
