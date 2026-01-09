import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from '@/components/ui/mode-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { cn } from "@/lib/utils";
import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import CartContents from "@/components/ui/CartContent";

const Header = () => {
  return (
    // 1. CONTAINER: Uses 'bg-background' and 'border-border' for automatic theme switching
    <header 
    className="sticky flex top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between ml-2 px-4 gap-6">
        
        {/* LOGO SECTION */}
        <a href="/" className="flex mr-10 items-center gap-2">
          <img 
            src="/LogoDark.png" 
            alt="TechHub Logo" 
            className="h-10 w-12 mr-[4px]" 
          />
          {/* 2. TEXT: Uses 'text-foreground' (Charcoal in Light, White in Dark) */}
          <span className="text-xl font-bold tracking-tight mt-1 text-foreground">
            TechHub
          </span>
        </a>

        {/* --- NAVIGATION MENU START --- */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>

              <NavigationMenuItem>
                {/* 3. LINKS: Uses 'text-foreground' and hover 'bg-accent' */}
                <a href="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground")}>
                  Home
                </a>
              </NavigationMenuItem>
              
              {/* --- DROPDOWN 1: COMPONENTS --- */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground">
                  Components
                </NavigationMenuTrigger>
                
                {/* 4. DROPDOWN BODY: Uses 'bg-popover' (White / Gunmetal) */}
                <NavigationMenuContent className="bg-popover border-border">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    
                    {/* LEFT COLUMN: FEATURED CARD */}
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex flex-col h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          to="/explore"
                        >
                          <img 
                            src="/LogoDark.png" 
                            alt="" 
                            className="h-10 w-12 mb-4" 
                          />
                          <div className="mb-2 text-lg font-medium text-foreground">
                            Explore!
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            High-performance components for your next dream build.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    {/* RIGHT COLUMN: THE LIST */}
                    <ListItem href="/shop/cpu" title="Processors" className="flex flex-col">
                        Intel Core & AMD Ryzen CPUs.
                    </ListItem>
                    <ListItem href="/shop/gpu" title="Graphics Cards" className="flex flex-col">
                      RTX 4090, 4080 & Radeon Series.
                    </ListItem>
                    <ListItem href="/shop/mobo" title="Motherboards" className="flex flex-col">
                      Z790, B650, and ITX Boards.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* --- DROPDOWN 2: PERIPHERALS --- */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground">
                  Peripherals
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover border-border">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <ListItem href="/shop/monitors" title="Monitors" className="flex flex-col">
                       4K, 1440p, and OLED Panels.
                    </ListItem>
                    <ListItem href="/shop/keyboards" title="Keyboards" className="flex flex-col">
                      Mechanical switches & custom caps.
                    </ListItem>
                    <ListItem href="/shop/keyboards" title="More!" className="flex flex-col w-full">
                      Mice, Headsets, and Accessories.....
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/PCBuilder" 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground")}
                  >
                  PC Builder
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 5. SEARCH BAR: Uses 'bg-muted' and Neon 'ring-ring' */}
        <div className="flex-1 max-w-xl ml-4 relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search parts..." 
            className="pl-9 bg-muted/50 border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
          />
        </div>

        {/* UTILS */}
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-foreground hover:bg-accent">
            <Heart className="h-5 w-5" />
          </Button>
          
          {/* CART: Uses Brand Color (Primary) for badge? Optional. */}
          <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="relative text-foreground hover:text-accent-foreground hover:bg-accent border-border">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
          </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-md bg-card border-border">
             {/*<SheetHeader>
              <SheetTitle className="text-foreground">Welcome Back!</SheetTitle>
              <SheetDescription className="text-muted-foreground">
                Please log in to access your account and manage your orders.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              <Input type="email" placeholder="Email" className="mb-4 bg-muted border-input text-foreground" />
              <Input type="password" placeholder="Password" className="mb-4 bg-muted border-input text-foreground" />
              
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Log In</Button>
              <Button variant="ghost" className="w-full mt-2 text-muted-foreground hover:text-foreground">Forgot Password?</Button>
            </div>
            <SheetFooter>
              <Link to="/RegisterPage">
              <Button variant="ghost" className="w-full mt-2 text-muted-foreground hover:text-foreground">Create an Account</Button>
              </Link>
            </SheetFooter>  */}
            <CartContents />
          </SheetContent>
        </Sheet>
          
        </div>
      </div>

      <div className='flex items-center justify-end mb-2 mr-10 gap-2'>
        
        {/* THEME TOGGLE */}
        <ModeToggle />

        {/* ACCOUNT SHEET */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground text-foreground border-border">
              <User className="mr-2 h-4 w-4" />
              Account
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-md bg-card border-border backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
            <SheetHeader>
              <SheetTitle className="text-foreground">Welcome Back!</SheetTitle>
              <SheetDescription className="text-muted-foreground">
                Please log in to access your account and manage your orders.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              <Input type="email" placeholder="Email" className="mb-4 bg-muted border-input text-foreground" />
              <Input type="password" placeholder="Password" className="mb-4 bg-muted border-input text-foreground" />
              {/* PRIMARY BUTTON: Orange/Neon */}
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Log In</Button>
              <Button variant="ghost" className="w-full mt-2 text-muted-foreground hover:text-foreground">Forgot Password?</Button>
            </div>
            <SheetFooter>
              <Link to="/RegisterPage">
              <Button variant="ghost" className="w-full mt-2 text-muted-foreground hover:text-foreground">Create an Account</Button>
              </Link>
            </SheetFooter> 
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

// --- HELPER COMPONENT (UPDATED FOR THEME) ---
const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            // DEFAULT: Transparent BG, Muted Text
            // HOVER: Accent BG, Accent Text (Dark text in light mode, White text in dark mode)
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-foreground">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;