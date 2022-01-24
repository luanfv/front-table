import styled from "styled-components";

export const Container = styled.div`
  margin: 32px 32px 0 32px;
`;

export const TableTitle = styled.thead`
  width: 95vw;
  height: 49px;

  display: flex;
  align-items: center;
  
  background: var(--thead);

  border-radius: 4px 4px 0px 0px;
  
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    width: 84vw;
  }

  > tr, th {
    width: 100%;

    display: flex;

    font-size: 16px;
    font-weight: 500;
    font-family: Roboto;
    text-transform: uppercase;

    color: var(--backgroundInput);

    @media (max-width: 800px) {
      font-size: 12px;
    }

    > th {
      display: flex;
      flex-direction: column;
    }

  }
`;

export const TableBody = styled.tbody`
  width: 95vw;
  height: 49px;

  background: var(--backgroundInput);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    width: 84vw;
  }

  > tr,th {
    width: 100%;

    color: var(--header);

    font-size: 16px;
    font-weight: 400;
    font-family: Roboto;

    @media (max-width: 800px) {
      font-size: 10px;
    }

    > th {
      display: flex;
      flex-direction: column;

      > img {
        width: 34px;
        height: 33px;

        margin: auto;
        border-radius: 50%;
      }
    }

  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;