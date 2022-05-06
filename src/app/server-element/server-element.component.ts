import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, //default
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  };

  @Input() name: string;

  @ViewChild('heading',{static:true}) header: ElementRef;

  @ContentChild('contentParagraph',{static:true}) paragraph:ElementRef;

  constructor() {
    console.log();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('onInit Called');

  }

  ngDoCheck(): void {
    console.log('ngDoCheck Called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContent init called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck  called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterCViewChecked called');
  }

  ngOnDestroy(): void {
    console.log("Destroyed Called")
  }
}
