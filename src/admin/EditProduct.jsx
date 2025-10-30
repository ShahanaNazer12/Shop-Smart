import { Button, Col, Container, Form, Row } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import {  editProduct } from "../redux/productSlice";


function EditProduct() {
   const { Formik } = formik;

   const navigate = useNavigate()
   const {id} = useParams()
   const {products}= useSelector((state)=>state.products)

   const product =products.find((pr)=>pr.id === Number(id))

   console.log(product)

   const schema = yup.object().shape({
    productName: yup.string().required("please enter product name").min(2,"must have 2 characters"),
    description: yup.string().required("pls enter description"),
    price: yup.number().required("pls enter price"),
    photo: yup.string().required("pls add photto"),
    
  });

  function handleEditProduct(values) {
     values.id = Number (id)
    dispatch(editProduct(values))
   
    toast.success(" product edited successfully")
    navigate("/admin/list-product/")
   
  }
  const dispatch = useDispatch()

  return (
    <Container>
      <Row className="justify-content-center mb-2">
        <Col md={6}>
          <Row>
            <Col className="mt-3 mb-3">
              <h2>Edit Product</h2>
            </Col>
          </Row>
        <Formik
        validationSchema={schema}
      onSubmit={handleEditProduct}
      initialValues={{
         productName: product.productName,
         description: product.description,
         price: product. price,
         photo:product.photo
       
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
              <Form.Group as={Col} controlId="formGridPassword1">
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
              Edit Product
            </Button>
          </Form>
          )}
          </Formik>
        </Col>
      </Row>
    </Container>
  )
}

export default EditProduct
