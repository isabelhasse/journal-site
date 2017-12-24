var JournalEntry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $("#entry").submit(function(event){
    event.preventDefault();

    var newTitle = $("#title").val();
    var newBody = $("#body").val();
    var newEntry = new JournalEntry(newTitle, newBody);

    newEntry.consonantsAndVowels();
    newEntry.wordCount();

    $(".output").append("<h2>" + newEntry.title + "</p>");
    $(".output").append("<p>" + newEntry.body + "</p>");
    $("#word-count").text(newEntry.words);
    $("#vowel-count").text(newEntry.vowels);
    $("#consonant-count").text(newEntry.consonants);
    $("#teaser").text(newEntry.getTeaser());
  });
});
