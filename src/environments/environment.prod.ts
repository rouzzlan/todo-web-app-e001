export const environment = {
  production: true,
  authconf: {
    authority: 'https://keycloak-dev-1.localdomain:8443/realms/myrealm',
    client_id: 'myclient',
    redirect_uri: 'http://172.16.1.100:8001/login-redirect',
    post_logout_redirect_uri: 'http://172.16.1.100:8001/logout-redirect',
    response_type: 'code',
    scope: 'openid profile email',

    silent_redirect_uri: 'http://172.16.1.100:8001/renew',
    // automaticSilentRenew: true,
    // accessTokenExpiringNotificationTime: 4,
    // silentRequestTimeout:10000,

    filterProtocolClaims: true,
    loadUserInfo: true
  },
  baseUrl: 'http://172.16.1.100:8081'
};
