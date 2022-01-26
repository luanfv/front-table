import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display:flex;
  flex-direction:column;
  justify-content:space-between;


  .Search{
    height: 7.15vw;
    font-size:1.6vw;

    display:flex;
    flex-direction:row;
    justify-content:space-between;

    padding: 2vw 5vw 0 5vw;

    input[type="search"]{

    height:2.7vw;
    width:19.5vw;
    border-radius:0.4vw;

    padding:0.5vw 0.8vw;
    border: 1px solid var(--border-color);
    background: var(--card-color);
  }
}


  .Table-header{
    background:var(--header-table);
    padding:12px 15px 12px 28px;
    display: grid;
    grid-template-rows: 25px;
    grid-template-columns: 0.5fr repeat(4, 2fr);
    margin:0 75px;

    font-size:1.2vw;

    .--icon,.--name,.--job,.--date,.--phone{
      text-align:center;
    }

    color:var(--card-color);
    .--icon{
      grid-column:1;
      width:34px;
    }
    .--name{
      grid-column:2;
    }
    .--job{
      grid-column:3;
    }
    .--date{
      grid-column:4;
    }
    .--phone{
      grid-column:5;
    }
  }
}

  .Table-item{
    display: grid;
    grid-template-rows: 39px;
    grid-row-gap: 2px;
    grid-template-columns: 0.5fr repeat(4, 2fr);

    padding:0.80% 2%;
    background:var(--card-color);
    margin:0 75px;

    font-size:1.2vw;
    color:#000;


    .--item-icon,.--item-name,.--item-job,.--item-date,.--item-phone
    {
      text-align:center;
    }
    .--item-icon{
      grid-column: 1;
    }
    .--item-name{
      grid-column: 2;
    }
    .--item-job{
      grid-column: 3;
    }
    .--item-date{
      grid-column: 4;
    }
    .--item-phone{
      grid-column: 5;
    }
    img{
      border-radius:50%;
      height:2.29vw;
      width:34px;
    }

  }
`;

