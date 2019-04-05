import { ISortParameter } from './sort.parameter';
import {
  IFilterParameter,
  StringFilterParameter,
  NumberFilterParameter,
  DateFilterParameter
} from './filter.parameter';

interface IStringValue {
  toString(): string;
}

export class RhetosQuery implements IStringValue {
  top?: number;
  skip?: number;
  sorts?: ISortParameter[] = new Array<ISortParameter>();
  filters?: IFilterParameter<any>[] = new Array<IFilterParameter<any>>();

  constructor(init?: Partial<RhetosQuery>) {
    Object.assign(this, init);
  }

  toString(): string {
    let queryString = '';

    queryString = queryString.concat(
      this.createSortString(this.sorts),
      this.createFiltersString(this.filters),
      this.createTopString(this.top),
      this.createSkipString(this.skip)
    );

    if (queryString !== '') {
      queryString = '?' + queryString.slice(0, -1);
    }

    return queryString;
  }

  private createSortString(sorts: ISortParameter[]): string {
    if (this.sorts.length === 0) {
      return '';
    }

    let sortString = 'sort=';
    this.sorts.forEach(element => {
      sortString = sortString.concat(
        element.property,
        ' ',
        !element.order ? '' : element.order === 'asc' ? '' : element.order,
        ','
      );
    });

    return sortString.slice(0, -1) + '&';
  }

  private createFiltersString(filters: IFilterParameter<any>[]): string {
    if (filters.length === 0) {
      return '';
    }

    let filterString = 'filters=[';

    filters.forEach(filter => {
      filterString += '{';
      switch (typeof filter.value) {
        case 'string':
          filterString += this.createStringFilter(filter);
          break;
        case 'number':
          filterString += this.createNumberFilter(filter);
          break;
        default:
          // Date ili Array ??
          filterString += this.createDateFilter(filter);
          break;
      }
    });

    return filterString.slice(0, -1) + ']&';
  }

  private createTopString(top: number): string {
    return top ? 'top=' + top.toString() + '&' : '';
  }

  private createSkipString(skip: number): string {
    return skip ? 'skip=' + skip.toString() + '&' : '';
  }

  private createStringFilter(stringFilter: StringFilterParameter): string {
    return ''.concat(
      '"Property":"',
      stringFilter.property,
      '","Operation":"',
      stringFilter.operation,
      '","Value":"',
      stringFilter.value,
      '"},'
    );
  }

  private createNumberFilter(numberFilter: NumberFilterParameter): string {
    return ''.concat(
      '"Property":"',
      numberFilter.property,
      '","Operation":"',
      numberFilter.operation,
      '","Value":',
      numberFilter.value.toString(),
      '},'
    );
  }

  private createDateFilter(dateFilter: DateFilterParameter): string {
    // TODO - ispravi !! ----------------------------------
    const dateToAdd = new Date(dateFilter.value.valueOf());
    dateToAdd.setDate(dateToAdd.getDate() - 1);

    const date = dateToAdd.toISOString().split('T')[0];
    const parts = date.split('-');

    parts[1] = '' + (Number(parts[1]) - 1);
    const newDate = new Date(Date.UTC.apply(null, parts));
    // TODO - ispravi !!-----------------------------------

    return ''.concat(
      '"Property":"',
      dateFilter.property,
      '","Operation":"',
      dateFilter.operation,
      '","Value":"',
      '/Date(' + newDate.getTime() + '-0000)/',
      '"},'
    );
  }
}
