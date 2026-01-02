import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ title, price, image, rating, sale }) => {
  return (
    <Card className="border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col bg-white dark:bg-zinc-900">
      
      <div className="relative">
        {/* Sale Badge logic */}
        {sale && (
           <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">Sale</Badge>
        )}
        <img
          src={image} // Dynamic Image
          alt={title}
          className="h-48 w-full object-contain p-4 bg-slate-50 dark:bg-zinc-950 rounded-t-md"
        />
      </div>

      <CardContent className="p-4 flex-1">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
           High-performance part for your next build.
        </p>
        <div className="flex items-center mb-4">
          <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
          <span className="text-sm text-zinc-600 dark:text-zinc-400">{rating} out of 5</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-lg font-bold text-slate-900 dark:text-white">
          ${price}
        </span>
        <Button size="sm" className="flex items-center gap-2 bg-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-zinc-200">
          <ShoppingCart className="h-4 w-4" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;