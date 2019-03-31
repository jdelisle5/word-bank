import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from 'protractor';
import { Observable } from 'rxjs';

export enum RequestType {
  synonyms = "synonyms",
}

export interface WordsApiResult {
  word: string;
}

export interface SynonymResult extends WordsApiResult {
  synonyms: Array<string>;
}

export interface FrequencyResult {
  zipf: number;
  perMillion: number;
  diversity: number;
}

const httpOptions = {
  headers: new HttpHeaders({
    'X-RapidAPI-Key': '2b1b2d8f26mshf64ac7376b96bcep16cedcjsn9e75e065a779'
  })
};

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
    return this.http.get<WordsApiResult>(`https://wordsapiv1.p.rapidapi.com/words/${word}/${requestType}`, httpOptions);
  }
}
