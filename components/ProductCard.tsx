import Image from 'next/image';

interface ProductCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export default function ProductCard({ imageSrc, title, description }: ProductCardProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <div className="p-8 text-center bg-white relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-serif shadow-lg border-4 border-white">
                    ✦
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary mt-4">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
                <button className="text-primary font-bold text-sm uppercase tracking-widest hover:text-accent transition-colors">
                    גלה עוד
                </button>
            </div>
        </div>
    );
}
