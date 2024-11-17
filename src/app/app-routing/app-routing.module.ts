import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home/home.component';
import { ProductComponent } from '../product/product.component';
import { AppRoutingModule } from '../app.routes';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}