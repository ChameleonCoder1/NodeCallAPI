//Google Knowledge Graph API Key:
// AIzaSyD8oSHlQJYE6E_zRnz8P8Chs0zSIzaDTHw
//https://kgsearch.googleapis.com/v1/entities:search?query=taylor+swift&key=API_KEY&limit=1&indent=True

//$('<div>', {text:element['result']['name']}).appendTo(document.body);
//$('<p>', {text:element['result']['name']}).appendTo("#googlekg");



function callGoogleAPI() {
    var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
    var params = {
      'query': document.getElementById("searchTxt").value,
      'limit': 3,
      'indent': true,
      'key' : 'AIzaSyD8oSHlQJYE6E_zRnz8P8Chs0zSIzaDTHw',
    };
    $.getJSON(service_url + '?callback=?', params, function(response) {
      $.each(response.itemListElement, function(i, element) {
        str=JSON.stringify(element, null, 4);
        $('<p>', {text:str}).appendTo("#googlekg");
      });
    });
}
