export default function Footer() {
    return (
        <footer id="contact" className="bg-secondary text-white py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
                    <div className="text-center md:text-right">
                        <h3 className="text-3xl font-bold text-primary mb-4">שוורץ קוסמטיקה</h3>
                        <p className="max-w-md text-gray-400 leading-relaxed">
                            התגלי את סודות היופי עם מוצרי ים המלח וקוסמטיקה יוקרתית.
                            איכות ללא פשרות, מבית נועם שוורץ.
                        </p>
                    </div>
                    <div className="text-center md:text-right bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 w-full md:w-auto min-w-[300px]">
                        <h4 className="text-xl font-semibold mb-6 text-primary border-b border-primary/30 pb-2 inline-block">פרטי התקשרות</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <span className="text-primary">👤</span>
                                <span>נועם שוורץ</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <span className="text-primary">📞</span>
                                <a href="tel:0503396879" className="hover:text-primary transition-colors">050-339-6879</a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <span className="text-primary">✉️</span>
                                <a href="mailto:noam.shvartz.03@gmail.com" className="hover:text-primary transition-colors">noam.shvartz.03@gmail.com</a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <span className="text-primary">📍</span>
                                <span>שער הגיא 12/3, ירושלים</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} שוורץ קוסמטיקה. כל הזכויות שמורות.
                </div>
            </div>
        </footer>
    );
}
