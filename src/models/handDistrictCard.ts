import DistrictCard from "./districtCard";
import Player from "./player";

export default interface HandDistrictCard {
  card: DistrictCard
  reveleadTo: Player[];
}