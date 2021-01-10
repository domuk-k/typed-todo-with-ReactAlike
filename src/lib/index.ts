import Modal from '../components/Modal';
import { Component, ComponentConstructor, IProps, Vnode } from './types';

type ReillyElement = DocumentFragment | HTMLElement;

export class ReillyDOM {
  private readonly root = document.getElementById('root');
  constructor() {}

  render(rootNode: any, container: HTMLElement | null = this.root) {
    (container as HTMLElement).innerHTML = '';
    container?.appendChild(makeElementOf(rootNode));
  }

  createModal(textContent: string) {
    const modalRoot = document.createElement('div');

    modalRoot.id = 'modal-root';
    document.body.append(modalRoot);
    console.log('??', modalRoot);

    this.render(createVnode(Modal, { id: 'modal', textContent }), modalRoot);
  }
}

export function createVnode(
  type: ComponentConstructor | string | (() => any),
  props?: IProps | null,
  ...children: any[]
) {
  let vnode = { type, props, children };

  if (typeof type === 'function') {
    if (Object.getPrototypeOf(type) === Component) {
      console.log(Object.getPrototypeOf(type) instanceof Component);
      return new (type as ComponentConstructor)(props as IProps).render();
    } else {
      return (type as Function).apply(null, props);
    }
  }

  if (vnode.children && vnode.children.length) {
    vnode.children = vnode.children.map((child: any) =>
      typeof child === 'function' ? new child().render() : child,
    );
  }

  return vnode;
}

function makeElementOf(vnode: Vnode) {
  let elem: ReillyElement;

  if (vnode.type === 'fragment') {
    elem = document.createDocumentFragment();
  } else {
    elem = document.createElement(vnode.type as string);
    Object.entries(vnode.props || {}).forEach((prop) => {
      const [key, value] = prop;
      (elem as any)[key] = value;
      if (key === 'for') (elem as any).setAttribute(`${key}`, `${value}`);
    });
  }

  if (vnode.children && vnode.children.length) {
    vnode.children.forEach((child: any) => {
      if (typeof child === 'object') elem.appendChild(makeElementOf(child));
      if (typeof child === 'string')
        elem.appendChild(document.createTextNode(child));
    });
  }

  return elem;
}
