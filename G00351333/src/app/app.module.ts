import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WordsService} from './services/words.service';

import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { GamePageComponent } from './game-page/game-page.component';
import { GamePersonalizeComponent } from './game-personalize/game-personalize.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';
import { AddWordsComponent } from './add-words/add-words.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditWordsComponent } from './edit-words/edit-words.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'rules',
    component: HomePageComponent
  },
  {
    path: 'game',
    component: GamePageComponent
  },
  {
    path: 'personalize',
    component: GamePersonalizeComponent
  },
  {
    path: 'add',
    component: AddWordsComponent
  }, 
  {
    path: 'edit/:id',
    component: EditWordsComponent
  }, 
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    GamePersonalizeComponent,
    AddWordsComponent,
    HomePageComponent,
    EditWordsComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    FormsModule      
  ],
  providers: [WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
