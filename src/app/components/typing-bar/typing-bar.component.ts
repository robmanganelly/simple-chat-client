import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-bar',
  templateUrl: './typing-bar.component.html',
  styleUrls: ['./typing-bar.component.scss']
})
export class TypingBarComponent implements OnInit {

  displayBar: boolean = true;



  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('body:keydown.shift.enter',['$event'])launchPost($event: KeyboardEvent): void{
    return this.postMessage($event.target as HTMLTextAreaElement)
  }

  postMessage(textarea:HTMLTextAreaElement){
    //post message here

    //reset textarea
    textarea.value="";

    //give focus back
    textarea.focus();

  }

}
