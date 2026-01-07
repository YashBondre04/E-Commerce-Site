import { Badge } from "@/components/ui/badge";
import ProductCard from './ProductCard'; // Import the single card

const FeaturedSection = () => {
  // Mock Data
  const products = [
     { id: 1, title: "RTX 4090", price: 1599, rating: 4.9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFVxU_ng9DRm7wgPxo5fPdgGfTmVjuH2mSA&s" },
     { id: 2, title: "Intel i9-14900K", price: 599, rating: 4.8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFVxU_ng9DRm7wgPxo5fPdgGfTmVjuH2mSA&s" },
     { id: 3, title: "Samsung 990 Pro", price: 169, rating: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFVxU_ng9DRm7wgPxo5fPdgGfTmVjuH2mSA&s" },
     { id: 4, title: "Corsair 32GB RAM", price: 129, rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFVxU_ng9DRm7wgPxo5fPdgGfTmVjuH2mSA&s" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Featured Components</h2>
        <Badge variant="secondary" className="text-sm px-3 py-1">Top Picks</Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
           <ProductCard 
             key={product.id}
             title={product.title}
             price={product.price}
             image={product.image}
             rating={product.rating}
           />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;