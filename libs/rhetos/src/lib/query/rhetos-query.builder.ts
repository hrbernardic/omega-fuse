import { RhetosQuery } from './rhetos-query.model';
import { SortParameter, ISortParameter } from './sort.parameter';
import {
  StringFilterParameter,
  NumberFilterParameter,
  DateFilterParameter
} from './filter.parameter';

interface IRhetosQueryBuilder {
  query: RhetosQuery;
  addTop(records: number): IRhetosQueryBuilder;
  addSkip(records: number): IRhetosQueryBuilder;
  addSortArray(sortArray: SortParameter[]);

  addFilter<
    T extends
    | StringFilterParameter
    | NumberFilterParameter
    | DateFilterParameter
  >(
    filter: T
  ): IRhetosQueryBuilder;

  addFilterArray<
    T extends
    | StringFilterParameter
    | NumberFilterParameter
    | DateFilterParameter
  >(
    filterArray: T[]
  ): IRhetosQueryBuilder;

  build(): RhetosQuery;
  clear(): RhetosQuery;
}

export class RhetosQueryBuilder implements IRhetosQueryBuilder {
  query: RhetosQuery = new RhetosQuery();

  constructor(query: RhetosQuery = new RhetosQuery()) {
    this.query = query;
  }

  addFilter<
    T extends
    | StringFilterParameter
    | NumberFilterParameter
    | DateFilterParameter
  >(filter: T) {
    this.query.filters = this.query.filters.concat(filter);
    return this;
  }

  addFilterArray<
    T extends
    | StringFilterParameter
    | NumberFilterParameter
    | DateFilterParameter
  >(filters: T[]) {
    filters.forEach(filter => {
      this.addFilter(filter);
    });
    return this;
  }

  addSortArray(sortArray: ISortParameter[]) {
    sortArray.forEach(sort => {
      this.query.sorts = this.query.sorts.concat({
        property: sort.property,
        order: sort.order
      });
    });
    return this;
  }

  addTop(records: number): IRhetosQueryBuilder {
    this.query.top = records;
    return this;
  }

  addSkip(records: number): IRhetosQueryBuilder {
    this.query.skip = records;
    return this;
  }

  build() {
    return this.query;
  }

  clear() {
    this.query = new RhetosQuery();
    return this.query;
  }
}
