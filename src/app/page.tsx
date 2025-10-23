"use client";

import { CreditCard, Shield, TrendingUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-[#0b2241] to-[#1a3a5f] text-white">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tu Próximo Vehículo Te Espera
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Encuentra el auto perfecto con las mejores opciones de financiamiento en San Felipe
            </p>
            <Link href="/catalogo">
              <Button size="lg" className="bg-[#ff4411] hover:bg-[#ff5522] text-white font-semibold px-8 py-6 text-lg">
                Ver Catálogo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0b2241] mb-6">Nuestra Misión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              En Automotriz San Felipe, nos dedicamos a brindar vehículos de calidad con un servicio excepcional. 
              Creemos que cada cliente merece encontrar el auto perfecto que se ajuste a sus necesidades y presupuesto. 
              Con años de experiencia en el mercado automotriz, nos comprometemos a ofrecer transparencia, 
              confianza y las mejores opciones de financiamiento.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0b2241] text-center mb-12">¿Por Qué Elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-[#ff4411]">
              <CardContent className="pt-6">
                <div className="bg-[#0b2241] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0b2241] mb-3">Financiamiento Flexible</h3>
                <p className="text-gray-600">
                  Opciones de pago adaptadas a tu presupuesto con tasas competitivas y plazos flexibles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#ff4411]">
              <CardContent className="pt-6">
                <div className="bg-[#0b2241] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0b2241] mb-3">Vehículos Certificados</h3>
                <p className="text-gray-600">
                  Todos nuestros vehículos pasan por rigurosas inspecciones para garantizar tu seguridad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#ff4411]">
              <CardContent className="pt-6">
                <div className="bg-[#0b2241] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0b2241] mb-3">Mejor Valor</h3>
                <p className="text-gray-600">
                  Precios justos y competitivos con el mejor valor por tu inversión.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financing Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0b2241] text-center mb-12">Opciones de Financiamiento</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-[#0b2241] text-white">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#ff4411]">Bancos Asociados</h3>
                  <ul className="space-y-2">
                    <li>• BBVA Bancomer</li>
                    <li>• Santander</li>
                    <li>• Banorte</li>
                    <li>• HSBC</li>
                    <li>• Scotiabank</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#0b2241] text-white">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#ff4411]">Condiciones</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Enganche:</strong> Desde 20%</li>
                    <li>• <strong>Plazos:</strong> 12 a 60 meses</li>
                    <li>• <strong>Tasa:</strong> Desde 9.9% anual</li>
                    <li>• <strong>Aprobación:</strong> En 24 horas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-[#ff4411] to-[#ff5522] text-white">
              <CardContent className="pt-6 text-center">
                <h3 className="text-2xl font-bold mb-4">¿Listo para Financiar tu Vehículo?</h3>
                <p className="mb-6 text-lg">
                  Contáctanos hoy y un asesor te ayudará a encontrar la mejor opción de financiamiento
                </p>
                <Button size="lg" variant="outline" className="bg-white text-[#ff4411] hover:bg-gray-100 font-semibold">
                  Llamar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0b2241] text-center mb-4">Encuéntranos</h2>
          <p className="text-center text-gray-600 mb-8 flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-[#ff4411]" />
            Av. Mar de Cortés #123, San Felipe, Baja California
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27487.92447916748!2d-114.84537868435059!3d31.024420699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9f0a6d6b6b6b7%3A0x1234567890abcdef!2sSan%20Felipe%2C%20B.C.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}