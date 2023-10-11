export const oktaConfig = {
	issuer: `https://dev-75155220.okta.com/oauth2/default`,
	clientId: '0oacdl3nqu1058x065d7',
	redirectUri: `${window.location.origin}/login/callback`,
	scopes: ["openid", "profile", "email"],
	pkce: true,
};
