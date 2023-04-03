import { Command } from 'commander'
import registerCommanders from "../lib/core/commander"

const program = new Command()

program.name('fileOption-utils')
    .description('CLI to file options')
    .version('1.0.0');

registerCommanders(program)

program.parse()

