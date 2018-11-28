import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})

export class GamePageComponent implements OnInit {

  constructor(private ws: WordsService) { }

  words: any = [];
  seconds: number = 30
  timer: any; 

  ngOnInit() {
    console.log("work");
    this.ws.getWordsData().subscribe(data => {
      this.words = this.shuffle(data);
    });

    this.timer = setTimeout(() => {
      alert("Time's up!");
    }, 5000);

  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  // Fisher-Yates shuffle algorithm used to ensure the 5 words are generated in a random order
  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

}//end of class
    



/*
  countdown(number) {
    const el: HTMLElement = document.getElementById('test');
    setTimeout(() => {

    }, 1000);
  }



<script type = "text/javascript">
    function countdown(secs, elem){
        var element = document.getElementById(elem);
        element.innerHTML = "Wait for " + secs + " seconds";
        if (secs > 0){
            secs--;
            var timer= setTimeout('countdown('+ secs + ', "' + elem + '")', 1000);
        } else {
            clearTimeout(timer);
        }
        
   }

*/
