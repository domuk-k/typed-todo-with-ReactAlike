import type { ComponentConstructor, IProps, Vnode } from './types';

export class Renderer {
  constructor(private readonly container: HTMLElement | null) {}

  render(rootNode: any, container?: HTMLElement | null) {
    (this.container as HTMLElement).innerHTML = '';
    if (container) container?.appendChild(makeElementOf(rootNode));
    this.container?.appendChild(makeElementOf(rootNode));
  }

  createModal(textContent: string) {
    const modal = createVnode('div', { id: 'modal', textContent });
    this.render(modal, document.getElementById('modal-root'));
  }
}

export function createVnode(
  type: ComponentConstructor | string,
  props?: IProps | null,
  ...children: any[]
) {
  let vnode = { type, props, children };

  if (typeof type === 'function') {
    vnode = new type(props as IProps).render();
  }

  if (vnode.children && vnode.children.length) {
    vnode.children = vnode.children.map((child: any) =>
      typeof child === 'function' ? new child().render() : child,
    );
  }

  return vnode;
}

type ReillyElemnent = DocumentFragment | HTMLElement;

function makeElementOf(vnode: Vnode) {
  let elem: ReillyElemnent;

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
      if (typeof child === 'object') {
        elem.appendChild(makeElementOf(child));
      }
      if (typeof child === 'string') {
        elem.appendChild(document.createTextNode(child));
      }
    });
  }

  return elem;
}
