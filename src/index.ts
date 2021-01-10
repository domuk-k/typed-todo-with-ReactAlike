import App from './App';
import { createVnode, ReillyDOM } from './lib';
import 'reset.css';
import './index.scss';

export const reillyDOM = new ReillyDOM();

const $root = document.getElementById('root');

reillyDOM.render(createVnode(App, null), $root);
