import create from "zustand"

export const useGlobalStore = create(() => ({
  selected_layer: "top",
}))
