import { Resolver } from "./resolvers";

interface SendCardFromHandToDeckPayload {
  playerId: number;
  cardId: number;
}
export type SendCardFromHandToDeck = { type: 'sendCardFromHandToDeck', payload: SendCardFromHandToDeckPayload };

export const sendCardFromHandToDeck: Resolver<SendCardFromHandToDeck> = (state, payload) => {
  const player = state.playersState.find(p => p.player.id === payload.playerId);

  if (!player) throw 'player not found.';

  const cardInHand = player.hand.districtCards.find(dc => dc.card.id === payload.cardId);

  if (!cardInHand) throw 'card is not in players hand.';

  state.districtsDeck.sendToDeck(cardInHand.card);
  player.hand.districtCards = player.hand.districtCards.filter(dc => dc.card.id !== payload.cardId);
}
