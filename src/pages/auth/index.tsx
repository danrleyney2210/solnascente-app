import { FaUncharted } from "react-icons/fa";
import { Template } from "../template";
import * as S from "./styles";
import { GoogleLogin } from "@react-oauth/google";

export function Auth() {
  return (
    <Template>
      <S.Header>
        <FaUncharted fill="#dd002e" size={40} />
        <h2>Seja bem-vindo </h2>
      </S.Header>
      <S.Wrapper>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </S.Wrapper>
    </Template>
  );
}
