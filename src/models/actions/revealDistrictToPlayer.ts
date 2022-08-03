import { Resolver } from "./resolvers";

interface RevealDstrictToPlayerPayload {
  playerId: number;
  targetPlayerId: number;
  cardId: number;
}

export type RevealDstrictToPlayer = { type: 'revealDstrictToPlayer', payload: RevealDstrictToPlayerPayload };

export const revealDstrictToPlayer: Resolver<RevealDstrictToPlayer> = (state, payload) => {
  const player = state.playersState.find(p => p.player.id === payload.playerId);
  if (!player) throw 'player not found.';
  
  const handCard = player.hand.districtCards.find(dc => dc.card.id === payload.cardId);
  
  if (!handCard) throw 'card not found.';
  
  const targetPlayer = state.playersState.find(p => p.player.id === payload.playerId);

  if (!targetPlayer) throw 'target player not found.';

  handCard.reveleadTo.push(targetPlayer.player);
}
