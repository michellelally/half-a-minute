import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Words } from '../word.model';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http: HttpClient) { }

  getWordsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/words");
  }

  addWord(word: string): Observable<any> {
    console.log("service addWord: "+ word);
    const words: Words = { words: word };
    return this.http.post("http://localhost:8081/api/words", words);
  }

  deleteWord(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/words/" + id)
  }

  getWord(id: String): Observable<any> {
    return this.http.get("http://localhost:8081/api/words/" + id)
  }

  updateWord(id: string, word: string): Observable<any> {
    const words: Words = { words: word };
    return this.http.put("http://localhost:8081/api/words/" + id, words);
  }

}
