import { BASE_URL } from "../../src/util/fetch";
import LoginButton from "../src/components/LoginButton";
import ProductItem from "../src/components/ProductItem";
import { fetchDataFromApi } from "../src/util/fetch";

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
