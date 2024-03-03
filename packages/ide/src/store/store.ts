import { configureStore } from "@reduxjs/toolkit";
import workspace from "@/store/slices/workspace.ts";
import tools from "./slices/tools";

export function createWorkspace() {
  return configureStore({
    reducer: {
      workspace,
    },
  });
}

export type WorkspaceState = ReturnType<
  ReturnType<typeof createWorkspace>["getState"]
>;

export type WorkspaceDispatch = ReturnType<typeof createWorkspace>["dispatch"];

export const store = configureStore({
  reducer: {
    tools,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
