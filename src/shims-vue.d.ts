declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMeta {
  env: {
    DEV: boolean;
    PROD: boolean;
    MODE: string;
  };
}
