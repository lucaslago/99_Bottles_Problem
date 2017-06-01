const defaultBuildVerse = require('./build_verse');

class Song {
  constructor(buildVerse = defaultBuildVerse) {
    this.BOTTLE_COUNT = 99;
    this.buildVerse = buildVerse;
  }

  play() {
    for(let i = this.BOTTLE_COUNT; i >= 1; i--) {
      let currentVerse = this.buildVerse(i);
      if(currentVerse) {
       console.log(currentVerse);
      }
    }
  }
}

module.exports = Song;
