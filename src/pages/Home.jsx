import { Button, Card, Col, Container, Row } from "react-bootstrap";
import HomeCarousal from "../components/HomeCarousal";
import Products from "../components/Products";

function Home({products, setCartItem}){
    return(
        <>
        <HomeCarousal/>
        <h1 className="text-center p-3">PRODUCTS</h1>
        <Container fluid>
            <Row >
             {products.map((products,i)=>(
              <Products products={products} key={i} setCartItem={setCartItem} />
               

             ))}
             
               
            </Row>
        </Container>
        </>

    )
}
export default Home;