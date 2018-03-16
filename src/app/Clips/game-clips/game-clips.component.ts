import { Component, OnInit } from '@angular/core';

import { TwitchApiCallsService } from '../../services/Apis/twitch-api-calls.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-clips',
  templateUrl: './game-clips.component.html',
  styleUrls: ['./game-clips.component.css'],
  providers: [TwitchApiCallsService]
})
export class GameClipsComponent implements OnInit {

  slug: any;

  gameClips: any;

  constructor(
    private twitch: TwitchApiCallsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
         this.slug = params["slug"]; 
      });
    
    this.gameClip();
  }
  
  gameClip() {
    this.twitch.getGameClips(this.slug)
      .subscribe(res => {
        this.gameClips = res.clips
        console.log(this.gameClips);
      })
  }

}
