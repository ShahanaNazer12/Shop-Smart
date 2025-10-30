import { Button, Col, Container, Form, Image, Modal, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import "./ListProduct.css"
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import { Link } from "react-router-dom"
import { useState } from "react"

import { toast } from "react-toastify"
import { deleteUser, updateUserRole, updateUserStatus } from "../redux/authSlice"



function ListUsers(){

  const [show, setShow] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null)

  const handleClose = () => setShow(false);
  const handleShow = (index) =>{
    setDeleteIndex(index)
    setShow(true);
  } 
  
    
   const dispatch = useDispatch()

  function handledelete(){
    dispatch(deleteUser(deleteIndex))
    setShow(false)
    toast.success("User deleted successfully!");


  }

  function handleChangeUserStatus(userId){
    dispatch(updateUserStatus(userId))

  }

  function handleChange(event,id){

    const userInfo= {
      role: event.target.value,
      id:id
    }
    dispatch(updateUserRole(userInfo));
  
    //  console.log(event.target.value);
    
  }
 

    // const products = useSelector((state)=>state.products.products)

   const { users } = useSelector((state) => state.auth);
  //  console.log(users);
   
    return(
      <>
       <Container>
        <Row className=" mt-3 text-center">
            <h2>List Users</h2>
        </Row>
        {users.length >0 ?(
            <Row>
            <Col className=" mt-3">
             <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>User email</th>
          <th>Role</th>
           <th>status</th>
         
          <th className=" text-center">Edit</th>
           <th className=" text-center">Delete</th>
           
        </tr>
      </thead>
      <tbody>
        {users.map((user,i)=>(
            <tr key={i}>
          <td>{i+1}</td>
          <td>{user?.firstName}</td>
          <td>{user?.email}</td>
          <td>
          <Form.Select 
          onChange={(event)=>handleChange(event,user?.id)}
            defaultValue={user?.role ?? ''}>
     
      <option value="admin">admin</option>
      <option value="seller">Seller</option>
      <option value="user">User</option>
    </Form.Select>
          </td>
          <td>
        <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id={`custom-switch ${user?.id}`}
        label={user?.status ? "active " :"inactive"}
        checked={user?.status}
        onClick={()=>{handleChangeUserStatus(user?.id)}}
      />
     
    </Form>
       </td>
          
           <td className=" text-center icon text-primary" >
            <Link to={`/admin/editt-users/${user.id}`}>
            <FaEdit size={20} /></Link>
            
            </td>
           
            <td className=" text-center icon text-danger"><MdDeleteForever size={22} onClick={()=>handleShow(i)} style={{cursor:"pointer"}} /></td>
       
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

export default  ListUsers

