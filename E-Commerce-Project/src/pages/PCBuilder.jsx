import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Box, CheckCircle2, Cpu, Gamepad2, HardDrive, Plus, Zap } from 'lucide-react';
import React from 'react';

const PCBuilder = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      
      {/* 1. PAGE HEADER */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl font-bold text-foreground">Custom PC Builder</h1>
        <p className="text-muted-foreground mt-2">
          Select components to build your dream machine. We ensure everything fits.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. LEFT COLUMN: THE COMPONENT SLOTS */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* Active/Filled Slot Example */}
          <BuilderSlot 
            icon={<Cpu />} 
            label="Processor" 
            status="filled"
            partName="Intel Core i9-14900K"
            price="$599.00"
            image="https://images.unsplash.com/photo-1591488320449-011701bb6704?w=200&q=80"
          />

          {/* Empty Slot Examples */}
          <BuilderSlot icon={<Box />} label="Motherboard" />
          <BuilderSlot icon={<Gamepad2 />} label="Graphics Card" />
          <BuilderSlot icon={<HardDrive />} label="Memory (RAM)" />
          <BuilderSlot icon={<HardDrive />} label="Storage (SSD)" />
          <BuilderSlot icon={<Zap />} label="Power Supply" />
          <BuilderSlot icon={<Box />} label="PC Case" />
        
        </div>

        {/* 3. RIGHT COLUMN: SUMMARY CARD */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card className="border-border shadow-sm">
              <CardHeader className="bg-muted/40 pb-4">
                <CardTitle>Build Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                
                {/* Visual Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Progress</span>
                    <span>1/7 Parts</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[14%] rounded-full" />
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Base Price</span>
                    <span>$599.00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Build Fee</span>
                    <span>$99.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-xl font-bold text-foreground">
                    <span>Total</span>
                    <span>$698.00</span>
                  </div>
                </div>

                <Button className="w-full" size="lg" disabled>
                   Complete Build to Checkout
                </Button>

                {/* Compatibility Badge */}
                <div className="flex items-center justify-center gap-2 text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 py-2 rounded border border-emerald-100 dark:border-emerald-800">
                  <CheckCircle2 className="h-4 w-4" /> 
                  Compatible so far
                </div>

              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- REUSABLE COMPONENT: THE SLOT ---
const BuilderSlot = ({ icon, label, status = "empty", partName, price, image }) => {
  return (
    <div className={`
      relative group flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl border transition-all duration-200
      ${status === 'filled' 
        ? 'bg-card border-primary/50 shadow-sm' 
        : 'bg-card border-border border-dashed hover:border-primary/50 hover:bg-accent/50'}
    `}>
      
      {/* Icon Area */}
      <div className={`
        flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center
        ${status === 'filled' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}
      `}>
        {React.cloneElement(icon, { size: 24 })}
      </div>

      {/* Content Area */}
      <div className="flex-1 text-center sm:text-left w-full">
        {status === 'filled' ? (
          // FILLED STATE
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <img src={image} alt={partName} className="h-10 w-10 object-cover rounded bg-white hidden sm:block" />
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
                <h4 className="font-bold text-foreground text-sm sm:text-base">{partName}</h4>
              </div>
            </div>
            <div className="text-right">
              <span className="block font-bold text-primary">{price}</span>
              <Button variant="link" size="sm" className="h-auto p-0 text-muted-foreground hover:text-destructive text-xs">
                Remove
              </Button>
            </div>
          </div>
        ) : (
          // EMPTY STATE
          <div className="flex justify-between items-center w-full">
            <div>
               <h4 className="font-semibold text-foreground">{label}</h4>
               <p className="text-sm text-muted-foreground hidden sm:block">No part selected</p>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Plus className="h-4 w-4" /> Select
            </Button>
          </div>
        )}
      </div>

    </div>
  );
};

export default PCBuilder;