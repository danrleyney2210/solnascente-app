import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 100%;

  @media (max-width: 1030px) {
    padding: 0 24px;
  }
`;

export const ContentBox = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  min-height: 500px;
  height: 100%;
  max-width: 1000px;

  h2 {
    color: #333;
    opacity: 0.8;
    margin-left: 10px;
  }
`;

export const Content = styled.div`
  background-color: #fff;

  border-radius: 8px;

  padding: 16px;

  h2 {
    color: #333;
    opacity: 0.8;
    margin-left: 10px;
  }
`;
