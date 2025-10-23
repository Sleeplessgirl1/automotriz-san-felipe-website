import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, TrendingUp, CreditCard, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-[#0b2241] to-[#1a3a5f] text-white">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-200">
              Más de 15 años sirviendo a la comunidad de San Felipe
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0b2241] mb-8 text-center">
              Nuestra Historia
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Automotriz San Felipe nació en 2008 con una visión clara: proporcionar vehículos de 
                calidad a precios justos a la comunidad de San Felipe y sus alrededores. Lo que comenzó 
                como un pequeño lote con apenas 10 vehículos, ha crecido hasta convertirse en uno de 
                los distribuidores automotrices más confiables de Baja California.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                A lo largo de estos 15 años, hemos ayudado a más de 5,000 familias a encontrar el 
                vehículo perfecto para sus necesidades. Nuestro compromiso con la excelencia en el 
                servicio al cliente y la transparencia en cada transacción nos ha convertido en la 
                primera opción para quienes buscan un vehículo en la región.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Hoy en día, ofrecemos una amplia gama de vehículos que incluyen sedanes, SUVs, 
                camionetas pick-up, minivans y vehículos recreativos todo terreno. Trabajamos con 
                las principales instituciones financieras para ofrecer opciones de financiamiento 
                flexibles y accesibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0b2241] mb-12 text-center">
            Misión y Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-[#ff4411]">
              <CardContent className="pt-6">
                <div className="bg-[#0b2241] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0b2241] mb-3">Nuestra Misión</h3>
                <p className="text-gray-600">
                  Proporcionar vehículos de calidad y servicios excepcionales que superen las 
                  expectativas de nuestros clientes, construyendo relaciones duraderas basadas 
                  en la confianza y la transparencia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#ff4411]">
              <CardContent className="pt-6">
                <div className="bg-[#0b2241] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0b2241] mb-3">Integridad</h3>
                <p className="text-gray-600">
                  Actuamos con honestidad y transparencia en cada transacción, brindando información 
                  clara y precisa sobre cada vehículo que ofrecemos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#ff4411]">
              <CardContent className="pt-6">
                <div className="bg-[#0b2241] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0b2241] mb-3">Compromiso</h3>
                <p className="text-gray-600">
                  Estamos comprometidos con la satisfacción de nuestros clientes, ofreciendo 
                  atención personalizada y seguimiento postventa de calidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0b2241] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Nuestros Logros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#ff4411] mb-2">15+</div>
              <p className="text-xl">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#ff4411] mb-2">5,000+</div>
              <p className="text-xl">Clientes Satisfechos</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#ff4411] mb-2">200+</div>
              <p className="text-xl">Vehículos en Inventario</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#ff4411] mb-2">98%</div>
              <p className="text-xl">Tasa de Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <CreditCard className="h-16 w-16 text-[#ff4411] mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-[#0b2241] mb-4">
                Opciones de Financiamiento
              </h2>
              <p className="text-xl text-gray-600">
                Trabajamos con las mejores instituciones financieras para ofrecerte las mejores opciones
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-[#0b2241] mb-4">Bancos Asociados</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#ff4411]" />
                      <span className="text-gray-700">BBVA Bancomer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#ff4411]" />
                      <span className="text-gray-700">Santander</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#ff4411]" />
                      <span className="text-gray-700">Banorte</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#ff4411]" />
                      <span className="text-gray-700">HSBC</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#ff4411]" />
                      <span className="text-gray-700">Scotiabank</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-[#0b2241] mb-4">Beneficios</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-[#ff4411]" />
                      <span className="text-gray-700">Tasas desde 9.9% anual</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-[#ff4411]" />
                      <span className="text-gray-700">Enganches desde 20%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-[#ff4411]" />
                      <span className="text-gray-700">Plazos de 12 a 60 meses</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-[#ff4411]" />
                      <span className="text-gray-700">Aprobación en 24 horas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-[#ff4411]" />
                      <span className="text-gray-700">Asesoría personalizada</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-[#0b2241] to-[#1a3a5f] text-white">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Proceso de Financiamiento</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-[#ff4411] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                      1
                    </div>
                    <p className="font-semibold">Consulta</p>
                    <p className="text-sm text-gray-300 mt-2">Evalúa tu situación financiera</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#ff4411] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                      2
                    </div>
                    <p className="font-semibold">Documentación</p>
                    <p className="text-sm text-gray-300 mt-2">Prepara tus documentos</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#ff4411] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                      3
                    </div>
                    <p className="font-semibold">Aprobación</p>
                    <p className="text-sm text-gray-300 mt-2">Respuesta en 24 horas</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#ff4411] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                      4
                    </div>
                    <p className="font-semibold">Entrega</p>
                    <p className="text-sm text-gray-300 mt-2">Recibe tu vehículo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0b2241] mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600">
              Profesionales dedicados a brindarte el mejor servicio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                    alt="Director General"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0b2241] mb-2">
                  Roberto Martínez
                </h3>
                <p className="text-[#ff4411] font-semibold mb-2">Director General</p>
                <p className="text-gray-600">
                  15 años de experiencia en la industria automotriz
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
                    alt="Gerente de Ventas"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0b2241] mb-2">
                  María González
                </h3>
                <p className="text-[#ff4411] font-semibold mb-2">Gerente de Ventas</p>
                <p className="text-gray-600">
                  Especialista en atención al cliente y financiamiento
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
                    alt="Asesor Financiero"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0b2241] mb-2">
                  Carlos Ramírez
                </h3>
                <p className="text-[#ff4411] font-semibold mb-2">Asesor Financiero</p>
                <p className="text-gray-600">
                  Experto en créditos automotrices y negociación
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
