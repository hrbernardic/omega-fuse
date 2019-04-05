export enum RhetosQueryOperation {
  Equals = 'Equals',
  NotEquals = 'NotEquals',
  Greater = 'Greater',
  GreaterEqual = 'GreaterEqual',
  Less = 'Less',
  LessEqual = 'LessEqual'
}

export enum StringQueryOperation {
  Equals = 'Equals',
  NotEquals = 'NotEquals',
  Greater = 'Greater',
  GreaterEqual = 'GreaterEqual',
  Less = 'Less',
  LessEqual = 'LessEqual',
  StartsWith = 'StartsWith',
  EndsWith = 'EndsWith',
  Contains = 'Contains',
  Notcontains = 'NotContains'
}

export enum NumberQueryOperation {
  Equals = 'Equals',
  NotEquals = 'NotEquals',
  Greater = 'Greater',
  GreaterEqual = 'GreaterEqual',
  Less = 'Less',
  LessEqual = 'LessEqual'
}

export enum DateQueryOperation {
  Equals = 'Equals',
  NotEquals = 'NotEquals',
  Greater = 'Greater',
  GreaterEqual = 'GreaterEqual',
  Less = 'Less',
  LessEqual = 'LessEqual'
}

export type RhetosDateFilter = RhetosQueryOperation | 'DateIn' | 'DateNotIn';

export type RhetosNumberFilter = RhetosQueryOperation;

export type RhetosArrayFilter = 'In' | 'NotIn';

export interface IFilterParameter<T> {
  property: string;
  operation: any;
  value: T;
}

export class ArrayFilterParameter<T> implements IFilterParameter<T[]> {
  property: string;
  operation: RhetosArrayFilter;
  value: T[];
}

export class StringFilterParameter implements IFilterParameter<string> {
  property: string;
  operation: StringQueryOperation;
  value: string;

  constructor(
    property: string,
    operation: StringQueryOperation,
    value: string
  ) {
    this.property = property;
    this.operation = operation;
    this.value = value;
  }
}

export class NumberFilterParameter implements IFilterParameter<number> {
  property: string;
  operation: NumberQueryOperation;
  value: number;

  constructor(
    property: string,
    operation: NumberQueryOperation,
    value: number
  ) {
    this.property = property;
    this.operation = operation;
    this.value = value;
  }
}

export class DateFilterParameter implements IFilterParameter<Date> {
  property: string;
  operation: DateQueryOperation;
  value: Date;

  constructor(property: string, operation: DateQueryOperation, value: Date) {
    this.property = property;
    this.operation = operation;
    this.value = value;
  }
}
