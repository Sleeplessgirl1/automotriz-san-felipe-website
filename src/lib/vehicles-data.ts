export type Vehicle = {
  id: string;
  name: string;
  category: "Sedan" | "Deportivo" | "Pick Up" | "Minivan" | "SUV" | "RZR";
  year: number;
  price: string;
  image: string;
  transmission: string;
  fuel: string;
  mileage: string;
  color: string;
  features: string[];
};

export const vehicles: Vehicle[] = [
  // Sedans
  {
    id: "1",
    name: "Honda Civic",
    category: "Sedan",
    year: 2022,
    price: "$385,000",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "15,000 km",
    color: "Plata",
    features: ["Aire Acondicionado", "Sistema de Audio", "Cámara Reversa", "Control Crucero"]
  },
  {
    id: "2",
    name: "Toyota Corolla",
    category: "Sedan",
    year: 2023,
    price: "$420,000",
    image: "https://images.unsplash.com/photo-1623869675781-80aa31cadc88?w=800",
    transmission: "Automática",
    fuel: "Híbrido",
    mileage: "8,000 km",
    color: "Negro",
    features: ["Pantalla Táctil", "Sensores de Estacionamiento", "Asientos de Piel", "Sistema de Navegación"]
  },
  {
    id: "3",
    name: "Mazda 3",
    category: "Sedan",
    year: 2021,
    price: "$350,000",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800",
    transmission: "Manual",
    fuel: "Gasolina",
    mileage: "22,000 km",
    color: "Rojo",
    features: ["Bluetooth", "Puerto USB", "Llantas de Aleación", "Volante Multifuncional"]
  },
  {
    id: "4",
    name: "Nissan Versa",
    category: "Sedan",
    year: 2022,
    price: "$295,000",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "18,000 km",
    color: "Blanco",
    features: ["Aire Acondicionado", "Cierre Centralizado", "Dirección Asistida", "Faros LED"]
  },
  {
    id: "5",
    name: "Volkswagen Jetta",
    category: "Sedan",
    year: 2023,
    price: "$440,000",
    image: "https://images.unsplash.com/photo-1622998698400-6b5f0f381b72?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "5,000 km",
    color: "Azul",
    features: ["Techo Solar", "Asientos Calefaccionados", "Apple CarPlay", "Sistema de Sonido Premium"]
  },

  // Deportivos
  {
    id: "6",
    name: "Ford Mustang",
    category: "Deportivo",
    year: 2021,
    price: "$680,000",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5f5017e0c?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "12,000 km",
    color: "Amarillo",
    features: ["Motor V8", "Escape Deportivo", "Frenos Brembo", "Modo Sport"]
  },
  {
    id: "7",
    name: "Chevrolet Camaro",
    category: "Deportivo",
    year: 2022,
    price: "$720,000",
    image: "https://images.unsplash.com/photo-1552519507-b8b99eb87049?w=800",
    transmission: "Manual",
    fuel: "Gasolina",
    mileage: "8,500 km",
    color: "Negro",
    features: ["Suspensión Deportiva", "Asientos Deportivos", "Display Digital", "Rines 20\""]
  },
  {
    id: "8",
    name: "Mazda MX-5",
    category: "Deportivo",
    year: 2023,
    price: "$550,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    transmission: "Manual",
    fuel: "Gasolina",
    mileage: "3,000 km",
    color: "Rojo",
    features: ["Techo Convertible", "Asientos de Piel", "Sistema de Audio Bose", "Control de Tracción"]
  },
  {
    id: "9",
    name: "Subaru BRZ",
    category: "Deportivo",
    year: 2022,
    price: "$590,000",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800",
    transmission: "Manual",
    fuel: "Gasolina",
    mileage: "10,000 km",
    color: "Azul",
    features: ["Tracción Trasera", "Diferencial de Deslizamiento Limitado", "Pantalla Táctil", "Suspensión Ajustable"]
  },

  // Pick Ups
  {
    id: "10",
    name: "Ford F-150",
    category: "Pick Up",
    year: 2022,
    price: "$850,000",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "20,000 km",
    color: "Gris",
    features: ["Cabina Doble", "Caja de 6.5 pies", "4x4", "Remolque", "Asientos de Piel"]
  },
  {
    id: "11",
    name: "Chevrolet Silverado",
    category: "Pick Up",
    year: 2023,
    price: "$920,000",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
    transmission: "Automática",
    fuel: "Diesel",
    mileage: "12,000 km",
    color: "Blanco",
    features: ["Motor Duramax", "Sistema de Sonido Bose", "Pantalla de 13.4\"", "Cámara 360°"]
  },
  {
    id: "12",
    name: "Toyota Tacoma",
    category: "Pick Up",
    year: 2021,
    price: "$680,000",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "35,000 km",
    color: "Verde",
    features: ["TRD Off-Road", "Sistema de Crawl Control", "Suspensión Reforzada", "Ganchos de Remolque"]
  },
  {
    id: "13",
    name: "RAM 1500",
    category: "Pick Up",
    year: 2022,
    price: "$880,000",
    image: "https://images.unsplash.com/photo-1619976215249-0c068e33e2e7?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "18,000 km",
    color: "Negro",
    features: ["Sistema de Suspensión Neumática", "Pantalla Uconnect 12\"", "Asientos Ventilados", "Caja Rambox"]
  },
  {
    id: "14",
    name: "Nissan Frontier",
    category: "Pick Up",
    year: 2023,
    price: "$620,000",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "8,000 km",
    color: "Azul",
    features: ["PRO-4X", "Diferencial Trasero Bloqueado", "Skid Plates", "Sistema de Navegación"]
  },

  // Minivans
  {
    id: "15",
    name: "Honda Odyssey",
    category: "Minivan",
    year: 2022,
    price: "$720,000",
    image: "https://images.unsplash.com/photo-1570733577255-8d0c2ce4a43c?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "15,000 km",
    color: "Plata",
    features: ["8 Pasajeros", "Puertas Eléctricas", "Sistema de Entretenimiento", "Cámara Trasera"]
  },
  {
    id: "16",
    name: "Chrysler Pacifica",
    category: "Minivan",
    year: 2023,
    price: "$780,000",
    image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800",
    transmission: "Automática",
    fuel: "Híbrido",
    mileage: "10,000 km",
    color: "Blanco",
    features: ["Stow 'n Go", "Uconnect Theater", "Asientos de Cuero Nappa", "Techo Panorámico"]
  },
  {
    id: "17",
    name: "Toyota Sienna",
    category: "Minivan",
    year: 2022,
    price: "$750,000",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800",
    transmission: "Automática",
    fuel: "Híbrido",
    mileage: "12,000 km",
    color: "Gris",
    features: ["AWD", "7 u 8 Pasajeros", "Toyota Safety Sense", "Puerto HDMI"]
  },
  {
    id: "18",
    name: "Kia Carnival",
    category: "Minivan",
    year: 2023,
    price: "$680,000",
    image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "7,000 km",
    color: "Negro",
    features: ["Asientos VIP Lounge", "Pantallas Duales", "Refrigerador", "Techo Corredizo Doble"]
  },

  // SUVs
  {
    id: "19",
    name: "Honda CR-V",
    category: "SUV",
    year: 2022,
    price: "$560,000",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "18,000 km",
    color: "Azul",
    features: ["AWD", "Honda Sensing", "Techo Panorámico", "Asientos de Piel"]
  },
  {
    id: "20",
    name: "Toyota RAV4",
    category: "SUV",
    year: 2023,
    price: "$620,000",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
    transmission: "Automática",
    fuel: "Híbrido",
    mileage: "9,000 km",
    color: "Rojo",
    features: ["Toyota Safety Sense 2.5", "JBL Audio", "Cargador Inalámbrico", "Techo Solar"]
  },
  {
    id: "21",
    name: "Mazda CX-5",
    category: "SUV",
    year: 2022,
    price: "$580,000",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "14,000 km",
    color: "Blanco",
    features: ["Turbo", "Bose Sound System", "i-ACTIVSENSE", "Asientos Calefaccionados"]
  },
  {
    id: "22",
    name: "Jeep Grand Cherokee",
    category: "SUV",
    year: 2021,
    price: "$750,000",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "25,000 km",
    color: "Negro",
    features: ["4x4", "Sistema Quadra-Lift", "Uconnect 10.1\"", "Control de Descenso"]
  },
  {
    id: "23",
    name: "Ford Explorer",
    category: "SUV",
    year: 2023,
    price: "$820,000",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "6,000 km",
    color: "Gris",
    features: ["7 Pasajeros", "Co-Pilot360", "Bang & Olufsen Audio", "Asientos de Tercera Fila"]
  },
  {
    id: "24",
    name: "Chevrolet Tahoe",
    category: "SUV",
    year: 2022,
    price: "$1,150,000",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "15,000 km",
    color: "Azul",
    features: ["8 Pasajeros", "Suspensión Magnética", "Sistema 4WD", "Pantalla de 10\""]
  },
  {
    id: "25",
    name: "Hyundai Tucson",
    category: "SUV",
    year: 2023,
    price: "$520,000",
    image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "5,000 km",
    color: "Plata",
    features: ["SmartSense", "Pantalla Digital 12.3\"", "Techo Panorámico", "Carga USB-C"]
  },
  {
    id: "26",
    name: "Nissan Pathfinder",
    category: "SUV",
    year: 2022,
    price: "$690,000",
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "16,000 km",
    color: "Rojo",
    features: ["7 Pasajeros", "Sistema ProPILOT", "Asientos Quilted", "Tow Mode"]
  },

  // RZRs
  {
    id: "27",
    name: "Polaris RZR XP 1000",
    category: "RZR",
    year: 2022,
    price: "$480,000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    transmission: "Automática CVT",
    fuel: "Gasolina",
    mileage: "3,500 km",
    color: "Naranja",
    features: ["110 HP", "Suspensión FOX 2.5", "4 Plazas", "Jaula de Seguridad"]
  },
  {
    id: "28",
    name: "Can-Am Maverick X3",
    category: "RZR",
    year: 2023,
    price: "$580,000",
    image: "https://images.unsplash.com/photo-1603886483467-9471404e7fdc?w=800",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "1,800 km",
    color: "Amarillo",
    features: ["Turbo 172 HP", "FOX 3.0 Internal Bypass", "Smart-Lok", "Arcos de Neón"]
  },
  {
    id: "29",
    name: "Polaris RZR Pro XP",
    category: "RZR",
    year: 2022,
    price: "$620,000",
    image: "https://images.unsplash.com/photo-1616190297271-1380515a6d00?w=800",
    transmission: "Automática CVT",
    fuel: "Gasolina",
    mileage: "4,200 km",
    color: "Azul",
    features: ["181 HP ProStar", "Suspensión Dynamix DV", "RIDE COMMAND", "4 Asientos"]
  },
  {
    id: "30",
    name: "Yamaha YXZ1000R",
    category: "RZR",
    year: 2021,
    price: "$420,000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    transmission: "Manual 5 velocidades",
    fuel: "Gasolina",
    mileage: "6,000 km",
    color: "Negro",
    features: ["998cc 3-Cilindros", "Diferencial Bloqueado", "FOX Suspension", "Sport Mode"]
  },
  {
    id: "31",
    name: "Honda Talon 1000X",
    category: "RZR",
    year: 2023,
    price: "$550,000",
    image: "https://images.unsplash.com/photo-1603886483467-9471404e7fdc?w=800",
    transmission: "DCT Automática",
    fuel: "Gasolina",
    mileage: "2,100 km",
    color: "Rojo",
    features: ["999cc Unicam", "I-4WD", "FOX Live Valve", "Paddle Shifters"]
  }
];
