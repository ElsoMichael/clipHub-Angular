import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser'

// Import Service For Twitch Api
import { TwitchApiCallsService } from '../../services/Apis/twitch-api-calls.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-clip',
  templateUrl: './single-clip.component.html',
  styleUrls: ['./single-clip.component.css'],
  providers: [TwitchApiCallsService]
})
export class SingleClipComponent implements OnInit {

  slug: any;

  singleClip: any = {
    title: '',
    url: '',
    game: '',
    channel: '',
    creator: '',
    view:'',
    twitchUrl: ''
  };

  trendingClip: any;

  constructor(
    private twitch: TwitchApiCallsService,
    private route: ActivatedRoute,
    private clean: DomSanitizer
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
         this.slug = params["Slug"]; 
      });

    this.getSingleClip();

    this.getTrending();
  }

  getEmbedUrl() {
    return this.clean.bypassSecurityTrustResourceUrl(this.singleClip.url);
  }

  getSingleClip() {
    this.twitch.getSingleClip(this.slug)
    .subscribe(res => {
      this.singleClip = {
        title: res.title,
        url: res.embed_url,
        game: res.game,
        channel: res.broadcaster.display_name,
        creator: res.curator.display_name,
        view: res.views,
        twitchUrl: res.broadcaster.channel_url
      }
    })
  }

  getTrending() {
    this.twitch.getTrendingClips(this.singleClip.game)
    .subscribe(res => this.trendingClip = res.clips)
  }

}
