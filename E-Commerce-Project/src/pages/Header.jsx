import React, { useState } from 'react'
import { ShoppingCart, Menu, Search, User, ShoppingBag } from 'lucide-react';

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import TechCartLogo from '../components/ui/logo';
import { List, NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';

function Header() {
  return (
    <header className='sticky position-absolute top-0 z-50 bg-gray-150 shadow-md flex items-center justify-between p-4 border-b border-slate-200 '>
      {/* Logo */}
      <div className='flex justify-space-between'>
      <img src="/LogoDark.png" alt="TechHub Logo" className="h-10 w-12 mr-4px" />
      <span className='ml-3 font-bold text-2xl text-blue-900'>TechHub</span>
      </div>

      {/* Search Bar */}
      <div className='flex items-center'>
      <input type="search" placeholder="Search" className="border border-gray-600 rounded-md p-2" />
      <Search className="color-white ml-2"/>
      </div>

      {/* Nav Icons */}
      <div>
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">

          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="ml-3 font-bold text-m text-blue-900">About Us</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="ml-3 bg-white font-bold text-m text-blue-900">Categories</NavigationMenuTrigger>
            <NavigationMenuContent className=" border-zinc-800">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <listitem href="" title="Accessories">Accessories</listitem>
                
              </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem></NavigationMenuItem>

          <NavigationMenuItem></NavigationMenuItem>


        </NavigationMenuList>
      </NavigationMenu>
      </div>

      {/* User Profile Side bar */}
      <div>
        
      </div>
    </header>
  );
}

export default Header