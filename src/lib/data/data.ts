import { BLEND_MODES, ColorSource } from "pixi.js";

export type Unit = GroupData | LayerData | ArtBoardData;

export interface UnitData {
  id: string;
  name: string;
  x: number;
  y: number;
}

export interface GroupData extends UnitData {
  type: "group";
  units: Unit[];
}

export interface LayerData extends UnitData {
  type: "layer";
  pixels: { [color: string]: [number, number] };
  blendMode: BLEND_MODES;
}

export interface ArtBoardData extends Omit<GroupData, "type"> {
  type: "artboard";
  width: number;
  height: number;
  backgroundColor?: ColorSource;
}
