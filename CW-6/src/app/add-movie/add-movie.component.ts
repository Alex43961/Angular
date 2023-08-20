import { Component } from '@angular/core';
import { MoveCollectionService } from '../move-collection.service';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'] 
})
export class AddMovieComponent {
title:string = "";
poster:string = "";

constructor(private movieService: MoveCollectionService){};
addMovie(){
  this.movieService.addMovies(this.title, this.poster);
  this.title = "";
  this.poster = "";
  console.log(this.movieService);  
}
}
