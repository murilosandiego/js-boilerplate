import { expect } from 'chai'
import sum from '../src'

describe('Sum', () => {
  it('Should `sum(2,40)` return 42', () => {
    expect(sum(2, 40)).to.be.equal(42)
  })
})
