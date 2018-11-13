import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WordsService} from './services/words.service';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GamePageComponent } from './game-page/game-page.component';

import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'game',
    component: GamePageComponent
  },
  {
    path: 'game',
    component: GamePageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
