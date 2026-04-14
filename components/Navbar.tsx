import { Hammer, ShoppingCart } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-industrial-900 text-white p-1.5 rounded">
                        <Hammer size={20} />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-industrial-900">
                        S&A BREAK <span className="text-brand">SPA</span>
                    </span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                    <a href="#" className="hover:text-brand transition-colors">Acero Inoxidable</a>
                    <a href="#" className="hover:text-brand transition-colors">Maquinaria</a>
                    <a href="#" className="hover:text-brand transition-colors">Nosotros</a>
                </div>
                <button className="text-slate-600 hover:text-industrial-900">
                    <ShoppingCart size={22} />
                </button>
            </div>
        </nav>
    );
}