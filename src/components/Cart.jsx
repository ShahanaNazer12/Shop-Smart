import { Col, Container, Image, Row, Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import "./Cart.css"
import { MdDelete } from "react-icons/md"

function Cart() {

    const { cartItems } = useSelector((state) => state.cartItems)
    console.log(cartItems)
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className=" text-center">cart items</h2>
                </Col>
            </Row>
            <Row>

                {cartItems.length > 0 ?(

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
                                {cartItems.map((items,i)=>(
                                    <tr>
                                    <td>{i+1}</td>
                                    <td>
                                        <div className=" d-flex">
                                           <div className=" cartii">
                                            <Image src={items?.image ?? null} className=" w-100 "/>
                                           </div>
                                           <div  >
                                            <h5 className=" ms-4">{items?.title}</h5>
                                            <h5 className=" ms-4">${items.price}</h5>
                                           </div>
                                        </div>
                                    </td>
                                    <td>{items.quantity}</td>
                                    <td><MdDelete className=" del" /></td>
                                </tr>

                                ))}
                                
                                
                                
                            </tbody>
                        </Table>
                    </Col> ):(
                    <Col>
                        <h2>cart is empty</h2>
                    </Col>)}

            </Row>
        </Container>
    )
}

export default Cart