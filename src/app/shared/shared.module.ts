import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { LeftmenuComponent } from './components/admin/leftmenu/leftmenu.component';
import { AdminlayoutComponent } from './components/admin/adminlayout/adminlayout.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
 
 
    LeftmenuComponent,
    AdminlayoutComponent,
    HeaderComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports:[
    ReactiveFormsModule,
    HeaderComponent,
    LeftmenuComponent
    
  ]
})
export class SharedModule { }
