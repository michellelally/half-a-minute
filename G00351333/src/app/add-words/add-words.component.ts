import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent implements OnInit {

  constructor(private ws: WordsService) { }

  ngOnInit() {
    clearTimeout();
  }

  onAddWord(form: NgForm) {
    this.ws.addWord(form.value.word).subscribe();
    console.log(form.value);
    form.resetForm();
  }

}
