import Contentstack from "contentstack";

const isConfigured = Boolean(
  process.env.CONTENTSTACK_API_KEY &&
  process.env.CONTENTSTACK_DELIVERY_TOKEN &&
  process.env.CONTENTSTACK_ENVIRONMENT
);

let Stack = null;
if (isConfigured) {
  Stack = Contentstack.Stack({
    api_key: process.env.CONTENTSTACK_API_KEY,
    delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    environment: process.env.CONTENTSTACK_ENVIRONMENT,
  });
}

export async function getEntries(contentType) {
  if (!isConfigured) return [];
  try {
    const result = await Stack.ContentType(contentType).Query().toJSON().find();
    return result[0] || [];
  } catch (err) {
    console.error("Contentstack error:", err && err.message ? err.message : err);
    return [];
  }
}

export async function getEntry(contentType, slug) {
  if (!isConfigured) return null;
  try {
    const res = await Stack.ContentType(contentType).Query().where("url", `/${slug}`).toJSON().find();
    return res && res[0] && res[0][0] ? res[0][0] : null;
  } catch (err) {
    console.error("Contentstack error:", err && err.message ? err.message : err);
    return null;
  }
}
