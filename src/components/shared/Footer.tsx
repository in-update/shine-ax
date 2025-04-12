export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Cabinet ExpertCompta</h3>
                    <p className="text-sm">
                        Accompagnement comptable, fiscal et juridique pour les TPE/PME, artisans, professions libérales et associations.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2">Contact</h4>
                    <ul className="text-sm space-y-1">
                        <li>📍 123 Rue de la Finance, Paris</li>
                        <li>📞 01 23 45 67 89</li>
                        <li>✉️ contact@expertcompta.fr</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2">Liens utiles</h4>
                    <ul className="text-sm space-y-1">
                        <li><a href="/a-propos" className="hover:underline">À propos</a></li>
                        <li><a href="/services" className="hover:underline">Nos services</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-xs text-gray-400 mt-6">
                © {new Date().getFullYear()} Cabinet ExpertCompta. Tous droits réservés.
            </div>
        </footer>
    );
}
