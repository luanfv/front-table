import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding: 0 20px;
  margin-bottom: 88px;
`;

export const TableContainer = styled.div`
  max-width: 100%;
  height: 100%;

  @media (max-width: 764px) {
    overflow-x: scroll;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    tr {
      border-radius: 4px 4px 0 0;
    }
  }

  tr {
    height: 50px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

    th {
      min-width: 160px;
      background: ${({ theme }) => theme.backgroundHeaderTable};
      color: ${({ theme }) => theme.colors.white};
      font-weight: 500;

      &:first-child {
        border-radius: 4px 0 0 0;
        min-width: 60px;
      }

      &:last-child {
        border-radius: 0 4px 0 0;
      }
    }
  }



  tbody {
    text-align: center;
    background: ${({ theme }) => theme.backgroundTable};

    td {

      &:nth-child(2) {
        text-align: left;
        padding-left: 40px;

        @media (max-width: 764px) {
          padding-left: 8px;
        }
      }
    }
  }

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-top: 4px;
  }
`;
