import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { CheckCircle2, ShieldCheck, Truck, Settings } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <Navbar />

      {/* Hero Section - Blanco Limpio con Contraste Fuerte */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] mb-8 tracking-tighter">
              EQUIPAMIENTO <br />
              <span className="text-orange-600">INDUSTRIAL</span> <br />
              <span className="text-slate-400">SIN LÍMITES.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Diseño y fabricación en acero inoxidable de alta calidad. Especialistas en proyectos para casinos, hospitales y el sector gastronómico en Chile.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-900 bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl shadow-sm">
                <ShieldCheck size={18} className="text-orange-600" /> FABRICACIÓN PROPIA
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-900 bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl shadow-sm">
                <Truck size={18} className="text-orange-600" /> DESPACHO NACIONAL
              </div>
            </div>
          </div>
        </div>
        {/* Decoración sutil de fondo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2 z-0" />
      </section>

      {/* Sección de Catálogo - Fondo Gris Muy Tenue para Contraste */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
              PROPUESTA DE CATÁLOGO
            </h2>
            <div className="h-1.5 w-24 bg-orange-600 mb-6" />
            <p className="text-slate-500 text-lg max-w-xl">
              Diferenciación estratégica entre productos fabricados a medida y equipamiento de alta gama para venta directa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Idea imagen: Mesón brillante en taller con chispas de fondo */}
            <ProductCard
              category="Acero Inoxidable"
              title="Mesón Central Sanitario"
              type="quote"
              imageSrc="/tuberia.jpg"
            />
            {/* Idea imagen: Maquinaria en fondo blanco minimalista */}
            <ProductCard
              category="Maquinaria"
              title="Selladora al Vacío Pro"
              price="$890.900"
              type="sell"
              imageSrc="/acero.png"
            />
            {/* Idea imagen: Campana instalada en cocina profesional */}
            <ProductCard
              category="Acero Inoxidable"
              title="Campana de Extracción Industrial"
              type="quote"
              imageSrc="/campana.jpg"
            />
          </div>
        </div>
      </section>

      {/* Footer / Soporte - Contraste Total */}
      <footer className="bg-slate-950 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-600 mb-8">
            <Settings size={32} className="text-white animate-spin-slow" />
          </div>
          <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            SOPORTE TECNOLÓGICO <span className="text-orange-600">INTEGRAL</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Ustedes dominan el acero, nosotros la vitrina digital.
            Infraestructura robusta con soporte técnico 24/7 y mantenimiento de plataforma incluido.
          </p>
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-bold tracking-widest text-slate-500">
              S&A BREAK <span className="text-orange-600">SPA</span>
            </p>
            <p className="text-xs text-slate-600 uppercase tracking-widest">
              © 2026 PROTOTIPO EXCLUSIVO PARA CLIENTE
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}