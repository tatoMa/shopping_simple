import Head from "next/head";
import Image from "next/image";
import ProductItem from "../src/components/ProductItem";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return <>{data.length > 0 && <ProductItem products={data} />}</>;
}

export async function getStaticProps(context) {
  let data;
  try {
    const res = await fetch(`http://localhost:3000/api/products`);
    data = await res.json();
  } catch (error) {}
  return {
    props: {
      data: data.data,
    },
  };
}
