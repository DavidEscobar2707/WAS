import Image from "next/image"
import { Package, MapPin, Clock, Shield, Phone, Mail, Star, Globe, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 border-b bg-white">
        <div className="flex items-center space-x-2">
          <Package className="h-8 w-8 text-green-500" />
          <span className="text-xl font-bold text-black">Was Logística</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#servicios" className="text-sm font-medium text-black hover:text-green-500">Servicios</a>
          <a href="#cobertura" className="text-sm font-medium text-black hover:text-green-500">Cobertura</a>
          <a href="#nosotros" className="text-sm font-medium text-black hover:text-green-500">Nosotros</a>
          <a href="#contacto" className="text-sm font-medium text-black hover:text-green-500">Contacto</a>
        </nav>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">Contactar</Button>
      </header>

      {/* Hero Section - Azul corporativo, diseño mejorado */}
      <section className="relative w-full h-[420px] md:h-[520px] flex items-center justify-start overflow-hidden bg-blue-50">
        <Image
          src="/rowan-freeman-clYlmCaQbzY-unsplash.jpg"
          alt="Domiciliario en moto"
          fill
          className="object-cover object-center brightness-90"
          priority
        />
        {/* Gradiente azul oscuro para fondo de caja */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-2xl px-10 py-12 ml-4 md:ml-20 bg-blue-900/80 rounded-3xl shadow-2xl shadow-blue-900/30 backdrop-blur-md">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="block text-blue-200">Solución a sus</span>
            <span className="block text-blue-400">envíos</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-8 font-medium drop-shadow">
            El servicio de mensajería más rápido del área metropolitana de Medellín.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 text-lg rounded-xl shadow-lg flex items-center gap-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Solicitar Envío Rápido
          </Button>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1877f2]">¿Cómo funciona?</h2>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
            Descubre nuestro proceso simple y eficiente para que tus envíos lleguen rápido y seguro.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Paso 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-[120px] h-[120px] flex items-center justify-center mx-auto mb-4">
                <Image src="/undraw_my-location_dcug.svg" alt="Ubicación" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#1877f2]">Paso 1: Solicita tu recogida</h3>
              <p className="text-gray-600 text-sm">Elige la dirección y hora para recoger tu paquete.</p>
            </div>
            {/* Paso 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-[120px] h-[120px] flex items-center justify-center mx-auto mb-4">
                <Image src="/undraw_credit-card-payments_y0vn.svg" alt="Pago" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#1877f2]">Paso 2: Realiza el pago</h3>
              <p className="text-gray-600 text-sm">Paga de forma segura en línea con tu método preferido.</p>
            </div>
            {/* Paso 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-[120px] h-[120px] flex items-center justify-center mx-auto mb-4">
                <Image src="/undraw_processing_bto8.svg" alt="Procesando" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#1877f2]">Paso 3: Procesamos tu envío</h3>
              <p className="text-gray-600 text-sm">Asignamos el mejor mensajero para tu entrega.</p>
            </div>
            {/* Paso 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-[120px] h-[120px] flex items-center justify-center mx-auto mb-4">
                <Image src="/undraw_delivery-truck_mjui.svg" alt="Entrega" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#1877f2]">Paso 4: Entrega rápida</h3>
              <p className="text-gray-600 text-sm">Tu paquete llega rápido y seguro a su destino.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="py-16 bg-white" id="nosotros">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1877f2]">Nuestra Misión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos una empresa que busca satisfacer oportunamente las necesidades de nuestros clientes, ofreciéndoles alternativas lógicas para atender los servicios de mensajería urbana y express, garantizando un servicio confiable, oportuno y seguro.
            </p>
          </div>
        </div>
      </section>

      {/* Cobertura de Servicio */}
      <section className="py-16 bg-gray-50" id="cobertura">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1877f2]">Cobertura de Servicio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-4 text-green-600 flex items-center"><MapPin className="h-5 w-5 mr-2" />Área Metropolitana</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Medellín</li>
                <li>Sabaneta</li>
                <li>Envigado</li>
                <li>Itaguí</li>
                <li>Bello</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-4 text-green-600 flex items-center"><Star className="h-5 w-5 mr-2" />Regional</h3>
              <ul className="space-y-2 text-gray-700">
                <li>La Estrella</li>
                <li>Copacabana</li>
                <li>Caldas</li>
                <li>San Cristóbal</li>
                <li>San Antonio de Prado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-white" id="servicios">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1877f2]">Líneas de Servicios</h2>
            <p className="text-lg text-gray-700">Nuestra compañía cuenta con el personal y el recurso para la administración y distribución de sus productos y/o documentos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-green-200 transition-colors bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-black">Área Metropolitana</CardTitle>
                <CardDescription>Medellín, Sabaneta, Envigado, Itaguí y Bello</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">$10.000</div>
                <p className="text-sm text-gray-600">Tarifa estándar</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-green-500" />
                    Entrega mismo día
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-green-200 transition-colors bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-black">Bello Especial</CardTitle>
                <CardDescription>Servicio especializado para Bello</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">$12.000</div>
                <p className="text-sm text-gray-600">Tarifa estándar Bello</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center text-sm">
                    <Shield className="h-4 w-4 mr-2 text-green-500" />
                    Servicio garantizado
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-green-200 transition-colors bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-black">Regional</CardTitle>
                <CardDescription>La Estrella, Copacabana, Caldas, San Cristóbal y San Antonio de Prado</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">$15.000</div>
                <p className="text-sm text-gray-600">Tarifa regional</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-green-500" />
                    Cobertura ampliada
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
              <Clock className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <p className="text-lg font-medium text-green-800">
                Nota: Los productos y/o documentos que sean recibidos hasta las 3:00 p.m. serán entregados ese mismo día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 bg-gray-50" id="contacto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1877f2]">Información de Contacto</h2>
            <p className="text-lg text-gray-700">Estamos listos para atender sus necesidades de mensajería.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-green-500 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1 text-black">Dirección</h3>
                        <p className="text-gray-600">
                          Carrera 75 DA 2B Sur 100<br />Medellín
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-green-500 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1 text-black">Teléfonos</h3>
                        <p className="text-gray-600">
                          316 4724995<br />316 5274468
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white" size="lg">
                      <Phone className="h-4 w-4 mr-2" />Llamar Ahora
                    </Button>
                    <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-50" size="lg">
                      <Mail className="h-4 w-4 mr-2" />Enviar WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Package className="h-6 w-6 text-green-500" />
              <span className="text-lg font-bold">Was Logística</span>
            </div>
            <p className="text-gray-400 text-sm">© 2023 Was Logística. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
