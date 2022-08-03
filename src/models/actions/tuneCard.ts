import { Resolver } from "./resolvers";

interface TuneCardPayload {
  playerId: number;
  slotId: number;
}

export type TuneCard = { type: 'tuneCard', payload: TuneCardPayload };

export const tuneCard: Resolver<TuneCard> = (state, payload) => {
  const player = state.playersState.find(p => p.player.id === payload.playerId);

  if (!player) throw 'player not found.';

  const card = player.field.slots.find(s => s.number === payload.slotId)?.builtDistrict;

  if (!card) throw 'card not found.';

  card.tune++;
}
