import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b2241] text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-[#ff4411]">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#ff4411]" />
                <div>
                  <p className="font-medium">686 565 1234</p>
                  <p className="text-sm text-gray-300">686 565 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#ff4411]" />
                <p>ventas@automotrizsanfelipe.com</p>
              </div>
            </div>
          </div>

          {/* Location & Hours */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-[#ff4411]">Ubicación</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#ff4411] mt-1" />
                <p>Av. Mar de Cortés #123<br/>San Felipe, Baja California<br/>México</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#ff4411] mt-1" />
                <div>
                  <p>Lunes - Viernes: 9:00 AM - 7:00 PM</p>
                  <p>Sábados: 9:00 AM - 6:00 PM</p>
                  <p>Domingos: 10:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-[#ff4411]">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff4411] p-3 rounded-full hover:bg-[#ff5522] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff4411] p-3 rounded-full hover:bg-[#ff5522] transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Automotriz San Felipe. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
