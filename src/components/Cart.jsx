import { Button, Col, Container, Image, Modal, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import "./Cart.css"
import { MdDelete } from "react-icons/md"
import { decrementQuantity, incrementQuantity, removeCartItem } from "../redux/cartSlice"
import { useState } from "react"
function Cart() {
    const { cartItems } = useSelector((state) => state.cartItems)
   

    const dispatch = useDispatch()
    function handleCart(index){
        dispatch(removeCartItem(removeIndex))
        setShow(false)

    }
   function increment(index){
    dispatch(incrementQuantity(index))
   }
   function decrement(index){
    dispatch(decrementQuantity(index))
   }

   const totalAmount= cartItems.reduce((total,product)=>{
    return total + ( product.price * product.quantity)
   },0)

//    console.log(totalAmount)
    const [show, setShow] = useState(false);
    const[removeIndex,setRemoveIndex] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setRemoveIndex(index)
    setShow(true)
  };

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className=" text-center p-4">CART-ITEMS</h2>
                </Col>
            </Row>
            <Row>
                {cartItems.length > 0 ? (
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>product Detais</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((items, i) => (
                                    <tr key={i}>
                                        <td className=" text-center">{i + 1}</td>
                                        <td>
                                            <div className=" d-flex">
                                                <div className=" cartii">
                                                    <Image src={items?.image ?? null} className=" w-100 " />
                                                </div>
                                                <div  >
                                                    <h5 className=" ms-4">{items?.title}</h5>
                                                    <h5 className=" ms-4">${items.price}</h5>
                                                </div>
                                            </div>
                                        </td>
                                        
                                        <td className=" text-center" style={{verticalAlign:" middle"}}>
                                            <div >
                                                <Button className="btt " variant="success" size="sm" onClick={()=>increment(i)}>+</Button>
                                                <input className="input text-center"  type="text"    value={items.quantity} readOnly />
                                              
                                        <Button className="btt" size="sm" variant="danger" onClick={()=>decrement(i) } disabled={items?.quantity<2 ? true:false}>-</Button>
                                            </div>

                                        </td>
                                        <td className=" text-center " style={{verticalAlign:" middle"}}><MdDelete className=" del" style={{cursor:"pointer"}} onClick={()=>handleShow(i)}  /></td>
                                   
                                   
                                    </tr>
                                   
                                   

                                ))}
                                <tr>
                                    <td  className=" text-end  " style={{font:"10px"}} colSpan={4}>
                                        <h5>total amount :{totalAmount.toFixed(2)}</h5></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>) : (
                    <Col>
                        <h2 className=" text-center">cart is empty</h2>
                    </Col>)}

            </Row>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>do you want to delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCart}>
           delete
          </Button>
        </Modal.Footer>
      </Modal>
        </Container>
    )
}

export default Cart