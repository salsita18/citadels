import controller from './actions/gameController';
import { GameAction } from './actions/resolvers';
import { Start } from './actions/start';
import CharactersDeck from './charactersDeck';
import DistrictsDeck from './districtsDeck';
import GameState from './gameState';
import Player from './player';

export default class Game {
  id: string;
  startDate: Date | null;
  players: Player[];
  state: GameState;

  constructor() {
    this.players = [];
    this.id = Math.random().toString().substring(2);
    this.players = []; 
    this.state = {
      turn: 0,
      districtsDeck: new DistrictsDeck(),
      charactersDeck: new CharactersDeck(),
      playersState: [],
      log: [],
      crownOwner: null
    }
  }

  public addPlayer(player: Player) {
    if (this.players.length === 8) throw 'maximun players count reached.';
    if (this.players.some(p => p.id === player.id)) throw 'you are already part of this game.';
    if (this.state.turn > 0) throw 'game has already started.';
    
    this.players.push(player);
  }
  
  public startGame() {
    if (this.state.turn > 0) throw 'game has already started.';
    if (this.players.length < 2) throw 'not enough players to start.';
    
    this.startDate = new Date();
    controller(this.state, { type: 'start', payload: { players: this.players } });
  }

  public rollback() {
    if (this.state.log.length < 2) throw 'nothing to rollback yet.';
    
    this.state = this.state.log[this.state.log.length - 2].resultingSnapstop;
  }

  public executeAction(action: Exclude<GameAction, Start>) {
    if (this.state.turn <= 0) throw 'game has not started yet.';

    controller(this.state, action);
  }
}