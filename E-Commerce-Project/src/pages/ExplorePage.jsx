import { Button } from "@/components/ui/button";
import { ChevronLeft, Cpu, Gamepad2, HardDrive, Monitor, SlidersHorizontal } from 'lucide-react';
import React, { useState } from 'react';
import ProductListItem from '../components/ProductListItem';
import ProductCard from './ProductCard'; // Your Grid Card
// Your New List Item

const ExplorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // --- MOCK DATA FOR CATEGORIES ---
  const categories = [
    { id: 'cpu', name: "Processors", icon: <Cpu />, count: "120+ Products", desc: "High core counts for multitasking." },
    { id: 'gpu', name: "Graphics Cards", icon: <Gamepad2 />, count: "85+ Products", desc: "RTX 40-Series & Radeon RX." },
    { id: 'monitor', name: "Monitors", icon: <Monitor />, count: "64 Products", desc: "144Hz, 4K, and OLED panels." },
    { id: 'storage', name: "Storage", icon: <HardDrive />, count: "200+ Products", desc: "NVMe SSDs and HDDs." },
    // Add more as needed...
  ];

  // --- MOCK DATA FOR PRODUCTS ---
  // In a real app, you would fetch this based on the 'selectedCategory' ID
  const mockProducts = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: selectedCategory === 'gpu' ? `NVIDIA GeForce RTX 40${70 + i} Super` : `High Performance Component ${i + 1}`,
    price: 299 + (i * 50),
    rating: 4.8,
    image: "/LogoDark.png", // Replace with real image logic
    sale: i % 3 === 0 ? 15 : null,
    specs: {
      brand: "Asus",
      memory: "16GB GDDR6",
      clock: "2.5 GHz"
    }
  }));

  // --- VIEW 1: CATEGORY SELECTION ---
  if (!selectedCategory) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen">
        <div className="mb-8 text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Explore Components</h1>
          <p className="text-muted-foreground">Select a category to start building your dream setup.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
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
  }

  // --- VIEW 2: PRODUCT LISTING (SHOP) ---
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      
      {/* Header & Back Button */}
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" onClick={() => setSelectedCategory(null)} className="gap-2 text-muted-foreground hover:text-foreground pl-0">
          <ChevronLeft className="h-4 w-4" /> Back to Categories
        </Button>
        <h1 className="text-3xl font-bold text-foreground capitalize">{selectedCategory} Shop</h1>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </Button>
      </div>

      {/* 1. FEATURED SECTION (Horizontal Grid) */}
      <section className="mb-16 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Featured & Best Sellers</h2>
        </div>
        {/* Shows top 4 items as Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.slice(0, 4).map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* 2. ALL RESULTS (Amazon Style List) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">All Results</h2>
        <div className="flex flex-col gap-4">
          {mockProducts.map((p) => (
            <ProductListItem key={p.id} {...p} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default ExplorePage;