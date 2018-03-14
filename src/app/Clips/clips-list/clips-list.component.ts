import { Component, OnInit } from '@angular/core';

// Import Service For Twitch Api
import { TwitchApiCallsService } from '../../services/twitch-api-calls.service';

@Component({
  selector: 'app-clips-list',
  templateUrl: './clips-list.component.html',
  styleUrls: ['./clips-list.component.css'],
  // Call The Provider For Twitch Api
  providers: [TwitchApiCallsService]
})

export class ClipsListComponent implements OnInit {

  // Store's Results of Service Calls
  clipAll: any;
  clipToday: any;
  clipWeek: any;
  clipMonth: any;

  // Set Service Call
  constructor(private clips: TwitchApiCallsService) { }

  ngOnInit() {

    // Function On Load
    this.clips.getTop12All()
      .then((clip) => {
        // Call to Store Result
        this.clipAll = clip.clips;
      });

    // Function On Load
    this.clips.getTop12Today()
      .then((clips) => {
        // Call to Store Result
        this.clipToday = clips.clips
      })

    // Function On Load
    this.clips.getTop12Week()
      .then((clips) => {
        // Call to Store Result
        this.clipWeek = clips.clips
      })
    
    // Function On Load
    this.clips.getTop12Month()
      .then((clips) => {
        // Call to Store Result
        this.clipMonth = clips.clips
      })
  }
}
