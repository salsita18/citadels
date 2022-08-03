import Player from "../player";
import PlayerState from "../playerState";
import { Resolver } from "./resolvers";

interface StartPayload {
  players: Player[];
}
export type Start = { type: 'start', payload: StartPayload };

export const start: Resolver<Start> = (state, payload) => {
  state.playersState = payload.players.map(p => new PlayerState(p));
  
  state.charactersDeck.shuffle();
  state.districtsDeck.shuffle();
  
  state.playersState.forEach(playerState => {
    playerState.hand.coins = 2;
    playerState.hand.districtCards.push({ card: state.districtsDeck.draw()!, reveleadTo: [] });
    playerState.hand.districtCards.push({ card: state.districtsDeck.draw()!, reveleadTo: [] });
  });
}