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

export const ContentButton = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: #777;
  }
`;

export const ContentBtn = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
`;

export const ContentInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  .group-select {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

export const WrapperTable = styled.div``;
