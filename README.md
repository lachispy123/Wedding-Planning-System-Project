   # 💒 Wedding Planning System

A comprehensive wedding planning platform built with Next.js that helps couples organize their perfect wedding day. Manage guest lists, track budgets, set reminders, and coordinate with vendors all in one beautiful, intuitive interface.

## ✨ Features

### 🎯 Dashboard Overview
- Real-time wedding planning statistics
- Progress tracking for tasks and budget
- Countdown to wedding day
- Quick access to upcoming reminders

### 👥 Guest List Management
- Add, edit, and delete wedding guests
- Track RSVP responses (pending, accepted, declined)
- Manage plus-one information
- Store contact details (email, phone)
- Guest statistics and analytics

### 💰 Budget Tracker
- Set total wedding budget with category breakdowns
- Track expenses across multiple categories:
  - Venue, Catering, Photography, Flowers
  - Music/DJ, Decorations, Transportation, etc.
- Visual progress indicators for spending
- Budget vs. actual expense comparison
- Add new expenses with detailed categorization

### 🔔 Reminders & Tasks
- Create wedding planning reminders with due dates
- Priority-based task management (high, medium, low)
- Mark tasks as complete/incomplete
- Visual priority indicators and sorting

### 🛠️ Planning Tools
- **Planning Checklist**: Organize tasks by wedding category
- **Vendor Management**: Store vendor contact information
- Vendor ratings and notes system
- Category-based organization for easy access

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wedding-planning-system.git
   cd wedding-planning-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful icon library

### State Management
- **React Hooks** - Built-in state management
- **Local Storage** - Client-side data persistence (can be upgraded to database)

## 📁 Project Structure

```
wedding-planning-system/
├── app/
│   ├── components/
│   │   ├── guest-list-manager.tsx
│   │   ├── budget-tracker.tsx
│   │   ├── reminders-manager.tsx
│   │   └── planning-tools.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── progress.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       └── ...
├── lib/
│   └── utils.ts
├── public/
├── README.md
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Design System

The application uses a cohesive design system with:
- **Color Palette**: Wedding-themed pink and purple gradients
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable UI components from shadcn/ui
- **Icons**: Lucide React icons for consistent iconography

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop computers (1024px+)
- 🖥️ Large screens (1440px+)

## 🔧 Customization

### Adding New Categories
To add new budget or planning categories, update the `categories` array in the respective components:

```typescript
const categories = [
  "Venue",
  "Catering", 
  "Photography",
  "Flowers",
  "Music/DJ",
  "Decorations",
  "Transportation",
  "Your New Category" // Add here
]
```

### Styling Customization
The application uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.ts`
- Fonts and typography
- Spacing and layout
- Component styles

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
The application can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- Any Node.js hosting service

## 🔮 Future Enhancements

### Planned Features
- [ ] **Database Integration** (Supabase/PostgreSQL)
- [ ] **User Authentication** (NextAuth.js)
- [ ] **Email Notifications** for reminders and RSVP
- [ ] **Photo Gallery** for inspiration and vendor portfolios
- [ ] **Timeline View** with visual wedding planning milestones
- [ ] **Expense Receipt Upload**
- [ ] **Wedding Website Generator**
- [ ] **Seating Chart Planner**
- [ ] **Gift Registry Integration**

### Technical Improvements
- [ ] **API Routes** for data persistence
- [ ] **Real-time Updates** with WebSockets
- [ ] **Offline Support** with PWA features
- [ ] **Data Export** (PDF, Excel)
- [ ] **Multi-language Support**

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use existing UI components when possible
- Maintain responsive design principles
- Add proper error handling
- Write clear commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Vercel** for the amazing Next.js framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icons
- **Radix UI** for accessible UI primitives

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/wedding-planning-system/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🎉 Happy Wedding Planning!

We hope this tool helps make your wedding planning journey smoother and more enjoyable. Here's to your perfect day! 💕

---

**Made with ❤️ for couples planning their dream wedding**
```

I've created a comprehensive README file for the Wedding Planning System that includes:

## 📋 **What's Included:**

### **Project Overview**
- Clear description of the wedding planning platform
- Feature highlights with emojis for visual appeal
- Benefits for couples planning their wedding

### **Technical Documentation**
- Complete installation instructions
- Tech stack breakdown
- Project structure overview
- Deployment guidelines

### **User Guide**
- Detailed feature explanations
- Getting started instructions
- Customization options

### **Developer Information**
- Contributing guidelines
- Future enhancement roadmap
- Development best practices
- Support information

### **Professional Touches**
- Proper markdown formatting with syntax highlighting
- Emoji usage for visual appeal and easy scanning
- Clear section organization
- Links and references
- License and acknowledgments

The README follows industry best practices and provides everything needed for users, developers, and contributors to understand and work with the wedding planning system effectively!
