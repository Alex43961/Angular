import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoveCollectionService {

  constructor() { 
    private movesCollection :Move[] = [
      {move: "Hobbit",
      poster: URL("https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fru%2F3%2F32%2FThe_Hobbit._An_Unexpected_Journey.jpg&tbnid=JFUwirvo7lFAZM&vet=12ahUKEwikwtCRj9-AAxXqEBAIHbLyD7IQMygIegQIARBb..i&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%25A5%25D0%25BE%25D0%25B1%25D0%25B1%25D0%25B8%25D1%2582%3A_%25D0%259D%25D0%25B5%25D0%25B6%25D0%25B4%25D0%25B0%25D0%25BD%25D0%25BD%25D0%25BE%25D0%25B5_%25D0%25BF%25D1%2583%25D1%2582%25D0%25B5%25D1%2588%25D0%25B5%25D1%2581%25D1%2582%25D0%25B2%25D0%25B8%25D0%25B5&docid=qfuh5Y08jckJ6M&w=315&h=444&q=%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%20%D0%BA%20%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%83%20%20%D1%85%D0%BE%D0%B1%D0%B1%D0%B8%D1%82&ved=2ahUKEwikwtCRj9-AAxXqEBAIHbLyD7IQMygIegQIARBb") 
      },
      {
        move: "Garry Potter",
        poster: URL("https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fru%2Fb%2Fb4%2FHarry_Potter_and_the_Philosopher%2527s_Stone_%25E2%2580%2594_movie.jpg&tbnid=IHk52QoMk22BwM&vet=12ahUKEwj-qOWkkt-AAxUSGRAIHYtkBlcQMygDegQIARA5..i&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%2593%25D0%25B0%25D1%2580%25D1%2580%25D0%25B8_%25D0%259F%25D0%25BE%25D1%2582%25D1%2582%25D0%25B5%25D1%2580_%25D0%25B8_%25D1%2584%25D0%25B8%25D0%25BB%25D0%25BE%25D1%2581%25D0%25BE%25D1%2584%25D1%2581%25D0%25BA%25D0%25B8%25D0%25B9_%25D0%25BA%25D0%25B0%25D0%25BC%25D0%25B5%25D0%25BD%25D1%258C_(%25D1%2584%25D0%25B8%25D0%25BB%25D1%258C%25D0%25BC)&docid=QlGwLUUcFR6jfM&w=575&h=827&q=%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%20%D0%BA%20%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%83%20%D0%B3%D0%B0%D1%80%D1%80%D0%B8%20%D0%BF%D0%BE%D1%82%D1%82%D0%B5%D1%80&ved=2ahUKEwj-qOWkkt-AAxUSGRAIHYtkBlcQMygDegQIARA5")
      }
  ]
}
}
