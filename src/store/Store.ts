import { InjectionKey, reactive, inject, readonly } from "vue";

interface Store {
  readonly isAuthenticated: boolean;
}

interface Dispatch {
  setIsAuthenticated: (value: boolean) => void;
}

export const storeKey: InjectionKey<Store> = Symbol("Store");
export const actionsKey: InjectionKey<Dispatch> = Symbol("Actions");

export const store = reactive({ isAuthenticated: false });

const setIsAuthenticated = (isAuthenticated: boolean) => {
  store.isAuthenticated = isAuthenticated;
};

export const actions = {
  setIsAuthenticated,
};

export const useStore = () => inject(storeKey);
export const useActions = () => inject(actionsKey);
