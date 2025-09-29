// import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css"

function Products({ products, setCartItem }) {

  // const [cartitem,setcartitem]=useState(0);
  function handleincrement() {
    setCartItem((pre) => pre + 1);

  }
  return (

    <Col sm={6} md={4} lg={3} xxl={2}>

      <Card >
        <div className=" p-5">
          <Link to={`/products/${products.id}`}>
            <Card.Img variant="top" src={products.image} className="product_img" />
          </Link>
        </div>

        <Card.Body>
          <Card.Title>{products.title}</Card.Title>
          <h6>₹{products.price} </h6>
          <Card.Text>
            {products.description}

            {/* <h2>{cartitem}</h2> */}

          </Card.Text>
          <Button onClick={handleincrement} variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default Products;