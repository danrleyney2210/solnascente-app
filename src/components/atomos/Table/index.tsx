import React, { useMemo, useState } from "react";
import * as S from "./styles";
import { useTable } from "react-table";

const CustomTable = () => {
  const [totalPages, setTotalPages] = useState(1);

  const data = [
    {
      _id: "601c2761d9d65901b92418b2",
      name: "Vikas Rathod",
      trips: 200,
      airline: [
        {
          _id: "5f22b338b8c8cbc7bc7a44af",
          id: 20,
          name: "Air France",
          country: "France",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
          slogan: "Sharing the World, Flying Together",
          head_quaters:
            "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
          website: "www.evaair.com",
          established: "1989",
          __v: 0,
        },
      ],
      __v: 0,
    },
  ];

  const columns = useMemo(
    () => [
      {
        // Primeiro grupo - Informações do passageiro
        Header: "Informações do passageiro",
        // Colunas do primeiro grupo
        columns: [
          {
            Header: "Nome",
            accessor: "name",
          },
          {
            Header: "Viagens",
            accessor: "trips",
          },
        ],
      },
      {
        // Segundo grupo - Detalhes do vôo
        Header: "Detalhes do vôo",
        // Colunas do segundo grupo
        columns: [
          {
            Header: "Nome",
            accessor: "airline[0].name",
          },
          {
            Header: "País",
            accessor: "airline[0].country",
          },
          {
            Header: "Slogan",
            accessor: "airline[0].slogan",
          },
        ],
      },
    ],
    []
  );

  const {
    getTableProps, // propriedades da tabela
    getTableBodyProps, // propriedades do corpo da tabela
    headerGroups, // os valores de agrupamento de tabela, caso sua tabela use
    rows, // linhas da tabela baseado nos dados e colunas
    prepareRow, // Prepara a linha (Essa função deve ser chamada para cada linha)
  } = useTable({
    columns,
    data,
  });

  return (
    <S.WrapperContainer>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </S.WrapperContainer>
  );
};

export default CustomTable;
