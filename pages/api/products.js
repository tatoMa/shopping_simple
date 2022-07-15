// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let data;
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    data = await res.json();
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ data });
}