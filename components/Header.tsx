import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <nav className="hidden md:flex gap-8">
                    <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">ראשי</Link>
                    <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium">אודות</Link>
                    <Link href="#products" className="text-foreground hover:text-primary transition-colors font-medium">מוצרים</Link>
                    <Link href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">צור קשר</Link>
                </nav>
                <div className="text-2xl font-bold text-primary tracking-wide">
                    SCHWARTZ
                </div>
            </div>
        </header>
    );
}
