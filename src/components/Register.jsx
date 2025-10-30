import { Button, Col, Container, Form, Row } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Register() {
   const { Formik } = formik;

   const navigate = useNavigate()

   const schema = yup.object().shape({
    firstName: yup.string().required("please enter your name").min(2,"must have 2 characters"),
    email: yup.string().required("pls enter email").email("pls enter valid email"),
    password: yup.string().required("pls enter password"),
    
  });

  function submit(values) {
     values.id = Date.now()
        values.role= "user"
        values.status= true
    dispatch(userRegister(values))
   
    toast.success("user register successfully")
    navigate("/loginnew")
   
  }
  const dispatch = useDispatch()

  return (
    <Container>
      <Row className="justify-content-center mb-2">
        <Col md={6}>
          <Row>
            <Col className="mt-3 mb-3">
              <h2>Register</h2>
            </Col>
          </Row>
        <Formik
        validationSchema={schema}
      onSubmit={submit}
      initialValues={{
         firstName: '',
         email: '',
         password: '',
       
      }}
        >
          {({handleSubmit, handleChange, values, touched, errors})=>(
            <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">

               <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Label>Full Name</Form.Label>
                <Form.Control placeholder="full name" name="firstName"
                onChange={handleChange}
                value={values.firstName}
                 isValid={touched.firstName && !errors.firstName}
                 isInvalid={!!errors.firstName}
                
                />
                <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email"
                 onChange={handleChange}
                value={values.email}
                 isValid={touched.email && !errors.email}
                 isInvalid={!!errors.email}
                />
                 <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

              </Form.Group>
              </Row>
            

            <Row>
              <Form.Group as={Col} controlId="formGridPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password"
                 onChange={handleChange}
                value={values.password}
                 isValid={touched.password && !errors.password}
                 isInvalid={!!errors.password}
                />
                 <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            </Row> 

           

            {/* <Button onClick={submit} variant="primary" type="submit"> */}
             <Button  variant="primary" type="submit">
              Register
            </Button>
          </Form>
          )}
          </Formik>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
