import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {Word} from "../../model/word";

@Component({
  selector: 'app-dict-page',
  templateUrl: './dict-page.component.html',
  styleUrls: ['./dict-page.component.css']
})
export class DictPageComponent implements OnInit {
  wordList: Word[]=[]

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(){
    this.getAll()

  }
  getAll(){
    this.wordList = this.dictionaryService.wordList
  }

}
