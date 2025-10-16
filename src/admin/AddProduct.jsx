import { Button, Col, Container, Form, Row } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../redux/productSlice";


function AddProduct() {
   const { Formik } = formik;

   const navigate = useNavigate()

   const schema = yup.object().shape({
    productName: yup.string().required("please enter product name").min(2,"must have 2 characters"),
    description: yup.string().required("pls enter description"),
    price: yup.number().required("pls enter price"),
    photo: yup.string().required("pls add photto"),
    
  });

  function handleAddProduct(values) {
     values.id = Date.now()
    dispatch(addProduct(values))
   
    toast.success(" product added successfully")
    navigate("/")
   
  }
  const dispatch = useDispatch()

  return (
    <Container>
      <Row className="justify-content-center mb-2">
        <Col md={6}>
          <Row>
            <Col className="mt-3 mb-3">
              <h2>Add Product</h2>
            </Col>
          </Row>
        <Formik
        validationSchema={schema}
      onSubmit={handleAddProduct}
      initialValues={{
         productName: '',
         description: '',
         price: '',
         photo:''
       
      }}
        >
          {({handleSubmit, handleChange, values, touched, errors})=>(
            <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">

               <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Label>productName</Form.Label>
                <Form.Control placeholder="productName " name="productName"
                onChange={handleChange}
                value={values.productName}
                 isValid={touched.productName && !errors.productName}
                 isInvalid={!!errors.productName}
                
                />
                <Form.Control.Feedback type="invalid">
                {errors.productName}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="description" name="description"
                 onChange={handleChange}
                value={values.description}
                 isValid={touched.description && !errors.description}
                 isInvalid={!!errors.description}
                />
                 <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

              </Form.Group>
              </Row>
            

            <Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="price" name="price"
                 onChange={handleChange}
                value={values.price}
                 isValid={touched.price && !errors.price}
                 isInvalid={!!errors.price}
                />
                 <Form.Control.Feedback type="invalid">
                {errors.price}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
             <Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="text" placeholder="photo" name="photo"
                 onChange={handleChange}
                value={values.photo}
                 isValid={touched.photo && !errors.photo}
                 isInvalid={!!errors.photo}
                />
                 <Form.Control.Feedback type="invalid">
                {errors.photo}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            </Row> 

           

            {/* <Button onClick={submit} variant="primary" type="submit"> */}
             <Button  variant="primary" type="submit">
              AddProduct
            </Button>
          </Form>
          )}
          </Formik>
        </Col>
      </Row>
    </Container>
  )
}

export default AddProduct
