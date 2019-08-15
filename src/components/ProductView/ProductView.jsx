import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-grid-system";
import { getProductId } from "../../utils/_utils";
import { Wrapper, H1, ProductUl, ProductLi } from "../../assets/styles/styles";
import { Info } from "./styles";

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

  useEffect(() => {
    localStorage.setItem(`productName_${productParam}`, valueName);
    localStorage.setItem(`productNumber_${productParam}`, valueNumber);
    localStorage.setItem(`productDesc_${productParam}`, valueDesc);
    localStorage.setItem(`productImgName_01${productParam}`, valueImgName_01);
    localStorage.setItem(`productImgName_02${productParam}`, valueImgName_02);
  });

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
    localStorage.getItem(`productImgName_01${productParam}`) || ""
  );
  const [valueImgName_02, setValueImgName_02] = useState(
    localStorage.getItem(`productImgName_02${productParam}`) || ""
  );

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
          const productImg01 = product.images[0];
          const productImg02 = product.images[1];
          return (
            <Wrapper key={product.number}>
              <H1>Product detail</H1>
              <Info>Enter mouse on text to edit it.</Info>
              <Row>
                <Col lg={6}>
                  <ProductUl>
                    <ProductLi>
                      <span>Name: </span>
                      <p>{valueName === "" ? product.name : valueName}</p>
                      <input type="text" onChange={onChangeName} />
                    </ProductLi>
                    <ProductLi>
                      <span>Number: </span>
                      <p>{valueNumber === "" ? product.number : valueNumber}</p>
                      <input type="text" onChange={onChangeNumber} />
                    </ProductLi>
                    <ProductLi>
                      <span>Description: </span>
                      <p>
                        {valueDesc === "" ? product.description : valueDesc}
                      </p>
                      <input type="text" onChange={onChangeDesc} />
                    </ProductLi>
                    {productImg01 && (
                      <ProductLi>
                        <span>Image name1: </span>
                        <p>
                          {valueImgName_01 === ""
                            ? productImg01.name
                            : valueImgName_01}
                        </p>
                        <input type="text" onChange={onChangeImgName01} />
                        <img src={productImg01.url} alt="product-img" />
                      </ProductLi>
                    )}
                    {productImg02 && (
                      <ProductLi>
                        <span>Image name2: </span>
                        <p>
                          {valueImgName_02 === ""
                            ? productImg02.name
                            : valueImgName_02}
                        </p>
                        <input type="text" onChange={onChangeImgName02} />
                        <img src={productImg02.url} alt="product-img" />
                      </ProductLi>
                    )}
                  </ProductUl>
                </Col>
              </Row>
            </Wrapper>
          );
        })}
    </>
  );
};

export default ProductView;
