import { Component } from '@angular/core';
import { MoveCollectionService } from '../move-collection.service';


@Component({
  selector: 'app-remove-film',
  templateUrl: './remove-film.component.html',
  styleUrls: ['./remove-film.component.css'] 
})
export class RemoveFilmComponent {
  title = "";

  constructor(private movieService: MoveCollectionService) { };

  removeFilm() {
    this.movieService.removeMovies(this.title);
    this.title = "";
    console.log(this.movieService)
  }
}
