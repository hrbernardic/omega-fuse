import { Component, OnInit } from '@angular/core';
import { Bookstore, BookstoreServices } from '../../shared/RhetosApi';
import { RhetosQueryBuilder, StringFilterParameter, StringQueryOperation } from '@omega/rhetos';


@Component({
  selector: 'omega-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  books: Array<Bookstore.Book>;


  constructor(
    private bookService: BookstoreServices.BookService
  ) {

  }

  gridOptions = {
    rowHeight: 48,
    headerHeight: 38,
    defaultColDef: {
      resizable: true,
      sortable: true,
      filter: true
    },
    suppressCellSelection: true
  };

  columnDefs = [
    { headerName: 'ID', field: 'ID' },
    { headerName: 'CODE', field: 'Code' },
    { headerName: 'TITLE', field: 'Title' },
    { headerName: 'NUMBER OF PAGES', field: 'NumberOfPages' },
    { headerName: 'RELEASE DATE', field: 'ReleaseDate' },
    {
      headerName: 'AUTHOR ID', field: 'AuthorID',
      suppressSizeToFit: true
    }
  ];

  ngOnInit() {
    const _rq = new RhetosQueryBuilder();
    const query = _rq
      .addFilter(<StringFilterParameter>{ property: 'Title', operation: StringQueryOperation.Contains, value: 'd' })
      .addSortArray([{ property: 'Title', order: 'desc' }])
      .addTop(1)
      .addSkip(2)
      .build();

    this.bookService.query(
    ).subscribe(res => {
      this.books = res;
    });
  }

  onGridReady(params) {
    const gridApi = params.api;
    gridApi.sizeColumnsToFit();
  }
}
