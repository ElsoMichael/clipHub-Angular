import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { TwitchApiCallsService } from '../../services/twitch-api-calls.service';

@Component({
  selector: 'app-clip-info',
  templateUrl: './clip-info.component.html',
  styleUrls: ['./clip-info.component.css'],
  // Call The Provider For Twitch Api
  providers: [TwitchApiCallsService]
})
export class ClipInfoComponent implements OnInit {

  info: any;

  constructor(
    private route: ActivatedRoute,
    private routes: Routes,
    private twitchApi: TwitchApiCallsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getClipInfo(params['id']);
    });
  }

  getClipInfo(id) {
    this.twitchApi.getClipInfo(id)
      .subscribe((info) => {
        this.info = info;
      });
  }
}