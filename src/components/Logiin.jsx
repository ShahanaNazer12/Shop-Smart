import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Logiin() {

  const [loginData,setLoginData] = useState({
    email:'',
    password:''
  })



  function handleChange(e) {
    setLoginData((prev)=>{
      return{...prev,[e.target.name]:e.target.value}
    })
  }
  console.log(loginData)

  function handleSubmit(e){
    e.preventDefault()
    console.log("login successfully")
  }


  return (
    <Container>
      <Row className="justify-content-center mb-2">
        <Col md={4}>
          <Row>
            <Col className="mt-3 mb-3">
              <h2>Login</h2>
            </Col>
          </Row>

          <Form onSubmit={(event)=> handleSubmit(event)}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" onKeyUp={handleChange} />
              </Form.Group>
            </Row> 

            <Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onKeyUp={handleChange}/>
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit" className=" mt-3 mb-3">
             Login
            </Button>
          </Form>

          <Row>
            <Col>
              <p>
                If you don't have an account,
                <Link to={"/register"}>Register</Link>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Logiin
