const expect = require('chai').expect
const playSong = require('../src')

describe('99_Bottles_Song', () => {
  it('starts the song at 99th bottle', () => {
    const firstSentence = playSong(99);
    const expectedSentence = '99 bottles of beer on the wall, 99 bottles of beer.' +
    '\nTake one down and pass it around, 98 bottles of beer on the wall.'
    expect(firstSentence).to.equal(expectedSentence)
  })

  it('uses singular words for the last beer', () => {
    const lastSentence = playSong(1);
    const expectedSentence = '1 bottle of beer on the wall, 1 bottle of beer.' +
    '\nTake one down and pass it around, no more bottles of beer.'
    expect(lastSentence).to.have.string(expectedSentence)
  })

  it('tells the user to buy more beers when theres no beer left', () => {
    const lastSentence = playSong(1);
    const expectedSentence = 'Go to the store and buy some more, 99 bottles of beer on the wall.';
    expect(lastSentence).to.have.string(expectedSentence)
  })
})
