import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserConteinerComponent } from './user-conteiner/user-conteiner.component';
import { OrderConteinerComponent } from './order-conteiner/order-conteiner.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSingleComponent } from './order-single/order-single.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserConteinerComponent,
    OrderConteinerComponent,
    UserListComponent,
    UserSingleComponent,
    UserDetailComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
