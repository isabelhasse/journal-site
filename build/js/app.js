(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var consonants = "bcdfghjklmnpqrstvwxyz";

var vowels = "aeiou";

function JournalEntry(title, body) {
  this.title = title;
  this.body = body;
  this.consonants = 0;
  this.vowels = 0;
  this.words = 0;
}

JournalEntry.prototype.wordCount = function() {
  if(this.body) {
    this.words = 1;
  }
  for (i=0; i<this.body.length; i++) {
    if (this.body.charAt(i) === " ") {
      this.words++;
    }
  }
};

JournalEntry.prototype.consonantsAndVowels = function() {
  for (i=0; i<this.body.length; i++) {
    if ( vowels.includes(this.body.charAt(i)) ) {
      this.vowels++;
    } else if ( consonants.includes(this.body.charAt(i)) ) {
      this.consonants++;
    }
  }
};

JournalEntry.prototype.getTeaser = function() {
  var words = 0;
  var teaser = "";
  for (i=0; i<this.body.length; i++) {
    teaser += this.body.charAt(i);
    if(this.body.charAt(i) === " ") {
      words++;
    }
    if(this.body.charAt(i) === "." || words === 8) {
      return teaser;
    }
  }
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

},{"./../js/journal.js":1}]},{},[2]);
