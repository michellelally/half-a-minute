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
  countdown: any; 

  ngOnInit() {
    //Getting the data from the Word Service and assigning it to local array of objects
    this.ws.getWordsData().subscribe(data => {
      this.words = this.shuffle(data);
    });

    //Using the setInterval method to display a countdown of how much time they have left 
    this.countdown = setInterval(() => {
      this.seconds--;
      if(this.seconds <= 0 )
        clearTimeout(this.countdown);
    }, 1000);

    //Alerts the user when the 30 seconds are up
    this.timer = setTimeout(() => {
      alert("Time's up!");
    }, 30000);

  }

  
  ngOnDestroy() {
    //Clear the timer when the user has navigated to another page
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

  refresh(){
    window.location.reload();
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
