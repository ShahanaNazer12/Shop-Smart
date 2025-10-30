import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Products from "./Products";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

function Product(){
    const {products} = useSelector((state)=>state.products)
    const[searchText,setSearchText] = useState('')

    console.log(searchText);


    const filteredProducts = products.filter((pr)=>(
        pr.productName.toLowerCase().includes(searchText.toLowerCase()) ||
       pr.description.toLowerCase().includes (searchText.toLowerCase())
    ))
    

    console.log(filteredProducts);
    

    return(
        <Container>
            <Row >
                <Col className=" d-flex justify-content-between my-3">
                
                <h2>Products</h2>
                <div className="d-flex justify-content-center mb-4 position-relative">
        <Form.Control
          type="text"
          placeholder="Search products..."
          onKeyUp={(event)=>setSearchText(event.target.value)}
         
          
        />
        <IoIosSearch size={22} className=" search-icon" />
      </div>
      </Col>
            </Row>
            {filteredProducts.length <1 ?(
                <Row>
                    <Col>
                    <h3> searched product not found</h3>
                    </Col>
                </Row>
            ):(
                <Row >
             {filteredProducts.map((product,i)=>(
              <Products product={product} key={i}  />
               

             ))}
             
               
            </Row>
            )}
            
        </Container>
    )
}

export default Product