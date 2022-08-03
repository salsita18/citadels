import { Resolver } from "./resolvers";

interface GiveCrownPayload {
  playerId: number;
}
export type GiveCrown = { type: 'giveCrown', payload: GiveCrownPayload };

export const giveCrown: Resolver<GiveCrown> = (state, payload) => {
  const player = state.playersState.find(p => p.player.id === payload.playerId);

  if (!player) throw 'player not found.';

  state.crownOwner = player.player;
}
