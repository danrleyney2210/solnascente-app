import { FaUncharted } from "react-icons/fa";
import { Template } from "../template";
import * as S from "./styles";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import { InputText } from "../../components/atomos/Form/Input";

export function Auth() {
  const [captcha, setCaptcha] = useState<string | null>("");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <Template title="Seja bem-vindo">
      <S.Header>
        <FaUncharted fill="#dd002e" size={40} />
        <h2>Login</h2>
      </S.Header>

      <S.Form onSubmit={handleSubmit}>
        <InputText label={"Codigo da empresa"} />
        <InputText label={"Usuario"} />
        <InputText label={"Senha"} type="password" />

        <S.WrapperReCAPTCHA>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY}
            onChange={setCaptcha}
          />
        </S.WrapperReCAPTCHA>

        <S.ButtonLogin type="submit" isDisabled={!!!captcha}>
          Continuar
        </S.ButtonLogin>
      </S.Form>
    </Template>
  );
}
