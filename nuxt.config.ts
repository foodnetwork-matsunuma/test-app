const shopDomain = 'suehiro.jp'

// Shopify
const shopifyApiVer = '2023-04' // ※3ヶ月毎に更新
const shopifyDomain = 'check.' + shopDomain
const shopifyUrl = 'https://' + shopifyDomain
const shopifyApiUrl = shopifyUrl + '/api/' + shopifyApiVer + '/graphql.json'
const shopifyApiHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/graphql',
  'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN,
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Shopify
    SHOPIFY_API_URL: shopifyApiUrl,
    SHOPIFY_API_HEADERS: shopifyApiHeaders
  },
})
