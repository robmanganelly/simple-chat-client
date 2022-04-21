import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  //fake data
  roomMsg = [1,1,1,1,1,1,1,1,1,1,1,1,1]

  constructor() { }

  ngOnInit(): void {
  }

}
