import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-8">
        <section className="py-20">
          <h1 className="text-4xl font-bold text-center mb-12">LÍNEAS DE SERVICIOS</h1>

          {/* Service Coverage */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-center mb-8">COBERTURA DE SERVICIO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">ÁREA METROPOLITANA</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Medellín</li>
                  <li>Sabaneta</li>
                  <li>Envigado</li>
                  <li>Itaguí</li>
                  <li>Bello</li>
                </ul>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">REGIONAL</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>La Estrella</li>
                  <li>Copacabana</li>
                  <li>Caldas</li>
                  <li>San Cristobal</li>
                  <li>San Antonio de Prado</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Rates */}
          <div>
            <h2 className="text-3xl font-semibold text-center mb-8">TARIFAS DE MENSAJERÍA</h2>
            <div className="overflow-x-auto max-w-2xl mx-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-4 text-left">SERVICIO DE MENSAJERÍA</th>
                    <th className="py-3 px-4 text-left">TARIFA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Estándar Área Metropolitana</td>
                    <td className="py-3 px-4">$10.000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Estándar Área Metropolitana Bello</td>
                    <td className="py-3 px-4">$12.000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Estándar Regional</td>
                    <td className="py-3 px-4">$15.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-600 mt-8 text-sm">
              Los productos y/o documentos que sean recibidos hasta las 3:00 p.m. serán entregados ese mismo día.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
