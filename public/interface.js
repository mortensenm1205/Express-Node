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
      method: 'POST',
      url: baseURL + $.param(objTest),
      data: $.param(objTest),
      success: function(data) {
        if(this.type === 'GET') {
          window.location.replace(this.url);
        }
        $body.html(data);
      }
    });
  });

})
