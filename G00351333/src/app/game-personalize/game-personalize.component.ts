import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-game-personalize',
  templateUrl: './game-personalize.component.html',
  styleUrls: ['./game-personalize.component.scss']
})
export class GamePersonalizeComponent implements OnInit {

  words: any = [];
  constructor(private ws: WordsService) { }

  ngOnInit() {
    this.ws.getWordsData().subscribe(data => {
      this.words = data;
    });
  }

  onDelete(id: String) {
    console.log(id);
    this.ws.deleteWord(id).subscribe();
  }

}
