import { User } from "@/models";
import { AuthPersistedState, AuthSlice, Tokens } from "@/store";
import { getItem, removeItem, setItem } from "@/utils/storage";
import { StateCreator } from "zustand";
import { persist, StorageValue } from "zustand/middleware";

export const createAuthSlice: StateCreator<
  AuthSlice,
  [],
  [["zustand/persist", AuthPersistedState]]
> = persist(
  (set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    tokens: null,
    login: async (user: User, tokens: Tokens) => {
      try {
        set({ isLoading: true, error: null });

        await new Promise((resolve) => setTimeout(resolve, 1000));

        set({
          user: user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
          tokens: tokens,
        });
      } catch (error) {
        set({
          isLoading: false,
          error: error instanceof Error ? error.message : "Login failed",
        });
      }
    },

    logout: () => {
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        tokens: null,
      });
    },

    clearError: () => {
      set({ error: null });
    },

    setLoading: (loading: boolean) => {
      set({ isLoading: loading });
    },
    setTokens: (tokens: Tokens) => {
      set({ tokens: tokens });
    },
  }),
  {
    name: "user-data",
    storage: {
      setItem: (name: string, value: any) => {
        setItem(name, value);
      },
      getItem: (name: string) => {
        return getItem(name) as StorageValue<AuthPersistedState>;
      },
      removeItem: (name: string) => {
        removeItem(name);
      },
    },

    partialize: (state): AuthPersistedState => ({
      user: state.user,
      isAuthenticated: state.isAuthenticated,
      tokens: state.tokens,
    }),
  }
);
