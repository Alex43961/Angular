import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoveCollectionService } from './move-collection.service';
import { FormsModule } from '@angular/forms';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { RemoveFilmComponent } from './remove-film/remove-film.component';
import { MoviesListComponent } from './movies-list/movies-list.component';



@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    RemoveFilmComponent,
    MoviesListComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule   
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
