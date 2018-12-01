import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-personalize',
  templateUrl: './game-personalize.component.html',
  styleUrls: ['./game-personalize.component.scss']
})
export class GamePersonalizeComponent implements OnInit {

  words: any = [];
  constructor(private ws: WordsService) { }

  ngOnInit() {
    //Getting data from the Word Service and assigning it to local array
    this.ws.getWordsData().subscribe(data => {
      this.words = data;
    });
  }

  onDelete(id: String) {
    console.log(id);
    //Sending the id of the object selected to the service through the deleteWord() method
    this.ws.deleteWord(id).subscribe(() => {
      //refresh the page
      this.ngOnInit();
    })
  }

}
