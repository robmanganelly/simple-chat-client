export interface MessageModel {
  _id?: string,
  text: string,
  author:string,
  room:string,
  sent: number
}

export class MessageObject implements MessageModel{

  private _text: string;

  _id?: string | undefined;
  author: string;
  room: string;
  sent: number;

  constructor(
    text: string,
    author: string,
    room: string,
    sent: number,
    id?: string
  ){
    this._id = id,
    this._text = text,
    this.author = author,
    this.room = room,
    this.sent = sent
  }

  isOwn(userId: string): boolean{
    return this._id === userId;
  }
  get text(){
    return this._text.trim();
  }

  toJSON(){
    let jsonMsg: MessageModel =  {
      text: this.text,
      author: this.author,
      room: this.room,
      sent: this.sent
    };
    if (!this._id){
      return jsonMsg;
    }else{
      jsonMsg._id= this._id
      return jsonMsg;
    }
  }
}
