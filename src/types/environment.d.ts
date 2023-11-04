declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GOOGLE_LOGIN_ID: string;
    }
  }
}

export {};
