import { Resolver } from "./resolvers";

interface DrawCoinPayload {
  playerId: number;
}
export type DrawCoin = { type: 'drawCoin', payload: DrawCoinPayload };

export const drawCoin: Resolver<DrawCoin> = (state, payload) => {
  const player = state.playersState.find(p => p.player.id === payload.playerId);

  if (!player) throw 'player not found.';

  player.hand.coins++;
}
