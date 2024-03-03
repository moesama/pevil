// Use throughout your app instead of plain `useDispatch` and `useSelector`
import {
  AppDispatch,
  AppState,
  createWorkspace,
  store,
  WorkspaceDispatch,
  WorkspaceState,
} from "@/store/store.ts";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

export const useWorkspaceDispatch: () => WorkspaceDispatch = useDispatch;
export const useWorkspaceSelector: TypedUseSelectorHook<WorkspaceState> =
  useSelector;

export function useWorkspace() {
  return useMemo(() => createWorkspace(), []);
}

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
