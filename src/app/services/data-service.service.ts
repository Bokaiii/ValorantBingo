import { Injectable } from '@angular/core';
import { BingoItem } from '../../typings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private actionAmt: number = 8;
  public storedList: BingoItem[] = [];

  constructor() { }

  public getBingoBoard(): BingoItem[] {
    //Reset board
    let selectedBingoItems: BingoItem[] = [];

    for(let i = 0; i < this.actionAmt; i++) {
      console.log('Added random action');
      
      this.addRandomItem(this.actionList, selectedBingoItems, true);
    }

    let remainingItemCount = 25 - this.actionAmt;
    for(let i = 0; i < remainingItemCount; i++) {
      this.addRandomItem(this.bingoList, selectedBingoItems, false);
    }

    //Random sort
    let temp = selectedBingoItems;
    temp.sort(() => Math.random() - 0.5);
    selectedBingoItems = temp;

    this.storedList = selectedBingoItems;
    console.log(this.storedList);
    
    return selectedBingoItems;
  }

  private addRandomItem(bingoList: string[], selectedBingoItems: BingoItem[], action: boolean) {
    let random: BingoItem = {
      title: bingoList[Math.floor(Math.random() * this.actionList.length)],
      actionable: action,
      completed: false
    }

    if(selectedBingoItems.filter(b => b.title == random.title).length == 0) {
      selectedBingoItems.push(random);
      return;
    }

    this.addRandomItem(bingoList, selectedBingoItems, action);
  }

  private get bingoList(): string[] {
    return [
    'Toxic teammate',
    'Asking for skin',
    'Bottom duelist',
    'Hard whiff',
    'Sitting in lamps with judge',
    'Match- or team mvp',
    'Funny in-game-name',
    'Same map twice in a row',
    'Instalock',
    'Backseat gaming',
    'Smurf',
    'Flashed by teammate',
    'Cypher rat',
    'Dodge',
    'AFK',
    'Spammed through smoke',
    'Steals agent I\'m hovering',
    'Roza',
    'Early \'gg\'',
    'Early ff',
    'E-daters',
    'Disabled comms',
    'You a girl?',
    'Bucky',
    'Raze satchel shotgun',
    'Sage heals herself instead',
    '"Babam babam"',
    'Derank',
    'Racist',
    'Sexist',
    'Homophobic',
    '\"Can you play smokes?\"',
    'Cringe in-game-name',
    'Fully ran out of ammo',
    'Last second insult',
    'Surrender vote',
    'Ninja defuse',
    'Run and gun',
    'Everyone uses same primary for 1 round',
    'Teammate ace',
    '13-0',
    'Get clutched on',
    'Lineup misses',
    'Default-player-card Jett or Reyna',
    'Radiant gun buddy',
    'Teabag',
    'Laggy teammate',
    'Mirrored comps',
    'Finishes with less than 10 kills',
    'Lose game',
    'Win game',
    'Lose a round',
    'Terrible Sage wall',
    'Win 3 rounds in a row',
    'Get last kill in a round',
    'Valorant timing',
    'Die to spike',
    'Freebie',
    'Kill with Odin or Aries',
    'TTV/YT',
    'Sentinel rat',
    'VCT game changer',
    'Ping spiking',
    'No habla english',
    'Forgot spike',
    ]
  }

  private get actionList(): string[] {
    return [
    'Ace',
    'Shorty kill',
    'Clutch',
    'Knife kill',
    '30 bomb',
    'One tap',
    '3 kills in a round',
    'First blood',
    'Rankup',
    'Plant spike', 
    'Ult kill',
    'Utility kill',
    'Flick',
    '180°',
    'Wallbang',
    'Be chill 3 rounds',
    'Win attack without planting',
    'Get killed while planting',
    'Sheriff kill',
    'Survive 3 rounds',
    'Marshal kill',
    'Lose 5 rounds in a row',
    'Win 5 rounds in a row',
    'Die to utility',
    'Destroy Raze roomba',
    'Win round without seeing an enemy',
    'Flawless',
    'Thrifty',
    'Util assist',
    ]
  }
  
}
