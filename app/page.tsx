import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from 'next/link';
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/hero-cosmetics.png"
                            alt="Schwartz Cosmetics Luxury Makeup"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                    </div>

                    <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-20">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg">
                            SCHWARTZ <span className="text-primary block md:inline">COSMETICS</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 font-light text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                            יוקרה ואיכות מבית המלח והטבע. חווית טיפוח שתשנה את עולמך לקורנת יותר.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <a href="#products" className="inline-block bg-primary hover:bg-white hover:text-primary text-secondary font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-primary hover:border-white">
                                לקולקציה שלנו
                            </a>
                            <a href="#contact" className="inline-block bg-transparent hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 border-2 border-white hover:border-primary">
                                צור קשר
                            </a>
                        </div>

                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-32 bg-background relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/30 -z-10 skew-x-12 transform origin-top" />

                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2 relative">
                                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/dead-sea-product-1.png"
                                        alt="Dead Sea Mud Product"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute -bottom-12 -left-12 w-64 h-64 border-8 border-white rounded-2xl overflow-hidden shadow-2xl hidden md:block">
                                    <Image
                                        src="/images/dead-sea-product-2.png"
                                        alt="Luxury Cream Texture"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="md:w-1/2 text-center md:text-right">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary drop-shadow-sm">הסיפור שלנו</h2>
                                <h3 className="text-2xl md:text-3xl font-light mb-8 text-foreground tracking-wide">טבע, מדע ויופי נפגשים</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                    שוורץ קוסמטיקה נולדה מתוך אהבה לטבע ולים המלח המופלא. אנו מאמינים כי הסוד לעור בריא וזוהר נמצא במשאבי הטבע העשירים ביותר.
                                </p>
                                <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                                    המוצרים שלנו משלבים בוץ ומינרלים מים המלח עם טכנולוגיות טיפוח מתקדמות וקוסמטיקה דקורטיבית איכותית. כל מוצר מיוצר בקפידה כדי להעניק לך חווית טיפוח יוקרתית שטרם הכרת.
                                </p>
                                <div className="flex justify-center md:justify-start items-center gap-4">
                                    <div className="h-1 w-24 bg-primary rounded-full shadow-sm" />
                                    <span className="text-primary font-bold tracking-widest text-sm uppercase">Schwartz Quality</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section id="products" className="py-32 bg-muted relative">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-bold mb-4 text-secondary">הקולקציה שלנו</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">מגוון מוצרים ייחודי המשלב את סגולות המרפא של ים המלח עם המגמות החמות עולם האיפור</p>
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

                        <div className="text-center mt-16">
                            <Link href="/products" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                                לכל המוצרים
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
