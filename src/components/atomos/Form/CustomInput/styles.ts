import styled from "styled-components";

export const Wrapper = styled.div``;

export const LabelWrapper = styled.label`
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  position: relative;
  width: 100%;
`;

export const LabelText = styled.span<{ isFocus: boolean }>`
  color: #999;
  transition: all 0.1s ease-out;

  position: absolute;
  left: 10px;
  top: ${({ isFocus }) => (isFocus ? "-10px" : "6px")};
  background-color: ${({ isFocus }) => (isFocus ? "#fff" : "transparent")};
  padding: 0 5px;
  font-size: ${({ isFocus }) => (isFocus ? "12px" : "16px")};
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 40px;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
`;
