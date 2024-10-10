import { create } from "zustand";

interface UtilsState {
  isMainScrolleable: boolean;
  setIsMainScrolleable: (isScrolleable: boolean) => void;
  selectedId: string | null;
  setSelectedId: (id: string) => void;
}
const useUtils = create<UtilsState>((set) => ({
  isMainScrolleable: true,
  setIsMainScrolleable: (isScrolleable) =>
    set({ isMainScrolleable: isScrolleable }),
  selectedId: null,
  setSelectedId: (id) => set({ selectedId: id }),
}));

export default useUtils;
