export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig();

  return await fetch(config.SHOPIFY_API_URL, {
    method: "POST",
    headers: config.SHOPIFY_API_HEADERS,
    body: `{
      collection (
        handle: "popular"
      ) {
        title
        handle
        products (
          first: 10
        ) {
          edges {
            node {
              id
            }
          }
        }
      }
    }`,
  })
    .then((res) => res.json())
    .then((fetchData) => fetchData.data.collection);
});
