import { Resolver } from "./resolvers";

interface SwapCardPayload {
  playerId: number;
  targetPlayerId: number;
  cardId: number;
}

export type SwapCard = { type: 'swapCard', payload: SwapCardPayload };

export const swapCard: Resolver<SwapCard> = (state, payload) => {
  const player = state.playersState.find(p => p.player.id === payload.playerId);
  if (!player) throw 'player not found.';
  
  const card = player.hand.districtCards.find(dc => dc.card.id === payload.cardId);
  
  if (!card) throw 'card not found.';
  
  const targetPlayer = state.playersState.find(p => p.player.id === payload.playerId);

  if (!targetPlayer) throw 'target player not found.';

  targetPlayer.hand.districtCards.push(card);
  player.hand.districtCards = player.hand.districtCards.filter(dc => dc.card.id !== payload.cardId);
}
