import Field from "./field";
import Player from "./player";
import PlayerHand from "./playerHand";
import PlayingCharacter from "./playingCharacter";

export default class PlayerState {
  playingCharacter: PlayingCharacter | null;
  field: Field;
  hand: PlayerHand;
  player: Player;

  constructor(player: Player) {
    this.player = player;
    this.playingCharacter = null;
    this.field = { slots: [1, 2, 3, 4, 5, 6, 7].map(number => ({
          number,
          builtDistrict: null,
        })
      )
    };
    this.hand = { coins: 0, districtCards: [] };
  }
}