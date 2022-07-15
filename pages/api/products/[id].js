// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { id } = req.query;
  let data;
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ data });
}
