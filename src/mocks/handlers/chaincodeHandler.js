import { rest, } from 'msw';

import config from '../../config/environment';

let data = [
];

export const userHandler = [
  rest.post(`${config.baseUrl}${config.endpoints.chaincode}`, async (req, res, ctx) => {
    return new HttpResponse
    })
];
