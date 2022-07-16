const devEnv = process.env.NODE_ENV !== "production";

const isEmpty = (value) => {
  const type = typeof value;
  if ((value !== null && type === "object") || type === "function") {
    const props = Object.keys(value);
    if (props.length === 0 || props.size === 0) {
      return true;
    }
  }
  return !value;
};

export const BASE_URL = devEnv
  ? "http://localhost:3000"
  : `https://${process.env.VERCEL_URL}`;

export async function fetchDataFromApi(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const result = await response.json();
  // if (isEmpty(result)) throw String("No data was found!");
  const data = JSON.parse(JSON.stringify(result));
  return data;
}
fetchDataFromApi().catch((error) => {
  console.error(error.message);
});
