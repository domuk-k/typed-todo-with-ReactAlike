import App from './App';
import { createVnode, render } from './lib';

render(createVnode(App, null), document.getElementById('root'));
