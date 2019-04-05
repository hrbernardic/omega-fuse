import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Bookstore, BookstoreServices } from '../../shared/RhetosApi';

@Component({
    selector   : 'omega-forms',
    templateUrl: './forms.component.html',
    styleUrls  : ['./forms.component.scss']
})
export class FormsComponent implements OnInit, OnDestroy
{
    form: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;
    private books$: Observable<Bookstore.Book[]>;

  /**
   * Constructor
   *
   * @param {FormBuilder} _formBuilder
   * @param bookService
   */
    constructor(
        private _formBuilder: FormBuilder,
        private bookService: BookstoreServices.BookService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
      this.books$ = this.bookService.getAll();

      // Reactive Form
      this.form = this._formBuilder.group({

        ime: ['', Validators.required],
        prezime: ['', Validators.required],
        adresa: [''],
        lokacija: [''],
        telefon1: ['', Validators.required],
        telefon2: [''],
        mobitel1: [''],
        mobitel2: [''],
        fax: [''],
        email1: [''],
        email2: [''],
        radniOdnos: [''],
        radnoMjesto: [''],
        zanimanje: [''],
        djelatnost: [''],
        tim: [''],
        radnoVrijeme: [''],
        godisnjiOdmor: [''],
        timKontraSmjena: [''],
        opis: [''],
      });
    }


    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


}
