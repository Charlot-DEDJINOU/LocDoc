// src/store/authStore.ts
import { create } from 'zustand';

interface User {
  id: string | null;
  name: string | null;
  email: string | null;
  // Ajoute d'autres champs selon ton backend
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;

  setUser: (user: User) => void;
  setToken: (token: string) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,

  setUser: (user) => set({ user, isAuthenticated: true }),
  setToken: (token) => set({ token }),
  setLoading: (loading) => set({ loading }),
  logout: () =>
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
    }),
}));
