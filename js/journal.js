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
