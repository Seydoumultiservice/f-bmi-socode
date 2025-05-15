
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const About = () => {
  // Company values
  const values = [
    {
      title: "Expertise",
      description: "Notre équipe est composée de professionnels qualifiés avec une solide expérience dans le domaine informatique."
    },
    {
      title: "Qualité",
      description: "Nous nous engageons à fournir des services de la plus haute qualité, en utilisant des outils et des méthodes à la pointe de la technologie."
    },
    {
      title: "Proximité",
      description: "Basés localement à SOCODE, nous sommes proches de nos clients et réactifs à leurs besoins spécifiques."
    },
    {
      title: "Transparence",
      description: "Nous communiquons clairement sur nos services, nos tarifs et les solutions que nous proposons."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">À propos de F-BMI</h1>
            <p className="text-lg text-gray-700">
              Découvrez qui nous sommes et comment notre expertise peut vous aider.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
            <p className="mb-6 text-gray-700">
              F-BMI est née de la passion pour l'informatique et de la volonté de fournir des services techniques de qualité 
              à la communauté locale de SOCODE. Notre fondateur, après plusieurs années d'expérience dans le secteur informatique, 
              a décidé de créer une entreprise répondant aux besoins spécifiques des particuliers et des professionnels de la région.
            </p>
            <p className="mb-6 text-gray-700">
              Depuis notre création, nous avons continuellement élargi notre gamme de services pour offrir des solutions complètes, 
              allant de la maintenance informatique classique à l'installation de technologies modernes comme le kit Starlink, 
              permettant l'accès à internet par satellite même dans les zones les plus reculées.
            </p>
            <p className="mb-8 text-gray-700">
              Aujourd'hui, F-BMI est fière d'être reconnue comme un partenaire informatique de confiance, combinant expertise technique, 
              service personnalisé et engagement envers la satisfaction client.
            </p>

            {/* Values Section */}
            <h2 className="text-3xl font-bold mb-6">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-gray-700">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-12">
              <h3 className="text-xl font-bold mb-3">Notre Mission</h3>
              <p className="text-gray-700">
                Notre mission chez F-BMI est de démocratiser l'accès aux technologies de l'information en fournissant des services 
                informatiques de qualité, accessibles et adaptés aux besoins spécifiques de chaque client. Nous nous engageons à 
                résoudre les problèmes techniques tout en partageant notre expertise pour autonomiser nos clients dans leur utilisation quotidienne de l'informatique.
              </p>
            </div>

            {/* Team Section placeholder - Would typically include team photos and bios */}
            <h2 className="text-3xl font-bold mb-6">Notre Équipe</h2>
            <p className="text-gray-700 mb-6">
              F-BMI est composée de techniciens qualifiés et passionnés par l'informatique, dédiés à fournir un service 
              client exceptionnel. Notre équipe combine expertise technique, professionnalisme et approche pédagogique 
              pour vous accompagner dans tous vos besoins informatiques.
            </p>
            <p className="text-gray-700">
              Chaque membre de notre équipe suit régulièrement des formations pour rester à jour avec les dernières 
              technologies et tendances du secteur, assurant ainsi que nous pouvons toujours vous offrir les solutions 
              les plus adaptées et efficaces.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
