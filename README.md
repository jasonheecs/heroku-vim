# heroku-vim
A Heroku plugin that allows you to use vim in a dyno

## Installation
`heroku plugins:install @jasonheecs/heroku-vim`

## Usage
`heroku vim -a <app-name>`

This will install vim and start a bash session on the dyno

<br/>

You can set a command other than `bash` to be run as well:

`heroku vim -c 'rails console' -a <app-name>`

## License
MIT
