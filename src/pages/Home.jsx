import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import HomeCarousal from "../components/HomeCarousal";
import Products from "../components/Products";
import { useSelector } from "react-redux";

function Home(){
    const products = useSelector((state)=>state.products.products)
    return(
        <>
        <HomeCarousal/>
        <h1 className="text-center p-3">PRODUCTS</h1>
        
        
        <Container fluid>
           
            <Row >
             {products.map((product,i)=>(
              <Products product={product} key={i}  />
               

             ))}
             
               
            </Row>
        </Container>
        </>

    )
}
export default Home;