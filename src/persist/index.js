// persist.js
export const LocalStorageStore = {
  saveState(key, state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.error("Erreur de sauvegarde dans le localStorage :", err);
    }
  },

  loadState(key) {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
      console.error("Erreur de lecture du localStorage :", err);
      return undefined;
    }
  },

  clearState(key) {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error("Erreur de suppression du localStorage :", err);
    }
  },
};

