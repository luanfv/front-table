import styled from 'styled-components'


export const Container = styled.div`
  height: 38.15vw;
  width:77.6vw;
  background:var(--background);
  margin:0.45vw 10vw ;

  display: grid;
  grid-template-rows:repeat(auto-fill, 3.4vw);
  grid-template-columns:13vw 18vw 12vw 15vw 19.6vw;
  grid-row-gap:0.07vw;

  text-transform:uppercase;
  font-size:1.1vw;


  div{
    grid-row:1;
    grid-column:1/span 5;
    background:var(--header-table);
    padding:0.45vw 3vw;

    display: flex;
    justify-content:space-between;

    color:var(--card-color);

  }

  main{
    grid-column:1/span 5;
    padding:0.45vw 3vw;
    background:var(--card-color);

    display: flex;
    justify-content:space-between;

    color:#000;
  }
`;

export const Card = styled.main`
   grid-column:1/span 5;
    padding:0.45vw 3vw;
    background:var(--card-color);

    display: flex;
    justify-content:space-between;

    color:#000;
`;