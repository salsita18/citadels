import { Resolver } from "./resolvers";

interface RevealCharacterPayload {
  playerId: number;
}

export type RevealCharacter = { type: 'revealCharacter', payload: RevealCharacterPayload };

export const revealCharacter: Resolver<RevealCharacter> = (state, payload) => {
  const player = state.playersState.find(p => p.player.id === payload.playerId);

  if (!player) throw 'player not found.';

  if (player.playingCharacter.isRevelaed) throw 'character war already revealed.';

  player.playingCharacter.isRevelaed = true;
}
