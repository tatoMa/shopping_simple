import ProductDetail from "../../src/components/ProductDetail";
import Checkout from "../../src/components/Checkout";
import { BASE_URL, fetchDataFromApi } from "../../src/util/fetch";

const Product = ({ data }) => {
  return (
    <>
      <ProductDetail product={data} />
      <Checkout total={data.price} />
    </>
  );
};

export default Product;
export async function getServerSideProps({ query }) {
  let { id } = query;

  const PRODUCT_URL_BY_ID = `${BASE_URL}/api/products/${id}`;
  const productData = await fetchDataFromApi(PRODUCT_URL_BY_ID);
  return {
    props: { data: productData },
  };
}
