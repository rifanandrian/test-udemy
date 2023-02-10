import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ntt-code-test';

  constructor(
    private metaTagService: Meta
  ) {

  }

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular SEO, Angular Universal' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Muhamad Rifan Andrian' },
      { name: 'date', content: '2023-02-11', scheme: 'YYYY-MM-DD' },
    ])
  }
}
