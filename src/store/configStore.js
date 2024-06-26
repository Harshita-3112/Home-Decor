import {create} from 'zustand';

const useConfigStore = create(set => ({
  cart: null,
  setCart: data => set(() => ({cart: {...data}})),
}));

export default useConfigStore;
