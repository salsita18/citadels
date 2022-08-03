import Character, { CharacterId } from "./character";

export default class CharactersDeck {
  characters: Character[];

  constructor(deck?: keyof CharactersDeckList) {
    this.characters = decks[deck || 'original'];
  }

  public shuffle() {
    this.characters = this.characters
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  public pick(id: CharacterId) {
    const character = this.characters.find(c => c.playingNumber === id);

    if (!character) throw 'chracter not abailable.';

    this.characters = this.characters.filter(c => c.playingNumber !== id);

    return character;
  }

  public sendToDeck(character: Character) {
    this.characters.push(character);
    this.shuffle();
  }
}

type CharactersDeckList = {
  original: Character[];
}

const decks: CharactersDeckList = { 
  original: [
    {
      image: '',
      name: 'Bruja',
      playingNumber: 1
    },
    {
      image: '',
      name: 'Espia',
      playingNumber: 2
    },
    {
      image: '',
      name: 'Mago',
      playingNumber: 3
    },
    {
      image: '',
      name: 'Rey',
      playingNumber: 4
    },
    {
      image: '',
      name: 'Bishop',
      playingNumber: 5
    },
    {
      image: '',
      name: 'Mercader',
      playingNumber: 6
    },
    {
      image: '',
      name: 'Navegante',
      playingNumber: 7
    },
    {
      image: '',
      name: 'Condotiero',
      playingNumber: 8
    },
    {
      image: '',
      name: 'Reina',
      playingNumber: 9
    }
  ]
}