import styled from 'styled-components'

export const Container = styled.div`
  height: 7.15vw;
  width:100vw;

  display:flex;
  flex-direction:row;
  justify-content: space-between;


  p{
    font-size:1.6vw;
    margin: 6.9vw 0 2.4vw 2.4vw;
    font-weight:500;
  }


  input[type="text"]{
    margin: 6.9vw 2.4vw 2.4vw 0;
    height:2.7vw;
    width:19.5vw;
    border-radius:0.4vw;

    padding:0.5vw 0.8vw;
    border: 1px solid var(--border-color);
    background: var(--card-color);
  }
`;