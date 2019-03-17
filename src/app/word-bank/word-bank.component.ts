import { Component, OnInit } from '@angular/core';
import { testWordBanks, WordBank } from './objects/word-bank';

@Component({
  selector: 'app-word-bank',
  templateUrl: './word-bank.component.html',
  styleUrls: ['./word-bank.component.css']
})
export class WordBankComponent implements OnInit {
  public wordBanks: Array<WordBank> = testWordBanks;
  public selectedWordBank: WordBank;

  constructor() { }

  ngOnInit() {
  }

}
