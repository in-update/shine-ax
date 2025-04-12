export default function Hero() {
    return (
        <section className="bg-blue-50 py-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Votre partenaire comptable de confiance
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                    Cabinet ExpertCompta vous accompagne dans votre gestion comptable, fiscale et juridique.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                    Demander un rendez-vous
                </a>
            </div>
        </section>
    );
}
