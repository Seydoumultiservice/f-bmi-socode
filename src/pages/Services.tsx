
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Computer, 
  HardDrive, 
  Users, 
  Wifi, 
  FileText, 
  Printer, 
  Network
} from "lucide-react";

const Services = () => {
  // All services with more detailed information
  const services = [
    {
      icon: <Computer className="w-12 h-12 text-primary" />,
      title: "Maintenance Informatique",
      description: "Optimisez les performances et prolongez la durée de vie de vos équipements informatiques grâce à notre service complet de maintenance préventive et corrective.",
      features: [
        "Diagnostic complet des systèmes",
        "Optimisation des performances",
        "Élimination des logiciels malveillants",
        "Mise à jour des systèmes d'exploitation",
        "Sauvegarde de données"
      ],
      link: "/services/maintenance"
    },
    {
      icon: <HardDrive className="w-12 h-12 text-primary" />,
      title: "Réparation de Matériel",
      description: "Résolution rapide et efficace de tous vos problèmes matériels, des ordinateurs aux périphériques, par nos techniciens expérimentés.",
      features: [
        "Réparation d'ordinateurs (PC & Mac)",
        "Remplacement de composants défectueux",
        "Récupération de données",
        "Réparation d'écrans",
        "Dépannage d'imprimantes"
      ],
      link: "/services/repair"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Formation en Informatique",
      description: "Formations personnalisées et adaptées à tous les niveaux pour maîtriser les outils informatiques essentiels à votre activité ou usage personnel.",
      features: [
        "Initiation à l'informatique pour débutants",
        "Formation aux logiciels bureautiques",
        "Ateliers sécurité informatique",
        "Formation à la gestion de site web",
        "Cours particuliers ou en groupe"
      ],
      link: "/services/formation"
    },
    {
      icon: <Network className="w-12 h-12 text-primary" />,
      title: "Installation de Réseau Wi-Fi",
      description: "Conception et installation de réseaux Wi-Fi performants pour votre domicile ou votre entreprise, garantissant une couverture optimale.",
      features: [
        "Étude préalable et optimisation de couverture",
        "Installation de routeurs et répéteurs",
        "Configuration sécurisée",
        "Optimisation des performances",
        "Support technique continu"
      ],
      link: "/services/network"
    },
    {
      icon: <Wifi className="w-12 h-12 text-primary" />,
      title: "Installation et Maintenance Starlink",
      description: "Installation professionnelle de votre kit Starlink pour un accès internet satellite haute vitesse, même dans les zones reculées.",
      features: [
        "Installation complète du kit Starlink",
        "Optimisation de l'emplacement et de l'orientation",
        "Configuration du réseau",
        "Maintenance et dépannage",
        "Conseils d'utilisation optimale"
      ],
      link: "/services/starlink"
    },
    {
      icon: <Printer className="w-12 h-12 text-primary" />,
      title: "Photocopie et Impression",
      description: "Services complets de photocopie et d'impression couleur de haute qualité pour tous vos documents personnels ou professionnels.",
      features: [
        "Photocopie noir et blanc ou couleur",
        "Impression haute définition",
        "Impression de documents volumineux",
        "Formats variés (A4, A3, etc.)",
        "Reliure et finition"
      ],
      link: "/services/printing"
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Traitement de Texte",
      description: "Services professionnels de saisie et de mise en forme de documents pour particuliers et entreprises.",
      features: [
        "Saisie de documents manuscrits",
        "Mise en forme professionnelle",
        "Création de CV et lettres",
        "Conversion de formats",
        "Correction et relecture"
      ],
      link: "/services/wordprocessing"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Nos Services</h1>
            <p className="text-lg text-gray-700">
              Des solutions informatiques complètes pour répondre à tous vos besoins
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    
                    <h4 className="font-semibold text-lg mb-2">Ce que nous proposons:</h4>
                    <ul className="space-y-1 text-gray-700 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild>
                      <Link to={service.link}>En savoir plus</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Besoin d'un service personnalisé ?</h2>
            <p className="mb-8 opacity-90">
              Nous sommes à votre écoute pour développer des solutions adaptées à vos besoins spécifiques.
              N'hésitez pas à nous contacter pour discuter de votre projet.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 font-medium">
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;
