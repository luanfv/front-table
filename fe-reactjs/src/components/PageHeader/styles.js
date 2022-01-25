import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.backgroundPageHeader};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  img {
    width: 120px;
    height: 35px;
  }

  button {
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.textToggleTheme};
    padding: 2px;
    border-radius: 50%;
    border: none;
    color: ${({ theme }) => theme.textColor};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
