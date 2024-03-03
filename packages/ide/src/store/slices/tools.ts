import { LayerData } from "@/lib/data/data.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@/store/store.ts";

export interface ToolsState {
  active: keyof Omit<ToolsState, "active">;
  control: boolean;
  select: "rect" | "oval" | "polygon" | "free" | "magic";
  pencil: "square" | "circle";
  eraser: "square" | "circle";
  brush?: LayerData;
  pen: undefined;
  shape: "rect_stoke" | "rect_fill" | "oval_stroke" | "oval_fill";
}

export type ToolGroupType = keyof Omit<
  ToolsState,
  "active" | "control" | "brush" | "pen"
>;

const initialState: ToolsState = {
  active: "control",
  brush: undefined,
  control: false,
  eraser: "square",
  pen: undefined,
  pencil: "square",
  select: "rect",
  shape: "rect_stoke",
};

const toolsSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    setActiveTool: (state, action: PayloadAction<ToolsState["active"]>) => {
      state.active = action.payload;
    },
    setTool: <K extends ToolsState["active"]>(
      state: ToolsState,
      action: PayloadAction<[K, ToolsState[K]]>,
    ) => {
      state[action.payload[0]] = action.payload[1];
    },
  },
});

export const { setActiveTool, setTool } = toolsSlice.actions;

export const selectTools = (state: AppState) => state.tools;

export default toolsSlice.reducer;
