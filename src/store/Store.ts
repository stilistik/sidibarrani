import { InjectionKey, reactive, inject, readonly } from 'vue';

interface Store {
  store: {
    readonly isAuthenticated: boolean;
  },
  setIsAuthenticated: (value: boolean) => void;
}

export const storeKey: InjectionKey<Store> = Symbol('Store');

export const createStore = () => {
  const store = reactive({ isAuthenticated: false });

  const setIsAuthenticated = (isAuthenticated: boolean) => {
    store.isAuthenticated = isAuthenticated;
  }

  return { store: readonly(store), setIsAuthenticated}
}

export const useStore = () => inject(storeKey);
