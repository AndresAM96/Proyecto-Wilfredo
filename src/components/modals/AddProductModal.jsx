import { useState } from 'react';
import Button from '../ui/Button';
import PropTypes from 'prop-types';

const AddProductModal = ({ onClose, onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ productName, price });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Product Name:</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <Button type="submit">Add</Button>
            <Button type="button" onClick={onClose}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
AddProductModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddProductModal;