import { Injectable } from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: Word[] = [
    {
    word: 'cat',
    mean: 'meo`'},
    {
    word: 'dog',
    mean: 'cho'},
    {
    word: 'elephant',
    mean: 'voi'},
    {
    word: 'mouse',
    mean: 'chuo^t.'},
    {
    word: 'chicken',
    mean: 'ga`'},
    {
    word: 'pig',
    mean: 'lo?n.'},
  ]

  constructor() { }
  showList(){
    return this.wordList;
  }

  translate(word: String){
    return this.wordList.find(item =>item.word === word)
  }

}
