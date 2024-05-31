import { create } from 'zustand';

const useThemeStore = create((set) => ({
  dark: true,
  toggleTheme: () =>
    set((state) => ({ dark: state.dark === true ? false : true })),
}));

module.exports = {
  useThemeStore,
};
