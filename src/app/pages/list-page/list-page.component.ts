import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('on init');
  }
  ngAfterContentChecked(): void {
    console.log('content checked');
  }

  ngAfterContentInit(): void {
    console.log('content init');
  }

  ngAfterViewChecked(): void {
    console.log('view checked');
  }

  ngAfterViewInit(): void {
    console.log('view init');
  }
}
