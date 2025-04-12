import Image from "next/image";

export default function About() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                {/* Image à gauche */}
                <div className="md:w-1/2">
                    <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/images/cabinet.jpg"
                            alt="Notre cabinet"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                            priority
                        />
                    </div>
                </div>

                {/* Texte à droite */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">À propos de notre cabinet</h2>
                    <p className="text-gray-600 mb-4">
                        Depuis plus de 15 ans, le cabinet ExpertCompta accompagne les entrepreneurs, artisans, professions libérales et associations dans leur développement.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Notre équipe est composée de professionnels expérimentés et passionnés, offrant un service personnalisé et de proximité. Nous mettons un point d’honneur à établir une relation de confiance durable avec chacun de nos clients.
                    </p>
                    <p className="text-gray-600">
                        Notre objectif : vous libérer des contraintes administratives pour vous permettre de vous concentrer sur votre activité.
                    </p>
                </div>
            </div>
        </section>
    );
}
