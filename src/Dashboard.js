import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ActiveSaleOrders from './ActiveSaleOrders';
import CompletedSaleOrders from './CompletedSaleOrders';
import CreateSaleOrderModal from './CreateSaleOrderModal';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('active');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [orders, setOrders] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleShowEditModal = (order) => {
    setCurrentOrder(order);
    setShowEditModal(true);
  };

  const handleShowViewModal = (order) => {
    setCurrentOrder(order);
    setShowViewModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setShowViewModal(false);
    setCurrentOrder(null);
  };

  const handleSaveOrder = () => {
    // Save the order
    handleCloseModal();
  };

  const addOrder = (orderName) => {
    setOrders([...orders, orderName]);
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <CreateSaleOrderModal addOrder={addOrder} />
      <ul className="nav nav-tabs mt-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => handleTabChange('active')}
          >
            Active Sale Orders
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => handleTabChange('completed')}
          >
            Completed Sale Orders
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3">
        {activeTab === 'active' && <ActiveSaleOrders orders={orders} handleShowEditModal={handleShowEditModal} />}
        {activeTab === 'completed' && <CompletedSaleOrders handleShowViewModal={handleShowViewModal} />}
      </div>

      {/* Modal for Creating/Editing Sale Order */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentOrder ? 'Edit Sale Order' : 'Create Sale Order'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Order Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue={currentOrder ? currentOrder.name : ''}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveOrder}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Viewing Completed Sale Order */}
      <Modal show={showViewModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>View Sale Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Order Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue={currentOrder ? currentOrder.name : ''}
                readOnly
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dashboard;
