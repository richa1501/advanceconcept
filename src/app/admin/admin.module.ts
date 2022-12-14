import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BotListComponent } from './components/bot/bot-list/bot-list.component';
import { BotAddEditComponent } from './components/bot/bot-add-edit/bot-add-edit.component';
import { FaqListComponent } from './components/faq/faq-list/faq-list.component';
import { FaqAddEditComponent } from './components/faq/faq-add-edit/faq-add-edit.component';
import { BloglayoutComponent } from '../shared/components/blog/bloglayout/bloglayout.component';
import { AuthLayoutComponent } from '../shared/components/auth/auth-layout/auth-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BotListComponent,
    BotAddEditComponent,
    FaqListComponent,
    FaqAddEditComponent,
    BloglayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
