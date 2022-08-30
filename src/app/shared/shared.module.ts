import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftmenuComponent } from './components/admin/leftmenu/leftmenu.component';
import { AdminlayoutComponent } from './components/admin/adminlayout/adminlayout.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { BlogLayoutComponent } from './components/blog/blog-layout/blog-layout.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
  
    AuthLayoutComponent,
    BlogLayoutComponent,
    LeftmenuComponent,
    AdminlayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports:[
    ReactiveFormsModule,
    
  ]
})
export class SharedModule { }
