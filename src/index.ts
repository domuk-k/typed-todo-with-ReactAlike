import App from './App';

render(createElement(App, null, 'wow'), document.getElementById('root'));

function render(vnode: any, container: HTMLElement) {
  container.append(makeElementOf(vnode));
}

function createElement(type, props, ...children) {
  const vnode = new type(props).render();

  return vnode;
}

function makeElementOf(vnode) {
  const elem = document.createElement(vnode.type);
  elem.append(...vnode.children);

  return elem;
}
