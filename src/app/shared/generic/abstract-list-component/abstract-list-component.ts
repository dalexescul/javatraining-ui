import {OnInit} from '@angular/core';

export abstract class AbstractListComponent implements OnInit {

  public data: any;
  public errors: string;
  public loading = true;
  public page = 1;
  public itemsPerPage = 1;
  public totalPages: number;
  public totalElements: number;
  public itemsPerPageOptions: Array<{ value: number, label: string }> = [
    {
      value: 1,
      label: '1 per page'
    },
    {
      value: 5,
      label: '5 per page'
    },
    {
      value: 10,
      label: '10 per page'
    },
  ];

  ngOnInit(): void {
    this.itemsPerPage = parseInt(localStorage.getItem('itemsPerPage'), 10)
    this.refreshData()
  }

  public onPageChange(page: number): void {
    this.page = page;
    this.refreshData();
  }

  public onItemsPerPageChange(event): void {
    this.page = 1;
    localStorage.setItem('itemsPerPage', event.target.value);
    this.refreshData();
  }

  protected refreshData() {
    this.getDataService().getAll(this.page - 1, this.itemsPerPage).subscribe(
      (response) => {
        this.data = response
        this.totalPages = this.data.totalPages
        this.totalElements = this.data.totalElements
        this.loading = false
      },
      (errors) => {
        this.errors = errors
        this.loading = false
      }
    )
  }
  public abstract getDataService();
}
