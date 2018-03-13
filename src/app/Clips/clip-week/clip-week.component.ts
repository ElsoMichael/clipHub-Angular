import { Component, OnInit } from '@angular/core';

// Import Service For Twitch Api
import { TwitchApiCallsService } from '../../services/twitch-api-calls.service';

@Component({
  selector: 'app-clip-week',
  templateUrl: './clip-week.component.html',
  styleUrls: ['./clip-week.component.css'],
  // Call The Provider For Twitch Api
  providers: [TwitchApiCallsService]
})

export class ClipWeekComponent implements OnInit {

  // Store Results of Service Calls
  clipWeek: any;

  // Set Service Call
  constructor(private clips: TwitchApiCallsService) { }

  ngOnInit() {

    // Function On Load
    this.clips.getWeek()
      .then((clips) => {
        // Call to Store Result
        this.clipWeek = clips.clips
      })
  }

}
