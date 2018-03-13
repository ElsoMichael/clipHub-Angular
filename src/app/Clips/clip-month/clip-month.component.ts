import { Component, OnInit } from '@angular/core';

// Import Service For Twitch Api
import { TwitchApiCallsService } from '../../services/twitch-api-calls.service';

@Component({
  selector: 'app-clip-month',
  templateUrl: './clip-month.component.html',
  styleUrls: ['./clip-month.component.css'],
  // Call The Provider For Twitch Api
  providers: [TwitchApiCallsService]
})

export class ClipMonthComponent implements OnInit {

  // Store Results of Service Calls
  clipMonth: any;

  // Set Service Call
  constructor(private clips: TwitchApiCallsService) { }

  ngOnInit() {

    // Function On Load
    this.clips.getMonth()
      .then((clips) => {
        // Call to Store Result
        this.clipMonth = clips.clips
      })
  }

}
