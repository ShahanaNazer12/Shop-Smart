import { Button, Col, Container, Image, Modal, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import "./ListProduct.css"
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import { Link } from "react-router-dom"
import { useState } from "react"
import { deleteProduct } from "../redux/productSlice"
import { toast } from "react-toastify"



function ListProduct(){

  const [show, setShow] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null)

  const handleClose = () => setShow(false);
  const handleShow = (index) =>{
    setDeleteIndex(index)
    setShow(true);
  } 
  
    
   const dispatch = useDispatch()

  function handledelete(){
    dispatch(deleteProduct(deleteIndex))
    setShow(false)
    


  }

    const products = useSelector((state)=>state.products.products)
    return(
      <>
       <Container>
        <Row className=" mt-3 text-center">
            <h2>List Products</h2>
        </Row>
        <Link variant='btn btn-outline-danger' to={'/admin/add-product'}>ADD PRODUCT</Link>

        {products.length >0 ?(
            <Row>
            <Col className=" mt-3">
             <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Photo</th>
          <th className=" text-center">Edit</th>
           <th className=" text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product,i)=>(
            <tr key={i}>
          <td>{i+1}</td>
          <td>{product?.productName}</td>
          <td>₹{product?.price}</td>
          <td>
            <Image className="image" src={product?.photo ?? null} alt={product.productName}/>
          </td>
          
           <td className=" text-center icon text-primary" >
            <Link to={`/admin/editt-product/${product.id}`}>
            <FaEdit size={20} /></Link>
            
            </td>
           
            <td className=" text-center icon text-danger"><MdDeleteForever size={22} onClick={()=>handleShow(i)} /></td>
        </tr>

        ))}
        
        
      </tbody>
    </Table>
            </Col>
        </Row>
        ):(
            <Row>
                <Col>
                <h4 className=" text-center">not found</h4>
                </Col>
            </Row>
        )}
        
       </Container>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>do you want to delete this?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handledelete}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}

export default ListProduct

