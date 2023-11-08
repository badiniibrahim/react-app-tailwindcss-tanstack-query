/* eslint-disable jest/no-conditional-expect */
import config from '../utils/config';

import apiRequest from './index';

global.fetch = jest.fn();

beforeEach(() => {
  jest.resetModules();
});

describe('apiRequest Test', () => {
  it('Should make successful API request', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ data: 'some data' }),
    });

    const response = await apiRequest({
      path: '/posts',
      method: 'get',
    });

    expect(fetch).toHaveBeenCalledWith(config.URL + '/posts', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      body: undefined,
    });

    expect(response).toEqual({ data: 'some data' });
  });
});
