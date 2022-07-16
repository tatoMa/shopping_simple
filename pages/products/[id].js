import ProductDetail from "../../src/components/ProductDetail";
import Checkout from "../../src/components/Checkout";

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
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await res.json();
  return {
    props: { data: data },
  };
}
