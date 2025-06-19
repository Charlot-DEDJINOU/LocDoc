// persist.ts
export const LocalStorageStore = {
  saveState(key: string, state: unknown) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.error("Erreur de sauvegarde dans le localStorage :", err);
    }
  },

  loadState(key: string): any {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
      console.error("Erreur de lecture du localStorage :", err);
      return undefined;
    }
  },

  clearState(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error("Erreur de suppression du localStorage :", err);
    }
  },
};
