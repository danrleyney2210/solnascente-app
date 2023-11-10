declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SITE_KEY: string;
      REACT_APP_AXIOS_ORIGIN: string;
      REACT_APP_AXIOS_HOST: string;
      REACT_APP_AXIOS_BASIC_TOKEN: string;
      REACT_APP_VENDA_DIGITAL_URL: string;
      REACT_APP_IHS_URL: string;
    }
  }
}

export {};
