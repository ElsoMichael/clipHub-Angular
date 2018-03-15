import { Component, OnInit } from '@angular/core';

// Import Service For Twitch Api
import { TwitchApiCallsService } from '../../services/Apis/twitch-api-calls.service';

@Component({
  selector: 'app-clip-today',
  templateUrl: './clip-today.component.html',
  styleUrls: ['./clip-today.component.css'],
  // Call The Provider For Twitch Api
  providers: [TwitchApiCallsService]
})

export class ClipTodayComponent implements OnInit {

  // Store Results of Service Calls
  clipToday: any;

  // Set Service Call
  constructor(private clips: TwitchApiCallsService) { }

  ngOnInit() {

    // Function On Load
    this.clips.getToday()
      .subscribe((clips) => {
        // Call to Store Result
        this.clipToday = clips.clips
      })
  }

}
