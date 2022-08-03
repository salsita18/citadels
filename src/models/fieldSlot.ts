import FieldDistrictCard from "./FieldDistrictCard";

export default interface FieldSlot {
  number: number;
  builtDistrict: FieldDistrictCard | null;
}