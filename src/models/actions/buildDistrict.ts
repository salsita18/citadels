import { Resolver } from "./resolvers";

interface BuildDistrictPayload {
  playerId: number;
  cardId: number;
}

export type BuildDistrict = { type: 'buildDistrict', payload: BuildDistrictPayload };

export const buildDistrict: Resolver<BuildDistrict> = (state, payload) => {
  const player = state.playersState.find(p => p.player.id === payload.playerId);

  if (!player) throw 'player not found.';

  const handCard = player.hand.districtCards.find(dc => dc.card.id === payload.cardId);

  if (!handCard) throw 'card not found.';

  const slot = player.field.slots.find(s => !s.builtDistrict);

  if (!slot) throw 'field is full.';

  slot.builtDistrict = { card: handCard.card, tune: 0 };
  player.hand.districtCards = player.hand.districtCards.filter(dc => dc.card.id !== payload.cardId);
}
