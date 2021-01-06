import { createVnode } from '../../lib';
import { Component } from '../../lib/types';
import styles from './Button.module.scss';

interface IProps {}

class Button extends Component<IProps> {
  render() {
    return createVnode(
      'button',
      { className: styles.primary },
      'Clear completed',
    );
  }
}

export default Button;
