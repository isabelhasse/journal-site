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
