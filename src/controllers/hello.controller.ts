// Uncomment these imports to begin using these cool features!

import {authenticate} from '@loopback/authentication';
import {get} from '@loopback/rest';

// import {inject} from '@loopback/core';

@authenticate('jwt')
export class HelloController {
  constructor() {}

  @get('/hello', {
    responses: {
      '200': {
        description: 'This API will return a Hello world msg',
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
      },
    },
  })
  async sayHello(): Promise<object> {
    console.log('sayHello function was called');
    return {msg: 'Hello world'};
  }
}
