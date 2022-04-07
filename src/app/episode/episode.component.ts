import { Component, OnInit } from '@angular/core';

import { EpisodesService } from '../services/episodes/episodes.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  episodes: any = {};

  constructor(private service: EpisodesService) { }

  ngOnInit(): void {
    this.service.getAllEpisodes().subscribe(episodes => {
      this.episodes = episodes.results;
      console.log(this.episodes);
    });
  }

}
