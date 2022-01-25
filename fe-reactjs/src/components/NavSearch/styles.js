import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  div+div {
    width: 100%;
    max-width: 282px;
    height: 40px;
    display: flex;
    align-items: center;

    input{
      border: 1px solid ${({ theme }) => theme.colors.grey[400]};
      border-radius: 4px 0 0 4px;
      border-right: none;
      padding-left: 20px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 40px;
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.grey[400]};
      border-left: none;
      border-radius: 0 4px 4px 0;
    }

  }

  @media (max-width: 486px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    div+div {
      margin-top: 5px;
    }
  }
`;
