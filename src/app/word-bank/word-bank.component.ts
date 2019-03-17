import { Component, OnInit } from '@angular/core';
import { testWordBanks, WordBank, Word, RowState } from './objects/word-bank';
import { FormGroup, FormControl } from '@angular/forms';
import { WordsApiService, SynonymResult } from '../words-api/words-api.service';

// TODO handle duplicate words in some manner
@Component({
  selector: 'app-word-bank',
  templateUrl: './word-bank.component.html',
  styleUrls: ['./word-bank.component.css']
})
export class WordBankComponent implements OnInit {
  public wordBanks: Array<WordBank> = testWordBanks;
  public selectedWordBank: WordBank;
  public formGroup: FormGroup

  constructor(private wordsApiService: WordsApiService) { }

  ngOnInit() {
    // initialize all word bank words to saved and not saving
    this.selectedWordBank = this.wordBanks[0];
    this.wordBanks.forEach((wordBank: WordBank) => {
      wordBank.words = wordBank.words.map((word: Word & RowState) => {
        word.saved = true;
        word.saving = false;
        return word;
      })
    })
  }

  public saveWord(word: Word & RowState) {
    word.saving = true;
    this.wordsApiService.getWordSynonyms(word.name).subscribe((result: SynonymResult) => {
      word.synonyms = result.synonyms;
      word.saved = true;
    },
    (error: any) => {
      console.error(error);
    },
    () => word.saving = false)
  }

  public deleteWord(word: Word) {
    let wordInedx = this.selectedWordBank.words.findIndex(w => w.name == word.name);
    this.selectedWordBank.words.splice(wordInedx, 1);
  }

  public addWord() {
    let addedWord: Word & RowState = {
      name: "",
      synonyms: null,
      saved: false,
      saving: false
    };
    this.selectedWordBank.words.push(addedWord);
  }
}
