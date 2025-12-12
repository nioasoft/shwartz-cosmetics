import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ProductsPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow pt-32 pb-20 bg-muted">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-6 text-secondary">הקולקציה המלאה</h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            כל מוצרי האיכות שלנו במקום אחד. התחילו את המסע שלכם ליופי וטיפוח.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                imageSrc={product.imageSrc}
                                title={product.title}
                                description={product.description}
                                slug={product.slug}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
