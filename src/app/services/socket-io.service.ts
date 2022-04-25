import { Injectable } from '@angular/core';
import { io, Socket } from "socket.io-client";
import { environment } from 'src/environments/environment';
import { MessageModel } from '../models/message-model';

@Injectable({
  providedIn: 'root'
})
export class SocketIOService {

  // a server declaration is needed on production only

  private socket: Socket = environment.production ?  io() : io(environment.server) ;

  constructor() { }



  private _register(eventName: string, callback: (...args: any[]) => void){
    this.socket.on(eventName, callback)
  }

  private _emit(eventName: string, eventData: any){
    this.socket.emit(eventName,eventData)
  }

  private _emitToRoom<T>(roomName: string, eventName: string, eventData: T){
    // this.socket.to(roomName).emit(eventName,eventData)
    this.socket.emit(eventName,eventData)  // room not supported ??
  }

  joinRoom(roomName: string){
    // this.socket.join(roomName)
  }

  sendSocketMessage(room: string, data: MessageModel){
    this._emitToRoom(room, 'message', data)
  }



}
