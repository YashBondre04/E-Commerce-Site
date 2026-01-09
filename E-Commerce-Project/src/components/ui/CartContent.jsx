import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, Trash2, Plus, Minus, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SheetClose } from "@/components/ui/sheet"; // Import SheetClose to close drawer
import { 
  removeItemFromCart, 
  decrementItem, 
  addItemToCart, 
  selectCartItems, 
  selectCartTotalAmount 
} from "../../features/cart/cartSlice";

const CartContents = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);

  // --- EMPTY STATE UI ---
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
        <div className="bg-muted/50 p-6 rounded-full">
           <ShoppingCart className="h-12 w-12 text-muted-foreground/50" />
        </div>
        <div className="space-y-2">
           <h3 className="text-lg font-semibold text-foreground">Your cart is empty</h3>
           <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">
             Looks like you haven't added anything to your cart yet.
           </p>
        </div>
        <SheetClose asChild>
          <Button variant="outline" className="min-w-[150px]">Start Shopping</Button>
        </SheetClose>
      </div>
    );
  }

  // --- FILLED STATE UI ---
  return (
    <div className="flex flex-col h-full">
      {/* SCROLLABLE LIST */}
      <div className="flex-1 overflow-y-auto -mx-4 px-4 py-4 space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 group">
            
            {/* Product Image */}
            <div className="h-20 w-20 rounded-md bg-muted/50 border border-border overflow-hidden flex-shrink-0 flex items-center justify-center">
              <img 
                src={item.image} 
                alt={item.title} 
                className="h-full w-full object-contain mix-blend-multiply dark:mix-blend-normal p-2" 
              />
            </div>
            
            {/* Details */}
            <div className="flex-1 flex flex-col justify-between py-1">
              <div className="flex justify-between items-start gap-2">
                <h4 className="font-semibold text-sm line-clamp-2 leading-tight text-foreground">
                  {item.title}
                </h4>
                {/* Remove Button */}
                <button 
                  onClick={() => dispatch(removeItemFromCart(item.id))}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="flex justify-between items-end">
                <p className="text-sm font-medium text-muted-foreground">${item.price}</p>
                
                {/* Quantity Controls */}
                <div className="flex items-center gap-1 bg-muted/50 rounded-md border border-border p-1">
                   <Button 
                     variant="ghost" size="icon-xs" className="h-6 w-6 rounded-sm bg-background shadow-sm hover:bg-accent" 
                     onClick={() => dispatch(decrementItem(item.id))}
                   >
                     <Minus className="h-3 w-3" />
                   </Button>
                   <span className="text-xs font-semibold w-6 text-center tabular-nums">
                     {item.quantity}
                   </span>
                   <Button 
                     variant="ghost" size="icon-xs" className="h-6 w-6 rounded-sm bg-background shadow-sm hover:bg-accent"
                     onClick={() => dispatch(addItemToCart(item))}
                   >
                     <Plus className="h-3 w-3" />
                   </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="pt-6 mt-auto bg-background">
        <Separator className="mb-4" />
        <div className="space-y-1.5 mb-6">
           <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium text-foreground">${totalAmount.toFixed(2)}</span>
           </div>
           <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium text-green-600">Free</span>
           </div>
           <div className="flex justify-between items-center text-lg font-bold pt-2">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
           </div>
        </div>
        <Button className="w-full text-lg py-6 shadow-lg shadow-primary/20">
          Checkout Now
        </Button>
      </div>
    </div>
  );
};

export default CartContents;