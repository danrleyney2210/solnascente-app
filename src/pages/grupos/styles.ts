import styled from "styled-components";

export const ContentGrupos = styled.div`
  background-color: #fff;
  height: 500px;
  width: 1000px;
  border-radius: 8px;
  margin: 100px auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: #333;
    opacity: 0.8;
    margin-left: 10px;
  }
`;

export const ContentInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

export const WrapperTable = styled.div``;

export const WrapperInputFile = styled.div`
  margin: 10px 0 40px 0;
`;
