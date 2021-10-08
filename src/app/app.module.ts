import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiltroComponent } from './filtro/filtro.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BootCardComponent } from './boot-card/boot-card.component';
import { BootishopComponent } from './bootishop/bootishop.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NosostrosComponent } from './nosostros/nosostros.component';
import { NosotrosModule } from './nosotros/nosotros.module';

@NgModule({
  declarations: [
    AppComponent,
    FiltroComponent,
    NavbarComponent,
    HomeComponent,
    ProductFilterComponent,
    ProductComponent,
    ProductCardComponent,
    BootCardComponent,
    BootishopComponent,
    AboutComponent,
    FooterComponent,
    NosostrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NosotrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
