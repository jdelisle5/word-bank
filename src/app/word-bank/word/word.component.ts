import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Word, RowState } from "../objects/word-bank";
import { FormGroup, FormControl } from '@angular/forms';

/**
 * @summary represents a single row of a word from a wordbank.
 *  with the ability to delete the word. showing the synonyms related to word.
 */
@Component({
  selector: "app-word-bank-word",
  templateUrl: "./word.component.html",
  styleUrls: ["./word.component.css"],
})
export class WordComponent implements OnInit {
  @Input() word: Word & RowState;
  @Output() delete = new EventEmitter<Word>();
  @Output() save = new EventEmitter<Word>();

  public formGroup: FormGroup;

  public ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl("")
    });
  }
}
