import {Command, flags} from '@heroku-cli/command'
import {Dyno} from '@heroku-cli/plugin-run-v5'

export default class AppCommand extends Command {
  static description = 'Install Vim and use it in a dyno'
  static flags = {
    remote: flags.remote(),
    app: flags.app({required: true}),
    command: flags.string(({char: 'c', description: 'command to run'}))
  }

  async run() {
    const {flags} = this.parse(AppCommand)
    let dyno_command = flags.command || 'bash'

    let opts = {
      heroku: this.legacyHerokuClient,
      app: flags.app,
      command: `
        mkdir ~/vim
        cd ~/vim
        curl 'https://s3.amazonaws.com/bengoa/vim-static.tar.gz' | tar -xz
        export VIMRUNTIME="$HOME/vim/runtime"
        export PATH="$HOME/vim:$PATH"
        cd -
        ${dyno_command}
      `,
      showStatus: true,
      attach: true,
      notify: true
    }

    let dyno = new Dyno(opts)
    await dyno.start()
  }
}
