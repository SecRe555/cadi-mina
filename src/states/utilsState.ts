import { create } from "zustand";

interface UtilsState {
  isMainScrolleable: boolean;
  setIsMainScrolleable: (isScrolleable: boolean) => void;
}
const useUtils = create<UtilsState>((set) => ({
  isMainScrolleable: true,
  setIsMainScrolleable: (isScrolleable) =>
    set({ isMainScrolleable: isScrolleable }),
}));

export default useUtils;
