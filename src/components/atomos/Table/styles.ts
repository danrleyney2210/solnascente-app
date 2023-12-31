import styled from "styled-components";

export const WrapperContainer = styled.div`
  display: flex;
`;

export const Table = styled.table<{ templateColumns: string }>`
  flex: 1;

  thead th {
    color: rgba(0, 0, 0, 0.54);
  }

  tr {
    display: grid;
    grid-template-columns: ${(props) => props.templateColumns};
    text-align: left;
    padding: 12px;

    svg {
      cursor: pointer;
    }
  }

  td:has(> svg) {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  tr + tr {
    border-top: 1px solid #ddd;
  }

  tbody td {
    color: #999;
  }

  tbody tr:hover {
    background-color: #fafafa;
  }
`;
