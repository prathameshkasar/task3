import React from 'react';
import { Button } from 'react-bootstrap';

function CompletedSaleOrders({ handleShowViewModal }) {
  return (
    <div>
      <h3>Completed Sale Orders</h3>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Order Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Order 1</td>
            <td>
              <Button variant="secondary" onClick={() => handleShowViewModal({ id: 1, name: 'Order 1' })}>View</Button>
            </td>
          </tr>
          {/* Add more rows here for additional orders */}
        </tbody>
      </table>
    </div>
  );
}

export default CompletedSaleOrders;
