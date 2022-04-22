import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {

  userSentTheMessage: boolean = /*this is a faked value for test purposes */ Math.random()*100 > 50;

  constructor() { }

  ngOnInit(): void {
  }

}
