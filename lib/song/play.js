const play = (buildVerse) => (bottles) => {
  for(let i = bottles; i >= 0; i--){
    console.log(buildVerse(i));
  }
};

module.exports = play;
