import React from 'react';
import { Button } from 'react-bootstrap';

function ActiveSaleOrders({ orders, handleShowEditModal }) {
  return (
    <div>
      <h3>Active Sale Orders</h3>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Order Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order}</td>
              <td>
                <Button variant="secondary" onClick={() => handleShowEditModal({ id: index + 1, name: order })}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActiveSaleOrders;
