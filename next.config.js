const withCSS = require('@zeit/next-css');

// We can export env variables using publicRuntimeConfig
module.exports = withCSS({
	publicRuntimeConfig: {
		API_URL: 'http://localhost:8000/api',
		PRODUCTION: false,
		REGISTER_REDIRECT_URL: 'http://localhost:3000/auth/register/complete',
		FORGOT_PASSWORD_REDIRECT_URL: 'http://localhost:3000/auth/login',
		DOMAIN_DEVELOPMENT: 'http://localhost:3000',
		DOMAIN_PRODUCTION: 'https://nunsarl.com',
		FB_APP_ID: '150134640202591'
	}
});

// To access these variables easily we create an other file called config so we don't have to write publicRuntimeConfig.[....]
