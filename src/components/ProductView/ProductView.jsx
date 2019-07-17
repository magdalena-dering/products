import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-grid-system";
import firebase from "../../constants/firebase";
import { getProductId } from "../../utils/_utils";
import { H1, ProductUl, ProductLi } from "../../assets/styles/styles";
import { Card, IMG } from "./styles";

const ProductView = ({ match }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        process.env.PUBLIC_URL + "/data/products.json"
      );
      setProducts(result.data);
    };

    fetchData();
  }, []);

  const productParam = getProductId(match.params.productId);
  const productName = products
    .filter(product => productParam === getProductId(product.number))
    .map(product => product.name);
  const productNumber = products
    .filter(product => productParam === getProductId(product.number))
    .map(product => product.number);

  const onSubmit = e => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("products")
      .add({
        productName
      });
    // .then(() => {
    //   setProducts([]);
    // });
    console.log(productName);
  };

  return (
    <>
      <div key={productNumber}>
        <Row>
          <Col>
            <H1>Product detail</H1>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Card>
              <form onSubmit={onSubmit}>
                <ProductUl>
                  <ProductLi>
                    <span>Name: </span>
                    <p>{productName}</p>
                    <input
                      type="text"
                      value={productName}
                      onChange={e => setProducts(e.currentTarget.value)}
                    />
                  </ProductLi>
                </ProductUl>
              </form>
              <button>Add</button>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductView;
