import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  template:
  `
  <div class="radio">'
    <img src="/assets/radio-bg.png" class="bg">
    <div class="stations">
      <img src="/assets/pwr.png">
      <img src="/assets/laluna.png">
      <img src="/assets/zip-fm.png">
    </div>

    <div class="mPlayers">
      <audio src="http://94.101.239.3:8000/PHR.mp3" controls="controls" class="mPlayer"></audio>
      <audio src="http://www.radio.lt/media/laluna" controls="controls" class="mPlayer"></audio>
      <audio src="http://www.radio.lt/media/zipfm" controls="controls" class="mPlayer"></audio>
    </div>
  </div>
  `,
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
