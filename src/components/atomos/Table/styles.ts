import styled from "styled-components";

export const WrapperContainer = styled.div`
  display: flex;

  table {
    flex: 1;

    thead th {
      color: rgba(0, 0, 0, 0.54);
    }

    tr {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      text-align: left;
      padding: 12px;

      svg {
        cursor: pointer;
      }
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
  }
`;
