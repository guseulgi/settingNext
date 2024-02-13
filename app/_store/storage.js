import create from "zustand";

const usePopbanner = create((set) => ({
  selectedButton: true,

  setSelectedButton: (button) => set({ selectedButton: button }),
}));

export default usePopbanner;
