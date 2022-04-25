import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MessageModel, MessageObject } from '../models/message-model';
import { loggedUser, UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userSubject: BehaviorSubject<loggedUser| null> = new BehaviorSubject<loggedUser| null>(null);
  messageSubject: Subject<MessageObject> = new Subject<MessageObject>();


  constructor() { }

  //getters
  get loggedUser(): loggedUser{
    try{
    const userData: UserModel = JSON.parse(localStorage.getItem('loggedUser') as string || 'null');
    return new loggedUser(userData.username,userData.email, userData.token as string, userData._id)
    }catch { // TODO remove this block after implement real logging
      return new loggedUser('robert','robe@gmail.com','this_is_token','Robert_id');
    }
  };





  activeRoom: any = 'default'; // for first dev stage

}
