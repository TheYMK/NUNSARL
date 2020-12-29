const withCSS = require('@zeit/next-css');

// We can export env variables using publicRuntimeConfig
module.exports = withCSS({
	publicRuntimeConfig: {
		API_URL: 'http://localhost:8000/api'
	}
});

// To access these variables easily we create an other file called config so we don't have to write publicRuntimeConfig.[....]
