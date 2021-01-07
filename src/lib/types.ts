import { renderer } from '../index';
import type { Todo } from '../model';

export type Vnode = {
  type: string | Component;
  props: IProps;
  children?: (string | Vnode)[];
};

export type IProps = any;
export type IState = any;

export abstract class Component<T = IProps, U = IState> {
  protected state!: U;
  constructor(readonly props: T) {
    this.props = props;
  }
  render(): any {}
  setState(newState: Pick<U, any>): void {
    this.state = {
      ...this.state,
      ...newState,
    };
    renderer.render(this.render());
  }
}

export interface ComponentConstructor {
  new (props: IProps): Component;
}
