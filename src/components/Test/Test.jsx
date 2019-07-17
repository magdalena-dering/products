import React, { useState } from "react";
import firebase from "../../constants/firebase";

const FirebaseTest = () => {
  const [products, setProducts] = useState([]);
  const onSubmit = e => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("products")
      .add({
        products
      });
    //   .then(() => {
    //     setProducts([]);
    //   });
  };

  return (
    <form onSubmit={onSubmit}>
      <p>Add Product</p>
      <p>{products}</p>
      <input
        type="text"
        value={products}
        onChange={e => setProducts(e.currentTarget.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default FirebaseTest;
