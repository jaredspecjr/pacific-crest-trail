import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result: string;

  constructor() {
  }

  ngOnInit() {
    this.countDown();
    this.result;
  }

  countDown = function() {
    setInterval(() => {
      let releaseDate: number = new Date('Aug 12, 2018 00:00:00').getTime();
      let currentDate: number = new Date().getTime();
      let distance = releaseDate - currentDate;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let result = days.toString() + 'D' + ' '  + hours.toString() + 'H' + ' ' + minutes.toString()+ 'M' + ' ' + seconds.toString() + 'S';
      this.result = result;
    }, 1000);
  }


}
