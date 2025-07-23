import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-8">
        <section className="py-20">
          <h1 className="text-4xl font-bold text-center mb-12">ACERCA DE NOSOTROS</h1>
          <h2 className="text-3xl font-semibold text-center mb-8">NUESTRA MISIÓN</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Somos una empresa que busca satisfacer oportunamente las necesidades de nuestros clientes, ofreciéndoles
            alternativas lógicas para atender los servicios de mensajería urbana y express, garantizando un servicio
            confiable, oportuno y seguro.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
