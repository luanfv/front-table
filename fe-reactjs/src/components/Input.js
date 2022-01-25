import styled from 'styled-components';

export default styled.input`
  width: 100%;
  max-width: 282px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.grey[400]};
  border-radius: 4px;
  outline: none;
  font-family: 'Open Sans';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary.dark};
  padding: 0 12px;
`;
