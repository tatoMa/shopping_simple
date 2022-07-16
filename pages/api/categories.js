export default async function handler(req, res) {
  let data;
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  res.status(200).json(data);
}
