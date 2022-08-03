import GameState from "../gameState"
import { BuildDistrict, buildDistrict } from "./buildDistrict";
import { destroyDistric, DestroyDistric } from "./destroyDistrict";
import { drawCard, DrawCard } from "./drawCard";
import { DrawCoin, drawCoin } from "./drawCoin";
import { giveCrown, GiveCrown } from "./giveCrown";
import { retrieveCharacters, RetrieveCharacters } from "./retrieveCharacters";
import { revealCharacter, RevealCharacter } from "./revealCharacter";
import { revealDstrictToPlayer, RevealDstrictToPlayer } from "./revealDistrictToPlayer";
import { selectCharacter, SelectCharacter } from "./selectCharacter";
import { sendCardFromHandToDeck, SendCardFromHandToDeck } from "./sendCardFromHandToDeck";
import { shuffleHand, ShuffleHand } from "./shuffleHand";
import { Start, start } from './start';
import { swapCard, SwapCard } from "./swapCard";
import { tuneCard, TuneCard } from "./tuneCard";

export type GameAction = Start | 
  DrawCoin | 
  DrawCard | 
  BuildDistrict |
  SwapCard |
  TuneCard |
  DestroyDistric |
  ShuffleHand | 
  SendCardFromHandToDeck |
  RevealDstrictToPlayer |
  GiveCrown | 
  SelectCharacter | 
  RetrieveCharacters |
  RevealCharacter;

export type Resolver<T extends GameAction> = (state: GameState, payload: T["payload"]) => void;
type ResolverActions = keyof { [key in GameAction["type"]]: key; };

const resolvers: Record<ResolverActions, Resolver<any>> = {
  start,
  drawCoin,
  drawCard,
  buildDistrict,
  swapCard,
  tuneCard,
  destroyDistric,
  shuffleHand,
  sendCardFromHandToDeck,
  revealDstrictToPlayer,
  giveCrown,
  selectCharacter,
  retrieveCharacters,
  revealCharacter
}

export default resolvers;