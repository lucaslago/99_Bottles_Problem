const expect = require('chai').expect
const play = require('./play')

describe('song', () => {
  describe('.play()', () => {
    it('builds verses for every bottle', () => {
      const bottles = 99;
      const buildVerseStub = (bottles) => {
        expect(bottles).to.be.an('number');
        return 'NOOP';
      };
      play(buildVerseStub)(bottles);
    });
  });
});
