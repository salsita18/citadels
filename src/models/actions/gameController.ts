import GameState from "../gameState";
import resolvers, { GameAction } from "./resolvers";

export function controller(game: GameState, action: GameAction) {  
  resolvers[action.type](game, action.payload);
  game.turn++;
  game.log.push({ action, resultingSnapstop: JSON.parse(JSON.stringify(game)) });
}


export default controller;