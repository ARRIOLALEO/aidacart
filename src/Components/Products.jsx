import React, { useContext, useState } from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
  Button,
} from "reactstrap";
import { MyContext, myContext } from "../context/MyContext";
import { Link } from "react-router-dom";

const Products = () => {
  const { data } = useContext(MyContext);
  // const [(showMore, setShowMore)] = useState(false);
  // const handleClick = (event) => {
  //   console.log(event.target.id);
  // };
  return (
    <div className=" container">
      {" "}
      {data.map((product) => {
        const {
          fields: {
            image: {
              0: { url },
            },
          },
        } = product;

        return (
          <Link to={`${product.id}`}>
            <Card
              // key={product.id}
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src={url} style={{ height: "200px" }} />
              <CardBody>
                <CardTitle tag="h5">{product.fields.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  ${product.fields.price}
                </CardSubtitle>
              </CardBody>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
