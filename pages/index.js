import ProductItem from "../src/components/ProductItem";
// import { BASE_URL, fetchDataFromApi } from "../src/util/fetch";

export default function Home({ productsData }) {
  return (
    <>{productsData.length > 0 && <ProductItem products={productsData} />}</>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://shopping-simple.vercel.app/api/products");
  const data = await res.json();
  return {
    props: {
      productsData: data,
    },
  };
}
