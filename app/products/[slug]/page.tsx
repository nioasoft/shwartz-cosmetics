import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";

// Correctly type the params prop
interface PageProps {
    params: {
        slug: string;
    };
}

// Since params is a promise in newer Next.js versions (though likely still object here, assume safe standard pattern or check version)
// For Next.js 13/14 App Router, component is async and params could be awaited if needed, but for now standard:
export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                            <div className="relative aspect-square w-full rounded-xl overflow-hidden">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="w-full lg:w-1/2 pt-8">
                            <Link href="/products" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium mb-8 inline-block">
                                ← חזרה לקולקציה
                            </Link>

                            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{product.title}</h1>
                            <div className="text-2xl text-primary font-bold mb-8">{product.price}</div>

                            <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line mb-10">
                                {product.longDescription}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/#contact" className="flex-1 bg-primary text-white text-center font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-accent transition-all duration-300">
                                    להזמנה צור קשר
                                </Link>
                                <Link href="/products" className="flex-1 border-2 border-primary text-primary text-center font-bold py-4 px-8 rounded-full hover:bg-primary/5 transition-colors">
                                    צפה במוצרים נוספים
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}
