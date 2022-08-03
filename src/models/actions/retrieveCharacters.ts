import { Resolver } from "./resolvers";

interface RetrieveCharactersPayload {
  
}
export type RetrieveCharacters = { type: 'retrieveCharacters', payload: RetrieveCharactersPayload };

export const retrieveCharacters: Resolver<RetrieveCharacters> = (state) => {
  //TODO: Esto es una validación de un grado superior?
  if (!state.playersState.every(p => p.playingCharacter.isRevelaed)) throw 'Not every player has finished their turn.';

  state.playersState.forEach(ps => {
    state.charactersDeck.sendToDeck(ps.playingCharacter.character);
    ps.playingCharacter = null;
  });
}
