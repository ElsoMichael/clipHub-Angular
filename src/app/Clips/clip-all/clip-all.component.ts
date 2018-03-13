import { Component, OnInit } from '@angular/core';

// Import Service For Twitch Api
import { TwitchApiCallsService } from '../../services/twitch-api-calls.service';

@Component({
  selector: 'app-clip-all',
  templateUrl: './clip-all.component.html',
  styleUrls: ['./clip-all.component.css'],
  // Call The Provider For Twitch Api
  providers: [TwitchApiCallsService]
})

export class ClipAllComponent implements OnInit {

  // Store Results of Service Calls
  clipAll: any;

  // Set Service Call
  constructor(private clips: TwitchApiCallsService) { }

  ngOnInit() {

    // Function On Load
    this.clips.getAll()
      .then((clip) => {
        // Call to Store Result
        this.clipAll = clip.clips;
      });
  }

}
