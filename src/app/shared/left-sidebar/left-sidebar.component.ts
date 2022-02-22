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
  contentMargin:number=16.8
  constructor(private sidebar:SidebarService) {
    this.sidebar.isOpen.subscribe(
      (res:boolean)=>{
        this.opened=res;
        console.log(this.opened)
        if(!this.opened){
          this.contentMargin=4.75
        }
        else{
          this.contentMargin=16.8
        }
      }
    )
   }

  ngOnInit(): void {
   
  }

}
