import styled from "styled-components";

export const Container = styled.div`
  margin: 32px 32px 0 32px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 800px){
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between; 
  }
`;

export const TitleInfo = styled.h2`
  width: 139px;
  height: 28px;
  
  color: var(--header);

  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;

  @media (max-width: 800px) {
    padding-bottom: 48px;
  }
  
`;
  
  export const Input = styled.div`
    width: 282px;
    height: 40px;
    border: 1px solid var(--border);
    border-radius: 4px;
    padding-right: 15.51px;
  
    background: var(--backgroundInput);
  
    display: flex;
    align-items: center;
  
    input {
      flex: 1;
  
      border: 0;

      color: var(--input);

      font-family: Open Sans;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
  
      margin-left: 12px;

    }
  
    button {
      margin-left: 2px;
      
      background: transparent;
      border: 0;

      cursor: pointer;

    }
  `;