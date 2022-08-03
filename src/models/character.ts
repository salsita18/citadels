export default interface Character {
  playingNumber: CharacterId;
  name: string;
  image: string;
}

export type CharacterId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;