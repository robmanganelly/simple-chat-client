import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MaterialModule} from './modules/material/material.module'
import { AppRoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicDistComponent } from './components/basic-dist/basic-dist.component';
import { TypingBarComponent } from './components/typing-bar/typing-bar.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatBubbleComponent } from './components/chat-bubble/chat-bubble.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicDistComponent,
    TypingBarComponent,
    ChatWindowComponent,
    ChatBubbleComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
