import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../Services/sidebar.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  events: string[] = [];
  opened!:boolean;

  constructor(private sidebar:SidebarService) { }

  ngOnInit(): void {
    this.sidebar.isOpen.subscribe(
      (res:boolean)=>{
        this.opened=res;
      }
    )
  }

}
