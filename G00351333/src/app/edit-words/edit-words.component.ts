import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute, RouterModule, Routes, Router } from '@angular/router';
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-edit-words',
  templateUrl: './edit-words.component.html',
  styleUrls: ['./edit-words.component.scss']
})
export class EditWordsComponent implements OnInit {

  word: any = [];
  constructor(private router: Router, private route: ActivatedRoute, private ws: WordsService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
    this.ws.getWord(this.route.snapshot.params['id']).subscribe(data => {
      this.word = data;
    })
  }

  onEditWord(form: NgForm) {
    this.ws.updateWord(this.word[0]._id, form.value.word).subscribe(data => {
      this.router.navigate(['/personalize']);
    });
  }
}
