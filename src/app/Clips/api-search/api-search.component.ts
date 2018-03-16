import { Component, OnInit } from '@angular/core';

import { TwitchApiCallsService } from '../../services/Apis/twitch-api-calls.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-api-search',
  templateUrl: './api-search.component.html',
  styleUrls: ['./api-search.component.css'],
  providers: [TwitchApiCallsService]
})
export class ApiSearchComponent implements OnInit {

  newSearch: string

  searchedGame: any;

  searchedChannel: any;

  constructor(
    private twitch: TwitchApiCallsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchInputGame() {
    this.twitch.searchGame(this.newSearch)
      .subscribe(res => {
        this.searchedGame = res.games;
        console.log(res);
      });

    this.twitch.searchChannel(this.newSearch)
      .subscribe(res => {
        this.searchedChannel = res.channels;
        console.log(res)
      });  
  }

}
