const devEnv = process.env.NODE_ENV !== "production";

export const BASE_URL = devEnv
  ? "http://localhost:3000"
  : "https://shopping-simple.vercel.app";

export async function fetchDataFromApi(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const products = await response.json();
  return products;
}
fetchDataFromApi().catch((error) => {
  console.error(error.message);
});
