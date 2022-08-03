import { Resolver } from "./resolvers";

interface DrawCardPayload {
  playerId: number;
}
export type DrawCard = { type: 'drawCard', payload: DrawCardPayload };

export const drawCard: Resolver<DrawCard> = (state, payload) => {
  const player = state.playersState.find(p => p.player.id === payload.playerId);

  if (!player) throw 'player not found.';

  player.hand.districtCards.push({ card: state.districtsDeck.draw(), reveleadTo: [] });
}
