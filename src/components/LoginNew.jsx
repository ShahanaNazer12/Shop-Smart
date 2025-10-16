import { Button, Col, Container, Form, Row } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userRegister } from "../redux/authSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


function LoginNew() {
   const { Formik } = formik;
   const navigate= useNavigate()

   const {users} =  useSelector((state)=>state.auth)

   const schema = yup.object().shape({
    
    email: yup.string().required("pls enter email").email("pls enter valid email"),
    password: yup.string().required("pls enter password"),
    
  });

  function submit(values) {
    //  values.id = Date.now()
    const user = users.find((u)=>u.email === values.email)
    if(!user){
      toast.error("inavalid credential")
      return
    }

    if( user.password !== values.password){
      toast.error("invalid credential");
      return
    }
    dispatch(userLogin(values))
   
    toast.success("user logged successfully")
    navigate("/")
   
  }
  const dispatch = useDispatch()

  return (
    <Container>
      <Row className="justify-content-center mb-2">
        <Col md={6}>
          <Row>
            <Col className="mt-3 mb-3">
              <h2>Login</h2>
            </Col>
          </Row>
        <Formik
        validationSchema={schema}
      onSubmit={submit}
      initialValues={{
        
         email: '',
         password: '',
       
      }}
        >
          {({handleSubmit, handleChange, values, touched, errors})=>(
            <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">

              
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
              <Form.Group as={Col} controlId="formGridPassword">
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

           

            <Button  variant="primary" type="submit">
            Login
            </Button>
          </Form>
          )}
          </Formik>
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

export default LoginNew
