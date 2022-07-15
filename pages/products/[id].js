import ProductDetail from "../../src/components/ProductDetail";
import Checkout from "../../src/components/Checkout";

const Product = ({ data }) => {
  return (
    <>
      <ProductDetail product={data.data} />
      <Checkout />
    </>
  );
};

export default Product;
export async function getServerSideProps({ query }) {
  let { id } = query;
  let data;
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    data = await res.json();
  } catch (error) {}
  return {
    props: { data }, // will be passed to the page component as props
  };
}
