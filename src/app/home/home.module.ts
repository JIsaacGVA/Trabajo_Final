import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { navbarModule } from '../navbar/navbar.module';



import { HomeRoutingModule } from './home-routingmodule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    HomeComponent, 
   
       ],
  imports: [
    CommonModule,
    navbarModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
 
})
export class HomeModule { }
