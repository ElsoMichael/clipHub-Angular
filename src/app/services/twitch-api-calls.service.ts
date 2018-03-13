import { Injectable } from '@angular/core';

// Angulars HttpModule
import { Http, Response, RequestOptions, Headers} from '@angular/http';

// Import Promise Base Response
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TwitchApiCallsService {

  // Base Url For Twitch Api
  BASE_URL: string = 'https://api.twitch.tv/kraken/clips/top';

  constructor(private http: Http) { }

  // Landing Page Function
  // Get Top Clips of All Time
  getTop12All() {
    // Append Twitch Api Headers
    let headers = new Headers();

    // Needed Accept JSON File
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');

    // Add Twitch Api Key Here
    headers.append(/* Api Key */, /* Api Key Value*/);

    // Request Options for Search
    let opts = new RequestOptions();
    opts.headers = headers;

    // Api EndPoint
    let url = `${this.BASE_URL}?limit=12&&period=all`;

    // Return Promise Base Response
    return this.http.get(url, opts)
      .toPromise()
      .then((res: Response) => res.json())
  }


  // Get Top Clips of All Time
  // More Clips Link
  getAll() {
    // Append Twitch Api Headers
    let headers = new Headers();

    // Needed Accept JSON File
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');

    // Add Twitch Api Key Here
    headers.append(/* Api Key */, /* Api Key Value*/);

    // Request Options for Search
    let opts = new RequestOptions();
    opts.headers = headers;

    // Api EndPoint
    let url = `${this.BASE_URL}?limit=50&&period=all`;

    // Return Promise Base Response
    return this.http.get(url, opts)
      .toPromise()
      .then((res: Response) => res.json())
  }



  // Landing Page Function
  // Get Top Clips of The Day
  getTop12Today() {
    // Append Twitch Api Headers
    let headers = new Headers();

    // Needed Accept JSON File
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');

    // Add Twitch Api Key Here
    headers.append(/* Api Key */, /* Api Key Value*/);

    // Request Options for Search
    let opts = new RequestOptions();
    opts.headers = headers;

    // Api EndPoint
    let url = `${this.BASE_URL}?limit=12&period=day`;

    // Return Promise Base Response
    return this.http.get(url, opts)
      .toPromise()
      .then((res: Response) => res.json())
  }


  // Get Top Clips of The Day
  // More Clips Link
  getToday() {
    // Append Twitch Api Headers
    let headers = new Headers();

    // Needed Accept JSON File
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');

    // Add Twitch Api Key Here
    headers.append(/* Api Key */, /* Api Key Value*/);

    // Request Options for Search
    let opts = new RequestOptions();
    opts.headers = headers;

    // Api EndPoint
    let url = `${this.BASE_URL}?limit=50&period=day`;

    // Return Promise Base Response
    return this.http.get(url, opts)
      .toPromise()
      .then((res: Response) => res.json())
  }


  
  // Landing Page Function
  // Get Top Clips of The Week
  getTop12Week() {
    // Append Twitch Api Headers
    let headers = new Headers();

    // Needed Accept JSON File
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');

    // Add Twitch Api Key Here
    headers.append(/* Api Key */, /* Api Key Value*/);

    // Request Options for Search
    let opts = new RequestOptions();
    opts.headers = headers;

    // Api EndPoint
    let url = `${this.BASE_URL}?limit=12`;

    // Return Promise Base Response
    return this.http.get(url, opts)
      .toPromise()
      .then((res: Response) => res.json())
  }


  // Get Top Clips of The Week
  // More Clips Link
  getWeek() {
    // Append Twitch Api Headers
    let headers = new Headers();

    // Needed Accept JSON File
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');

    // Add Twitch Api Key Here
    headers.append(/* Api Key */, /* Api Key Value*/);

    // Request Options for Search
    let opts = new RequestOptions();
    opts.headers = headers;

    // Api EndPoint
    let url = `${this.BASE_URL}?limit=50`;

    // Return Promise Base Response
    return this.http.get(url, opts)
      .toPromise()
      .then((res: Response) => res.json())
  }



  // Landing Page Function
  // Get Top Clips of The Month
  getTop12Month() {
    // Append Twitch Api Headers
    let headers = new Headers();

    // Needed Accept JSON File
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');

    // Add Twitch Api Key Here
    headers.append(/* Api Key */, /* Api Key Value*/);

    // Request Options for Search
    let opts = new RequestOptions();
    opts.headers = headers;

    // Api EndPoint
    let url = `${this.BASE_URL}?limit=12&period=month`;

    // Return Promise Base Response
    return this.http.get(url, opts)
      .toPromise()
      .then((res: Response) => res.json())
  }


  // Get Top Clips of The Month
  // More Clips Link
  getMonth() {
    // Append Twitch Api Headers
    let headers = new Headers();

    // Needed Accept JSON File
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');

    // Add Twitch Api Key Here
    headers.append(/* Api Key */, /* Api Key Value*/);

    // Request Options for Search
    let opts = new RequestOptions();
    opts.headers = headers;

    // Api EndPoint
    let url = `${this.BASE_URL}?limit=50&period=month`;

    // Return Promise Base Response
    return this.http.get(url, opts)
      .toPromise()
      .then((res: Response) => res.json())
  }

}