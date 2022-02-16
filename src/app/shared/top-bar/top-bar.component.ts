import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../Services/sidebar.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  radius!: number;
  constructor(private sideBar:SidebarService) { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.sideBar.sidebarToggle()
  }
}
