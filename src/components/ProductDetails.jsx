import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import "./Product.css"
import { useSelector } from "react-redux";

function ProductDetails(){
   
    console.log("products------>",products);
   
const products = useSelector((state)=>state.products.products)
    const { _id } = useParams();
    const product = products.find((pr)=>pr.id == _id)


    

    return(
       <Container>
        <Row>
            <Col md={5} className=" p-4">
             <ListGroup variant="flush">
        <ListGroup.Item>{product?.title}</ListGroup.Item>
        <ListGroup.Item>{product?.description}</ListGroup.Item>
        <ListGroup.Item>₹{product?.price}</ListGroup.Item>
      </ListGroup>
            </Col>
            <Col md={7} className=" p-4">
            <Image className="product_imag" src={product?.image ?? '/nope-not-here.avif'}/>
            </Col>

        </Row>
        
        
       </Container>
    )
}
export default ProductDetails;