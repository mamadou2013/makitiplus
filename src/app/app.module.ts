import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfferService } from './services/offer.service';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    NavbarBottomComponent,
    HeaderComponent,
    SlideComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    OfferService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
