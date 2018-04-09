const buildVerse = require('./build-verse');
const play = require('./play');

const BEER_AMOUNT = 99;

module.exports = {
  playSong: () => play(buildVerse)(BEER_AMOUNT)
};
