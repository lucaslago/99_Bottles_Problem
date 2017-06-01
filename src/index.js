const defaultTemplate = (bottles) => {
  return `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.`;
}
const lastBottleTemplate = (bottles) => {
  return '1 bottle of beer on the wall, 1 bottle of beer.' + 
    '\nTake one down and pass it around, no more bottles of beer.';
}
const lastSentenceTemplate = () => {
  return '\nGo to the store and buy some more, 99 bottles of beer on the wall.';
}

const playSong = (bottles) => {
  if(bottles > 1) {
    return defaultTemplate(bottles);
  } else {
    return lastBottleTemplate(bottles) + lastSentenceTemplate();
  }
}
module.exports = playSong;
