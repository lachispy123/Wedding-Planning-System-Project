import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import './GuestList.css';

const GuestList = () => {
  const [guests, setGuests] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingGuest, setEditingGuest] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    relationship: '',
    plusOne: false,
    plusOneName: '',
    dietaryRestrictions: '',
    notes: ''
  });

  useEffect(() => {
    const savedGuests = JSON.parse(localStorage.getItem('guests') || '[]');
    setGuests(savedGuests);
  }, []);

  const saveGuests = (newGuests) => {
    localStorage.setItem('guests', JSON.stringify(newGuests));
    setGuests(newGuests);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGuest = {
      id: editingGuest ? editingGuest.id : uuidv4(),
      ...formData,
      status: editingGuest ? editingGuest.status : 'pending',
      dateAdded: editingGuest ? editingGuest.dateAdded : new Date().toISOString()
    };
    let updatedGuests;
    if (editingGuest) {
      updatedGuests = guests.map(guest => guest.id === editingGuest.id ? newGuest : guest);
    } else {
      updatedGuests = [...guests, newGuest];
    }
    saveGuests(updatedGuests);
    resetForm();
  };

  const handleEdit = (guest) => {
    setEditingGuest(guest);
    setFormData({
      name: guest.name,
      email: guest.email,
      phone: guest.phone,
      relationship: guest.relationship,
      plusOne: guest.plusOne,
      plusOneName: guest.plusOneName || '',
      dietaryRestrictions: guest.dietaryRestrictions || '',
      notes: guest.notes || ''
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this guest?')) {
      const updatedGuests = guests.filter(guest => guest.id !== id);
      saveGuests(updatedGuests);
    }
  };

  const handleStatusChange = (id, status) => {
    const updatedGuests = guests.map(guest =>
      guest.id === id ? { ...guest, status } : guest
    );
    saveGuests(updatedGuests);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      relationship: '',
      plusOne: false,
      plusOneName: '',
      dietaryRestrictions: '',
      notes: ''
    });
    setEditingGuest(null);
    setShowForm(false);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { label: 'Pending', class: 'warning' },
      confirmed: { label: 'Confirmed', class: 'success' },
      declined: { label: 'Declined', class: 'danger' }
    };
    const config = statusConfig[status] || statusConfig.pending;
    return <span className={`badge ${config.class}`}>{config.label}</span>;
  };

  const stats = {
    total: guests.length,
    confirmed: guests.filter(g => g.status === 'confirmed').length,
    pending: guests.filter(g => g.status === 'pending').length,
    declined: guests.filter(g => g.status === 'declined').length
  };

  return (
    <div className="guest-list">
      <div className="guest-header">
        <h1>Guest List Management</h1>
        <button className="btn" onClick={() => setShowForm(true)}>
          <FaPlus /> Add Guest
        </button>
      </div>
      <div className="guest-stats">
        <div className="stat-item"><span className="stat-number">{stats.total}</span><span className="stat-label">Total Guests</span></div>
        <div className="stat-item"><span className="stat-number">{stats.confirmed}</span><span className="stat-label">Confirmed</span></div>
        <div className="stat-item"><span className="stat-number">{stats.pending}</span><span className="stat-label">Pending</span></div>
        <div className="stat-item"><span className="stat-number">{stats.declined}</span><span className="stat-label">Declined</span></div>
      </div>
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{editingGuest ? 'Edit Guest' : 'Add New Guest'}</h2>
              <button className="close-btn" onClick={resetForm}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Relationship</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.relationship}
                    onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                    placeholder="e.g., Family, Friend, Colleague"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.plusOne}
                    onChange={(e) => setFormData({ ...formData, plusOne: e.target.checked })}
                  />
                  Plus One
                </label>
                {formData.plusOne && (
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Plus One Name"
                    value={formData.plusOneName}
                    onChange={(e) => setFormData({ ...formData, plusOneName: e.target.value })}
                  />
                )}
              </div>
              <div className="form-group">
                <label>Dietary Restrictions</label>
                <textarea
                  className="form-control"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                  placeholder="Any dietary restrictions or preferences"
                  rows="2"
                />
              </div>
              <div className="form-group">
                <label>Notes</label>
                <textarea
                  className="form-control"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Additional notes"
                  rows="2"
                />
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                  Cancel
                </button>
                <button type="submit" className="btn">
                  {editingGuest ? 'Update Guest' : 'Add Guest'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="guest-grid">
        {guests.map(guest => (
          <div key={guest.id} className="guest-card">
            <div className="guest-header">
              <h3>{guest.name}</h3>
              {getStatusBadge(guest.status)}
            </div>
            <div className="guest-info">
              {guest.relationship && <p><strong>Relationship:</strong> {guest.relationship}</p>}
              {guest.email && <p><FaEnvelope /> {guest.email}</p>}
              {guest.phone && <p><FaPhone /> {guest.phone}</p>}
              {guest.plusOne && guest.plusOneName && <p><strong>Plus One:</strong> {guest.plusOneName}</p>}
              {guest.dietaryRestrictions && <p><strong>Dietary:</strong> {guest.dietaryRestrictions}</p>}
              {guest.notes && <p><strong>Notes:</strong> {guest.notes}</p>}
            </div>
            <div className="guest-actions">
              <div className="status-actions">
                <button
                  className={`status-btn ${guest.status === 'confirmed' ? 'active confirmed' : ''}`}
                  onClick={() => handleStatusChange(guest.id, 'confirmed')}
                >
                  <FaCheck /> Confirm
                </button>
                <button
                  className={`status-btn ${guest.status === 'declined' ? 'active declined' : ''}`}
                  onClick={() => handleStatusChange(guest.id, 'declined')}
                >
                  <FaTimes /> Decline
                </button>
              </div>
              <div className="edit-actions">
                <button className="edit-btn" onClick={() => handleEdit(guest)}>
                  <FaEdit />
                </button>
                <button className="delete-btn" onClick={() => handleDelete(guest.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {guests.length === 0 && (
        <div className="empty-state">
          <h3>No guests added yet</h3>
          <p>Start building your guest list by adding your first guest!</p>
          <button className="btn" onClick={() => setShowForm(true)}>
            <FaPlus /> Add Your First Guest
          </button>
        </div>
      )}
    </div>
  );
};

export default GuestList; 