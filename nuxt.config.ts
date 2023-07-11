// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Shopify
    SHOPIFY_API_URL: process.env.URL, //shopifyApiUrl,
    SHOPIFY_API_HEADERS: {
      Accept: 'application/json',
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': process.env.ACCESS_TOKEN,
    }
  },
})
