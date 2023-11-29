import { ENV } from './constants';

const BASE = {
  baseUrl: '/api',
  endpoints: {
    chaincode: '/ambSupplyChainConnector'
  },
  token: 'test'
};

const DEV = {
  baseUrl: '',
  endpoints: BASE.endpoints,
  token: ''
};

const QA = {
  baseUrl: '',
  endpoints: BASE.endpoints,
  token: ''
};

const PRO = {
  baseUrl: '',
  endpoints: BASE.endpoints,
  token: ''
};

const getVars = () => {
  switch (import.meta.env.MODE) {
    case ENV.DEV:
      return DEV;
    case ENV.QA:
      return QA;
    case ENV.PRO:
      return PRO;
    default:
      return BASE;
  }
};

const config = {
  ...getVars()
};

export default config;
