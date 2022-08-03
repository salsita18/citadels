import DistrictCard from "./districtCard";

export default class DistrictsDeck {
  districts: DistrictCard[];

  constructor() {
    this.districts = [ ];
  }
  
  public sendToDeck(card: DistrictCard) {
    this.districts.push(card);
    this.shuffle();
  }

  public shuffle() {
    this.districts = this.districts.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  }

  public draw() {
    if (this.districts.length <= 0) throw 'there are no enough cards to play.'

    return this.districts.pop();
  }
}