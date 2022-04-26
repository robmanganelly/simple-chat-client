import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MessageModel, MessageObject } from 'src/app/models/message-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  //fake data

  userID: string = "";
  roomMsg: MessageObject[] = [];


  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.userSubject.pipe(take(1)).subscribe((user)=>{this.userID = user?._id as string})

    this.dataService.messageSubject.subscribe(
      (msg: MessageObject)=>{
        this.roomMsg.push(msg)
      }
    )
  }

}
