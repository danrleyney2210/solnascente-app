import { FaUncharted } from "react-icons/fa";
import * as S from "./styles";
import { useState } from "react";
import CustomInput from "../../components/atomos/Form/CustomInput";
import { HondaVendaDigital } from "../../service/hondaVendaDigital";
import { useContextSite } from "../../context/Context";
import ReCAPTCHA from "react-google-recaptcha";

export function Auth() {
  const { loginAuth } = useContextSite();
  const [codUsuario, setCodUsuario] = useState("");
  const [codEmpresa, setCodEmpresa] = useState("");
  const [senha, setSenha] = useState("");

  const [captcha, setCaptcha] = useState<string | null>("");

  let isDisabled = !(codUsuario && codEmpresa && senha && captcha);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    console.log(captcha);

    return;

    isDisabled = true;

    HondaVendaDigital.Auth({ codUsuario, codEmpresa, senha })
      .then(({ data }) => {
        loginAuth(data);
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

          <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY}
            onChange={(e) => setCaptcha(e)}
          />

          <S.ButtonLogin type="submit" disabled={isDisabled}>
            Continuar
          </S.ButtonLogin>
        </S.Form>
      </S.Content>
    </S.Wrapper>
  );
}
