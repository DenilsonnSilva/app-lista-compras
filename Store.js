import { create } from "zustand";

export default useStore = create((set) => ({
  shoppingList: [],
  add: (item) =>
    set((state) => {
      if (state.shoppingList.find((i) => i.name === item.name)) {
        return state;
      }

      return {
        shoppingList: [...state.shoppingList, item],
      };
    }),
  remove: (name) =>
    set((state) => ({
      shoppingList: state.shoppingList.filter((item) => item.name !== name),
    })),
  increment: (name) =>
    set((state) => ({
      shoppingList: state.shoppingList.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decrement: (name) =>
    set((state) => ({
      shoppingList: state.shoppingList.map((item) =>
        item.name === name && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
  clear: (name) =>
    set((state) => ({
      shoppingList: state.shoppingList.map((item) =>
        item.name === name ? { ...item, quantity: 0 } : item
      ),
    })),
}));
