import { Card, Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"

function Dashboard(){

  const {users} = useSelector((state)=>state.auth);
  const {products} = useSelector((state)=>state.products)

  const activeUsers = users.filter((u)=>u.status === true)
  console.log(users);
  

    return(
     
       <Container>
        <Row className=" justify-content-center">
            <Col sm ={12} md={6} lg={4} xl={3} xxl={2} className=" mt-3">
             <Card  className=" bg-danger text-light text-center">
      <Card.Body>
        <Card.Title >PRODUCTS</Card.Title>
        <Card.Subtitle className="mb-2 text-light">{products.length}</Card.Subtitle>    
      </Card.Body>
    </Card>      
      </Col>

      <Col sm ={12} md={6} lg={4} xl={3} xxl={2}className=" mt-3">
             <Card  className=" bg-success text-light text-center" >
      <Card.Body>
        <Card.Title>USERS</Card.Title>
        <Card.Subtitle className="mb-2  text-light">{users.length}</Card.Subtitle>
      
      </Card.Body>
    </Card>      
      </Col>
      <Col sm ={12} md={6} lg={4} xl={3} xxl={2} className=" mt-3">
             <Card  className=" bg-primary text-light text-center" >
      <Card.Body>
        <Card.Title>ACTIVE USERS</Card.Title>
        <Card.Subtitle className="mb-2 text-light">{activeUsers.length}</Card.Subtitle>
      
      </Card.Body>
    </Card>      
      </Col>
        </Row>
       </Container>
    )
}

export default Dashboard