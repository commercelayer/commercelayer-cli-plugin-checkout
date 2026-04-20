import { runCommand } from '@oclif/test'
import { expect } from 'chai'


describe('checkout:order', () => {
  it('runs checkout:order command', async () => {
    const { error } = await runCommand(['checkout:order', '--help'])
    if (error) expect((error as any).oclif?.exit).to.equal(0)
  }).timeout(15000)
})
