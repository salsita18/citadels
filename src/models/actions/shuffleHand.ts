import { Resolver } from "./resolvers";

interface ShuffleHandPayload {
  playerId: number;
}
export type ShuffleHand = { type: 'shuffleHand', payload: ShuffleHandPayload };

export const shuffleHand: Resolver<ShuffleHand> = (state, payload) => {
  const player = state.playersState.find(p => p.player.id === payload.playerId);

  if (!player) throw 'player not found.';

  player.hand.districtCards = player.hand.districtCards
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
