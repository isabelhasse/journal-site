(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function JournalEntry(title, body) {
  this.title = title;
  this.body = body;
}

JournalEntry.prototype.wordCount = function() {
  var words;
  if(this.body === "") {
    words = 0;
  } else {
    words = 1;
  }
  for (i=0; i<this.body.length; i++) {
    if (this.body.charAt(i) === " ") {
      words++;
    }
  }
 return words;
};

exports.entryModule = JournalEntry;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
