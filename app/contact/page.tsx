import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-8">
        <section className="py-20">
          <h1 className="text-4xl font-bold text-center mb-12">CONTÁCTENOS</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">Información de Contacto</h2>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Dirección:</strong> Carrera 75 DA 2B Sur 100, Medellín
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Teléfono:</strong> 316 4724995 - 316 5274468
              </p>
              {/* Add a map or other relevant info here if desired */}
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">Envíanos un Mensaje</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition duration-300"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
