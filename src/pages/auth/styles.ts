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
  margin: 40px auto;

  width: 300px;
  gap: 16px;
`;

export const WrapperReCAPTCHA = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonLogin = styled.button`
  cursor: pointer;
  padding: 16px;
  width: 300px;
  border-radius: 8px;
  margin-bottom: 30px;
  /* background-color: #dd002e; */
  /* color: #fff;
  font-weight: bold; */
`;
