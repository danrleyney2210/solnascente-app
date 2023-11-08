import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AuthProps } from "../service";
import { IAuth } from "./types";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type ContextSite = {
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>
  loginAuth: (data: IAuth) => void
};

type Props = {
  children: ReactNode;
};

export const Context = createContext({} as ContextSite);

export function ContextProvider({ children }: Props) {
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useLocalStorage('@token')
  const navigate = useNavigate()

  function loginAuth(data: IAuth) {
    toast.success("Login efetuado com sucesso!")
    setIsAuth(true)
    setToken(data)
    navigate('home')
  }

  useEffect(() => {

  }, [token])

  return <Context.Provider value={{
    isAuth,
    setIsAuth,
    loginAuth
  }}>{children}</Context.Provider>;
}

export function useContextSite() {
  const contextSite = useContext(Context);
  return contextSite;
}
