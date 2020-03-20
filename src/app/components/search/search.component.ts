import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.template.html',
  styleUrls: ['./search.style.scss']
})
export class SearchComponent implements OnInit {

  @Input() data: any;
  @Input() fieldToFilter: string;
  @Output() filterData: EventEmitter<any> = new EventEmitter<any>();

  public searchTimeout = null;

  constructor() { }

  public ngOnInit() {}

  public search(value: string): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.filterData.emit(this.data.filter(el => el[this.fieldToFilter].toLowerCase().startsWith(value.toLowerCase())));
    }, 100);
  }

}
