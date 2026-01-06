export interface MenuItem {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
  tag?: string;
  featured: boolean;
}

export const menuItems: MenuItem[] = [
  // --- CAFETERÍA ---
  {
    id: 1,
    title: "Cappuccino Italiano",
    price: "$2.500",
    description: "Espresso doble con leche texturizada y cacao.",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
    category: "Cafetería",
    tag: "Caliente",
    featured: true, // Saldrá en la portada
  },
  {
    id: 2,
    title: "Latte Vainilla",
    price: "$2.800",
    description: "Suave mezcla de café, leche y jarabe de vainilla artesanal.",
    image:
      "https://images.unsplash.com/photo-1570968992193-96a2927406a1?q=80&w=800&auto=format&fit=crop",
    category: "Cafetería",
    featured: false,
  },

  // --- BEBIDAS FRÍAS / VERANO ---
  {
    id: 3,
    title: "Mote con Huesillo (500cc)",
    price: "$3.000",
    description:
      "El rey del parque. Jugo acaramelado, trigo mote y huesillo carnoso.",
    image:
      "https://images.unsplash.com/photo-1621354366914-f584e031c518?q=80&w=800&auto=format&fit=crop",
    category: "Bebidas Frías",
    tag: "Refrescante",
    featured: true,
  },
  {
    id: 4,
    title: "Iced Coffee Caramelo",
    price: "$3.200",
    description: "Café frío con hielo, leche y salsa de caramelo.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b5c7355c?q=80&w=800&auto=format&fit=crop",
    category: "Bebidas Frías",
    featured: false,
  },

  // --- DULCES / PASTELERÍA ---
  {
    id: 5,
    title: "Alfajor de Maicena",
    price: "$1.200",
    description: "Relleno generoso de manjar y coco rallado.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    category: "Pastelería",
    tag: "Dulce",
    featured: true,
  },
  {
    id: 6,
    title: "Kuchen de Nuez",
    price: "$2.500",
    description: "Trozo de kuchen sureño con nueces y leche condensada.",
    image:
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
    category: "Pastelería",
    featured: false,
  },

  // --- SALADOS ---
  {
    id: 7,
    title: "Sandwich Ave Palta",
    price: "$3.500",
    description: "En pan ciabatta o amasado, con mayo casera.",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e3321175?q=80&w=800&auto=format&fit=crop",
    category: "Salados",
    featured: false,
  },
];
