import config from './environment';

describe('Config', () => {
  it('should return the config vars', () => {
    expect(config).toEqual({
      baseUrl: '/api',
      endpoints: {
        chaincode: '/ambSupplyChainConnector'
      },
      token: 'test'
    });
  });

  it('should set the configironment dev', () => {
    process.env.REACT_APP_ENV = '';
    expect(config.token).toContain('test');
  });
});
