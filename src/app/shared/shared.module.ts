import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopBarComponent,
    LeftSidebarComponent,
    RightSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ComponentsModule,
    FormsModule,
  ],
  exports:[
    LeftSidebarComponent,
    RightSidebarComponent,
    ComponentsModule,
    FormsModule,
    TopBarComponent,

  ]
})
export class SharedModule { }
