$(function() {

  var baseURL = 'http://localhost:9000/passed/?';

  var $submit = $('#submit');

  var $body = $("body");

  $submit.click(function(event) {
    var testName = $('#test-value').attr('name');
    var testValue = $('#test-value').val();
    var anotherName = $('#second-value').attr('name');
    var anotherValue = $('#second-value').val();

    var objTest = {};
    objTest[testName] = testValue;
    objTest[anotherName] = anotherValue;

    console.log(objTest);

    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: baseURL + $.param(objTest),
      success: function(response) {
        $body.html(response);
      }
    });
  });

})
