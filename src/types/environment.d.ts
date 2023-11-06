declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SITE_KEY: string;
    }
  }
}

export {};
