import React, { useEffect } from "react";
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from 'store/actions/product-list';


export default function ProductList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    return () => {

    }
  }, [])

  return (
    <div>
      <Head>
        <title>Product List</title>
      </Head>


      <div>Product List</div>
    </div >
  );
}
