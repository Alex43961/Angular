import { Component } from '@angular/core';
import { MoveCollectionService } from '../move-collection.service';
import { Movies } from '../data-movies';


@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css'],
  
})
export class TitleListComponent {
  movies: Movies[] = [];
  showMovieTitles: boolean = true;

  constructor(public moviesService: MoveCollectionService) { }
  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
  }


}
