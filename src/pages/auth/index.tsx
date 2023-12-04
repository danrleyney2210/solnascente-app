import { FaUncharted } from "react-icons/fa";
import * as S from "./styles";
import { useState } from "react";
import CustomInput from "../../components/atomos/Form/CustomInput";
import { HondaVendaDigital } from "../../service/hondaVendaDigital";
import { useContextSite } from "../../context/Context";
import { HondaIHS } from "service/hondaIHS";

export function Auth() {
  const { loginAuth, setIsLoad } = useContextSite();
  const [codUsuario, setCodUsuario] = useState("ANDRE");
  const [codEmpresa, setCodEmpresa] = useState("1014412");
  const [senha, setSenha] = useState("Andre08@");

  let isDisabled = !(codUsuario && codEmpresa && senha);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);
    isDisabled = true;

    HondaVendaDigital.Auth({ codUsuario, codEmpresa, senha })
      .then(({ data }) => {
        loginAuth(data);
        setIsLoad(false);
      })
      .finally(() => (isDisabled = false));
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Header>
          <FaUncharted fill="#dd002e" size={40} />
          <h2>Login</h2>
        </S.Header>

        <S.Form onSubmit={handleSubmit}>
          <CustomInput
            label="Codigo"
            value={codEmpresa}
            defaultValue={codEmpresa}
            onChange={(e) => setCodEmpresa(e?.target?.value?.trim())}
          />
          <CustomInput
            label="Usuario"
            value={codUsuario}
            defaultValue={codUsuario}
            onChange={(e) => setCodUsuario(e?.target?.value?.trim())}
          />
          <CustomInput
            value={senha}
            label="Senha"
            defaultValue={senha}
            onChange={(e) => setSenha(e?.target?.value?.trim())}
          />

          <S.ButtonLogin type="submit" disabled={isDisabled}>
            Continuar
          </S.ButtonLogin>
        </S.Form>
      </S.Content>
    </S.Wrapper>
  );
}
