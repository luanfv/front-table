import styled from 'styled-components'


export const Container = styled.div`
  height: 38.15vw;
  width:90.6vw;
  background:var(--background);
  margin: 6.9vw 5vw 0 5vw;

  text-transform:uppercase;
  font-size:1.1vw;


  div{
    background:var(--header-table);
    padding:0.80% 2%;

    display: grid;
    grid-template-rows: 25px;
    grid-template-columns: 0.5fr repeat(4, 2fr);

    color:var(--card-color);
    .--icon{
      grid-column:1;
      text-align:center;
      width:34px;
    }
    .--name{
      grid-column:2;
      text-align:center;
    }
    .--job{
      grid-column:3;
      text-align:center;
    }
    .--date{
      grid-column:4;
      text-align:center;
    }
    .--phone{
      grid-column:5;
      text-align:center;
    }
  }

`;

export const Card = styled.main`
    display: grid;
    grid-template-rows: 39px;
    grid-row-gap: 2px;
    grid-template-columns: 0.5fr repeat(4, 2fr);
    
    padding:0.80% 2%;
    background:var(--card-color);

   
    color:#000;
    .--item-icon{
      text-align:center;
      grid-column: 1;
    }
    .--item-name{
      text-align:center;
      grid-column: 2;
    }
    .--item-job{
      text-align:center;
      grid-column: 3;
    }
    .--item-date{
      text-align:center;
      grid-column: 4;
    }
    .--item-phone{
      text-align:center;
      grid-column: 5;
    }
    img{
      border-radius:50%;
      height:2.29vw;
      width:34px;
    }
    
`;