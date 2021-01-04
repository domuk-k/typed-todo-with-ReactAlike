export type Vnode = {
  type: string | Component;
  props: IProps;
  children?: (string | Vnode)[];
};

export type IProps = any;

export abstract class Component<T = IProps> {
  constructor(props: T) {}
  render(): any {}
}

export interface ComponentConstructor {
  new (props: IProps): Component;
}
