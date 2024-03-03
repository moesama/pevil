import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ArtBoardData } from "@/lib/data/data.ts";
import { WorkspaceState } from "@/store/store.ts";

const artBoardAdapter = createEntityAdapter<ArtBoardData, string>({
  selectId: (model) => model.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const workspaceSlice = createSlice({
  name: "workspace",
  initialState: artBoardAdapter.getInitialState(),
  reducers: {
    saveArtBoard: artBoardAdapter.upsertOne,
    removeArtBoard: artBoardAdapter.removeOne,
  },
});

export const { saveArtBoard, removeArtBoard } = workspaceSlice.actions;

export const selectArtBoards = artBoardAdapter.getSelectors(
  (state: WorkspaceState) => state.workspace,
).selectAll;

export default workspaceSlice.reducer;
