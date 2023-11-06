import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #999;
  }
  input {
    border: 1px solid #ddd;
    height: 40px;
    border-radius: 8px;
    padding: 10px;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
