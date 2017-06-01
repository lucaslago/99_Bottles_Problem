const expect = require('chai').expect
const buildVerse = require('../../src/song/build_verse')

describe('Song.buildVerse', () => {
  it('builds bottles with correct bottles count', () => {
    const firstVerse = buildVerse(99);
    const secondVerse = buildVerse(98);
    const expectedFirstVerse = '99 bottles of beer on the wall, 99 bottles of beer.' +
    '\nTake one down and pass it around, 98 bottles of beer on the wall.';
    const expectedSecondVerse = '98 bottles of beer on the wall, 98 bottles of beer.' +
    '\nTake one down and pass it around, 97 bottles of beer on the wall.';

    expect(firstVerse).to.equal(expectedFirstVerse);
    expect(secondVerse).to.equal(expectedSecondVerse);
  });

  it('builds verse with singular words for the last beer', () => {
    const lastVerse = buildVerse(1);
    const expected = '1 bottle of beer on the wall, 1 bottle of beer.' +
    '\nTake one down and pass it around, no more bottles of beer.';
    expect(lastVerse).to.have.string(expected);
  });

  it('builds verse telling the caller to buy more beers when theres no beer left', () => {
    const lastVerse = buildVerse(1);
    const expected = 'Go to the store and buy some more, 99 bottles of beer on the wall.';
    expect(lastVerse).to.have.string(expected);
  });
})
