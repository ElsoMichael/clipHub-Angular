import { Component, OnInit } from '@angular/core';

import { TwitchApiCallsService } from '../../services/Apis/twitch-api-calls.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-channel-clips',
  templateUrl: './channel-clips.component.html',
  styleUrls: ['./channel-clips.component.css'],
  providers: [TwitchApiCallsService]
})
export class ChannelClipsComponent implements OnInit {

  id: any;

  clips: any;

  constructor(
    private twitch: TwitchApiCallsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
         this.id = params["id"]; 
      });
    
    this.channelClips();
  }

  channelClips() {
    this.twitch.getChannelClips(this.id)
      .subscribe(res => {
        this.clips = res.clips
        console.log(this.clips)
      })
  }
}
