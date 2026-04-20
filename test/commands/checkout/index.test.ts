import { runCommand } from '@oclif/test'
import { expect } from 'chai'


describe('checkout:index', () => {
  it('runs checkout command', async () => {
    const { error } = await runCommand(['checkout', '--help'])
    if (error) expect((error as any).oclif?.exit).to.equal(0)
  }).timeout(15000)
})
