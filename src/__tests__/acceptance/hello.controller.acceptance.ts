import {Client, expect} from '@loopback/testlab';
import {Lb4PracticeApplication} from '../..';
import {setupApplication} from './test-helper';

describe('HelloController', () => {
  let app: Lb4PracticeApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  it('invokes GET /hello', async () => {
    const res = await client.get('/hello').expect(200);
    expect(res.body).to.containEql({msg: 'Hello world'});
  });

  after(async () => {
    await app.stop();
  });
});
