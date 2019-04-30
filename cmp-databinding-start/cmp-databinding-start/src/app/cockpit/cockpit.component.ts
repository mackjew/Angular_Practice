import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContent: ElementRef; //Allows selection of DOM element by local reference(#). Kind of like JQuery selecter args only its local to the component and only works with local references. Returns a typescript object that is a wrapper around the actual DOM element.

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onServerCreated(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContent.nativeElement.value //use the ElementRef to access the native DOM element content underneath. ElementRef is a wrapper.
    });
  }

  onBluePrintCreated(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContent.nativeElement.value //use the ElementRef to access the native DOM element content underneath. ElementRef is a wrapper.
    });
  }

}
