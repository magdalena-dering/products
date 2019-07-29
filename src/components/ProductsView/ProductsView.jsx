import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col } from "react-grid-system";
import { getProductId } from "../../utils/_utils";
import { Wrapper, H1, ProductUl, ProductLi } from "../../assets/styles/styles";
import { Card, ColMargin } from "./styles";
import Loader from "../Loader";

const ProductsView = () => {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        process.env.PUBLIC_URL + "/data/products.json"
      );
      setProducts(result.data);
    };
    fetchData().catch(e => console.log(e));
  }, []);

  return (
    <>
      <Wrapper>
        <H1>Products</H1>
        <Row>
          {!products ? (
            <Loader />
          ) : products.length === 0 ? (
            <p>No products</p>
          ) : (
            products.map(product => {
              const productName = product.name;
              const productNumber = product.number;
              const productId = getProductId(productNumber);
              const valueName = localStorage.getItem(
                `productName_${getProductId(productNumber)}`
              );
              const valueNumber = localStorage.getItem(
                `productNumber_${getProductId(productNumber)}`
              );
              return (
                <Col lg={4} key={productNumber} style={ColMargin}>
                  <Card>
                    <ProductUl>
                      <ProductLi>
                        <span>Name: </span>
                        {valueName === "" ? productName : valueName}
                      </ProductLi>
                      <ProductLi>
                        <span>Number: </span>
                        {valueNumber === "" ? productNumber : valueNumber}
                      </ProductLi>
                    </ProductUl>
                    <Link to={`/products/${productId}`}>Get details</Link>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </Wrapper>
    </>
  );
};

export default ProductsView;
