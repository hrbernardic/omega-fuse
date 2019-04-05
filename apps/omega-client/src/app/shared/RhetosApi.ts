import { HttpClient } from '@angular/common/http';
import { RhetosService } from '@omega/rhetos';
import { Inject, Injectable } from '@angular/core';

export namespace Bookstore {
  export class Book {

    static empty = {
      ID: null,
      Code: null,
      Title: null,
      NumberOfPages: null,
      ReleaseDate: null,
      AuthorID: null
    };

    ID: string;
    Code: string;
    Title: string;
    NumberOfPages: number;
    ReleaseDate: Date;
    AuthorID: string;

    constructor(data?: Partial<Book>) {
      Object.assign(Book.empty, data);
    }

    /*DataStructureInfo Properties Bookstore.Book*/
  }
}

export namespace BookstoreServices {
  @Injectable({
    providedIn: 'root'
  })
  export class BookService extends RhetosService<Bookstore.Book> {
    constructor(@Inject('RHETOS_REST_URL') private rhetosRestUrl: string, httpClient: HttpClient) {
      super(httpClient, rhetosRestUrl, 'Bookstore', 'Book');
    }
  }
}


