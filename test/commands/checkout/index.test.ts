import { runCommand } from '@oclif/test'
import { expect } from 'chai'


describe('checkout:index', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['checkout:noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(15000)
})
