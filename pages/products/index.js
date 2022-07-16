import ProductItem from "../../src/components/ProductItem";
import { BASE_URL, fetchDataFromApi } from "../../src/util/fetch";

export default function Home({ productsData }) {
  return (
    <>{productsData.length > 0 && <ProductItem products={productsData} />}</>
  );
}

export async function getStaticProps(context) {
  const PRODUCTS_URL = `${BASE_URL}/api/products`;
  const productsData = await fetchDataFromApi(PRODUCTS_URL);

  return {
    props: {
      productsData,
    },
  };
}
