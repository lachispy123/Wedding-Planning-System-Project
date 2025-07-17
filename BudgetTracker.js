import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaChartPie, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import './BudgetTracker.css';

const categories = [
  'Venue', 'Catering', 'Photography', 'Music', 'Flowers',
  'Attire', 'Transportation', 'Decorations', 'Invitations',
  'Wedding Rings', 'Honeymoon'
];

const BudgetTracker = () => {
  const [budgetItems, setBudgetItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    category: '',
    item: '',
    budget: '',
    spent: '',
    dueDate: '',
    notes: ''
  });

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('budgetItems') || '[]');
    setBudgetItems(savedItems);
  }, []);

  const saveBudgetItems = (newItems) => {
    localStorage.setItem('budgetItems', JSON.stringify(newItems));
    setBudgetItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: editingItem ? editingItem.id : uuidv4(),
      ...formData,
      budget: parseFloat(formData.budget) || 0,
      spent: parseFloat(formData.spent) || 0,
      dateAdded: editingItem ? editingItem.dateAdded : new Date().toISOString()
    };
    let updatedItems;
    if (editingItem) {
      updatedItems = budgetItems.map(item => item.id === editingItem.id ? newItem : item);
    } else {
      updatedItems = [...budgetItems, newItem];
    }
    saveBudgetItems(updatedItems);
    resetForm();
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      category: item.category,
      item: item.item,
      budget: item.budget.toString(),
      spent: item.spent.toString(),
      dueDate: item.dueDate || '',
      notes: item.notes || ''
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this budget item?')) {
      const updatedItems = budgetItems.filter(item => item.id !== id);
      saveBudgetItems(updatedItems);
    }
  };

  const resetForm = () => {
    setFormData({
      category: '',
      item: '',
      budget: '',
      spent: '',
      dueDate: '',
      notes: ''
    });
    setEditingItem(null);
    setShowForm(false);
  };

  const getStatusColor = (budget, spent) => {
    const percentage = budget === 0 ? 0 : (spent / budget) * 100;
    if (percentage >= 100) return 'danger';
    if (percentage >= 80) return 'warning';
    return 'success';
  };

  const getStatusText = (budget, spent) => {
    const percentage = budget === 0 ? 0 : (spent / budget) * 100;
    if (percentage >= 100) return 'Over Budget';
    if (percentage >= 80) return 'Near Limit';
    return 'On Track';
  };

  const stats = {
    totalBudget: budgetItems.reduce((sum, item) => sum + item.budget, 0),
    totalSpent: budgetItems.reduce((sum, item) => sum + item.spent, 0),
    remaining: budgetItems.reduce((sum, item) => sum + item.budget, 0) - budgetItems.reduce((sum, item) => sum + item.spent, 0),
    items: budgetItems.length
  };

  const categoryStats = categories.map(category => {
    const categoryItems = budgetItems.filter(item => item.category === category);
    const categoryBudget = categoryItems.reduce((sum, item) => sum + item.budget, 0);
    const categorySpent = categoryItems.reduce((sum, item) => sum + item.spent, 0);
    return {
      category,
      budget: categoryBudget,
      spent: categorySpent,
      items: categoryItems.length
    };
  }).filter(stat => stat.items > 0);

  return (
    <div className="budget-tracker">
      <div className="budget-header">
        <h1>Budget Tracker</h1>
        <button className="btn" onClick={() => setShowForm(true)}>
          <FaPlus /> Add Budget Item
        </button>
      </div>

      <div className="budget-overview">
        <div className="budget-stat">
          <div className="stat-icon">
            <FaDollarSign />
          </div>
          <div className="stat-content">
            <div className="stat-number">${stats.totalBudget.toLocaleString()}</div>
            <div className="stat-label">Total Budget</div>
          </div>
        </div>
        <div className="budget-stat">
          <div className="stat-icon">
            <FaChartPie />
          </div>
          <div className="stat-content">
            <div className="stat-number">${stats.totalSpent.toLocaleString()}</div>
            <div className="stat-label">Total Spent</div>
          </div>
        </div>
        <div className="budget-stat">
          <div className="stat-icon">
            <FaCalendarAlt />
          </div>
          <div className="stat-content">
            <div className="stat-number">${stats.remaining.toLocaleString()}</div>
            <div className="stat-label">Remaining</div>
          </div>
        </div>
        <div className="budget-stat">
          <div className="stat-icon">
            <FaPlus />
          </div>
          <div className="stat-content">
            <div className="stat-number">{stats.items}</div>
            <div className="stat-label">Items</div>
          </div>
        </div>
      </div>

      <div className="budget-progress">
        <h2>Overall Progress</h2>
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${stats.totalBudget > 0 ? (stats.totalSpent / stats.totalBudget) * 100 : 0}%`,
                backgroundColor:
                  getStatusColor(stats.totalBudget, stats.totalSpent) === 'danger'
                    ? '#dc3545'
                    : getStatusColor(stats.totalBudget, stats.totalSpent) === 'warning'
                    ? '#ffc107'
                    : '#28a745'
              }}
            ></div>
          </div>
          <div className="progress-text">
            {stats.totalBudget > 0 ? Math.round((stats.totalSpent / stats.totalBudget) * 100) : 0}% of budget used
          </div>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{editingItem ? 'Edit Budget Item' : 'Add Budget Item'}</h2>
              <button className="close-btn" onClick={resetForm}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Category *</label>
                  <select
                    className="form-control"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Item Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.item}
                    onChange={(e) => setFormData({ ...formData, item: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Budget Amount *</label>
                  <input
                    type="number"
                    className="form-control"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="0.00"
                    step="0.01"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Amount Spent</label>
                  <input
                    type="number"
                    className="form-control"
                    value={formData.spent}
                    onChange={(e) => setFormData({ ...formData, spent: e.target.value })}
                    placeholder="0.00"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Due Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Notes</label>
                <textarea
                  className="form-control"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Additional notes about this budget item"
                  rows="3"
                />
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                  Cancel
                </button>
                <button type="submit" className="btn">
                  {editingItem ? 'Update Item' : 'Add Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="budget-content">
        <div className="budget-items">
          <h2>Budget Items</h2>
          <div className="budget-grid">
            {budgetItems.map(item => (
              <div key={item.id} className="budget-card">
                <div className="budget-card-header">
                  <div className="budget-category">{item.category}</div>
                  <div className="budget-status">
                    <span className={`badge ${getStatusColor(item.budget, item.spent)}`}>
                      {getStatusText(item.budget, item.spent)}
                    </span>
                  </div>
                </div>
                <h3 className="budget-item-name">{item.item}</h3>
                <div className="budget-amounts">
                  <div className="amount-row">
                    <span>Budget:</span>
                    <span className="budget-amount">${item.budget.toLocaleString()}</span>
                  </div>
                  <div className="amount-row">
                    <span>Spent:</span>
                    <span className="spent-amount">${item.spent.toLocaleString()}</span>
                  </div>
                  <div className="amount-row">
                    <span>Remaining:</span>
                    <span className={`remaining-amount ${item.budget - item.spent < 0 ? 'negative' : ''}`}>
                      ${(item.budget - item.spent).toLocaleString()}
                    </span>
                  </div>
                </div>
                {item.dueDate && (
                  <div className="due-date">
                    <FaCalendarAlt /> Due: {new Date(item.dueDate).toLocaleDateString()}
                  </div>
                )}
                {item.notes && (
                  <div className="budget-notes">
                    <strong>Notes:</strong> {item.notes}
                  </div>
                )}
                <div className="budget-progress-mini">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${item.budget > 0 ? Math.min((item.spent / item.budget) * 100, 100) : 0}%`,
                        backgroundColor:
                          getStatusColor(item.budget, item.spent) === 'danger'
                            ? '#dc3545'
                            : getStatusColor(item.budget, item.spent) === 'warning'
                            ? '#ffc107'
                            : '#28a745'
                      }}
                    ></div>
                  </div>
                  <span className="progress-percentage">
                    {item.budget > 0 ? Math.round((item.spent / item.budget) * 100) : 0}%
                  </span>
                </div>
                <div className="budget-actions">
                  <button className="edit-btn" onClick={() => handleEdit(item)}>
                    <FaEdit />
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="category-breakdown">
          <h2>Category Breakdown</h2>
          <div className="category-list">
            {categoryStats.map(stat => (
              <div key={stat.category} className="category-item">
                <div className="category-header">
                  <h3>{stat.category}</h3>
                  <span className="category-count">{stat.items} items</span>
                </div>
                <div className="category-amounts">
                  <div className="category-budget">Budget: ${stat.budget.toLocaleString()}</div>
                  <div className="category-spent">Spent: ${stat.spent.toLocaleString()}</div>
                </div>
                <div className="category-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${stat.budget > 0 ? Math.min((stat.spent / stat.budget) * 100, 100) : 0}%`,
                        backgroundColor:
                          getStatusColor(stat.budget, stat.spent) === 'danger'
                            ? '#dc3545'
                            : getStatusColor(stat.budget, stat.spent) === 'warning'
                            ? '#ffc107'
                            : '#28a745'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {budgetItems.length === 0 && (
        <div className="empty-state">
          <h3>No budget items added yet</h3>
          <p>Start tracking your wedding expenses by adding your first budget item!</p>
          <button className="btn" onClick={() => setShowForm(true)}>
            <FaPlus /> Add Your First Budget Item
          </button>
        </div>
      )}
    </div>
  );
};

export default BudgetTracker; 