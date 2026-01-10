# 🛒 TechHub - E-Commerce Site for PC Components

A modern, full-featured e-commerce platform specializing in PC components and custom PC building.  Built with React, Tailwind CSS, and Shadcn UI, featuring a custom PC builder tool, shopping cart functionality, and a beautiful dark/light theme toggle. 

🌐 **[Live Demo](techhub-ecommerce.vercel.app)**

---

## ✨ Features

### 🛍️ Core Functionality
- **Product Catalog**:  Browse through gaming and workstation components
- **Custom PC Builder**: Interactive tool to build and configure your dream PC
- **Shopping Cart**: Redux-powered cart with add/remove functionality
- **Search & Filter**: Find components quickly with category filters
- **Theme Toggle**: Seamless dark/light mode switching
- **Responsive Design**:  Optimized for desktop, tablet, and mobile

### 📦 Product Categories
- **Gaming Components**: Graphics Cards, CPUs, Monitors, Headsets, Cooling, Memory
- **Workstation Components**: Professional CPUs, Office Monitors, Enterprise Storage, Business Laptops, Peripherals

### 🎨 UI/UX Features
- Interactive hero carousel with product highlights
- Featured products section
- Product cards with ratings and pricing
- Sticky navigation header with glassmorphism effect
- Animated transitions and hover effects
- Toast notifications for cart actions

---

## 🛠️ Tech Stack

### Frontend Framework
- **React** `19.2.0` - UI library
- **React Router DOM** `7.11.0` - Client-side routing
- **Vite** `7.2.4` - Build tool and dev server

### State Management
- **Redux Toolkit** `2.11.2` - State management
- **React Redux** `9.2.0` - React bindings for Redux

### Styling & UI
- **Tailwind CSS** `4.1.18` - Utility-first CSS framework
- **Shadcn UI** `3.6.2` - Re-usable component library
- **Radix UI** - Accessible component primitives
  - Navigation Menu, Dialog, Popover, Select, Scroll Area, Tooltip, Avatar, Checkbox, Label, Separator, Slot
- **Lucide React** `0.562.0` - Icon library
- **class-variance-authority** `0.7.1` - CVA for component variants
- **clsx** `2.1.1` - Conditional classNames
- **tailwind-merge** `3.4.0` - Merge Tailwind classes

### Additional Libraries
- **Embla Carousel React** `8.6.0` - Carousel component
- **@fontsource-variable/inter** `5.2.8` - Inter font family

### Development Tools
- **ESLint** `9.39.1` - Linting
- **@vitejs/plugin-react** `5.1.1` - React plugin for Vite
- **tw-animate-css** `1.4.0` - Tailwind animations

---

## 📁 Project Structure

```
E-Commerce-Site/
├── E-Commerce-Project/
│   ├── public/               # Static assets (images, logos)
│   ├── src/
│   │   ├── app/              # Redux store configuration
│   │   ├── assets/           # Local assets
│   │   ├── components/       # Reusable UI components
│   │   │   └── ui/           # Shadcn UI components
│   │   ├── context/          # React Context providers
│   │   ├── data/             # Mock data and constants
│   │   ├── features/         # Redux slices (e.g., cartSlice)
│   │   ├── lib/              # Utility functions
│   │   ├── pages/            # Page components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── FeaturedSection.jsx
│   │   │   ├── ExplorePage.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── PCBuilder.jsx
│   │   │   └── RegisterPage.jsx
│   │   ├── App.jsx           # Main app component with routing
│   │   ├── main.jsx          # Entry point
│   │   └── index.css         # Global styles
│   ├── components. json       # Shadcn UI configuration
│   ├── vite.config.js        # Vite configuration
│   ├── tailwind.config.js    # Tailwind configuration
│   └── package.json          # Dependencies
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

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
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎯 Key Features Implementation

### 🛒 Shopping Cart (Redux)
The shopping cart is powered by Redux Toolkit with the following features:
- Add items to cart
- Remove items from cart
- Update quantities
- Calculate totals
- Persist cart state

**Location**: `src/features/cart/cartSlice.js`

### 🏗️ PC Builder Tool
Interactive component selector that helps users build custom PCs:
- Component compatibility checking
- Real-time price calculation
- Progress tracking (7 component slots)
- Build summary with total cost

**Location**: `src/pages/PCBuilder.jsx`

### 🎨 Theme System
Custom theme implementation with:
- Light/Dark mode toggle
- CSS variables for consistent theming
- Automatic system preference detection
- Persistent theme selection

### 🧩 Component Categories
Organized into two main categories:
- **Gaming**: High-performance components for gaming rigs
- **Workstation**:  Professional components for productivity

---

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## 🎨 Design System

### Colors
- Uses Tailwind CSS color palette
- Custom theme colors via CSS variables
- Dark mode optimized

### Typography
- Font Family: Inter (Variable)
- Responsive font sizes
- Consistent heading hierarchy

### Components
All UI components are built with Shadcn UI and Radix UI primitives, ensuring: 
- Accessibility (ARIA compliant)
- Keyboard navigation
- Screen reader support

---

## 🌐 Deployment

The project is deployed on **Vercel** with automatic deployments from the main branch.

**Live URL**: [https://e-commerce-site-phi-liart.vercel.app](https://e-commerce-site-phi-liart.vercel.app)

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Configure build settings: 
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Future Enhancements

- [ ] User authentication and profiles
- [ ] Payment gateway integration
- [ ] Order tracking system
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Backend API integration
- [ ] Real-time inventory management
- [ ] Advanced filtering and sorting

---

## 👤 Author

**Yash Bondre**
- GitHub: [@YashBondre04](https://github.com/YashBondre04)
- Project Link: [https://github.com/YashBondre04/E-Commerce-Site](https://github.com/YashBondre04/E-Commerce-Site)

---

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) - Beautiful component library
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ by Yash Bondre
</div>
