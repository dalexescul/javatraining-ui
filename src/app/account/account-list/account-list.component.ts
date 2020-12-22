import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  @Input() accounts = [];
  loadingIndicator = true;
  reorderable = true;
  editing = {};
  columns = [
    {name: 'Balance'},
    {name: 'Currency'},
    {name: 'Restricted'}
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.accounts);
  }

  public updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.accounts[rowIndex][cell] = event.target.value;
    this.accounts = [...this.accounts];
  }

  public addRow() {
    this.accounts.push({balance: 'placeholder', currency: 'placeholder', restricted: 'placeholder'})
    console.log(this.accounts);
    this.accounts = [...this.accounts];
  }
}
