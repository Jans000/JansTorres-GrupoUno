import { create } from 'zustand';

const useStore = create((set) => ({
  car: [],
  addToCar: (product) => set((state) => ({ car: [...state.car, product] })),
  removeFromCar: (productId, size) =>
    set((state) => ({
      car: state.car.filter(
        (item) => item.id !== productId || item.size !== size
      ),
    })),
  updateQuantity: (productId, size, quantity) =>
    set((state) => ({
      car: state.car.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      ),
    })),
}));

export default useStore;
