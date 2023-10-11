export const oktaConfig = {
	issuer: `https://dev-75155220.okta.com/oauth2/default`,
	clientId: '0oacof2ynwRHfSnDN5d7',
	redirectUri: `${window.location.origin}/login/callback`,
	scopes: ["openid", "profile", "email"],
	pkce: true,
};
