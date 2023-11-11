import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    color: #fff;
  }

  > svg,
  img {
    width: 70px;
    height: 70px;
    z-index: 2;
  }
`;
