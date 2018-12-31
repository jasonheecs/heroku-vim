import {expect, test} from '@oclif/test'

describe('vim', () => {
  test
    .nock('https://api.heroku.com', api => api
      .post('/apps/testapp/dynos')
      .reply(200, {
          attach_url: 'https://rendezvous.runtime.heroku.com:5000/123456',
          name: 'testdyno'
        }
      )
    )
    .nock('https://api.heroku.com', api => api
      .persist()
      .get('/apps/testapp/dynos/testdyno')
      .reply(404)
    )
    .command(['vim', '-a=testapp'])
    .exit(100)
    .catch(/404/)
    .it('makes request to create and attach to heroku dyno');
})
