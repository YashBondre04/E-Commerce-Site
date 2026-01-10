# 🖥️ TechHub - E-Commerce PC Components Store

A modern, full-featured e-commerce platform for PC components and peripherals built with React, featuring a custom PC builder, shopping cart functionality, and a sleek dark/light theme.

🌐 **Live Demo:** [https://e-commerce-site-phi-liart.vercel.app](https://e-commerce-site-phi-liart.vercel.app)

## ✨ Features

### 🛍️ Core Functionality
- **Product Catalog** - Browse through various PC components with detailed cards
- **Custom PC Builder** - Build your dream PC by selecting compatible components
- **Shopping Cart** - Add items to cart with Redux state management
- **Dark/Light Theme** - Seamless theme switching with system preference support
- **Responsive Design** - Fully responsive layout for mobile, tablet, and desktop

### 📦 Product Categories
- **Workstation Components**
  - Workstations & CPUs
  - Office Monitors
  - Enterprise Storage
  - Business Laptops
  - Office Peripherals
  - Software

- **Gaming Components**
  - Graphics Cards (GPU)
  - Gaming CPUs
  - Gaming Monitors
  - Headsets & Audio
  - Cooling Systems
  - Memory (RAM)

### 🎨 UI/UX Features
- Hero carousel with product showcases
- Featured products section
- Product filtering and categorization
- Interactive navigation menu
- Smooth animations and transitions
- Glassmorphism effects

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0** - Modern React with latest features
- **Vite 7.2.4** - Lightning-fast build tool and dev server

### Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Shadcn UI** - Beautiful, accessible component library
- **Radix UI** - Headless UI components for accessibility
- **Lucide React** - Modern icon library

### State Management & Routing
- **Redux Toolkit 2.11.2** - Predictable state management
- **React Router DOM 7.11.0** - Client-side routing
- **React Redux 9.2.0** - Official React bindings for Redux

### Additional Libraries
- **Embla Carousel React** - Smooth carousel implementation
- **class-variance-authority** - CVA for component variants
- **clsx & tailwind-merge** - Conditional className utilities

## 📁 Project Structure

```
E-Commerce-Project/
├── public/                  # Static assets
│   ├── LogoDark.png
│   ├── Computer.jpg
│   ├── Cabinet.jpg
│   ├── Gpu.jpg
│   ├── Mouse.jpg
│   └── Speaker.jpg
├── src/
│   ├── app/                # Redux store configuration
│   ├── assets/             # Image and media assets
│   ├── components/         # Reusable UI components
│   │   └── ui/            # Shadcn UI components
│   ├── context/           # React context providers
│   ├── data/              # Mock data and constants
│   ├── features/          # Redux slices
│   │   └── cart/         # Shopping cart logic
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FeaturedSection.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ExplorePage.jsx
│   │   ├── PCBuilder.jsx
│   │   ├── RegisterPage.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Main app component with routes
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── components.json        # Shadcn UI configuration
├── package.json
└── vite.config.js

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YashBondre04/E-Commerce-Site.git
cd E-Commerce-Site/E-Commerce-Project
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint for code quality
```

## 🎯 Key Features Implementation

### Shopping Cart (Redux)
The shopping cart is implemented using Redux Toolkit with the following features:
- Add items to cart
- Remove items from cart
- Update item quantities
- Persistent cart state

### PC Builder
Custom PC builder allows users to:
- Select components category by category
- View compatibility information
- See real-time price updates
- Track build progress

### Theme System
- System preference detection
- Manual theme toggle
- Persistent theme selection
- Smooth theme transitions

## 🎨 Design System

### Color Scheme
- **Light Mode**: Clean whites with charcoal accents
- **Dark Mode**: Gunmetal background with white text
- **Accent Colors**: Primary blue with muted secondary colors

### Components
- Cards with glassmorphism effects
- Hover animations and transitions
- Consistent spacing and typography
- Accessible UI components from Radix UI

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large screens */
```

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration (if present)
- `components.json` - Shadcn UI component configuration
- `jsconfig.json` - JavaScript path aliases
- `vercel.json` - Vercel deployment configuration

## 🚢 Deployment

The project is configured for deployment on Vercel with the included `vercel.json` configuration file.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Vite and deploy

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] User authentication and registration
- [ ] Backend API integration
- [ ] Product search functionality
- [ ] Product reviews and ratings
- [ ] Wishlist feature
- [ ] Order history and tracking
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Live chat support

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Yash Bondre**
- GitHub: [@YashBondre04](https://github.com/YashBondre04)

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) - For the beautiful component library
- [Radix UI](https://www.radix-ui.com/) - For accessible headless components
- [Lucide Icons](https://lucide.dev/) - For the icon set
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework

---

⭐ **Star this repo if you find it helpful!**