var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item){

	   	$('<h3>').text(item.name).appendTo(countriesList);
	   	var img = $('<img>').attr('src', item.flag).attr('widht', 90).attr('height', 60);
		$('<h3>').appendTo(countriesList).append(img);
	   	$('<li>').text('country native name: ' + item.nativeName).appendTo(countriesList);
		$('<li>').text('capital: ' + item.capital).appendTo(countriesList);
		$('<li>').text('region: ' + item.region).appendTo(countriesList);
		$('<li>').text('currency: ' + item.currencies[0].name +' (' + item.currencies[0].symbol + ')').appendTo(countriesList);
		$('<li>').text('language: ' + item.languages[0].name).appendTo(countriesList);
		$('<li>').text('area: ' +  item.area +  ' km 2').appendTo(countriesList);
		var borders = item.borders;
		var caBorders = borders.join(', ');
		if (!caBorders.length) {
			$('<li>').text('border lands: brak').appendTo(countriesList);
			} else {
			$('<li>').text('border lands: ' + caBorders).appendTo(countriesList);
		}
		
	});

}