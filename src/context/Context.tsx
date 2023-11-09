import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AuthProps } from "../service";
import { IAuth } from "./types";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "components/atomos/Loading";

type ContextSite = {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  loginAuth: (data: IAuth) => void;
  isLoad: boolean;
  setIsLoad: Dispatch<SetStateAction<boolean>>;
};

type Props = {
  children: ReactNode;
};

export const Context = createContext({} as ContextSite);

export function ContextProvider({ children }: Props) {
  const [isLoad, setIsLoad] = useState(false)
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useLocalStorage("@token");
  const [dataToken, setDataToken] = useLocalStorage("@dataToken");
  const navigate = useNavigate();

  function loginAuth(data: IAuth) {
    toast.success("Login efetuado com sucesso!");
    setIsAuth(true);
    setToken(data.retorno.tokenDigital);
    setDataToken(data);
    navigate("home");
  }

  useEffect(() => { }, [token]);

  return (
    <Context.Provider
      value={{
        isAuth,
        setIsAuth,
        loginAuth,
        isLoad,
        setIsLoad
      }}
    >
      {children}
      {isLoad && <Loading />}
    </Context.Provider>
  );
}

export function useContextSite() {
  const contextSite = useContext(Context);
  return contextSite;
}
