import React, { Fragment, useEffect, useState } from "react";

import Card from "../../../components/Card";
import { ReactComponent as CellPhone } from "../../../assets/icons/icCellPhone.svg";
import { ReactComponent as Computer } from "../../../assets/icons/icComputer.svg";
import { ReactComponent as SmartWatch } from "../../../assets/icons/icSmartWatch.svg";
import { ReactComponent as Headphone } from "../../../assets/icons/icHeadphone.svg";
import { ReactComponent as Game } from "../../../assets/icons/icGame.svg";
import "./styles.scss";

const categories = [
  {
    id: 1,
    name: "Shoes",
    icon: CellPhone,
  },
  {
    id: 2,
    name: "Shoes",
    icon: Computer,
  },
  {
    id: 3,
    name: "Shoes",
    icon: Computer,
  },
];
const Categories = () => {
  const [products, setProducts] = useState([]);

  return (
    <Fragment>
      <div className="categories-list-container">
        <div className="row">
          <div className="line" />
          <h4 className="todays">Categories</h4>
        </div>

        <h1 className="sale-title">Browse By Category</h1>

        <div className="products-container">
          {categories.map((item) => {
            return (
              <div className="">
                <item.icon />
                <h4 className="category-name">{item.name}</h4>
              </div>
            );
          })}
        </div>
        <span>&#9742;</span>
        <span>&#128421;</span>
      </div>
    </Fragment>
  );
};

export default Categories;
