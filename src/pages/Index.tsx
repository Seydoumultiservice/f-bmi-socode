
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/layouts/MainLayout";
import HeroSlider from "@/components/HeroSlider";
import { Computer, HardDrive, Users, Wifi, FileText } from "lucide-react";

const Index = () => {
  // Service cards data
  const services = [
    {
      icon: <Computer className="w-10 h-10 text-primary" />,
      title: "Maintenance Informatique",
      description: "Service complet de maintenance préventive et corrective pour vos équipements informatiques.",
      link: "/services/maintenance"
    },
    {
      icon: <HardDrive className="w-10 h-10 text-primary" />,
      title: "Réparation Matériel",
      description: "Diagnostics précis et réparations efficaces de vos ordinateurs, imprimantes et périphériques.",
      link: "/services/repair"
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Formation",
      description: "Formations adaptées à tous les niveaux pour maîtriser les outils informatiques essentiels.",
      link: "/services/formation"
    },
    {
      icon: <Wifi className="w-10 h-10 text-primary" />,
      title: "Réseaux & Starlink",
      description: "Installation et maintenance de réseaux Wi-Fi et kits Starlink pour une connectivité optimale.",
      link: "/services/network"
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Bureautique & Impression",
      description: "Services de photocopie, impression couleur et traitement de texte professionnel.",
      link: "/services/office"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Introduction Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">À propos de F-BMI</h2>
            <p className="text-gray-700 text-lg mb-8">
              F-BMI est votre partenaire informatique local de confiance à SOCODE. 
              Notre équipe de professionnels qualifiés propose une gamme complète 
              de services informatiques pour répondre à vos besoins spécifiques.
            </p>
            <Button asChild variant="outline">
              <Link to="/about">En savoir plus sur nous</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Découvrez notre gamme complète de solutions informatiques conçues pour 
              répondre à tous vos besoins techniques et bureautiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="text-primary font-medium inline-flex items-center group-hover:underline"
                  >
                    En savoir plus
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/services">Tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à résoudre vos problèmes informatiques ?</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Notre équipe d'experts est disponible pour vous accompagner dans tous vos projets informatiques.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 font-medium">
            <Link to="/contact">Contactez-nous maintenant</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
