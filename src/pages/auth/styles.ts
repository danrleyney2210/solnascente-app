import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  gap: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;

  width: 300px;
  gap: 16px;
`;

export const WrapperReCAPTCHA = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonLogin = styled.button<{ isDisabled: boolean }>`
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  padding: 16px;
  width: 300px;
  border-radius: 8px;
  margin-bottom: 30px;
`;
