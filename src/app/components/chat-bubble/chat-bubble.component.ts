import { Component, Input, OnInit } from '@angular/core';
import { MessageObject } from 'src/app/models/message-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {

  // userSentTheMessage: boolean = /*this is a faked value for test purposes */ Math.random()*100 > 50;

  @Input() msgContent: MessageObject| null = null;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  get userSentTheMessage(): boolean{
    return this.msgContent?.isOwn(this.dataService.loggedUser._id as string) as boolean;
  }

  get author(): string{
    return this.msgContent?.author as string;
  }
  get sentAt(): number{
    return this.msgContent?.sent as number;
  }
  get msgLines(): string[]{
    return (this.msgContent?.text as string).split('\n');
  }

}
