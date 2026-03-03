import { Offcanvas } from 'react-bootstrap'
import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export const About = ({toggleShow,handleClose,setSignShow}) => {
    const Navigate= useNavigate();
    function handleSignFunction () {
        handleClose(true)
        setSignShow(true)
        Navigate("/explore/home/chennai")

    }
  return (
    <>
     <div className="p-4 text-center">
        <Offcanvas show={toggleShow} onHide={handleClose} placement='end' >
            <Offcanvas.Header closeButton >
             <Offcanvas.Title>Hey..</Offcanvas.Title>
             <hr/>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup variant='flush' >
                <ListGroup.Item className='d-flex p-3 justify-content-center align-items-center' >
                <p>UnLock secial offers & gret benifits</p>
                <button className='text-danger w-75 outline-danger border-1 rounded pt-2 pb-2 ms-3' onClick={handleSignFunction}>Login / Register</button>
            </ListGroup.Item>
                    <ListGroup.Item><h6>Notification</h6></ListGroup.Item>
                    <ListGroup.Item style={{lineHeight:'12px'}}>
                        <h6>Your Order</h6>
                        <small>View al your bookings & purchasese</small>
                    </ListGroup.Item>
                       <ListGroup.Item style={{lineHeight:'12px'}}>
                        <h6>Stream Libary</h6>
                        <small>Rented & purchases Movies</small>
                    </ListGroup.Item>
                      <ListGroup.Item style={{lineHeight:'12px'}}>
                        <h6>Play Credit Card</h6>
                        <small>View your Play Credit Card details </small>
                    </ListGroup.Item>
                    <ListGroup.Item style={{lineHeight:'12px'}}>
                        <h6>Help & Support</h6>
                        <small>View Commonly asked quires and Chat</small>
                    </ListGroup.Item>
                   <ListGroup.Item style={{lineHeight:'12px'}}>
                        <h6>Rewards</h6>
                        <small>View your rewards & unlock new ones</small>
                    </ListGroup.Item>
                      <ListGroup.Item><h6>BookAChange</h6></ListGroup.Item> 
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
     </div>
    </>
  )
}
