"use client";

import { MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ProductProps {
    title: string;
    category: string;
    price?: string;
    type: 'quote' | 'sell';
    imageSrc?: string; // Nueva prop para la imagen
    imagePlaceholder?: string; // Prop de texto de reemplazo
}

export default function ProductCard({ title, category, price, type, imageSrc, imagePlaceholder }: ProductProps) {
    const containerRef = useRef(null);

    // Lógica de Scroll para el efecto de desvanecimiento
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end start"]
    });

    // Transformaciones: se mueve a la derecha (x) y pierde opacidad mientras sube el scroll
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const handleWhatsappQuote = () => {
        const message = `Hola S&A Break, me interesa cotizar: ${title}`;
        window.open(`https://wa.me/569XXXXXXXX?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div ref={containerRef} className="group border border-slate-100 rounded-xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 bg-slate-100 flex items-center justify-center overflow-hidden">
                {imageSrc ? (
                    <motion.div style={{ x, opacity }} className="relative w-full h-full">
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-contain p-4"
                            priority
                        />
                    </motion.div>
                ) : (
                    <span className="text-slate-400">{imagePlaceholder || "Sin Imagen"}</span>
                )}
            </div>

            <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 mb-2">{category}</p>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>

                {type === 'quote' ? (
                    <button
                        onClick={handleWhatsappQuote}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                    >
                        <MessageCircle size={20} className="text-green-400" />
                        Cotizar por WhatsApp
                    </button>
                ) : (
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-slate-900">{price}</span>
                        <button className="px-6 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                            Comprar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}