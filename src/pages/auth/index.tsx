import { FaUncharted } from "react-icons/fa";
import { Template } from "../template";
import * as S from "./styles";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import { InputText } from "../../components/atomos/Form/Input";
import CustomInput from "../../components/atomos/Form/CustomInput";

export function Auth() {
  const [captcha, setCaptcha] = useState<string | null>("");

  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  return (
    // <Template title="Seja bem-vindo">
    <>
      <S.Header>
        <FaUncharted fill="#dd002e" size={40} />
        <h2>Login</h2>
      </S.Header>

      <S.Form onSubmit={handleSubmit}>
        <CustomInput
          label="Codigo"
          value={code}
          onChange={(e) => setCode(e?.target?.value)}
        />
        <CustomInput
          label="Usuario"
          value={user}
          onChange={(e) => setUser(e?.target?.value)}
        />
        <CustomInput
          value={password}
          label="Senha"
          onChange={(e) => setPassword(e?.target?.value)}
        />

        {/* <S.WrapperReCAPTCHA>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY}
            onChange={setCaptcha}
          />
        </S.WrapperReCAPTCHA> */}

        <S.ButtonLogin type="submit">Continuar</S.ButtonLogin>
      </S.Form>
    </>
    // </Template>
  );
}
