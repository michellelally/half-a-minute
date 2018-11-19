import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Word } from '../word.model';



@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http: HttpClient) { }

  getWordsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/words");
  }

  private words: Word[] = [];

  getWords() {
    return [...this.words];
  }

  addWord(word: string): Observable<any> {
    console.log("WordService addWord " + word);
    const words: Word = { word: word };
    return this.http.post("http://localhost:8081/api/words", words);
  }

  deleteWord(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/words/" + id)
  }
}
