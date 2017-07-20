import { Component, OnInit, Input } from '@angular/core';
//import model
import { Player } from '../player.model';
import { Character } from '../character.model';
//import services
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss'],
  providers: [ PlayerService]
})
export class GameboardComponent implements OnInit {
  @Input() childPlayersList;
  constructor() { }

  ngOnInit() {
    console.log(this.childPlayersList);
  }

}