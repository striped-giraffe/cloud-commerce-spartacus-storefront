import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'y-store-finder-page-layout',
  templateUrl: './store-finder-page-layout.component.html',
  styleUrls: ['./store-finder-page-layout.component.scss']
})
export class StoreFinderPageLayoutComponent implements OnInit {
  query: string;

  constructor() {}

  ngOnInit() {}

  persistQuery(query: string) {
    this.query = query;
  }
}
