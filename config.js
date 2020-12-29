import getConfig from 'next/config'; // So we can access configuration variables

const { publicRuntimeConfig } = getConfig();

export const API_URL = publicRuntimeConfig.API_URL;
