import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Home = () => {
  useEffect(() => {
    getproducts();
    fetchProductCategory();
  }, []);

  const [products, setproducts] = useState([]);
  const [productCategory, setproductCategory] = useState([]);

  const getproducts = async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const response = await res.json();
    // console.log(response.products)
    setproducts(response.products);
  };

  const fetchProductCategory = async () => {
    await axios
      .get(`https://dummyjson.com/products/categories`)
      .then((response) => {
        setproductCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Products</h1>
      <Container fluid>
        <Row>
          {products &&
            products.length > 0 &&
            products.map((item) => {
              return (
                <>
                  <Col sm={4} style={{ textAlign: "center" }}>
                    <Link to={`/product/${item.id}`}>
                      <img src={item.images[0]} height="250px" width="250px" />
                    </Link>
                    <h4>{item.title}</h4>
                    <br />
                  </Col>
                </>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
