var JournalEntry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $("#entry").submit(function(event){
    event.preventDefault();
    var newTitle = $("#title").val();
    var newBody = $("#body").val();
    var newEntry = new JournalEntry(newTitle, newBody);
    $(".output").text(newEntry.body);
    $("#word-count").text(newEntry.wordCount());
  });
});
