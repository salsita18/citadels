import { CharacterId } from "../character";
import { Resolver } from "./resolvers";

interface SelectCharacterPayload {
  playerId: number;
  characterId: CharacterId;
}

export type SelectCharacter = { type: 'selectCharacter', payload: SelectCharacterPayload };

export const selectCharacter: Resolver<SelectCharacter> = (state, payload) => {
  const player = state.playersState.find(p => p.player.id === payload.playerId);

  if (!player) throw 'player not found.';

  const character = state.charactersDeck.pick(payload.characterId);

  player.playingCharacter = { character, isRevelaed: false };
}
