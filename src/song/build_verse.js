const bottlesVerse = (bottles) => {
  return `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.`;
};

const lastBottleVerse = () => {
  return '1 bottle of beer on the wall, 1 bottle of beer.' + 
    '\nTake one down and pass it around, no more bottles of beer.';
};

const goToStoreVerse = () => {
  return '\nGo to the store and buy some more, 99 bottles of beer on the wall.';
};

const buildVerse = (bottles) => {
  if(bottles > 1) {
    return bottlesVerse(bottles);
  } else {
    return lastBottleVerse() + goToStoreVerse();
  }
}
module.exports = buildVerse;
