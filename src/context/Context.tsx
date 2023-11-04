import { createContext, ReactNode, useContext } from "react";

type ContextSite = {};

type Props = {
  children: ReactNode;
};

export const Context = createContext({} as ContextSite);

export function ContextProvider({ children }: Props) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}

export function useContextSite() {
  const contextSite = useContext(Context);
  return contextSite;
}
