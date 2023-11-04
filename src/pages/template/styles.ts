import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  @media (max-width: 1030px) {
    padding: 0 24px;
  }
`;

export const Content = styled.div`
  background-color: #fff;
  min-height: 500px;
  height: 100%;
  max-width: 1000px;
  width: 100%;
  border-radius: 8px;
  margin: 100px auto;
  padding: 16px;

  h2 {
    color: #333;
    opacity: 0.8;
    margin-left: 10px;
  }
`;
