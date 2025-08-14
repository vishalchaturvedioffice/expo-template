import { create } from "zustand";
import { createAuthSlice } from "./slices";
import { RootStore } from "./types";

export const useAppStore = create<RootStore>()((...a) => ({
  ...createAuthSlice(...a),
}));
