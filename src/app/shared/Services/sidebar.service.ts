import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  navOpen:boolean=false;
  open:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(this.navOpen);
  public isOpen=this.open.asObservable();
  constructor() { }
  sidebarToggle(){
    this.navOpen=!this.navOpen
    return this.open.next(this.navOpen);
  }
}
