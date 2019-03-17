import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { Observable } from 'rxjs';

export enum RequestType {
  synonyms,
}

export interface WordsApiResult {
  word: string;
}

export interface SynonymResult extends WordsApiResult {
  synonym: Array<string>;
}

export interface FrequencyResult {
  zipf: number;
  perMillion: number;
  diversity: number;
}

@Injectable({
  providedIn: 'root'
})
export class WordsApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getWordSynonyms(word: string): Observable<SynonymResult> {
    return this.makeWordsApiRequest(word, RequestType.synonyms);
  }

  private makeWordsApiRequest(word: string, requestType: RequestType): Observable<any> {
    return this.http.get<WordsApiResult>(`https://wordsapiv1.p.rapidapi.com/words/${word}/${requestType}`);
  }
}
