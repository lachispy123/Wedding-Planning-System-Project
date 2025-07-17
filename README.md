 # Wedding Planner System

A comprehensive wedding planning application built with React.js that helps couples manage their wedding planning process efficiently. This system includes guest list management, budget tracking, planning tools, and reminder notifications.

## Features

### 🎯 Dashboard
- Overview of all wedding planning activities
- Quick statistics and progress tracking
- Quick access to all major features
- Visual progress indicators for different planning areas

### 👥 Guest List Management
- Add, edit, and delete guest information
- Track RSVP status (Pending, Confirmed, Declined)
- Manage plus-one information
- Store contact details and dietary restrictions
- Guest relationship categorization
- Notes and special requirements tracking

### 💰 Budget Tracker
- Comprehensive budget management with categories
- Track planned vs. actual spending
- Visual progress bars and status indicators
- Category-wise budget breakdown
- Due date tracking for payments
- Notes and vendor information

### 📋 Planning Tools
- Task management with priorities and categories
- Timeline view for chronological planning
- Task completion tracking
- Due date management
- Assignment tracking (Bride, Groom, Both)
- Progress visualization

### 🔔 Reminders & Notifications
- Set custom reminders with date and time
- Priority-based reminder system
- Repeat options (Daily, Weekly, Monthly)
- Category organization
- Status tracking (Today, Upcoming, Overdue, Completed)

## Technology Stack

- **Frontend**: React.js18**Routing**: React Router DOM
- **Icons**: React Icons
- **Styling**: CSS3 with modern design principles
- **Data Storage**: Local Storage (browser-based)
- **Date Handling**: Native JavaScript Date API

## Installation & Setup

### Prerequisites
- Node.js (version 14r higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wedding-planner-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Dashboard.js          # Main dashboard component
│   ├── Dashboard.css
│   ├── GuestList.js          # Guest management component
│   ├── GuestList.css
│   ├── BudgetTracker.js      # Budget tracking component
│   ├── BudgetTracker.css
│   ├── PlanningTools.js      # Task and timeline management
│   ├── PlanningTools.css
│   ├── Reminders.js          # Reminder system component
│   ├── Reminders.css
│   ├── Navbar.js             # Navigation component
│   └── Navbar.css
├── App.js                    # Main application component
├── App.css                   # Application styles
├── index.js                  # Application entry point
└── index.css                 # Global styles
```

## Key Features Explained

### Data Persistence
All data is stored in the browser's localStorage, making it:
- Persistent across browser sessions
- No server required
- Private and secure
- Accessible offline

### Responsive Design
The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

### User Experience
- Modern, clean interface design
- Intuitive navigation
- Real-time updates
- Visual feedback for all actions
- Progress tracking and statistics

## Usage Guide

### Getting Started1Dashboard**: Start here to get an overview of your wedding planning progress
2*Guest List**: Add your wedding guests and track their RSVPs
3**Budget**: Set up your wedding budget and track expenses
4. **Planning**: Create tasks and manage your wedding timeline5**Reminders**: Set important reminders to stay on track

### Best Practices
- Regularly update guest RSVP status
- Keep budget information current
- Set realistic due dates for tasks
- Use the reminder system for important deadlines
- Review the dashboard regularly for progress updates

## Customization

### Adding New Categories
You can easily add new categories for:
- Budget items
- Guest relationships
- Task categories
- Reminder categories

### Styling
The application uses CSS custom properties and can be easily customized by modifying the CSS files in the components directory.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the repository or contact the development team.

---

**Happy Wedding Planning! 💒** 
