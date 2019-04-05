export interface ISortParameter {
  property: string;
  order?: 'asc' | 'desc';
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export class SortParameter implements ISortParameter {
  property: string;
  order?: SortOrder;

  constructor(property: string, order: SortOrder = SortOrder.Asc) {
    this.property = property;
    this.order = order;
  }
}
