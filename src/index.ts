import App from './App';
import { createVnode, Renderer } from './lib';
import 'reset.css';
import './index.scss';

const $root = document.getElementById('root');
const AppNode = createVnode(App, null);

export const renderer = new Renderer($root);

renderer.render(AppNode);
