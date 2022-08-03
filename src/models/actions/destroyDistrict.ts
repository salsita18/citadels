import { Resolver } from "./resolvers";

interface DestroyDistrictPayload {
  targetPlayerId: number;
  slotId: number;
}

export type DestroyDistric = { type: 'destroyDistric', payload: DestroyDistrictPayload };

export const destroyDistric: Resolver<DestroyDistric> = (state, payload) => {
  const player = state.playersState.find(p => p.player.id === payload.targetPlayerId);

  if (!player) throw 'player not found.';

  const slot = player.field.slots.find(s => s.number === payload.slotId && s.builtDistrict);

  if (!slot || !slot.builtDistrict) throw 'slot is empty.';

  //TODO: Las cartas de mergean al deck o se descartan?
  state.districtsDeck.sendToDeck(slot.builtDistrict.card);
  slot.builtDistrict = null;
}
