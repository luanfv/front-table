const result_data = document.querySelector("#result-data");
let return_data = '';

const options_header = {
  method: 'GET',
  headers: new Headers({
      'Content-Type': 'application/json'
  })
};

function returnItems( items ){
  let listItems = '';

  for ( i = 0; i <= 2; i++ ){
      if ( items[i] ){
          listItems += '<p>' + items[i].name + '</p>';
      }
  }

  return listItems;
}

function format_data( dataInput ){
  const data = new Date(dataInput);
  return data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
}

function format_phone( phone_number ){
  const code = phone_number.substring(0, 2);
  const ddd = phone_number.substring(2, 4);
  const number = phone_number.substring(4, 13);

  return '+' + code + ' (' + ddd + ') ' + number;
}

function init_result( result ){
  return_data = '';
  result_data.innerHTML = '';

  result.forEach(element => {
    return_data += '<div class="table-line">'+
                      '<span class="item-thumb"><img src="' + element.image + '"> </span>'+
                      '<span class="item-name"> <p>' + element.name + '</p></span>'+
                      '<span class="item-func"><p>' + element.job + '</p></span>'+
                      '<span class="item-data">' + format_data( element.admission_date ) + '</span>'+
                      '<span class="item-phone">' + format_phone( element.phone ) + '</span>'+
                    '</div>';
  });
  result_data.innerHTML = return_data;
}

function show_result( resultSearch, result, divResult ){
  const inputSearch = document.querySelector("#search").value.toLowerCase();

  if ( inputSearch == "" ){
      alert("erro");
      return false;
  }

  resultSearch = result.filter((data) => {
    let data_return = data.name.toLowerCase();
        data_return += data.job.toLowerCase();

    return data_return.indexOf(inputSearch) > -1;
  });

  if ( resultSearch.length > 0 ){
    divResult.style.display = "none";
    init_result( resultSearch );
  }
  else {
      divResult.style.display = "block";
  }
}

fetch('server.json', options_header)
.then(function(response) {
  return response.json();
})
.then(function(response) {
  let result = response.employess;
  let resultSearch = [];
  const formSearch = document.querySelector("#form-search");
  const divResult = document.querySelector(".search-result");
  const iconSearch = document.querySelector(".icon-search");

  formSearch.addEventListener('submit', function(event){
    event.preventDefault();
    show_result( resultSearch, result, divResult );
    return false;
  });

  iconSearch.addEventListener('click', function(event){
    show_result( resultSearch, result, divResult );
    return false;
  });

  if ( result ){
    init_result( result );
  }
})
.catch(function(err) {
  console.log(err);
  return err;
});
