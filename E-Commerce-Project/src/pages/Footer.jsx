import React, { useState } from 'react';
import { ChevronRight, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from "@/lib/utils"; 

const Footer = () => {
  const [activeTab, setActiveTab] = useState("about");

  const sections = [
    {
      id: "about",
      label: "About Us",
      content: (
        <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
          <h3 className="text-2xl font-bold mb-4 text-foreground">About TechHub</h3>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            TechHub is the premier destination for PC enthusiasts. We believe in high frames, 
            low temperatures, and fair prices. Founded in 2024, we verify every component 
            compatibility so you don't have to.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="bg-card border border-border p-4 rounded-lg text-center shadow-sm">
              <span className="block text-2xl font-bold text-foreground">10k+</span>
              <span className="text-xs uppercase text-muted-foreground">Parts Sold</span>
            </div>
            <div className="bg-card border border-border p-4 rounded-lg text-center shadow-sm">
              <span className="block text-2xl font-bold text-foreground">24/7</span>
              <span className="text-xs uppercase text-muted-foreground">Support</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "connect",
      label: "Connect with us",
      content: (
        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
          <h3 className="text-2xl font-bold text-foreground">Stay Connected</h3>
          <div className="grid grid-cols-2 gap-4">
            <a href="#" className="flex items-center gap-3 bg-card border border-border p-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group">
              <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
              <span className="font-medium text-foreground">Facebook</span>
            </a>
            <a href="#" className="flex items-center gap-3 bg-card border border-border p-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group">
              <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-sky-500 transition-colors" />
              <span className="font-medium text-foreground">Twitter</span>
            </a>
            <a href="#" className="flex items-center gap-3 bg-card border border-border p-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group">
              <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-pink-500 transition-colors" />
              <span className="font-medium text-foreground">Instagram</span>
            </a>
          </div>
        </div>
      )
    },
    {
      id: "contact",
      label: "Contact",
      content: (
        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
          <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="h-6 w-6 mt-1 text-primary" />
              <div>
                <span className="block font-bold text-foreground">Shop Address</span>
                <span className="text-muted-foreground">Thane 400605, Maharashtra, India</span>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <span className="block font-bold text-foreground">Phone</span>
                <span className="text-muted-foreground">+91 9653123705</span>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <span className="block font-bold text-foreground">Email</span>
                <span className="text-muted-foreground">yashbondre092@gmail.com</span>
              </div>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    // 1. WRAPPER: bg-muted for slight contrast from page body
    <footer className="mt-20 border-t border-border bg-muted/30">
      <div className="flex flex-col md:flex-row h-[500px]">
        
        {/* --- LEFT COLUMN: NAVIGATION --- */}
        {/* Uses 'bg-card' to look like a sidebar panel */}
        <div className="w-full md:w-1/3 bg-card flex flex-col pt-10 relative border-r border-border">
           {sections.map((section) => {
             const isActive = activeTab === section.id;
             return (
               <button
                 key={section.id}
                 onClick={() => setActiveTab(section.id)}
                 className={cn(
                   "group relative flex items-center justify-between w-full px-8 py-6 text-left transition-all duration-300 outline-none",
                   // DEFAULT: Muted text
                   "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                   
                   // ACTIVE STATE: 
                   // - Uses PRIMARY color (Orange/Neon) for high impact
                   isActive && "bg-primary text-primary-foreground shadow-md md:w-[calc(100%+1px)] z-10" 
                 )}
               >
                 <span className="text-lg font-semibold tracking-wide">{section.label}</span>
                 <ChevronRight 
                    className={cn(
                      "h-5 w-5 transition-transform duration-300",
                      isActive ? "text-primary-foreground rotate-90 md:rotate-0" : "opacity-40"
                    )} 
                  />
               </button>
             );
           })}
        </div>

        {/* --- RIGHT COLUMN: DISPLAY BOX --- */}
        {/* Uses 'bg-muted' (Gray Area) or keep 'bg-background' */}
        <div className="w-full md:w-2/3 bg-muted/50 text-foreground p-10 md:p-16 flex items-center relative overflow-hidden">
           
           {/* Glow Effect: Matches primary color now */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

           <div className="w-full relative z-10">
              {sections.find(s => s.id === activeTab)?.content}
           </div>
        </div>

      </div>

      {/* COPYRIGHT STRIP */}
      <div className="bg-card text-muted-foreground py-6 text-center text-sm border-t border-border">
        © 2025 TechHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;