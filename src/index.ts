import App from './App';
import { createVnode, render } from './lib';
import 'reset.css';
import './index.scss';

render(createVnode(App, null), document.getElementById('root'));
