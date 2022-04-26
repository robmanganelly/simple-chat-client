import { Injectable } from '@angular/core';
import { MessageModel, MessageObject } from '../models/message-model';
import { DataService } from './data.service';
import { SocketIOService } from './socket-io.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private socketIOService: SocketIOService,
    private dataService: DataService
  ) { }

  private build(text: string): MessageObject {

    const id  = this.dataService.loggedUser._id;
    const author  = this.dataService.loggedUser.username;
    const room  = this.dataService.activeRoom;
    const sent = Date.now();
    return new MessageObject(text,author as string,room,sent,id);
  }
  private post(data: MessageObject){
    this.socketIOService.sendSocketMessage(data.room,data.toJSON());
  }

  send(text: string):void{
    const msg = this.build(text)
    //send message to server
    this.post(msg);
    //reflect on ui
    this.dataService.messageSubject.next(msg);
  }


}
