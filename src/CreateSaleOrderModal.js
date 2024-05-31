import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function CreateSaleOrderModal({ addOrder }) {
  const [show, setShow] = useState(false);
  const [orderName, setOrderName] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    addOrder(orderName);
    setOrderName('');
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Sale Order
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Sale Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="orderName">
              <Form.Label>Order Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter order name" 
                value={orderName} 
                onChange={(e) => setOrderName(e.target.value)} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateSaleOrderModal;
