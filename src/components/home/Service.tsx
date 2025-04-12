type Service = {
    icon: string;
    title: string;
    description: string;
};

const services: Service[] = [
    {
        icon: "📊",
        title: "Comptabilité générale",
        description: "Tenue comptable, bilans, comptes de résultat, obligations fiscales.",
    },
    {
        icon: "🧾",
        title: "Déclarations fiscales",
        description: "TVA, IS, IR, CFE... Nous assurons la conformité de toutes vos déclarations.",
    },
    {
        icon: "⚖️",
        title: "Conseil juridique",
        description: "Accompagnement dans la création de sociétés, rédaction de statuts, gestion juridique.",
    },
    {
        icon: "👥",
        title: "Gestion sociale",
        description: "Établissement des bulletins de paie, déclarations sociales, contrats de travail.",
    },
];

export default function Services() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Nos Services</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
