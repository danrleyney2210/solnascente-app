import styled from "styled-components";

export const ContentInputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  .group {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    align-items: center;

    .group-select {
      display: flex;
      width: 100%;
    }
  }

  @media (max-width: 750px) {
    .group {
      flex-wrap: wrap;
    }
  }
`;
