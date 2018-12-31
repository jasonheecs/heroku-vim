# heroku-vim
[![Build Status][travis-badge]][travis-link] [![Coverage Status][coveralls-badge]][coveralls-link]

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

[coveralls-badge]: https://coveralls.io/repos/github/jasonheecs/heroku-vim/badge.svg?branch=master
[coveralls-link]: https://coveralls.io/github/jasonheecs/heroku-vim?branch=master
[travis-badge]: https://travis-ci.com/jasonheecs/heroku-vim.svg?branch=master
[travis-link]: https://travis-ci.com/jasonheecs/heroku-vim