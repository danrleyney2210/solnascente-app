declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SITE_KEY: string;
      REACT_APP_AXIOS_ORIGIN: string;
      REACT_APP_AXIOS_HOST: string;
    }
  }
}

export {};
