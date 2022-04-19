import { Component, OnInit } from '@angular/core';

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

  postMessage(textarea: HTMLTextAreaElement): void{
    alert(`: ${textarea.value}`)
    console.log(textarea)
  }

}
