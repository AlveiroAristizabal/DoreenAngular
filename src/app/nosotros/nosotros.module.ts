import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FooterComponent } from '../footer/footer.component'; 

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';
// import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [
    NosotrosComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ]
})
export class NosotrosModule { }
