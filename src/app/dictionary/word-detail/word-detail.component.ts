import {Component, OnInit} from '@angular/core';
import {SongService} from "../../service/song.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {DictionaryService} from "../../service/dictionary.service";
import {Word} from "../../model/word";

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {
  engWord: Word | undefined

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute,
              ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      // @ts-ignore
      this.engWord = this.dictionaryService.translate(word);
    });
  }

}
