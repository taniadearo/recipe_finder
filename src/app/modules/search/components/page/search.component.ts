import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  result: Array<any>;
  keyword: string;
  isLoading: boolean;

  constructor(private searchService: SearchService) {
    this.keyword = '';
    this.searchFor();
  }

  searchFor() {
    this.isLoading = true;
    this.searchService.searchFor(this.keyword)
      .subscribe(response => {
        this.result = JSON.parse(response).results;
        this.isLoading = false;
      });
  }
}
