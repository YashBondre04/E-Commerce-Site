import React from 'react';
import { Star, Truck, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductListItem = ({ title, price, image, rating, specs, sale }) => {
  return (
    // 1. CONTAINER: Flex row for desktop, Column for mobile
    <div className="group flex flex-col md:flex-row gap-6 p-6 border border-border rounded-lg bg-card hover:border-primary/50 transition-all">
      
      {/* 2. IMAGE SECTION (Left) */}
      <div className="w-full md:w-64 flex-shrink-0 bg-muted/30 rounded-md p-4 flex items-center justify-center">
        <img src={image} alt={title} className="h-40 w-auto object-contain mix-blend-multiply dark:mix-blend-normal" />
      </div>

      {/* 3. CONTENT SECTION (Middle) */}
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {sale && <Badge className="bg-destructive text-destructive-foreground">-{sale}% Deal</Badge>}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
           <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
           <span className="text-sm font-medium text-foreground">{rating}</span>
           <span className="text-sm text-muted-foreground">(1,204 reviews)</span>
        </div>

        {/* Specs List */}
        <div className="mt-2 space-y-1">
          {specs && Object.entries(specs).map(([key, value]) => (
            <div key={key} className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground capitalize">{key}: </span> {value}
            </div>
          ))}
        </div>
      </div>

      {/* 4. PRICE & ACTION SECTION (Right) */}
      <div className="w-full md:w-48 flex-shrink-0 flex flex-col gap-4 border-l border-border pl-0 md:pl-6 pt-4 md:pt-0">
        <div>
          <span className="text-2xl font-bold text-foreground block">${price}</span>
          {sale && (
            <span className="text-sm text-muted-foreground line-through">
              ${(price * 1.2).toFixed(2)}
            </span>
          )}
        </div>

        <div className="space-y-1">
           <div className="flex items-center gap-2 text-sm text-muted-foreground">
             <Truck className="h-4 w-4" /> 
             <span>Free Delivery</span>
           </div>
           <div className="flex items-center gap-2 text-sm text-emerald-500">
             <Check className="h-4 w-4" /> 
             <span>In Stock</span>
           </div>
        </div>

        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductListItem;