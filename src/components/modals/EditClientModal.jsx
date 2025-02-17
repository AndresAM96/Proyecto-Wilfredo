import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

const EditClientModal = ({ client, onClose, onSubmit }) => {
  const [clientName, setClientName] = useState(client.name);
  const [email, setEmail] = useState(client.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...client, name: clientName, email });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Client</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Client Name:</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Button type="submit">Save</Button>
            <Button type="button" onClick={onClose}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
EditClientModal.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EditClientModal;