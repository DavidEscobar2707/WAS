import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Clients() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-8">
        <section className="py-20">
          <h1 className="text-4xl font-bold text-center mb-12">NUESTROS CLIENTES</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md">
              <Image src="/client-logo-1.svg" alt="Client Logo 1" width={150} height={80} />
            </div>
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md">
              <Image src="/client-logo-2.svg" alt="Client Logo 2" width={150} height={80} />
            </div>
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md">
              <Image src="/client-logo-3.svg" alt="Client Logo 3" width={150} height={80} />
            </div>
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md">
              <Image src="/client-logo-4.svg" alt="Client Logo 4" width={150} height={80} />
            </div>
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md">
              <Image src="/client-logo-5.svg" alt="Client Logo 5" width={150} height={80} />
            </div>
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md">
              <Image src="/client-logo-6.svg" alt="Client Logo 6" width={150} height={80} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
