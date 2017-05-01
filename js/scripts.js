$(document).ready(function() {
  $("#form").submit(function(event) {

    var blanks = ["noun1", "verb1", "animal1", "noun2", "verb2", "adjective"];

    blanks.forEach(function(blank) {
      var userInput = $("#" + blank).val();
      $("." + blank).text(userInput);
    });
    // var noun1Input = $("input#noun1").val();
    // var verb1Input = $("input#verb1").val();
    // var animal1Input = $("input#animal1").val();
    // var noun2Input = $("input#noun2").val();
    // var verb2Input = $("input#verb2").val();
    // var adjectiveInput = $("input#adjective").val();
    //
    // $(".noun1").text(noun1Input);
    // $(".verb1").text(verb1Input);
    // $(".animal1").text(animal1Input);
    // $(".noun2").text(noun2Input);
    // $(".verb2").text(verb2Input);
    // $(".adjective").text(adjectiveInput);

    $("#story").show();

    event.preventDefault();
  });
});
