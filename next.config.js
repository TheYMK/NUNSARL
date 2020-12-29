const withCSS = require('@zeit/next-css');

// We can export env variables using publicRuntimeConfig
module.exports = withCSS({
	publicRuntimeConfig: {}
});

// To access these variables easily we create an other file called config so we don't have to write publicRuntimeConfig.[....]
