import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  backgroundColor = '#D9D9D9';
  progressColor = '#4CAF50';
  @Input() progress!: number;

  constructor() {
  }

  ngOnInit() {
    this.loading();
  }

  loading() {
    let interval = setInterval(() => {
      this.progress += 5;
      if (this.progress > 100) {
        clearInterval(interval);
        this.progress = 0
        this.loading()
      }
    }, 1000);
  }
}
