// src/store/authStore.ts
import { create } from 'zustand';

interface User {
  id: string | null;
  name: string | null;
  email: string | null;
  role?: string[];
  telephone?: string;
  username?: string;
  specialitie?: string;
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

// Lecture initiale depuis localStorage
const storedUser = localStorage.getItem('user');
const storedToken = localStorage.getItem('token');

export const useAuthStore = create<AuthState>((set) => ({
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
  isAuthenticated: !!storedToken,
  loading: false,

  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user, isAuthenticated: true });
  },

  setToken: (token) => {
    localStorage.setItem('token', token);
    set({ token });
  },

  setLoading: (loading) => set({ loading }),

  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
    });
  },
}));
