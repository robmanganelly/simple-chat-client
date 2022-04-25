import { Component, OnInit } from '@angular/core';
import { MessageModel, MessageObject } from 'src/app/models/message-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  //fake data
  roomMsg: MessageObject[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.messageSubject.subscribe(
      (msg: MessageObject)=>{
        this.roomMsg.push(msg)
      }
    )
  }

}
