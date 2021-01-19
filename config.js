import getConfig from 'next/config'; // So we can access configuration variables

const { publicRuntimeConfig } = getConfig();

export const API_URL = publicRuntimeConfig.API_URL;
export const REGISTER_REDIRECT_URL = publicRuntimeConfig.REGISTER_REDIRECT_URL;
export const FORGOT_PASSWORD_REDIRECT_URL = publicRuntimeConfig.FORGOT_PASSWORD_REDIRECT_URL;
export const DOMAIN = publicRuntimeConfig.PRODUCTION
	? publicRuntimeConfig.DOMAIN_PRODUCTION
	: publicRuntimeConfig.DOMAIN_DEVELOPMENT;

export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
