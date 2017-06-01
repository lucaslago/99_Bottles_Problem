const expect = require('chai').expect
const Song = require('../../src/song')

describe('Song.play', () => {

  it('prints all the songs verses', () => {
    const buildVerseMock = (bottles) => {
      expect(bottles).to.be.within(1, 99);
    };
    const song = new Song(buildVerseMock);

    song.play();
  });
});
