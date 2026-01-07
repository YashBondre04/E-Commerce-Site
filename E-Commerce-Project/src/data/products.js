// src/data/products.js

// --- HELPER: Random Number Generator ---
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(1);

// --- HELPER: Image Generator (Uses Placehold.co for clear, labeled placeholders) ---
// Once you have real images, you can change this function to return "/products/category-id.jpg"
const getImage = (category, name) => {
  const encodedText = encodeURIComponent(name.split(" ").slice(0, 3).join(" ")); // Shorten text
  // Color coding by category for visual distinction
  const colors = {
    cpu: "2563EB", // Blue
    gpu: "7C3AED", // Purple
    motherboard: "475569", // Slate
    ram: "16A34A", // Green
    storage: "EA580C", // Orange
    monitor: "0891B2", // Cyan
    peripheral: "DB2777", // Pink
    case: "000000", // Black
    laptop: "2563EB"
  };
  const color = colors[category] || "555555";
  return `https://placehold.co/400x400/${color}/FFFFFF/png?text=${encodedText}`;
};

// --- DATA LISTS ---
const BRANDS = {
  cpu: ["Intel", "AMD"],
  gpu: ["NVIDIA", "AMD", "ASUS", "MSI", "Gigabyte"],
  motherboard: ["ASUS", "MSI", "Gigabyte", "ASRock"],
  ram: ["Corsair", "G.Skill", "Kingston", "Crucial"],
  storage: ["Samsung", "Western Digital", "Seagate", "Crucial"],
  monitor: ["LG", "Samsung", "Dell", "ASUS", "Acer"],
  peripheral: ["Logitech", "Razer", "Corsair", "SteelSeries"],
  case: ["NZXT", "Lian Li", "Corsair", "Fractal Design"],
  laptop: ["Dell", "HP", "Lenovo", "ASUS", "Apple"]
};

const SERIES = {
  cpu: ["Core i9", "Core i7", "Core i5", "Ryzen 9", "Ryzen 7", "Ryzen 5"],
  gpu: ["RTX 4090", "RTX 4080", "RTX 4070", "RX 7900 XTX", "RX 7800 XT"],
  motherboard: ["ROG Maximus", "TUF Gaming", "MAG Tomahawk", "Aorus Elite", "Prime"],
  ram: ["Vengeance", "Trident Z", "Fury", "Ballistix"],
  storage: ["990 Pro", "SN850X", "FireCuda", "MX500"],
  monitor: ["UltraGear", "Odyssey", "Alienware", "Predator", "ProArt"],
  peripheral: ["MX Master", "DeathAdder", "K70", "Arctis", "BlackWidow"],
  case: ["H9 Flow", "O11 Dynamic", "4000D", "North"],
  laptop: ["XPS 15", "Spectre x360", "ThinkPad X1", "Zephyrus G14", "MacBook Pro"]
};

// --- GENERATOR FUNCTION ---
const generateProducts = () => {
  const products = [];
  let idCounter = 1;

  // 1. CPUs (15 items)
  for (let i = 0; i < 15; i++) {
    const brand = BRANDS.cpu[i % 2];
    const series = SERIES.cpu[i % 6];
    const model = `${brand} ${series}-${random(12, 14)}00${i % 2 === 0 ? 'K' : 'X'}`;
    
    products.push({
      id: idCounter++,
      category: "cpu",
      type: "work", // CPUs are versatile
      title: model,
      price: random(200, 700),
      rating: randomFloat(4.0, 5.0),
      image: getImage("cpu", model),
      sale: i % 5 === 0 ? 10 : null,
      specs: {
        "Cores": random(6, 24),
        "Threads": random(12, 32),
        "Socket": brand === "Intel" ? "LGA1700" : "AM5"
      },
      description: `High-performance ${brand} processor optimized for gaming and productivity.`
    });
  }

  // 2. GPUs (15 items)
  for (let i = 0; i < 15; i++) {
    const brand = BRANDS.gpu[random(0, 4)];
    const series = SERIES.gpu[i % 5];
    const model = `${brand} ${series} OC Edition`;

    products.push({
      id: idCounter++,
      category: "gpu",
      type: "gaming",
      title: model,
      price: random(400, 1600),
      rating: randomFloat(4.5, 5.0),
      image: getImage("gpu", model),
      sale: null,
      specs: {
        "VRAM": `${random(8, 24)}GB`,
        "Clock Speed": `${randomFloat(2.0, 3.0)} GHz`,
        "Fans": random(2, 3)
      },
      description: "Experience ultra-realistic ray tracing and high frame rates with this flagship GPU."
    });
  }

  // 3. Motherboards (10 items)
  for (let i = 0; i < 10; i++) {
    const brand = BRANDS.motherboard[i % 4];
    const series = SERIES.motherboard[i % 5];
    const model = `${brand} ${series} Z${random(6, 7)}90 Wifi`;

    products.push({
      id: idCounter++,
      category: "motherboard",
      type: "work",
      title: model,
      price: random(150, 500),
      rating: randomFloat(4.2, 4.9),
      image: getImage("motherboard", model),
      specs: {
        "Form Factor": "ATX",
        "Socket": "LGA1700",
        "DDR5 Slots": 4
      }
    });
  }

  // 4. RAM (10 items)
  for (let i = 0; i < 10; i++) {
    const brand = BRANDS.ram[i % 4];
    const series = SERIES.ram[i % 4];
    const size = [16, 32, 64][random(0, 2)];
    const model = `${brand} ${series} ${size}GB DDR5`;

    products.push({
      id: idCounter++,
      category: "ram",
      type: "gaming",
      title: model,
      price: random(80, 300),
      rating: randomFloat(4.5, 5.0),
      image: getImage("ram", model),
      specs: {
        "Capacity": `${size}GB`,
        "Speed": `${random(5200, 7200)}MHz`,
        "RGB": i % 2 === 0 ? "Yes" : "No"
      }
    });
  }

  // 5. Storage (10 items)
  for (let i = 0; i < 10; i++) {
    const brand = BRANDS.storage[i % 4];
    const series = SERIES.storage[i % 4];
    const size = [1, 2, 4][random(0, 2)];
    const model = `${brand} ${series} ${size}TB NVMe SSD`;

    products.push({
      id: idCounter++,
      category: "storage",
      type: "work",
      title: model,
      price: random(70, 400),
      rating: randomFloat(4.7, 5.0),
      image: getImage("storage", model),
      specs: {
        "Capacity": `${size}TB`,
        "Read Speed": `${random(3500, 7500)} MB/s`,
        "Interface": "PCIe Gen4"
      }
    });
  }

  // 6. Monitors (15 items)
  for (let i = 0; i < 15; i++) {
    const brand = BRANDS.monitor[i % 5];
    const series = SERIES.monitor[i % 5];
    const size = [24, 27, 32, 34][random(0, 3)];
    const model = `${brand} ${series} ${size}" Gaming Monitor`;

    products.push({
      id: idCounter++,
      category: "monitor",
      type: i % 2 === 0 ? "gaming" : "work",
      title: model,
      price: random(200, 1200),
      rating: randomFloat(4.3, 4.9),
      image: getImage("monitor", model),
      sale: i % 4 === 0 ? 15 : null,
      specs: {
        "Resolution": size > 27 ? "4K UHD" : "1440p QHD",
        "Refresh Rate": i % 2 === 0 ? "144Hz" : "60Hz",
        "Panel": "IPS"
      }
    });
  }

  // 7. Peripherals (20 items - Mice, Keyboards, Headsets)
  const pTypes = ["Mouse", "Keyboard", "Headset"];
  for (let i = 0; i < 20; i++) {
    const brand = BRANDS.peripheral[i % 4];
    const type = pTypes[i % 3];
    const series = SERIES.peripheral[i % 5];
    const model = `${brand} ${series} Pro ${type}`;

    products.push({
      id: idCounter++,
      category: "peripheral",
      type: "gaming",
      title: model,
      price: random(50, 250),
      rating: randomFloat(4.0, 4.8),
      image: getImage("peripheral", model),
      specs: {
        "Connectivity": i % 2 === 0 ? "Wireless" : "Wired",
        "Color": "Black",
        "RGB": "Yes"
      }
    });
  }

   // 8. Cases (10 items)
   for (let i = 0; i < 10; i++) {
    const brand = BRANDS.case[i % 4];
    const series = SERIES.case[i % 4];
    const model = `${brand} ${series} ATX Case`;

    products.push({
      id: idCounter++,
      category: "case",
      type: "gaming",
      title: model,
      price: random(90, 250),
      rating: randomFloat(4.5, 4.9),
      image: getImage("case", model),
      specs: {
        "Form Factor": "Mid Tower",
        "Fans Included": random(2, 4),
        "Side Panel": "Tempered Glass"
      }
    });
  }

  // 9. Laptops (15 items)
  for (let i = 0; i < 15; i++) {
    const brand = BRANDS.laptop[i % 5];
    const series = SERIES.laptop[i % 5];
    const model = `${brand} ${series} 2026 Edition`;

    products.push({
      id: idCounter++,
      category: "laptop",
      type: i % 2 === 0 ? "work" : "gaming",
      title: model,
      price: random(900, 3000),
      rating: randomFloat(4.4, 5.0),
      image: getImage("laptop", model),
      sale: i % 6 === 0 ? 200 : null,
      specs: {
        "CPU": "Latest Gen Core i7/Ryzen 7",
        "RAM": "16GB/32GB",
        "Screen": "14-inch / 16-inch Retina/OLED"
      }
    });
  }

  return products;
};

export const products = generateProducts();