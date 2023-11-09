import styled from "styled-components";

export const ButtonWrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #dd002e;
  padding: 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  width: fit-content;
  border: 1px solid #dd002e;

  > span {
    white-space: nowrap;
  }

  &:hover {
    background-color: #dd002e;
    color: #fff;
  }
`;
