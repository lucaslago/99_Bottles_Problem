const { EOL } = require('os');

const LAST_VERSE = `1 bottle of beer on the wall, 1 bottle of beer.${EOL}Take one down and pass it around, no more bottles of beer.${EOL}Go to the store and buy some more, 99 bottles of beer on the wall.`
const bottlesVerse = bottles => (`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.${EOL}Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.`);

const buildVerse = (bottles) => {
  if(bottles > 1) {
    return bottlesVerse(bottles);
  } else {
    return LAST_VERSE;
  }
}

module.exports = buildVerse;
