import { Component, OnInit } from '@angular/core';
import { MoveCollectionService } from '../move-collection.service';
import { Movies } from '../data-movies';
import { Input } from '@angular/core';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers: [MoveCollectionService]
})
export class MoviesListComponent implements OnInit {
  movies: Movies[] = [];
  showMovieTitles: boolean = true;

  constructor(public moviesService: MoveCollectionService) { }
  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
  }

  toggleMovieTitles() {
    this.showMovieTitles = !this.showMovieTitles;
  }
  ngOnCheck() {
    console.log(this.moviesService.getMovies())
  }


}
