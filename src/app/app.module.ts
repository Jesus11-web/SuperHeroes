import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './Heroes/heroes.module';
import { ContadorComponent } from './contador/contador.component';
import { ContadorModule } from './Heroes/contador.module';
import { VillanoComponent } from './villano/villano.component';


@NgModule({
  declarations: [
    AppComponent,
    VillanoComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
