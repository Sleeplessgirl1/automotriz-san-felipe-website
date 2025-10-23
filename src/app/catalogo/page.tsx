"use client";

import { useState } from "react";
import { vehicles, Vehicle } from "@/lib/vehicles-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, Fuel, Gauge, Palette, Settings } from "lucide-react";
import Image from "next/image";

const categories = ["Todos", "Sedan", "Deportivo", "Pick Up", "Minivan", "SUV", "RZR"];

export default function CatalogoPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const filteredVehicles =
    selectedCategory === "Todos"
      ? vehicles
      : vehicles.filter((v) => v.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#0b2241] mb-4">
            Nuestro Catálogo
          </h1>
          <p className="text-xl text-gray-600">
            Explora nuestra amplia selección de vehículos
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-[#ff4411] hover:bg-[#ff5522] text-white"
                  : "border-[#0b2241] text-[#0b2241] hover:bg-[#0b2241] hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVehicles.map((vehicle) => (
            <Card
              key={vehicle.id}
              className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => setSelectedVehicle(vehicle)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-[#ff4411] text-white">
                  {vehicle.category}
                </Badge>
              </div>
              <CardContent className="pt-4">
                <h3 className="font-bold text-xl text-[#0b2241] mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{vehicle.year}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#ff4411]">
                    {vehicle.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-[#0b2241] hover:bg-[#1a3a5f] text-white"
                  >
                    Ver Detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              No se encontraron vehículos en esta categoría
            </p>
          </div>
        )}
      </div>

      {/* Vehicle Details Modal */}
      <Dialog open={!!selectedVehicle} onOpenChange={() => setSelectedVehicle(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedVehicle && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-[#0b2241]">
                  {selectedVehicle.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-[#ff4411] text-white text-lg px-4 py-2">
                    {selectedVehicle.category}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-[#ff4411]">
                    {selectedVehicle.price}
                  </span>
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    {selectedVehicle.year}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                    <Calendar className="h-5 w-5 text-[#ff4411]" />
                    <div>
                      <p className="text-xs text-gray-600">Año</p>
                      <p className="font-semibold">{selectedVehicle.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                    <Settings className="h-5 w-5 text-[#ff4411]" />
                    <div>
                      <p className="text-xs text-gray-600">Transmisión</p>
                      <p className="font-semibold text-sm">{selectedVehicle.transmission}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                    <Fuel className="h-5 w-5 text-[#ff4411]" />
                    <div>
                      <p className="text-xs text-gray-600">Combustible</p>
                      <p className="font-semibold">{selectedVehicle.fuel}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                    <Gauge className="h-5 w-5 text-[#ff4411]" />
                    <div>
                      <p className="text-xs text-gray-600">Kilometraje</p>
                      <p className="font-semibold text-sm">{selectedVehicle.mileage}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                  <Palette className="h-5 w-5 text-[#ff4411]" />
                  <div>
                    <p className="text-sm text-gray-600">Color</p>
                    <p className="font-semibold text-lg">{selectedVehicle.color}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-xl text-[#0b2241] mb-3">
                    Características
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedVehicle.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-[#ff4411] rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#0b2241] to-[#1a3a5f] text-white p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">¿Interesado?</h4>
                  <p className="mb-4">
                    Contáctanos para más información o para agendar una prueba de manejo
                  </p>
                  <Button
                    size="lg"
                    className="bg-[#ff4411] hover:bg-[#ff5522] text-white w-full md:w-auto"
                  >
                    Contactar Ahora
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
