import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding-left: 32px;
  
  display: flex;
  align-items: center;

  background-color: var(--header);

  @media (max-width: 800px){
     display: flex;
     justify-content: center;
  }

`;

export const Logo = styled.img`


`;