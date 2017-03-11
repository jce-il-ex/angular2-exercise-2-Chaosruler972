import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  myList = [
    {
      id: 1,
      txt: 'Sagi'
    },
    {
      id: 2,
      txt: 'Avi'
    },
    {
      id: 3,
      txt: 'Meitar'
    },
    {
      id: 4,
      txt: 'Pini'
    }
  ];
  constructor() 
  {
  }

  ngOnInit() {
  }

}
