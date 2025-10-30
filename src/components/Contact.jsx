import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from 'formik';
import * as yup from 'yup';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Contact(){
     const { Formik } = formik;
     const schema = yup.object().shape({
    fullName: yup.string().required("pls enetr your full name here").min(3,"minimum 3 characters"),
    email: yup.string().required("eneter yur email here").email("pls enter a valid email"),
    phoneNumber: yup.string().required("pls enter 10 numbers").min(10,"mimumnm 10"),
    address: yup.string().required("pls enetr a address"),
    message: yup.string().required("pls enetr a message"),
    city: yup.string().required("pls enter city"),
    state: yup.string().required(),
     country: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

const navigate = useNavigate()
function handleSubmit(){
    toast.success("submitted successfully")
    navigate("/")

}

    return(
       <>
       <Container>
        <Row>
            <h2 className=" text-center mt-4 mb-4">CONTACT-US</h2>
        </Row>
        <Row className=" justify-content-center">
            <Col md={6}>
            <Formik
             validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        message:'',
        city: '',
        state: '',
        country:'',
        terms: false,
      }}
            
         >
            {({ handleSubmit, handleChange, values, touched, errors })=>(
                <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Row>
            <Form.Group as={Col} controlId="formGriname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" 
       
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                isValid={touched.fullName && !errors.fullName}
                isInvalid={!!errors.fullName}
          
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        </Row>
        <Row>
            <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
               name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
          />
           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       
        </Row>
        <Row>
            <Form.Group as={Col} controlId="formGridphone">
          <Form.Label>phone number</Form.Label>
          <Form.Control type="number" placeholder="Enter phone number"
           name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                isValid={touched.phoneNumber && !errors.phoneNumber}
                isInvalid={!!errors.phoneNumber}
          />
        </Form.Group>
       
        </Row>
     
        <Row>

       
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="1234 Main St"
         name="address"
                value={values.address}
                onChange={handleChange}
                isValid={touched.address && !errors.address}
                isInvalid={!!errors.address}
        />
      </Form.Group>
       </Row>
<Row>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Apartment, studio, or floor"
        name="message"
                value={values.message}
                onChange={handleChange}
                isValid={touched.message && !errors.message}
                isInvalid={!!errors.message}
        
        />
      </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>City</Form.Label>
          <Form.Select defaultValue="Choose..."
          name="city"
    value={values.city}
    onChange={handleChange}
    isInvalid={!!errors.city}
          >
            <option>Choose...</option>
            <option>Calicut</option>
          </Form.Select>
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>state</Form.Label>
          <Form.Select defaultValue="Choose..."
           name="state"
    value={values.state}
    onChange={handleChange}
    isInvalid={!!errors.state}
          >
            <option>Choose...</option>
            <option>Kerala</option>
          </Form.Select>
                   
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Country</Form.Label>
          <Form.Select defaultValue="Choose..."
           name="country"
    value={values.country}
    onChange={handleChange}
    isInvalid={!!errors.country}
          >
            <option>Choose...</option>
            <option>India</option>
          </Form.Select>
          
        </Form.Group>
        </Row>
         </Row>
    
      <Form.Group className="mb-3" id="formGridCheckbox">
       <Form.Check
  type="checkbox"
  label="Agreed terms and conditions"
  name="terms"
  onChange={handleChange}
  checked={values.terms}
  isInvalid={!!errors.terms}
  feedback={errors.terms}
/>
        
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

            )}
            
    </Formik>
            </Col>
        </Row>
       </Container>
       </>
    )
}
export default Contact;