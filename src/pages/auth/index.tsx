import { FaUncharted } from "react-icons/fa";
import * as S from "./styles";
import { useEffect, useState } from "react";
import CustomInput from "../../components/atomos/Form/CustomInput";
import { SolnascenteApi } from "../../service";

export function Auth() {
  // const [captcha, setCaptcha] = useState<string | null>("");

  const [codUsuario, setCodUsuario] = useState("");
  const [codEmpresa, setCodEmpresa] = useState("");
  const [senha, setSenha] = useState("");

  const isDisabled = !(codUsuario && codEmpresa && senha);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    SolnascenteApi.Auth({ codUsuario, codEmpresa, senha }).then(({ data }) =>
      console.log(data)
    );
  }

  return (
    <>
      <S.Header>
        <FaUncharted fill="#dd002e" size={40} />
        <h2>Login</h2>
      </S.Header>

      <S.Form onSubmit={handleSubmit}>
        <CustomInput
          label="Codigo"
          value={codEmpresa}
          onChange={(e) => setCodEmpresa(e?.target?.value?.trim())}
        />
        <CustomInput
          label="Usuario"
          value={codUsuario}
          onChange={(e) => setCodUsuario(e?.target?.value?.trim())}
        />
        <CustomInput
          value={senha}
          label="Senha"
          onChange={(e) => setSenha(e?.target?.value?.trim())}
        />

        <S.ButtonLogin type="submit" disabled={isDisabled}>
          Continuar
        </S.ButtonLogin>
      </S.Form>
    </>
  );
}
