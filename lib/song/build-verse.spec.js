const expect = require('chai').expect
const buildVerse = require('./build-verse')

describe('song', () => {
  describe('.buildVerse()', () => {
    it('builds verses with dynamic bottles amount', () => {
      const expectedVerse = '2 bottles of beer on the wall, 2 bottles of beer.' +
        '\nTake one down and pass it around, 1 bottles of beer on the wall.';

      const verse = buildVerse(2);

      expect(verse).to.equal(expectedVerse);
    });

    context('when bottles amount is 1', () => {
      it('builds last verse', () => {
        const expectedVerse = '1 bottle of beer on the wall, 1 bottle of beer.' +
          '\nTake one down and pass it around, no more bottles of beer.' +
          '\nGo to the store and buy some more, 99 bottles of beer on the wall.';
        const verse = buildVerse(1);
        expect(verse).to.equal(expectedVerse);
      });
    });
  });
});
