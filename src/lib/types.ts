export type Vnode = {
  type: string | Component;
  props: IProps;
  children?: (string | Vnode)[];
};

export type IProps = any;

export abstract class Component<T = IProps> {
  props: T;
  constructor(props: T) {
    this.props = props;
  }
  render(): any {}
}

export interface ComponentConstructor {
  new (props: IProps): Component;
}
