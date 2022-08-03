import { GameAction } from "./actions/resolvers";
import CharactersDeck from "./charactersDeck";
import DistrictsDeck from "./districtsDeck";
import Player from "./player";
import PlayerState from "./playerState";

interface GameLog { action: GameAction, resultingSnapstop: GameState };

export default interface GameState {
  charactersDeck: CharactersDeck;
  districtsDeck: DistrictsDeck;
  playersState: PlayerState[];
  turn: number;
  log: GameLog[];
  crownOwner: Player;
}