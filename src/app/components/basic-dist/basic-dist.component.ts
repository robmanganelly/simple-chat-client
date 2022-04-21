import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-dist',
  templateUrl: './basic-dist.component.html',
  styleUrls: ['./basic-dist.component.scss']
})
export class BasicDistComponent implements OnInit {

  isDarkMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onclickThemeMode(): void{
    this.isDarkMode = !this.isDarkMode;
    // TODO implement dark mode
    alert('coming soon')
  }

}
