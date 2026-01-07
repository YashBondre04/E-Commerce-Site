import ProductListItem from "@/components/ProductListItem";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Cpu,
  Fan,
  Gamepad2, HardDrive,
  Headphones,
  Laptop,
  MemoryStick,
  Monitor,
  Mouse,
  SlidersHorizontal
} from 'lucide-react';
import React, { useState } from 'react';
import ProductCard from "./ProductCard"; // Ensure this path is correct based on your folder structure

const ExplorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Stores the full category object

  // --- MOCK DATA: WORKSTATION ---
  const workCategories = [
    { id: 'work-cpu', type: 'work', name: "Workstations", icon: <Cpu />, count: "50+ Items", desc: "High-thread CPUs for rendering & multitasking." },
    { id: 'work-monitor', type: 'work', name: "Office Monitors", icon: <Monitor />, count: "40+ Items", desc: "Color accurate IPS panels & ultrawides." },
    { id: 'work-storage', type: 'work', name: "Enterprise Storage", icon: <HardDrive />, count: "100+ Items", desc: "NAS drives and high-capacity SSDs." },
    { id: 'work-laptop', type: 'work', name: "Business Laptops", icon: <Laptop />, count: "35+ Items", desc: "Lightweight, long battery life machines." },
    { id: 'work-peripherals', type: 'work', name: "Office Peripherals", icon: <Mouse />, count: "200+ Items", desc: "Ergonomic mice and silent keyboards." },
    { id: 'work-software', type: 'work', name: "Software", icon: <Briefcase />, count: "15 Items", desc: "OS, Office Suites, and Antivirus." },
  ];

  // --- MOCK DATA: GAMING ---
  const gamingCategories = [
    { id: 'gaming-gpu', type: 'gaming', name: "Graphics Cards", icon: <Gamepad2 />, count: "85+ Items", desc: "RTX 40-Series & Radeon RX for max FPS." },
    { id: 'gaming-cpu', type: 'gaming', name: "Gaming CPUs", icon: <Cpu />, count: "45+ Items", desc: "High clock speeds for smooth gaming." },
    { id: 'gaming-monitor', type: 'gaming', name: "Monitors", icon: <Monitor />, count: "60+ Items", desc: "144Hz, 240Hz, and OLED Gaming panels." },
    { id: 'gaming-audio', type: 'gaming', name: "Headsets & Audio", icon: <Headphones />, count: "90+ Items", desc: "7.1 Surround sound and precision mics." },
    { id: 'gaming-cooling', type: 'gaming', name: "Cooling", icon: <Fan />, count: "50+ Items", desc: "AIO Liquid coolers and RGB fans." },
    { id: 'gaming-memory', type: 'gaming', name: "Memory", icon: <MemoryStick />, count: "120+ Items", desc: "8gb, 16gb, ram sticks and more." },
    { id: 'gaming-accessories', type: 'gaming', name: "Accessories", icon: <Mouse />, count: "150+ Items", desc: "Gaming mice, mousepads, and more." },
    { id: 'gaming-storage', type: 'gaming', name: "High-Speed Storage", icon: <HardDrive />, count: "70+ Items", desc: "NVMe SSDs for fast load times." },
  ];

  // --- DYNAMIC PRODUCT GENERATOR ---
  // Generates different titles/specs based on if the user clicked a "Work" or "Gaming" category
  const generateMockProducts = (category) => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      // Logic: Change title based on category type
      title: category.type === 'gaming' 
        ? `TUF Gaming Pro Series X${i + 1}00` 
        : `ProArt Workstation Component Z${i + 1}`,
      price: 199 + (i * 80),
      rating: 4.5 + (i * 0.1),
      image: "/LogoDark.png", // Replace with real images
      sale: i % 4 === 0 ? 10 : null,
      specs: category.type === 'gaming' 
        ? { clock: "5.2 GHz", rgb: "Yes", warranty: "3 Years" } 
        : { reliability: "Enterprise Grade", efficiency: "A++", warranty: "5 Years" }
    }));
  };

  const currentProducts = selectedCategory ? generateMockProducts(selectedCategory) : [];

  // --- VIEW 1: CATEGORY SELECTION ---
  if (!selectedCategory) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen space-y-16">
        
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-4xl font-bold text-foreground">Explore Components</h1>
          <p className="text-muted-foreground">Select a category to start building your dream setup.</p>
        </div>

        {/* SECTION 1: WORK */}
        <CategorySection 
          title="Work & Productivity" 
          subtitle="Build the ultimate office setup."
          categories={workCategories} 
          onSelect={setSelectedCategory} 
        />

        {/* SECTION 2: GAMING */}
        <CategorySection 
          title="Gaming & Performance" 
          subtitle="Push your framerates to the limit."
          categories={gamingCategories} 
          onSelect={setSelectedCategory} 
        />

      </div>
    );
  }

  // --- VIEW 2: PRODUCT LISTING (SHOP) ---
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      
      {/* Header & Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => setSelectedCategory(null)} className="gap-2 text-muted-foreground hover:text-foreground pl-0">
            <ChevronLeft className="h-4 w-4" /> Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{selectedCategory.name}</h1>
            <p className="text-sm text-muted-foreground capitalize">{selectedCategory.type} Collection</p>
          </div>
        </div>
        
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </Button>
      </div>

      {/* 1. FEATURED SECTION */}
      <section className="mb-16 space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Featured {selectedCategory.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.slice(0, 4).map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* 2. ALL RESULTS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">All Results</h2>
        <div className="flex flex-col gap-4">
          {currentProducts.map((p) => (
            <ProductListItem key={p.id} {...p} />
          ))}
        </div>
      </section>

    </div>
  );
};

// --- REUSABLE SUB-COMPONENT FOR SECTIONS ---
const CategorySection = ({ title, subtitle, categories, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Show all if expanded, otherwise only show first 4
  const visibleCategories = isExpanded ? categories : categories.slice(0, 4);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between border-b border-border pb-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        {categories.length > 4 && (
          <Button 
            variant="ghost" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-2 text-primary hover:text-primary/80"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="h-4 w-4" /></>
            ) : (
              <>View All <ChevronDown className="h-4 w-4" /></>
            )}
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {visibleCategories.map((cat) => (
          <div 
            key={cat.id}
            onClick={() => onSelect(cat)}
            className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg flex flex-col gap-4"
          >
            {/* Icon Bubble */}
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {React.cloneElement(cat.icon, { size: 24 })}
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-foreground">{cat.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{cat.desc}</p>
            </div>
            
            <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
              <span className="text-xs font-medium text-muted-foreground">{cat.count}</span>
              <span className="text-sm font-semibold text-primary">Browse &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;