import React, { Fragment, useEffect, useState } from "react";

import Card from "../Card";
import Button from "../../components/Button";
import "./styles.scss";

const CardsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  return (
    <Fragment>
      <div className="list-container">
        <div className="row">
          <div className="line" />
          <h4 className="todays">Today’s</h4>
        </div>

        <h1 className="sale-title">Flash Sales</h1>

        <div className="products-container">
          {products.map((item) => {
            return <Card key={item.id} product={item} />;
          })}
        </div>
        <Button
          width={"20%"}
          marginTop={20}
          type={"view-all"}
        >
          View All Products
        </Button>
      </div>
    </Fragment>
  );
};

export default CardsList;
