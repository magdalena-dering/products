import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-grid-system";
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

  const [valueName, setValue] = useState(
    localStorage.getItem(`productName_${productParam}`) || ""
  );
  const [valueNumber, setValueNumber] = useState(
    localStorage.getItem(`productNumber_${productParam}`) || ""
  );
  const [valueDesc, setValueDesc] = useState(
    localStorage.getItem(`productDesc_${productParam}`) || ""
  );

  const [valueImgName_01, setValueImgName_01] = useState(
    localStorage.getItem(`productImgName_${productParam}`) || ""
  );
  const [valueImgName_02, setValueImgName_02] = useState(
    localStorage.getItem(`productImgName_${productParam}`) || ""
  );

  useEffect(() => {
    localStorage.setItem(`productName_${productParam}`, valueName);
    localStorage.setItem(`productNumber_${productParam}`, valueNumber);
    localStorage.setItem(`productDesc_${productParam}`, valueDesc);
    localStorage.setItem(`productImgName_${productParam}`, valueImgName_01);
    localStorage.setItem(`productImgName_${productParam}`, valueImgName_02);
  }, [
    productParam,
    valueDesc,
    valueImgName_01,
    valueImgName_02,
    valueName,
    valueNumber
  ]);

  const onChangeName = event => setValue(event.target.value);
  const onChangeNumber = event => setValueNumber(event.target.value);
  const onChangeDesc = event => setValueDesc(event.target.value);
  const onChangeImgName01 = event => setValueImgName_01(event.target.value);
  const onChangeImgName02 = event => setValueImgName_02(event.target.value);

  return (
    <>
      {products
        .filter(product => productParam === getProductId(product.number))
        .map(product => {
          const productImg1 = product.images[0];
          const productImg2 = product.images[1];

          return (
            <div key={product.number}>
              <Row>
                <Col>
                  <H1>Product detail</H1>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Card>
                    <ProductUl>
                      <ProductLi>
                        <span>Name: </span>
                        <input
                          value={valueName}
                          type="text"
                          onChange={onChangeName}
                        />
                      </ProductLi>
                      <ProductLi>
                        <span>Number: </span>
                        <input
                          value={valueNumber}
                          type="text"
                          onChange={onChangeNumber}
                        />
                      </ProductLi>
                      <ProductLi>
                        <span>Description: </span>
                        <input
                          value={valueDesc}
                          type="text"
                          onChange={onChangeDesc}
                        />
                      </ProductLi>
                      {productImg1 && (
                        <ProductLi>
                          <span>Image name1: </span>
                          <input
                            value={valueImgName_01}
                            type="text"
                            onChange={onChangeImgName01}
                          />
                          <IMG src={productImg1.url} alt="product-img" />
                        </ProductLi>
                      )}
                      {productImg2 && (
                        <ProductLi>
                          <span>Image name2: </span>
                          <input
                            value={valueImgName_02}
                            type="text"
                            onChange={onChangeImgName02}
                          />
                          <IMG src={productImg2.url} alt="product-img" />
                        </ProductLi>
                      )}
                    </ProductUl>
                  </Card>
                </Col>
              </Row>
            </div>
          );
        })}
    </>
  );
};

export default ProductView;
