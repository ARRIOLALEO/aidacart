import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { MyContext } from "../context/MyContext";

const SingleProduct = () => {
  const { addOneToCart, cartProducts } = useContext(MyContext);
  const [data, setData] = useState([]);
  const id = useParams();
  const navigate = useNavigate();

  console.log(id);
  const fetchData = () => {
    fetch(`https://course-api.com/javascript-store-single-product?id=${id.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Button
        style={{ backgroundColor: "purple" }}
        onClick={() => navigate(-1)}
      >
        Back Home
      </Button>

      <div className="product-details">
        <div className="product-detail-image">
          <img src={data?.fields?.image[0].url} alt=""/>
        </div>
        <div className="product-details-right">
          <h1>{data?.fields?.name}</h1>
          <h3>{data?.fields?.company}</h3>
          <h4>${data?.fields?.price}</h4>
          <p>{data?.fields?.description}</p>
          <Button
            onClick={() =>{
               addOneToCart(id,data?.fields?.name,data?.fields?.price)
              }}
            style={{ backgroundColor: "purple" }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
