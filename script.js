$(document).ready(function() {
  // when the page has loaded, do the following:
  $.get('sentence.html', function(response) {
    // get data from the file called 'sentence.html'
    $('#sentences').html(response);
      // take that data, and put it into the html element
      // that has an id of 'sentences'
  });
});

$.get('this_does_exist.html', function(data) {
    // This will not be called because the .html
    // file request doesn't exist
    $('.other_info').html(data);
    console.log(data)
}).fail(function(error) {
    // This is called when an error occurs
    console.log('Something went wrong: ' + error.statusText);
});
