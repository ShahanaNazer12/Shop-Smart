import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import "./Product.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetails(){
   
    
  
const products = useSelector((state)=>state.products.products)
    const { _id } = useParams();
    const product = products.find((pr)=>pr.id == _id)
const dispatch = useDispatch()
function addCart(){
    dispatch(addToCart(product))

}
    

    return(
       <Container>
        <Row>
            <h2 className=" text-center p-4">PRODUCT-DETAILS</h2>
            <Col md={5} className=" p-4">
             <ListGroup variant="flush">
                
        <ListGroup.Item> <h4>{product?.productName}</h4> </ListGroup.Item>
        <ListGroup.Item>{product?.description}</ListGroup.Item>
        <ListGroup.Item ><h4>₹{product?.price}</h4></ListGroup.Item>
      </ListGroup>
      <Button className=" ms-2" onClick={()=>addCart(product)}>AddToCart</Button>
            </Col>
            <Col md={7} className=" p-4">
            <Image className="product_imag" src={product?.photo ?? '/nope-not-here.avif'}/>
            </Col>

        </Row>
       
        
        
       </Container>
    )
}
export default ProductDetails;