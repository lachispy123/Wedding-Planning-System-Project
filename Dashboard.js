import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaDollarSign, FaCalendarAlt, FaBell, FaHeart, FaCrown, FaStar, FaCheckCircle, FaGift, FaCamera, FaMusic, FaUtensils, FaCar, FaSeedling, FaGem, FaPlane } from 'react-icons/fa';
import './Dashboard.css';

const quickActions = [
  { title: 'Add Guest', path: '/guests', icon: FaUsers, color: '#667eea', description: 'Manage your guest list' },
  { title: 'Add Budget Item', path: '/budget', icon: FaDollarSign, color: '#28a745', description: 'Track your expenses' },
  { title: 'Add Task', path: '/planning', icon: FaCalendarAlt, color: '#ffc107', description: 'Plan your timeline' },
  { title: 'Set Reminder', path: '/reminders', icon: FaBell, color: '#dc3545', description: 'Stay on schedule' }
];

const platformFeatures = [
  { title: 'Guest Management', icon: FaUsers, description: 'Comprehensive guest list management with RSVP tracking, dietary preferences, and seating arrangements' },
  { title: 'Budget Tracking', icon: FaDollarSign, description: 'Detailed budget planning with expense tracking, category breakdown, and spending alerts' },
  { title: 'Timeline Planning', icon: FaCalendarAlt, description: 'Customizable wedding timeline with task management and milestone tracking' },
  { title: 'Smart Reminders', icon: FaBell, description: 'Intelligent notification system for important dates and deadlines' },
  { title: 'Vendor Management', icon: FaStar, description: 'Organize vendor contacts, contracts, and payment schedules' },
  { title: 'Wedding Registry', icon: FaGift, description: 'Create and manage your wedding gift registry' }
];

const weddingServices = [
  { title: 'Photography & Videography', icon: FaCamera, description: 'Professional wedding photography and videography services' },
  { title: 'Catering & Menu Planning', icon: FaUtensils, description: 'Custom menu planning and catering coordination' },
  { title: 'Music & Entertainment', icon: FaMusic, description: 'DJ, live bands, and entertainment booking' },
  { title: 'Transportation', icon: FaCar, description: 'Guest transportation and wedding party travel arrangements' },
  { title: 'Floral Design', icon: FaSeedling, description: 'Wedding flowers, bouquets, and venue decoration' },
  { title: 'Jewelry & Rings', icon: FaGem, description: 'Wedding rings and jewelry selection' },
  { title: 'Honeymoon Planning', icon: FaPlane, description: 'Honeymoon destination planning and booking' }
];

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalGuests: 0,
    confirmedGuests: 0,
    totalBudget: 0,
    spentBudget: 0,
    totalTasks: 0,
    completedTasks: 0,
    upcomingReminders: 0
  });

  useEffect(() => {
    const guests = JSON.parse(localStorage.getItem('guests') || '[]');
    const budgetItems = JSON.parse(localStorage.getItem('budgetItems') || '[]');
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const reminders = JSON.parse(localStorage.getItem('reminders') || '[]');

    const totalBudget = budgetItems.reduce((sum, item) => sum + parseFloat(item.budget || 0), 0);
    const spentBudget = budgetItems.reduce((sum, item) => sum + parseFloat(item.spent || 0), 0);
    const confirmedGuests = guests.filter(guest => guest.status === 'confirmed').length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const upcomingReminders = reminders.filter(reminder => new Date(reminder.date) > new Date()).length;

    setStats({
      totalGuests: guests.length,
      confirmedGuests,
      totalBudget,
      spentBudget,
      totalTasks: tasks.length,
      completedTasks,
      upcomingReminders
    });
  }, []);

  return (
    <div className="dashboard">
      {/* Wedding Planner Introduction */}
      <div className="planner-intro">
        <div className="planner-header">
          <div className="planner-info">
            <h1 className="planner-name">Jeevanshi Dubey</h1>
            <p className="planner-title">Professional Wedding Planner</p>
            <p className="planner-description">
              Creating magical moments and unforgettable experiences for your special day. 
              With years of expertise in wedding planning, I'm here to make your dream wedding a reality.
            </p>
          </div>
          <div className="planner-badge">
            <FaCrown />
            <span>Certified Wedding Planner</span>
          </div>
        </div>
      </div>

      {/* Platform Overview */}
      <div className="platform-overview">
        <h2 className="section-title">
          <FaHeart className="title-icon" />
          Welcome to Your Wedding Planning Platform
        </h2>
        <p className="platform-description">
          Your comprehensive wedding planning solution designed to make your special day perfect. 
          From guest management to budget tracking, we provide all the tools you need for a stress-free wedding planning experience.
        </p>
      </div>

      {/* Dashboard Stats */}
      <div className="dashboard-stats">
        <h3 className="stats-title">Your Wedding Overview</h3>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon"><FaUsers /></div>
            <div className="stat-number">{stats.totalGuests}</div>
            <div className="stat-label">Total Guests</div>
            <div className="stat-subtitle">{stats.confirmedGuests} confirmed</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><FaDollarSign /></div>
            <div className="stat-number">${stats.totalBudget.toLocaleString()}</div>
            <div className="stat-label">Total Budget</div>
            <div className="stat-subtitle">${stats.spentBudget.toLocaleString()} spent</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><FaCalendarAlt /></div>
            <div className="stat-number">{stats.totalTasks}</div>
            <div className="stat-label">Total Tasks</div>
            <div className="stat-subtitle">{stats.completedTasks} completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><FaBell /></div>
            <div className="stat-number">{stats.upcomingReminders}</div>
            <div className="stat-label">Upcoming Reminders</div>
            <div className="stat-subtitle">Stay on track</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2 className="section-title">Quick Actions</h2>
        <div className="quick-actions-grid">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.title} to={action.path} className="quick-action-card">
                <div className="quick-action-icon" style={{ backgroundColor: action.color }}>
                  <Icon />
                </div>
                <h3>{action.title}</h3>
                <p>{action.description}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Platform Features */}
      <div className="platform-features">
        <h2 className="section-title">
          <FaStar className="title-icon" />
          Platform Features & Functionalities
        </h2>
        <div className="features-grid">
          {platformFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon">
                  <Icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wedding Services */}
      <div className="wedding-services">
        <h2 className="section-title">
          <FaGift className="title-icon" />
          Wedding Services & Facilities
        </h2>
        <div className="services-grid">
          {weddingServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="service-card">
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Planning Progress */}
      <div className="progress-section">
        <h2 className="section-title">
          <FaCheckCircle className="title-icon" />
          Planning Progress
        </h2>
        <div className="progress-cards">
          <div className="progress-card">
            <div className="progress-header">
              <h3>Guest Management</h3>
              <span className="progress-percentage">
                {stats.totalGuests > 0 ? Math.round((stats.confirmedGuests / stats.totalGuests) * 100) : 0}%
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${stats.totalGuests > 0 ? (stats.confirmedGuests / stats.totalGuests) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
          <div className="progress-card">
            <div className="progress-header">
              <h3>Budget Tracking</h3>
              <span className="progress-percentage">
                {stats.totalBudget > 0 ? Math.round((stats.spentBudget / stats.totalBudget) * 100) : 0}%
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${stats.totalBudget > 0 ? (stats.spentBudget / stats.totalBudget) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
          <div className="progress-card">
            <div className="progress-header">
              <h3>Task Completion</h3>
              <span className="progress-percentage">
                {stats.totalTasks > 0 ? Math.round((stats.completedTasks / stats.totalTasks) * 100) : 0}%
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${stats.totalTasks > 0 ? (stats.completedTasks / stats.totalTasks) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-section">
        <h2 className="section-title">
          <FaHeart className="title-icon" />
          Get in Touch
        </h2>
        <div className="contact-info">
          <p>Ready to start planning your dream wedding? Contact me for a personalized consultation.</p>
          <div className="contact-details">
            <div className="contact-item">
              <strong>Wedding Planner:</strong> Jeevanshi Dubey
            </div>
            <div className="contact-item">
              <strong>Specialization:</strong> Luxury Weddings, Destination Weddings, Traditional Ceremonies
            </div>
            <div className="contact-item">
              <strong>Experience:</strong> 5+ Years in Wedding Planning
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 