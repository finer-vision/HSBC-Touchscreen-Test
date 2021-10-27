export enum EntityComponentType {
  basic = "basic",
}

export type EntityType = {
  id: string;
  size: number;
  x: number;
  y: number;
  modal: {
    component: EntityComponentType;
    props: {
      [prop: string]: any;
    };
  };
};
