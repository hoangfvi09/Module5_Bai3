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
    word: 'cat',
    mean: 'meo`'},
    {
    word: 'cat',
    mean: 'meo`'},
  ]

  constructor() { }
}
