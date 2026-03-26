import { Command } from '@oclif/core'

export default class Noc extends Command {

  static hidden = true

  static flags = {}

  async run(): Promise<any> {

    const _parsed = await this.parse(Noc)

    const output = '-= NoC =-'

    this.log(output)

    return output

  }

}
