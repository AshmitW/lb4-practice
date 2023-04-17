// Uncomment these imports to begin using these cool features!

import {get} from '@loopback/rest';

// import {inject} from '@loopback/core';

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
