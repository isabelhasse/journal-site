function JournalEntry(title, body) {
  this.title = title;
  this.body = body;
}

JounralEntry.prototype.wordCount = function() {
  var words;
  if(this.body) {
    words = 1;
  } else {
    words = 0;
  }
  // for (i=0; i<this.body.length; i++) {
  //   if (this.body.charAt(i) === " ") {
  //     words++;
  //   }
  return words;
  }
};

exports.entryModule = JournalEntry;
